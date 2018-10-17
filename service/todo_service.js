//通过约束对象来调用增删改查的方法，完成业务模块
let UserSchema = require("../modle/todo");
//添加方法
//先查找如果有的话我们就告诉用户已存在
//如果不存在的话我们在添加
//然后对每个业务方法进行测试
async function addTodo(todo) {
//let result =findExsitTodo(todo);
    let result = await UserSchema.findOne({content: todo.content});
    if (result) {
        throw Error(`你所添加的${todo.content}已存在`);
    }
    result = await UserSchema.create(todo);
    //console.log(result);
    return result;

}

async function findAll() {
    let result = await UserSchema.find();
    console.log(result);
    return result;
}

async function findExsitID(id) {
    let result = await UserSchema.findOne({_id: id});
    if (!result) {
        throw Error(`您查找的${todo._id}不存在`)
    }

}

async function updateTodo(id, todo) {
    await findExsitID(id);
    let result = await UserSchema.update({_id: id}, todo);
    if (result.n !== 1) {
        throw Error(`更改数据id为${id}发生错误`)
    }
    console.log("更新数据成功");
}

async function deleteTodo(id) {
    await findExsitID(id);
    let deleteOne = await UserSchema.deleteOne({_id: id});
    if (deleteOne.n !== 1) {
        throw Error("删除数据时发生错误");
    }
    console.log("删除数据成功");
}

module.exports = {
    addTodo,
    findAll,
    updateTodo,
    deleteTodo
}
