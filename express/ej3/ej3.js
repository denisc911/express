//cabecera_express
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//productos
let products = [
  { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
  { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
  { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
  { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
  { id: 5, nombre: 'Skin Valorant', precio: 120 },
  { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
];

//ruta
app.get('/products', (req, res) => {
  res.json({
    description: 'Productos',
    items: products
  });
});

//nuevo_producto
app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send('Producto creado');
});

//actualizar_producto
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedProduct = req.body;
  products = products.map(product => (product.id === id ? updatedProduct : product));
  res.send('Producto actualizado');
});

//eliminar_producto
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(product => product.id !== id);
  res.send('Producto eliminado');
});

//por_precio
app.get('/products/price/:price', (req, res) => {
  const price = parseInt(req.params.price);
  const filteredProducts = products.filter(product => product.precio <= price);
  res.json(filteredProducts);
});

//rango_precio
app.get('/products/price-range', (req, res) => {
  const { min, max } = req.query;
  const filteredProducts = products.filter(product => product.precio >= min && product.precio <= max);
  res.json(filteredProducts);
});

//filtrar_ID
app.get('/products/id/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(product => product.id === id);
  res.json(product);
});

//filtrar_nombre
app.get('/products/name/:name', (req, res) => {
  const name = req.params.name;
  const product = products.find(product => product.nombre.toLowerCase() === name.toLowerCase());
  res.json(product);
});

//msg_iniciar_server
app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});
