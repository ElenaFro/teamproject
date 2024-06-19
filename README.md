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

##### Включаем сервер

cd server

node server.js

##### Включаем фронтенд

cd ..

npm run dev

###### Заходим в компонент GetPlants (черно-желтая кнопочка на стартовой странице)