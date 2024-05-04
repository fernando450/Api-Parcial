//const mongoose = require('mongoose');
import mongoose from "mongoose";

const dbconnection = async () => {
    console.log("Conectando a MongoDB Atlas");
    try {
        const uri = process.env.DB_CONNECTION;
        await mongoose.connect(uri);
        console.log('Cenectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas', error);
        process.exit(1);  
    }
};

export default dbconnection;
