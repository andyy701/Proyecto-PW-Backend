import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { atencion } from "./atencion.js";

export const medico = sequelize.define('medico' , {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    especialidad : {
        type: DataTypes.STRING
    },
    numcolegio : {
        type: DataTypes.STRING
    },
    phone : {
        type: DataTypes.INTEGER
    },
    direccion : {
        type: DataTypes.STRING
    },
    preciop : {
        type: DataTypes.INTEGER
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

medico.hasMany(atencion, {
    foreignKey: 'medico_id',
    sourceKey: 'id'
})

atencion.belongsTo(medico, {
    foreignKey: 'medico_id',
    targetId: 'id'
})