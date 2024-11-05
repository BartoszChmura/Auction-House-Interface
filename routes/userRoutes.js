const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/users', (req, res) => {
    res.render('users');  
});

router.get('/all-users', (req, res) => {
    const jwtToken = req.headers.authorization;

    if (!jwtToken) {
        return res.status(401).send("Access Denied: No token provided.");
    }

    const apiUrl = 'http://localhost:8080/user/all'; 
    axios.get(apiUrl, {
        headers: {
            'Authorization': jwtToken
        }
    })
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    });
});

module.exports = router;