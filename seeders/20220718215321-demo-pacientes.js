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
     await queryInterface.bulkInsert('Pacientes', [{
      id: 301,
      name: "Diego Enrique",
      lastname:"Acuña Oyola",
      password:"password",
      birthdate: new Date(1992, 11, 26),
      phone: 123456789,
    },
    {
      id: 302,
      name: "Andy",
      lastname:"Arribasplata Muñoz",
      password:"password",
      birthdate: new Date(2002, 1, 6),
      phone: 987654321,
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
