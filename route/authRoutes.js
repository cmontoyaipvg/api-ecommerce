const express = require('express');
const router = express.Router();

router.get('/hola', (req, res) => {
 res.send({"mensaje":"Hola Mundo!!"});
});

router.get('/login', (req, res) => {
    const data = req.query;
    if (data.usuario === 'admin' && data.clave === '1234') {
    res.json({ mensaje: 'usuario logeado' });
    } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
    }
   });

router.post('/login', (req, res) => {
 const { username, password } = req.body;
 if (username === 'admin' && password === 'password') {
 res.json({ token: 'token-de-autenticacion' });
 } else {
 res.status(401).json({ error: 'Credenciales inválidas' });
 }
});

module.exports = router;