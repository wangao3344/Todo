//这是一个程序的入口,然后进行配置，导入所需要的依赖
/**
 * npm install express
 * npm install mongoose
 * @type {createApplication}
 */
//同步捕获异常
require("express-async-errors");

require("./db");
let morgan = require("morgan");
let express = require("express");
let config = require("./config/index");
let todo_router = require("./router/todo_router");
let app = express();
//用于接收json，express已内置
app.use(express.json());
//打印日志
app.use(morgan("combined"))
// app.get("/", (req, res) => {
//     res.send("测试访问成功");
// });
//通过全局控件来定义res的扩展方法
app.use(require("./middle_ware/response_router"));
app.use("/todo", todo_router);
app.use((error, req, res, next) => {
    //console.log(error.toString());
    res.fail(error);

})
//console.log(config.PORT);
app.listen(config.PORT)

