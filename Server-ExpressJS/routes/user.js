const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/authentication");

router.post("/login", userController.login);

router.post("/create",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }), userController.createNewUser);

router.post("/create/task",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }), userController.createNewTask);

router.get("/:id/tasks",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }),
    userController.getTasksOfUser);

router.get("/:id/tasks/all",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }),
    userController.getAllTasks);

router.get("/:id/tasks/unassigned",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }),
    userController.getUnassignedTasks);

router.get("/:id/users/all",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }),
    userController.getAllUsers);

router.patch("/:id/task/:taskId",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }),
    userController.updateTask);

router.patch("/:id/tasks",
    authenticate,
    authorize({ role: "admin" }, { role: "user", owner: true }),
    userController.assignTasks);

module.exports = router;