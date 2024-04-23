const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/authRoutes');

const itemRoutes = require('./routes/itemRoutes');


app.use('/', authRoutes);

app.use('/', itemRoutes);

app.get('/', (req, res) => {
    res.render('index'); 
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});