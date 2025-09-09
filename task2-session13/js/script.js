var details = [{
    first_name:"youssef",
    last_name:"mohamed",
    age:20,
},
{
    first_name:"ali",
    last_name:"ahmed",
    age:25,
},
{
    first_name:"osama",
    last_name:"alaa",
    age:40,
}]

var i =details.findIndex((ele) => ele.age == 25)
console.log(i)