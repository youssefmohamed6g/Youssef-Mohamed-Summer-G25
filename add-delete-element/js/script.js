var form = document.querySelector('.form')
var table = document.querySelector(".table")
var submitBtn = form.querySelector("button[type='submit']");
submitBtn.classList.add('btn', 'btn-primary')
var details = []
var tbody = document.createElement("tbody")
var editIndex = -1;
table.append(tbody)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var user = {
        name:e.target.elements.userName.value,
        email:e.target.elements.email.value,
    }
    if (editIndex == -1) {
        details.push(user);
    } else {
        details[editIndex] = user;
        editIndex = -1;
        submitBtn.innerText = "Add";
        submitBtn.classList.remove('btn-warning');
    }
    showdetails()
})
function showdetails(){
    tbody.innerHTML = "";
    details.forEach((ele , i)=>{
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = ele.name
        var td2 = document.createElement("td");
        td2.innerText = ele.email

        var td3 = document.createElement("td")
        var edit = document.createElement("button");
        edit.innerText = "Edit"
        edit.classList.add('btn', 'btn-success', 'p-2')
        td3.append(edit)
        edit.addEventListener('click' , ()=>{
            form.elements.userName.value = ele.name;
            form.elements.email.value = ele.email;
            editIndex = i;
            submitBtn.innerText = "Save";
            submitBtn.classList.add('btn', 'btn-warning')
        })

        var td4 = document.createElement("td")
        var delete_element = document.createElement("button");
        delete_element.innerText = "Delete"
        delete_element.classList.add('btn', 'btn-danger', 'p-2')
        td4.append(delete_element)
        delete_element.addEventListener('click', ()=>{
            details.splice(i,1)
            showdetails()
        })

        var round = [td, td2, td3, td4] 
        round.forEach((item)=>{
            tr.append(item)
        })
        tbody.append(tr)
    })
}
