import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import {Task} from "./Task.js";

export const registropaciente = sequelize.define('registropaciente' , {
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

registropaciente.hasMany(atencion, {
    foreignKey: 'registro_paciente_id',
    sourceKey: 'id'
})

atencion.belongsTo(registropaciente, {
    foreignKey: 'registro_paciente_id',
    targetId: 'id'
})