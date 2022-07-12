import sequelize from "./db.js";
import Sequelize from 'sequelize';

export const Registro_Pac = sequelize.define('registro_pac',{
    correo:{type: Sequelize.STRING, primaryKey:true},
    contraseña:Sequelize.STRING,
    name:Sequelize.STRING,
    apellido:Sequelize.STRING,
    dni:{type: Sequelize.INTEGER,primaryKey:true},
    fecha_nacimiento:Sequelize.STRING,
    telefono:{type: Sequelize.INTEGER,primaryKey:true}    
})