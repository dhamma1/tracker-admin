const express = require("express");
var projectController = require("../controllers/projectController.js");
const router = express.Router();

router.get("/", projectController.findAll);
router.put("/", projectController.create);
router.get("/:projectId", projectController.findOne);
router.post("/:projectId", projectController.update);
router.delete("/:projectId", projectController.delete);
module.exports = router;
