'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      State.belongsTo(models.User, {
        foreignKey: 'id',
        targetKey: 'stateId'
      })
    }
  };
  State.init({
    stateName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  // State.sync({ alter: true });
  return State;
};