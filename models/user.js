'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.Country), {
      //   foreignKey: 'countryId',
      //   as: "abc"
      // }
      // User.belongsTo(models.State), {
      //   foreignKey: 'stateId',
      //   as: "statesData"
      // }
      // User.hasOne(models.City), {
      //   foreignKey: 'cityId',
      //   as: "statesData"
      // }

      User.hasMany(models.Country), {
        foreignKey: 'id',
        sourceKey: 'countryId'
      }
      User.hasMany(models.State, {
        foreignKey: 'id',
        sourceKey: 'stateId'
      })
    }
  };

  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    password: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    // cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  // User.sync({ alter: true });
  return User;
};

