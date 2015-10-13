'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mockedProducts from './mockedProducts';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/products', (req, res) => {
    res.json(mockedProducts);
});

app.get('/api/products/:id', (req, res) => {
    const productToDisplay = mockedProducts.find(product => {
        return product.id === parseInt(req.params.id, 10);
    });

    if (!productToDisplay) {
        res.sendStatus(404);
    }

    res.json(productToDisplay);
});

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

let port = process.env.PORT || 3000;
app.listen(port);

console.log('Listening on port ' + port);
