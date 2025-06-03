const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối tới PostgreSQL (biến môi trường từ Render)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get('/', async (req, res) => {
  res.send('Hello from Node.js + Express on Render!');
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi truy vấn CSDL');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
