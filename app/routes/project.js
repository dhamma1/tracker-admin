var projectController = require("../controllers/projectController.js");

module.exports = function (app) {
  app.get("/projects", projectController.findAll);
  app.put("/projects", projectController.create);
};
