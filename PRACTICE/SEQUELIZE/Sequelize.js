require('dotenv').config();

const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', 
  logging: false, 
});


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
