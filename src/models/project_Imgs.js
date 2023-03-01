'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_Imgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  Project_Imgs.init({
    img_url: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Project_Imgs',
  });
  return Project_Imgs;
};