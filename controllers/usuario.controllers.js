const Usuario = require("../models/Usuario")

const getUser = (req, res) =>{
    res.json({
        "message": "Welcome"
    })
}

const postUser = async (req, res) =>{
    try {
        const body = req.body;
        const usuario = new Usuario(body)
        await usuario.save();
        res.json({
            "message": "post api",
            usuario
        })
    } catch (error) {
        //el propio pa los erros
        res.status(300).send(error.message)       
    }
}

const delUser = (req, res) =>{
    res.status(403).json({
        "message": "delete Api"
    })
}

const upd = (req, res) =>{
    res.status(403).json({
        "message": "patch Api"
    })
}

module.exports = {
    getUser,
    postUser,
    delUser,
    upd
}