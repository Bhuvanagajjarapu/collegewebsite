import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_database'
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const connection = await mysql.createConnection(dbConfig);
            const [rows] = await connection.query('SELECT name, email, phone, address, dob, course FROM users');
            connection.end();

            res.status(200).json(rows);
        } catch (error) {
            console.error('Database error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
