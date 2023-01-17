const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//


//The line above deals with the hamburger.
humburger = document.querySelector(".humburger");
humburger.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};


//reveal of the website's contents
window.addEventListener('scroll', reveal);

function reveal(){

    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowheight- revealPoint){
            reveals[i].classList.add("active");

        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
//EH REVEAL ENDS HERE

//Navbar/Hamburger Toggler 
function toggleMobileMenu(menu){
  menu.classList.toggle('open');
}
