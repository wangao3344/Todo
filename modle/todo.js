let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    //待办事项
    content: {
        type: String,
        require: [true, "待办事务是必填项"],
        unique: [true, "待办事情不能重复"]
    },
    //是否完成
    isDone: {
        type: Boolean,
        default: false
    },
    //创建时间
    creatTime: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model("todos", UserSchema);

