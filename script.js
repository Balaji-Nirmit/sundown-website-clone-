const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
    // here #main donot have height and width that's why it will work 
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
function swiper_animation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        loop:true,
      });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            full.style.display="block"
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            full.style.display="none"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
// removing context menu
document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)
page4Animation()
swiper_animation()
menuAnimation()
loaderAnimation()