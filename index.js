const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Route gốc
app.get('/', (req, res) => {
  res.send('Server is running');
});

// API lấy thời gian hiện tại từ database
app.get('/time', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// API lấy dữ liệu từ bảng test_table và trả về HTML có CSS
app.get('/test-data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM test_table');
    const rows = result.rows;

    let html = `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          table { border-collapse: collapse; width: 80%; margin: auto; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
          th { background-color: #4CAF50; color: white; }
          tr:nth-child(even) { background-color: #f2f2f2; }
          h2 { text-align: center; }
        </style>
        <title>Dữ liệu bảng test_table</title>
      </head>
      <body>
        <h2>Dữ liệu bảng test_table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
    `;

    for (const row of rows) {
      html += `
        <tr>
          <td>${row.id}</td>
          <td>${row.name}</td>
          <td>${new Date(row.created_at).toLocaleString()}</td>
        </tr>
      `;
    }

    html += `
          </tbody>
        </table>
      </body>
      </html>
    `;

    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('<h1>Database error</h1>');
  }
});
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
