//这是一个程序的入口,然后进行配置，导入所需要的依赖
/**
 * npm install express
 * npm install mongoose
 * @type {createApplication}
 */
let express = require("express");
let config = require("./config/index");
let app = express();
app.get("/", (req, res) => {
    res.send("测试访问成功");
});
//console.log(config.PORT);
app.listen(config.PORT)

