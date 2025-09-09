var details = ["html", "css", "js", "bootastrap", "c++", "c"]
var choice = prompt("enter the course")

var found = details.find((ele) => {
    return ele == choice
})
if (found == choice) console.log("the course is found")
else {
    details.push(choice)
    console.log(details)
}