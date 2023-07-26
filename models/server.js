import express from 'express';
import cors from 'cors'
import user from '../routes/users.js';

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();

        //App routes
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Reading and parsing of body
        this.app.use(express.json());

        //Public directory;
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.usersPath,user);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server listening on port ' + this.port)
        })
    }

}

export default Server;