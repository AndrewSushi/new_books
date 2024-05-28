import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const checkDatabaseConnection = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed', err);
        process.exit(1); // Exit the process with failure
    }
};

export { pool, checkDatabaseConnection };
