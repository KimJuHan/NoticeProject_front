//$(document).ready(function(){
//    $('.dashboard').click(function(){
//        var x = $(this).css();
//    })
//})
//
//$(document).ready(function(){
//    $('').click(function(){
//
//    })
//})

//function myFunction(btn) {
////console.log(btn)
//    var btnElement = document.getElementsByClassName(btn.getAttribute("class"))
//    btnElement.className.replace(".active")
//    btn.classList.toggle("active");
////    btn.classList.toggle("active");
//    document.getElementById(btn.getAttribute("class") + "SubMenu").classList.toggle("show");
//
//}

window.onclick = function (event) {
  if (!event.target.matches('.dashboard')) {

var dropdowns = document.getElementsByClassName("dashboard-container");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

//
//addEventListener("click",myFunction() {this.classList.toggle("active")})
