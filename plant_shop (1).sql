-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: MySQL-8.0
-- Время создания: Июл 10 2024 г., 21:54
-- Версия сервера: 8.0.35
-- Версия PHP: 8.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `plant_shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `plants`
--

CREATE TABLE `plants` (
  `id` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `vcode` varchar(50) DEFAULT NULL,
  `availability` tinyint(1) DEFAULT NULL,
  `category1` varchar(255) DEFAULT NULL,
  `category2` varchar(255) DEFAULT NULL,
  `about` text,
  `sale` tinyint(1) DEFAULT NULL,
  `care` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `plants`
--

INSERT INTO `plants` (`id`, `image`, `name`, `price`, `vcode`, `availability`, `category1`, `category2`, `about`, `sale`, `care`) VALUES
(1, '1.png', 'Туя', 2100.00, 't1', 1, 'Деревья', 'Уличные растения', '60 см', 1, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(2, '2.png', 'Филодендрон', 3150.00, 't2', 1, 'Цветы', 'Растения для помещения', '50 см', 1, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(3, '3.png', 'Фикус', 4200.00, 't3', 0, 'Цветы', 'Растения для помещения', '70 см', 1, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(4, '4.png', 'Розы', 5300.00, 't4', 1, 'Кустарники', 'Растения для помещения', '60 см', 1, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(5, '5.png', 'Кедр', 6500.00, 't5', 0, 'Деревья', 'Уличные растения', '1 м', 0, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(6, '6.png', 'Асплениум', 8700.00, 't6', 1, 'Цветы', 'Растения для помещения', '40 см', 1, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(7, '7.png', 'Сосна', 6500.00, 't7', 0, 'Деревья', 'Уличные растения', '1 м', 1, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(8, '8.png', 'Хамедорея элеганс', 8700.00, 't8', 1, 'Цветы', 'Растения для помещения', '90 см', 0, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
(9, '9.png', 'Рододендрон', 6500.00, 't9', 0, 'Кустарники', 'Уличные растения', '1 м', 0, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'shr-alena@yandex.ru', '1t'),
(2, 'frolova.est@gmail.com', '123'),
(3, '1t@1t.ru', '1t'),
(4, 'sprint@mail.ru', '1tt'),
(5, '1test@1test.ru', '123456'),
(7, '2test@test.test', '12345678'),
(8, 'test3@test.test', '123456'),
(9, '5test@test.test', '12345'),
(10, '6test@test.test', '12345654321'),
(11, 'shr-alena@yandex.com', '1t'),
(12, '7test@7test.7t', '1234567'),
(13, '9t@9t.9t', '9t'),
(14, '8t@8t.test', '8t'),
(15, '11t@11t.11t', '11t');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `plants`
--
ALTER TABLE `plants`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `plants`
--
ALTER TABLE `plants`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
