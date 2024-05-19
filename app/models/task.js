module.exports = function (sequelize, Sequelize) {
  var Task = sequelize.define("task", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    task: {
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

    projectid: {
      type: Sequelize.INTEGER,
    },

    dueDate: {
      type: Sequelize.DATE,
    },

    status: {
      type: Sequelize.ENUM("pending", "due", "complete"),
      defaultValue: "pending",
    },
  });

  return Task;
};
