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
     await queryInterface.bulkInsert('Medicos', [{
      id: 201,
      name: "Jose Alberto Caballero Ortiz",
      password:"password",
      especialidad:"Ginecólogo",
      numcolegio: 31476,
      phone:123456789,
      direccion:"Av. La Fontana 362, La Molina, La Molina",
      preciop:50,
      precioo:40,
      puntuacion:5,
      comentarios:["Titan", "Fiera", "Maquina"]
      /*
      id:id,
            name:name,
            email:email,
            password:password,
            especialidad:especialidad,
            num_colegio:num_colegio,
            phone:phone,
            direccion:direccion,
            preciop:preciop,
            precioo:precioo,
            puntuacion:puntuacion,
            comentarios:comentarios
      */
    },
    {
      id: 202,
      name: "Edgard Javier Hernan Vargas Solis",
      password:"password",
      especialidad:"Pediatra",
      numcolegio: 39612,
      phone:123456789,
      direccion:"Jirón tarica 5109 urbanización parque naranjal, Los Olivos",
      preciop:50,
      precioo:40,
      puntuacion:4,
      comentarios:["Kamikaze", "Dios"]
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
