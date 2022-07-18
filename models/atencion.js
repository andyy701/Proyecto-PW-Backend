import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const atencion = sequelize.define('atencion', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey: true,

    },
    fecha: {
        type: DataTypes.DATE
    },
    historial : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    diagnostico : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    receta : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    recomendaciones : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    puntuacion : {
        type: DataTypes.INTEGER,
        defaultValue: false
    }

}, {
    timestamps: false
})