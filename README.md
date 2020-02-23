# AngularBlog

Привет! Это мой блог, в котором клиентская часть выполнена на Angular 8, серверная часть c помощью REST API Firebase.

Live-demo: https://angular-blog-7ea52.web.app/

## Запуск приложения
Для запуска приложения выполните команду ng serve, при этом нужно не забыть установить nodejs, выполнить команды npm install npm@latest, npm install -g @angular/cli. Затем перейдите по адресу http://localhost:4200/. Работоспособность можно проверить на сайте выше или запустив приложение локально.

## Подключение к базе данных
В приложении используется Firebase Database. Для подключения своей базы данных Вам нужно:
 1) Авторизоваться на сайте https://firebase.google.com/
 2) Создать свою базу данных, подробный гайд https://firebase.google.com/docs/database/rest/start
 3) Заменить переменные среды в src/environments на свои: apiKey(ключ, выданный при регистрации) и fbDbUrl(адрес вашей БД)

## Панель админа

Live-demo: https://angular-blog-7ea52.web.app/admin

Данные для входа: user@mail.com. Пароль: 123456

В панели админа можно редактировать, удалять, создавать новые посты.
