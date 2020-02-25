const express = require('express');
const app = express();
const sql = require('mssql');

const sqlConfig = {
    user:'UsoExclusivoCTD',
    password: 'C7d5452014',
    server: '192.168.1.3',
    database: 'froma'
};

const server = app.listen(8080, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Servidor en http://%s:%s', host, port);
});

app.get('/customers', function (req, res) {
    sql.connect(sqlConfig, function () {
        var request = new sql.Request();
        request.query('select')
    });
});