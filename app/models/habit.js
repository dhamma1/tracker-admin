module.exports = function (sequelize, Sequelize) {
  var Habit = sequelize.define("habit", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    description: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    userid: {
      type: Sequelize.INTEGER,
    },

    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });

  return Habit;
};
