/**
 * Server Node.js cơ bản sử dụng Express
 * Tạo bởi: Phạm Huy Hoàng - 22DH114540
 * Ngày: [Cập nhật ngày hiện tại]
 */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Sử dụng port từ biến môi trường hoặc mặc định 3000

// Middleware cơ bản
app.use(express.json()); // Cho phép server đọc dữ liệu JSON
app.use(express.urlencoded({ extended: true })); // Xử lý dữ liệu từ form

// Route chính
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Chào mừng đến với server của Phạm Huy Hoàng - 22DH114540",
    status: "Hoạt động tốt",
    endpoints: {
      home: "/",
      info: "/info"
    }
  });
});

// Route thông tin sinh viên
app.get("/info", (req, res) => {
  res.status(200).json({
    student: {
      name: "Phạm Huy Hoàng",
      id: "22DH114540",
      project: "Node.js Server Deployment"
    }
  });
});

// Xử lý lỗi 404
app.use((req, res) => {
  res.status(404).json({
    error: "Không tìm thấy trang",
    status: 404
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`
  ====================================
  🚀 Server đang chạy tại: http://localhost:${PORT}
  👨‍💻 Tạo bởi: Phạm Huy Hoàng - 22DH114540
  ====================================
  `);
});

module.exports = app; // Xuất app để testing (nếu cần)
