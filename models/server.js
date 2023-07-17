const express = require('express');
const cors = require('cors');
const {dbConnection} = require("../database/config.js")

class Server{

    constructor(){
        this.app = express();

        this.usuariosPatch = "/api/usuarios"

        this.port = process.env.PORT

        //conectar
        this.connectDB()
        //middlewares
        this.middlewares()

        this.routes() 

    }

    async connectDB(){
        await dbConnection()
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //leer y parsear json en body
        this.app.use(express.json());

        //public derectory
        this.app.use(express.static('public'))

    }

    routes(){
        this.app.use(this.usuariosPatch, require('../routes/usuario.routes.js'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`listening on Port: ${this.port}`);
        });
    }

}

module.exports = Server

