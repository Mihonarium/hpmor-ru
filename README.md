
![Текст Гарри Поттер и методы рационального мышления и изображение Гарри Поттера, делающего щелчок пальцами, с формулами на фоне.](/static/img/2_cropped.avif)

# Гарри Поттер и методы рационального мышления

Репозиторий сайта книги [Гарри Поттер и методы рационального мышления](https://гпмрм.рф/) на русском.

## Генерация сайта

1. Установить зависимости `npm install`.
2. Сгенерировать фронтенд `build.sh` или `source build.sh` (внутри — `npm run build` с перемещением файлов для корректных trailing slash для CloudFlare Pages).

## Содержимое репозитория

### Страницы

- [Главная страница](src/pages/index.js).
- [/getbooks/](src/pages/getbooks.js) — получает и отображает страницы из API, в остальном сайт статичен.
- [docs](docs) — Markdown-странички с книгой и дополнительной информацией.

### Скрипты

- [remember_scroll.js](static/js/remember_scroll.js) — предлагает продолжить чтение с последнего места.

### Конфиги и кастомизация

- [docusaurus.config.js](docusaurus.config.js) — конфиг сайта.
- [sidebars.js](sidebars.js) — конфиг оглавления, отображающегося на страницах.
- [src/css/custom.css](src/css/custom.css) — кастомные стили.
- [i18n/ru/code.json](i18n/ru/code.json) — кастомные названия (например, главы вместо страниц документации).

## Как помочь

Issues и Pull requests приветствуются!
