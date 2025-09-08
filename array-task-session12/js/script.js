var course = prompt("enter the course")
var courses = ["html", "css", "js", "bootstrap"];
if (courses.includes(course)) console.log("the course is found")
else {
    courses.push(course)
    console.log(courses)
} 