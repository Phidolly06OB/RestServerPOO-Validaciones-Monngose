const {Schema, modal, model} =require("mongoose");

const ususarioSchema = Schema({
    nombre:{
        type:String,
        required: [true, "name es required"],
        trim:true
    },
    email:{
        type:String,
        required: [true, "email es required"],
        unique:true
    },
    password:{
        type:String,
        required:  [true, "password es required"]
    },
    imagen:{
        type:String,
        required: [true, "imagen es required"]
    },
    rol:{
        type:String,
        required: [true, "rol es required"],
        default: "USER",
        enum: ["ADMIN", "USER"]
    },
    estado:{
        type:Boolean,
        default:true
    },
    googleSigIn:{
        type:Boolean,
        default:false
    }
})

module.exports = model("Usuario", ususarioSchema)