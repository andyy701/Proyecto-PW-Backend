'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Atencions', [{
      id: 101,
      fecha:new Date(2022,7,18),
      historial:"Ninguno",
      diagnostico:"Reservado",
      receta:"Advil 3 veces al día por 3 días",
      recomendaciones:"Ninguna",
      puntuacion:5
      /*
      id:id,
            fecha:fecha,
            historial:historial,
            diagnostico:diagnostico,
            receta:receta,
            recomendaciones:recomendaciones,
            puntuacion:puntuacion
      */
    },
    {
      id: 102,
      fecha:new Date(2022,7,19),
      historial:"Fiebre,Tos,Cansancio,Pérdida del gusto o del olfato",
      diagnostico:"Covid-19",
      receta:"Baricitinib 4 veces al día por 7 días",
      recomendaciones:"Reposo, Líquidos, Medicamentos para aliviar el dolor",
      puntuacion:4
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
