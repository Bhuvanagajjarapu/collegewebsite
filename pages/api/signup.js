import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, address, dob, course, registerNumber, password, additionalInfo } = req.body;

        // Create a connection to the database
        const connection = await mysql.createConnection({
            host: 'localhost',       // Your database host
            user: 'root',            // Your database username
            password: '',            // Your database password
            database: 'my_database', // Your database name
        });

        try {
            // Insert the user data into the users table
            const [result] = await connection.execute(
                'INSERT INTO users (name, email, phone, address, dob, course, registerNumber, password, additionalInfo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [name, email, phone, address, dob, course, registerNumber, password, additionalInfo]
            );

            res.status(200).json({ message: 'User created successfully', userId: result.insertId });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the user' });
        } finally {
            // Close the database connection
            await connection.end();
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
