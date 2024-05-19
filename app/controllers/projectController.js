const Projects = require("../models").project;

var exports = (module.exports = {});

exports.create = function (req, res) {
  Projects.create({
    name: req.body.name,
  })
    .then((project) => res.status(201).send(project))
    .catch((error) => res.status(400).send(error));
};

exports.findAll = function (req, res) {
  Projects.findAll()
    .then((allProjects) => res.status(200).send(allProjects))
    .catch((error) => res.status(400).send(error));
};
// exports.findOne = function (req, res, project) {
//   console.log(project);
//   res.json(project.findOne);
// };

// exports.update = function (req, res) {
//   res.send;
// };
