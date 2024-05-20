const Projects = require("../models").project;

var exports = (module.exports = {});

exports.create = function (req, res) {
  Projects.create({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    userid: req.body.userid,
  })
    .then((project) => res.status(201).send(project))
    .catch((error) => res.status(400).send(error));
};

exports.findAll = function (req, res) {
  const userid = req.session.passport.user;

  Projects.findAll({ where: { userid: userid, status: "active" } })
    .then((allProjects) => res.status(200).send(allProjects))
    .catch((error) => res.status(400).send(error));
};

exports.findOne = function (req, res) {
  const projectId = req.params.projectId;
  Projects.findByPk(projectId)
    .then((project) => res.status(200).send(project))
    .catch((error) => res.status(400).send(error));
};

exports.update = function (req, res) {
  const projectId = req.params.projectId;
  // const updatedProject = req.body.project;
  Projects.findByPk(projectId)
    .then((project) => {
      if (project != null) {
        project
          .update({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            userid: req.body.userid,
          })
          .then((project) => {
            res.json(project);
          });
      }
    })
    .catch((error) => res.status(400).send(error));
};

exports.delete = function (req, res) {
  const projectId = req.params.projectId;
  Projects.findByPk(projectId)
    .then((project) => {
      if (project != null) {
        project.destroy().then(() => {
          res.sendStatus(200);
        });
      }
    })
    .catch((error) => res.status(400).send(error));
};
