'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atencion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atencion.init({
    id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    historial: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    receta: DataTypes.STRING,
    recomendaciones: DataTypes.STRING,
    puntuacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Atencion',
  });
  return Atencion;
};