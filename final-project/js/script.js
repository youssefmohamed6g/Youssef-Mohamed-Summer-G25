const input = document.getElementById("searchInput");
const popularBox = document.getElementById("popularBox");
// إظهار عند focus
input.addEventListener("focus", () => {
  popularBox.classList.remove("d-none");
});

// إخفاء عند click برا
document.addEventListener("click", (e) => {
  if (!input.contains(e.target) && !popularBox.contains(e.target)) {
    popularBox.classList.add("d-none");
  }

});
//--------------------------------section2--------------------------------------
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
})

//------------------------------------------------------------------------------


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    items: 5,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>']
  });
});

window.addEventListener('scroll', () => {
  var arrow = document.getElementById('arrow')
  if (document.documentElement.scrollTop > 400) arrow.classList.remove('d-none')
  else arrow.classList.add('d-none')
})

//----------------form------------------


var form = document.getElementById("form")

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var name =  document.getElementById('name')
  var email =  document.getElementById('email')
  var subject =  document.getElementById('subject')
  if(name.value.trim() != "" && email.value.trim() != "" && subject.value.trim() != "" && !document.getElementById('nameo') && !document.getElementById('emailo') && !document.getElementById('subjecto')){
    console.log("هيتم بعت البيانات")
    
  }else{
    console.log("البيانات غلط")
  }
});
//-----------------------------------------------

form.addEventListener('input', (e)=>{
  if(e.target.id == "name"){
    editname(e.target)
  }
  else if(e.target.id == 'email'){
    editEmail(e.target)
  }
  else if(e.target.id == 'subject'){
    editSubject(e.target)
  }
})

var editname = (ele)=>{
 var nameValue = ele.value.trim();
 var nameo = document.getElementById('nameo')
 if(nameValue.length < 5){
  nameo.classList.remove('d-none')
  nameo.innerText = "The field is required."
 }else{
  nameo.classList.add('d-none')
  nameo.innerText = ""
 }
}

var editEmail = (ele)=>{
  var strongRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailo = document.getElementById('emailo')
  var emailValue = ele.value
  if(strongRegex.test(emailValue)){
    emailo.innerText = ""
    emailo.classList.add('d-none')
  }else{
    emailo.classList.remove('d-none')
    emailo.innerText = "The field is required."
  }
}

var editSubject = (ele)=>{
  var subjectValue = ele.value.trim();
  var subjecto = document.getElementById('subjecto')
  if(subjectValue.length < 10){
    subjecto.innerText = "The field is required."
    subjecto.classList.remove('d-none')
  }else{
    subjecto.innerText = ""
    subjecto.classList.add('d-none')
  }
}

//-----------------------------------------------------------

