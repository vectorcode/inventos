> Тестопое задание выполнено использую технологии HTML, CSS, Javascript, Jade,Sass, Gulp, Git.
> Скомпелированная версия проекта находится в папке dist (после команды gulp build) и на сайте http://inventos.pavelkondakov.ru/ (команда для обновления gulp deploy).
> 

Для развертывания проекта локально выполните слежующие команды:

0. git clone https://github.com/vectorcode/inventos.git inventos
1. npm i
2. bower i
3. gulp - Задача по-умолчанию ['server', 'watch']
4. gulp build - Собираем папку DIST (только после компиляции Jade)
5. gulp minihtml - минификация html в папке dist
6. gulp deploy - загружаем на сервер содержимое папки dist


