// 22dh114540 - Phạm Huy Hoàng

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route chính trả về lời chào
app.get("/", (req, res) => {
  res.send("22dh114540 - Phạm Huy Hoàng");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
