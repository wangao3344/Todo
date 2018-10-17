let router = require("express").Router();
let todo_service = require("../service/todo_service");
//添加
router.post("/", async (req, res) => {
    let body = req.body;
    console.log("===========" + body.content);
    let result = await todo_service.addTodo(body);
    res.success(result);
})
//修改
router.put("/:id", async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    await todo_service.updateTodo(id, body);
    res.success();
})
//查询
router.get("/", async (req, res) => {
    let result = await todo_service.findAll();
    res.success(result);
})
//删除
router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    let result = await todo_service.deleteTodo(id);
    res.success(result);
})
module.exports = router;