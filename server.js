'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

let port = process.env.PORT || 3000;
app.listen(port);

console.log('Listening on port ' + port);
