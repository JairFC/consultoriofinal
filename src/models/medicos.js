'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Medicos.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medicos',
  });
  return Medicos;
};