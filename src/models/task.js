const {Model, DataTypes} = require("sequelize");

class Task extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      status: DataTypes.INTEGER,
      level: DataTypes.INTEGER
    }, {sequelize})
  }
}

module.exports = Task;