const { Client } = require('pg');

const connectSql = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '1234567890',
    database: 'college'
});

//TO CHECK CONNECTION JOIN TO POSTGRESQL CONNECTED YA NOT CONNECTED
connectSql.connect((error) => {
    if (error) {
        console.error('Connection error', error.stack);
    } else {
        console.log('Connected');
    }
});

//USE PRINT TABLE DATA IN CONSOLE
connectSql.query("select * from student",(error,result)=>{
    console.warn(result);
})