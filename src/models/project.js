'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsToMany(models.User, { through: 'Project_User' })
      Project.hasMany(models.Project_Imgs, { foreignKey: 'projectId' });
    }
  };
  Project.init({
    phanloaibenh: DataTypes.STRING,
    xeploai: DataTypes.STRING,
    name: DataTypes.STRING,
    tuoi: DataTypes.STRING,
    gioitinh: DataTypes.STRING,
    ngaykham: DataTypes.STRING,
    dienthoai: DataTypes.STRING,
    diachi: DataTypes.STRING,
    ghichu: DataTypes.TEXT,
    chandoan: DataTypes.TEXT,
    dieutri: DataTypes.TEXT,
    ketqua: DataTypes.TEXT,
    hinhanh: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};