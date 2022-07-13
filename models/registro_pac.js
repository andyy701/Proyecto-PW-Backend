import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const Registro_Pac = sequelize.define('registro_pac',{
    correo:{
        type: DataTypes.STRING,
        primaryKey:true
    },
    contraseña:DataTypes.STRING,
    nombre:DataTypes.STRING,
    apellido:DataTypes.STRING,
    dni:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    fecha_nacimiento:DataTypes.STRING,
    telefono:{
        type: DataTypes.INTEGER,
        primaryKey:true
    }    
},{
    timestamps:true
})