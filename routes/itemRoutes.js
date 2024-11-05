const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/items', (req, res) => {
    res.render('items');
});

router.get('/all-categories', (req, res) => {
    const jwtToken = req.headers.authorization;

    if (!jwtToken) {
        return res.status(401).send("Access Denied: No token provided.");
    }

    const apiUrl = 'http://localhost:8080/category/all'; 
    axios.get(apiUrl, {
        headers: {
            'Authorization': jwtToken
        }
    })
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
        res.status(500).send('Error fetching categories');
    });
});


router.get('/add-item', (req, res) => {
    res.render('add-item'); 
});

module.exports = router;