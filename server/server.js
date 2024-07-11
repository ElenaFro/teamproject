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


// Обработчик маршрута для получения данных всех пользователей
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
      if (err) {
          console.error('Ошибка выполнения запроса:', err);
          res.status(500).send('Ошибка выполнения запроса');
          return;
      }
      res.json(results);
  });
});

// Обработчик маршрута для входа пользователя

app.post('/users', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
      res.status(500).send('Ошибка выполнения запроса');
      return;
    }
    if (results.length > 0) {
      res.json({ authenticated: true });
    } else {
      res.json({ authenticated: false });
    }
  });
});

// маршрут для получения списка растений
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

// Обработчик маршрута для регистрации пользователя
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
      return res.status(400).json({ error: 'Не указан email или пароль' });
  }
  
  db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, result) => {
      if (err) {
          console.error('Ошибка при добавлении пользователя:', err);
          return res.status(500).json({ error: 'Ошибка при добавлении пользователя' });
      }
      
      res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
