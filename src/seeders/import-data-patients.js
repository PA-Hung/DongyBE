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

    await queryInterface.bulkInsert('project', [
      {
        customerId: '13',
        phanloaibenh: 'Bệnh tim',
        xeploai: 'Tâm nhĩ',
        name: 'Phan Anh Hung',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '12',
        phanloaibenh: 'Viêm gan',
        xeploai: 'Tâm nhĩ',
        name: 'Phan Anh ahihi',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634934',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '11',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '4',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '5',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '6',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '7',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '8',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '9',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
      },
      {
        customerId: '10',
        phanloaibenh: 'Bệnh phổi',
        xeploai: 'Tâm thất',
        name: 'Phan Anh ahuhuh',
        tuoi: '38',
        gioitinh: 'Nam',
        ngaykham: '23/01/2023',
        dienthoai: '0933634933',
        diachi: '101/4 Vo Thi Sáu, Phường 2, Vũng Tàu',
        ghichu: 'Nan y',
        chandoan: 'Ung thư',
        dieutri: 'tiến triển tốt',
        ketqua: 'khỏi bênh',
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
