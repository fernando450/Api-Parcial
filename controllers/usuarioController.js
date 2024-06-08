import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";


//Consultar usuarios

export async function getUsuarios(req, res, next) {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

//Crear usuario encriptando la password

export async function createUsuario(req, res, next) {
    try {
        const usuario = new Usuario(req.body);
        //Verificar que el usuario no este registrado por email
        const existeIdent = await Usuario.findOne({ identificacion: req.body.identificacion });
        if (existeIdent) {
            return res.status(400).json({ message: existeIdent.identificacion+' ya ha sido REGISTRADO' });
        }
        //Verificar que el usuario no este registrado porcorreo
        const existeCorre = await Usuario.findOne({ correo: req.body.correo });
        if (existeCorre) {
            return res.status(400).json({ message: existeCorre.correo+' ya ha sido REGISTRADO' });
        }
        //Encriptar la password
        usuario.password = await bcryptjs.hash(req.body.password, 10);
        await usuario.save();
        res.json(usuario);
        
    } catch (error) {
        next(error);
    }
};

//actualizar usuario 

export async function updateUsuario(req, res, next) {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuario);
    } catch (error) {
        next(error);
    }
};
