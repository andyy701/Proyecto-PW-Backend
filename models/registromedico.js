import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { atencion } from "./atencion.js";

export const registromedico = sequelize.define('registromedico' , {
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
    specialty : {
        type: DataTypes.STRING
    },
    numero_colegio_medico : {
        type: DataTypes.INTEGER
    },

    phone : {
        type: DataTypes.INTEGER
    },
    address : {
        type: DataTypes.STRING
    },
    preciop : {
        type : DataTypes.INTEGER
    },
    precioo : {
        type: DataTypes.INTEGER
    },
    puntuacion : {
        type: DataTypes.INTEGER
    },
    comentarios : {
        type: DataTypes.STRING
    }
 
},{
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
}); 

registromedico.hasMany(atencion, {
    foreignKey: 'registro_doctor_id',
    sourceKey: 'id'
})

atencion.belongsTo(registromedico, {
    foreignKey: 'registro_doctor_id',
    targetId: 'id'
})