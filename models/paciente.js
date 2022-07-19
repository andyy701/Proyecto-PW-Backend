import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { Atencion } from "./atencion.js";

export const paciente = sequelize.define('paciente' , {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
    last_name : {
        type: DataTypes.STRING
    },
    birth_date : {
        type: DataTypes.STRING
    },
    phone : {
        type: DataTypes.INTEGER
    }
 
},{
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
}); 

paciente.hasMany(Atencion, {
    foreignKey: 'paciente_id',
    sourceKey: 'id'
})

Atencion.belongsTo(paciente, {
    foreignKey: 'paciente_id',
    targetId: 'id'
})