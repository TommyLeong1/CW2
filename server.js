const express = require('express');
const app = express();
const routes = require('./routes');

// 設定Express中介軟體
app.use(express.json());

// 使用API路由
app.use('/api', routes);

// 啟動服務器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// 設定Express中介軟體
app.use(express.json());

// 定義API端點
app.get('/api/pets', (req, res) => {
  // 返回所有寵物
});

app.post('/api/pets', (req, res) => {
  // 創建新的寵物，然後返回創建的寵物
});

app.put('/api/pets/:id', (req, res) => {
  // 更新指定的寵物，然後返回更新的寵物
});

app.delete('/api/pets/:id', (req, res) => {
  // 刪除指定的寵物，然後返回刪除的寵物
});
