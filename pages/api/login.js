import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_database'
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Validate inputs
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        try {
            const connection = await mysql.createConnection(dbConfig);
            const [rows] = await connection.execute(
                'SELECT * FROM users WHERE email = ? AND password = ?',
                [email, password]
            );
            connection.end();

            if (rows.length > 0) {
                const user = rows[0];
                return res.status(200).json(user);
            } else {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
        } catch (error) {
            console.error('Database error:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
