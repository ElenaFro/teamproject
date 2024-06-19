const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

// Настройка CORS
app.use(cors());
app.use(express.json());

// Настройка соединения с базой данных
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'plant_shop'
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключение к базе данных успешно установлено.');
});

// Пример маршрута для получения списка растений
app.get('/plants', (req, res) => {
  db.query('SELECT * FROM plants', (err, results) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
      res.status(500).send('Ошибка выполнения запроса');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
