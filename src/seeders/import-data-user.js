'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('user', [
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
      {
        email: '13',
        password: 'Bệnh tim',
        username: 'Phan Anh Hung',
        address: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        sex: 'Nam',
        phone: '0933634933',
        groupId: '1',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
