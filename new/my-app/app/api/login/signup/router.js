import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_database',
};

export async function POST(req) {
  const { username, password } = await req.json();

  try {
    // Create a connection to the MySQL database
    const connection = await mysql.createConnection(dbConfig);

    // Check if the user already exists
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);

    // If user already exists, return error
    if (rows.length > 0) {
      connection.end();
      return NextResponse.json({ success: false, msg: 'Username already exists' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await connection.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

    // Close the database connection
    connection.end();

    // Return success response
    return NextResponse.json({ success: true, msg: 'User created successfully' });
  } catch (error) {
    // Return error response if any error occurs
    return NextResponse.json({ success: false, msg: error.message });
  }
}
