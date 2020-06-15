const express = require("express");
const TaskController = require("../controllers/TaskController");

const router = express.Router();

router.get("/tasks", TaskController.index);
router.post("/tasks", TaskController.add);
router.put("/tasks/:task_id", TaskController.update);
router.delete("/tasks/:task_id", TaskController.delete);

router.get("/tasks/:task_id", TaskController.showOne);

module.exports = router;