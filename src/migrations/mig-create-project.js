'use strict';

const { DataTypes } = require("sequelize/dist");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      phanloaibenh: {
        type: Sequelize.STRING
      },
      xeploai: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      tuoi: {
        type: Sequelize.STRING
      },
      gioitinh: {
        type: Sequelize.STRING
      },
      ngaykham: {
        type: Sequelize.STRING
      },
      dienthoai: {
        type: Sequelize.STRING
      },
      diachi: {
        type: Sequelize.STRING
      },
      ghichu: {
        type: Sequelize.STRING
      },
      chandoan: {
        type: Sequelize.STRING
      },
      dieutri: {
        type: Sequelize.STRING
      },
      ketqua: {
        type: Sequelize.STRING
      },
      hinhanh: {
        type: DataTypes.TEXT
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project');
  }
};