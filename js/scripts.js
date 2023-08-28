const btnModoEscuro = document.getElementById('btnModoEscuro');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '$Dvc314900*',
    database: 'cliente'
});

connection.connect();




