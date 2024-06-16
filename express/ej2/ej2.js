// ej2.js
const express = require('express');
const app = express();
const port = 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido al sitio');
});

// Rutas para productos
app.get('/productos', (req, res) => {
  res.send('Listado de productos');
});

app.post('/productos', (req, res) => {
  res.send('Crear un producto');
});

app.put('/productos', (req, res) => {
  res.send('Actualizar un producto');
});

app.delete('/productos', (req, res) => {
  res.send('Borrar un producto');
});

// Rutas para usuarios
app.get('/usuarios', (req, res) => {
  res.send('Listado de usuarios');
});

app.post('/usuarios', (req, res) => {
  res.send('Crear un usuario');
});

app.put('/usuarios', (req, res) => {
  res.send('Actualizar un usuario');
});

app.delete('/usuarios', (req, res) => {
  res.send('Borrar un usuario');
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});
