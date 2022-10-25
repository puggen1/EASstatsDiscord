let apiMethods = require("./api/apiFunctions");


async function test(){
    let mytest = await apiMethods.getPlayer("einar61", "PC");
    console.log(mytest);
}

test();