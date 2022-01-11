const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[a-z ]+$/.test(value);
            },
            message: (props) => `${props.value} is not a valid task!`
        },
        required: [true, "Description is required"]
    },
    completed: {
        type: Boolean,
        default: "false"
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}
    ,
    { collection: "tasks" }
);

module.exports = mongoose.model("Task", taskSchema);