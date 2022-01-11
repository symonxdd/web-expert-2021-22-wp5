const userService = require("../services/userService");
const taskService = require("../services/taskService");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const SECRET = process.env.SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

module.exports.login = async function (req, res, next) {
    try {
        const status = 200;
        const username = req.body.username;
        const password = req.body.password;

        let user = await userService.findUserByCredentials(username, password);

        const token = jwt.sign(
            { _id: user._id, roles: user.roles }
            , SECRET
            , { expiresIn: JWT_EXPIRATION, algorithm: "HS256" }
        );

        user = {
            _id: user._id,
            username: user.username,
            roles: user.roles,
            taskAmount: user.taskIds.length
        };

        res.status(status).json({ user, token });
    }
    catch (err) {
        next(err);
    }
};

module.exports.createNewUser = async function (req, res, next) {
    try {
        const status = 200;

        const username = req.body.username;
        const password = req.body.password;
        const roles = req.body.roles;

        let newUser = await userService.createNewUser(username, password, roles);

        newUser = {
            _id: newUser._id,
            username: newUser.username
        };

        res.status(status).json(newUser);
    } catch (err) {
        next(err);
    }
};

module.exports.createNewTask = async function (req, res, next) {
    try {
        const status = 200;

        const taskDescription = req.body.taskDescription;

        let newTask = await userService.createNewTask(taskDescription);

        newTask = {
            _id: newTask._id,
            taskDescription: newTask.taskDescription
        };

        res.status(status).json(newTask);
    } catch (err) {
        next(err);
    }
};

module.exports.getTasksOfUser = async function (req, res, next) {
    try {
        const status = 200;
        const id = req.params.id;
        const tasks = await userService.findTasksOfUser(id);

        res.status(status).json(tasks);
    } catch (err) {
        next(err);
    }
};

module.exports.getAllTasks = async function (req, res, next) {
    try {
        const status = 200;
        const tasks = await taskService.getAll();
        res.status(status).json(tasks);
    } catch (err) {
        next(err);
    }
};

module.exports.getUnassignedTasks = async function (req, res, next) {
    try {
        const status = 200;
        const tasks = await taskService.getUnassignedTasks();
        res.status(status).json(tasks);
    } catch (err) {
        next(err);
    }
};

module.exports.getAllUsers = async function (req, res, next) {
    try {
        const status = 200;
        const users = await userService.getAll();
        res.status(status).json(users);
    } catch (err) {
        next(err);
    }
};

module.exports.updateTask = async function (req, res, next) {
    try {
        const status = 200;

        const taskId = req.params.taskId;
        const completed = req.body.completed;
        const description = req.body.description;

        const task = await taskService.update(taskId, { completed, description });

        res.status(status).json(task);
    } catch (err) {
        next(err);
    }
};

module.exports.assignTasks = async function (req, res, next) {
    try {
        const status = 200;

        const userId = req.params.id;
        const taskIds = req.body.taskIds;

        const insertedTasksToUser = await userService.assign(userId, taskIds);

        res.status(status).json(insertedTasksToUser);
    } catch (err) {
        next(err);
    }
};