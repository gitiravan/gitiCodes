
// const toggeler = document.querySelector(".btn");
// toggeler.addEventListener("click",function(){

//     document.querySelector("#sidebar").classList.toggle("collapsed");
// })

$(document).ready(function () {
    $(".btn-sidebar").click(function () {

        $("#sidebar").toggleClass("collapsed");
    })
    if (window.matchMedia('(max-width: 767px)').matches) {
        $("#sidebar").toggleClass("collapsed");
    }
})