/**
 * ===============================================
 *            EXPRESS SERVER BOILERPLATE
 * ===============================================
 * 
 * @creator  Phạm Huy Hoàng - 22DH114540
 * @version  1.0.0
 * @host     localhost:3000
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ======================
//      MIDDLEWARES
// ======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
//        ROUTES
// ======================

/**
 * @route   GET /
 * @desc    Trang chủ hiển thị thông tin sinh viên
 * @access  Public
 */
app.get('/', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>22DH114540 - Phạm Huy Hoàng</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
        p {
          color: #7f8c8d;
          margin-top: 0;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>22DH114540</h1>
        <p>Phạm Huy Hoàng</p>
      </div>
    </body>
    </html>
  `);
});

// ======================
//     ERROR HANDLER
// ======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// ======================
//      START SERVER
// ======================
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════╗
  ║                                      ║
  ║   🚀 Server đã khởi động thành công   ║
  ║                                      ║
  ╠══════════════════════════════════════╣
  ║                                      ║
  ║   🔗 http://localhost:${PORT}            ║
  ║   👤 ${'22DH114540'.padEnd(28)} ║
  ║   📛 ${'Phạm Huy Hoàng'.padEnd(28)} ║
  ║                                      ║
  ╚══════════════════════════════════════╝
  `);
});

module.exports = app;
