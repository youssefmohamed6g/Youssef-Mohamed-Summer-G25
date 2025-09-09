var users = []
var user = {
    name: "",
    id: 0,
    balance: 0,
}
var numUsers = prompt("please enter the number users")
for (var i = 0; i < numUsers; i++) {
    console.log(`user ${i + 1}`)
    var name2 = prompt(`please enter name user ${i + 1}`)
    var id2 = prompt(`please enter id user ${i + 1}`)
    var balance2 = prompt(`please enter balance user ${i + 1}`)
    user = {
        name: name2,
        id: id2,
        balance: balance2,
    }
    console.log(user)
    console.log("=================================")
    users.push(user)
}
var choice_balance = prompt("is you change blance user")
if (choice_balance == "yes") {
    var id_user = prompt("please enter id user")
    var balance_new = prompt("please enter the new balance")
    var user_index = users.findIndex((ele) => {
        return ele.id == id_user
    })
    if (user_index != -1) {
        users[user_index].balance = balance_new
        console.log(users)
        console.log("==================================")
    } else {
        console.log("you entered the uncorrect id")
        console.log("==================================")
    }
}
var choice_delete = prompt("is you delete user")
if (choice_delete == "yes") {
    var id_user = prompt("please enter id user")
    var user_index = users.findIndex((ele) => {
        return ele.id == id_user
    })
    if (user_index != -1) {
        users.splice(user_index, 1)
        console.log(users)
        console.log("==================================")
    } else {
        console.log("you entered the uncorrect id")
        console.log("==================================")
    }
} else console.log("thank you")