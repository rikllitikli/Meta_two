$(document).ready(function(){

    $('.slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
    $('.slider_two').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            1000:{
                items:3
            },
            992:{
                items:3
            },
            576:{
                items:3
            },
            575:{
                items:1
            },
            414:{
                items:1
            },
            413:{
                items:1
            },
            0:{
                items:1
            },
        }
    });
});

var countDownDate = new Date("Oct 20, 2023 00:00:00").getTime();

var countDownFunction = setInterval(function (){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("hours").innerHTML =
       hours + ""
    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("hours").innerHTML = "0";
    }
}, 1000)
var countDownFunction = setInterval(function (){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("minutes").innerHTML =
      minutes + ""
    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("minutes").innerHTML = "0";
    }
} , 1000)
var countDownFunction = setInterval(function (){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("secondes").innerHTML =
        seconds + "";
    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("secondes").innerHTML = "0";
    }
} , 1000)

/*
window.onscroll = function show_header (){
    var header = document.querySelector(".header");

    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}*/
