'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medico.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    especialidad: DataTypes.STRING,
    numcolegio: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    preciop: DataTypes.INTEGER,
    precioo: DataTypes.INTEGER,
    puntuacion: DataTypes.INTEGER,
    comentarios: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medico',
  });
  return Medico;
};