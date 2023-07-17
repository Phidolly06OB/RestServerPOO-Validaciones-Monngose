const { Router } = require("express")

const {getUser, postUser, delUser, upd} = require("../controllers/usuario.controllers.js")

const router = Router();

router.get("/", getUser);

router.post("/", postUser);

router.delete("/", delUser);

router.patch("/", upd); 


module.exports = router;