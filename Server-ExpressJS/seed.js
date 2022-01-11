const dotenv = require("dotenv");
dotenv.config();
const loadDatabase = require("./loaders/db");
const Task = require("./models/taskModel.js");
const User = require("./models/userModel.js");
const mongoose = require("mongoose");
const $console = require('Console');

async function run() {
    try {
        await loadDatabase();
        await Task.deleteMany({});
        await User.deleteMany({});
        await Task.init();
        await User.init();

        let task1 = new Task({ description: "clean your room", });
        task1 = await task1.save();

        let task2 = new Task({ description: "homework", });
        task2 = await task2.save();

        let task3 = new Task({ description: "wash the car", });
        task3 = await task3.save();

        let task4 = new Task({ description: "meditate", });
        task4 = await task4.save();

        let task5 = new Task({ description: "build a company", });
        task5 = await task5.save();

        let task6 = new Task({ description: "find cute girlfriend", });
        task6 = await task6.save();

        let user1 = new User({ username: "root", password: "root123321", roles: ["admin"] });
        user1 = await user1.save();

        let user2 = new User({ username: "tim", password: "tim123321", roles: ["user"] });

        let user3 = new User({ username: "ela", password: "ela123321", roles: ["user", "admin"] });
        user3 = await user3.save();

        let user4 = new User({ username: "symon", password: "symon123321", roles: ["user"] });
        user4 = await user4.save();

        let user5 = new User({ username: "tobey maguire", password: "tobey123321", roles: ["admin"] });
        user5 = await user5.save();

        user2.taskIds.push(task1._id);
        user2.taskIds.push(task2._id);

        user2 = await user2.save();

        task1.userId = user2._id;
        task2.userId = user2._id;

        task1 = task1.save();
        task2 = task2.save();

        let users = await User.find({});
        console.log("users");
        console.log(users);

        let tasks = await Task.find({});
        console.log("tasks");
        console.log(tasks);

    } catch (error) {
        console.log(error.message);
    } finally {
        await mongoose.connection.close();
    }
}

run().catch((err) => { console.log(err.stack); });
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

function cleanup(event) {
    $console.log("\nBye!");
    mongoose.connection.close();
    process.exit();
}

