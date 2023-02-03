const express = require('express');
const app = express();
app.use(express.json());

const products = [
    {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},
    {id: 2, title: "Mens Casual Slim Fit"},
    {id: 3, title: "Solid Gold Petite Mircopave"},
]

app.get('/api/products', (req, res) => {
    res.send(products);
});


app.get('/api/products/:id', (req, res) => {
    const my_product = products.find(product => product.id === parseInt(req.params.id));
    if(!my_product) res.status(404).send("not found");
    res.send(my_product);
});

app.post('/api/products', (req, res) => {
    const product = {
        id: products.length +1,
        title: req.body.title
    };

    products.push(product);
    res.send(products);

});

app.put('/api/products/:id', (req, res)=>{
    const my_product = products.find(product => product.id === parseInt(req.params.id));
    if(!my_product) res.status(404).send("not found");

    my_product.title = req.body.title;
    res.send(my_product);
});

app.delete('/api/products/:id', (req, res)=>{
    const my_product = products.find(product => product.id === parseInt(req.params.id));
    if(!my_product) res.status(404).send("not found");

    const product_index = products.indexOf(my_product);
    products.splice(product_index, 1);

    res.send(my_product);
})








const PORT = 5001;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});