# myTeamProject

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### сохранить изменения в мастере

git add .
git commit -m "comments"
git push -u origin master

### coхранить изменения в ветке

git add .
git commit -m "коммент"
git push origin имя ветки

### слежка за db.json

<!-- json-server --watch db.json -->

npx json-server db.json

### удалить все локальные ветки кроме master

git branch | grep -v '^\*' | xargs git branch -D

========

#### БЭКЕНД-ПРАКТИКА

##### Выкачиваем репозиторий

```
git clone https://github.com/ElenaFro/teamproject.git
```

```
cd teamproject
```

##### Переходим на ветку dmt3

```
git checkout dmt3
```

##### Устанавливаем пакеты для сервера и клиента

```
cd server
```

```
npm i
```

```
cd ..
```

```
npm i
```

##### Создаём БД MySQL

```
CREATE DATABASE plant_shop;
USE plant_shop;

CREATE TABLE plants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image VARCHAR(255),
  name VARCHAR(255),
  price DECIMAL(10, 2),
  vcode VARCHAR(50),
  availability BOOLEAN,
  category1 VARCHAR(255),
  category2 VARCHAR(255),
  about TEXT,
  sale BOOLEAN,
  care TEXT
);
```

##### Подгружаем данные в БД

```
INSERT INTO plants (image, name, price, vcode, availability, category1, category2, about, sale, care) VALUES
('1.png', 'Туя', 2100.00, 't1', TRUE, 'Деревья', 'Уличные растения', '60 см', TRUE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('2.png', 'Филодендрон', 3150.00, 't2', TRUE, 'Цветы', 'Растения для помещения', '50 см', TRUE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('3.png', 'Фикус', 4200.00, 't3', FALSE, 'Цветы', 'Растения для помещения', '70 см', TRUE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('4.png', 'Розы', 5300.00, 't4', TRUE, 'Кустарники', 'Растения для помещения', '60 см', TRUE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('5.png', 'Кедр', 6500.00, 't5', FALSE, 'Деревья', 'Уличные растения', '1 м', FALSE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('6.png', 'Асплениум', 8700.00, 't6', TRUE, 'Цветы', 'Растения для помещения', '40 см', TRUE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('7.png', 'Сосна', 6500.00, 't7', FALSE, 'Деревья', 'Уличные растения', '1 м', TRUE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('8.png', 'Хамедорея элеганс', 8700.00, 't8', TRUE, 'Цветы', 'Растения для помещения', '90 см', FALSE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично'),
('9.png', 'Рододендрон', 6500.00, 't9', FALSE, 'Кустарники', 'Уличные растения', '1 м', FALSE, 'Полив: 1 раз в 2 недели, равнодушна к влажности воздуха. Освещение: рассеянный свет/полутень, восточное или западное окно - отлично');
```

##### Включаем сервер

```
cd server
```

```
node server.js
```

##### Включаем фронтенд

```
npm run dev
```

###### Заходим в компонент GetPlants (черно-желтая кнопочка на стартовой странице)


###### Использовала плагин для того, чтобы корзина не обнулялась при переходе на другие страницы. Это в ветке elena.
###### установка

npm install vuex-persistedstate


###### применение

import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  // ...
  plugins: [createPersistedState()],
})