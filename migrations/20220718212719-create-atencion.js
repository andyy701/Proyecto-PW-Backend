'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atencions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      historial: {
        type: Sequelize.STRING
      },
      diagnostico: {
        type: Sequelize.STRING
      },
      receta: {
        type: Sequelize.STRING
      },
      recomendaciones: {
        type: Sequelize.STRING
      },
      puntuacion: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Atencions');
  }
};