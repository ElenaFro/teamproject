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
