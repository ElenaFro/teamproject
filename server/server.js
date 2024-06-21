const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

// Загружаем переменные окружения из .env файла
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Настройка CORS
app.use(cors());
app.use(express.json());

// Настройка соединения с базой данных
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'MYSQL-8.0',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'plant_shop'
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
