module.exports = function (sequelize, Sequelize) {
  var HabitRecord = sequelize.define("habitrecord", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    userid: {
      type: Sequelize.INTEGER,
    },

    habitid: {
      type: Sequelize.INTEGER,
    },

    year: {
      type: Sequelize.INTEGER,
    },

    month: {
      type: Sequelize.INTEGER,
    },

    date: {
      type: Sequelize.DATE,
    },

    status: {
      type: Sequelize.ENUM("due", "complete"),
      defaultValue: "due",
    },
  });

  return HabitRecord;
};
