require("../db");
let user_service = require("../service/todo_service");

async function testServiceMethod() {
    // let todo={content:"今天我要去洗澡"};
    // let addTodo = await user_service.addTodo(todo);
    // console.log(addTodo);
    // let findAll = user_service.findAll();
    // console.log(
    //     findAll
    // );
    //user_service.updateTodo("5bc6c409da17814b206ddac5",{content:"我要去旅游"})
    user_service.deleteTodo("5bc6c409da17814b206ddac5");
}

testServiceMethod();

