import config from './config';
import router from './api';

//import fs from 'fs';
import express from 'express';
const server  = express();

// rendering ejs
server.get('/', (req,res) =>{
    res.render('index', {
        content: 'Hello from EJS'
    });
});

// setting EJS (embedded JS)
server.set('view engine', 'ejs');

// using express middleware
server.use('/api', router);
server.use(express.static('public'));

// server.get('/about.html', (req,res) =>{
//     fs.readFile('./about.html',(err,data) => {
//         res.send(data.toString());
//     })
    
// });

server.listen(config.port, () => {
    console.log('lisening on port: ', config.port);
});

