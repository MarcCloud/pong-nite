/**
 * Created by marccloud on 8/30/15.
 */
import express from 'express';
import { resolve } from 'path';
const app = express();

function server (port){

    app.use(express.static(resolve('./public')));
    app.set('views', `${__dirname}/views`);
    app.set('view engine', 'jade');

    app.get('/', (req, res)=>{
        res.render('index');
    });

    let srv = app.listen(port, ()=>{
        console.log('Server running at port %d', port);
    });

    return srv;
}

export default server;
