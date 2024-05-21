// app/api/login/router.js
require('dotenv').config();
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

export async function POST(req) {
    const { username, password } = await req.json();

    try {
        const connection = await mysql.createConnection(dbConfig);

        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );

        connection.end();

        if (rows.length === 0) {
            return NextResponse.json({ success: false, msg: "Invalid username or password" });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return NextResponse.json({ success: true, msg: "Login successful", user });
        } else {
            return NextResponse.json({ success: false, msg: "Invalid username or password" });
        }
    } catch (error) {
        return NextResponse.json({ success: false, msg: error.message });
    }
}
