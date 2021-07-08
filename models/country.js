'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Country.belongsTo(models.User, {
        foreignKey: 'id',
        targetKey: 'countryId'
      })
    }
  };
  Country.init({
    countryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  // Country.sync({ alter: true });
  return Country;
};