// RWD big carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("nadia_carousel_goods_rwd");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}



// Web small carousel

var nadia_recommend_goods = [];
var dialog, dialogOverlay, dialogCloseButton, dialogOkButton;
var triggeringElement;

window.addEventListener('DOMContentLoaded', function(e) {
  dialog = document.querySelector('.dialog');
  dialogOverlay = dialog.querySelector('.overlay');

    $('.nadia_recommend_goods').slick({
        slidesToShow: 4,
        prevArrow: '<button class="previous-button is-control">' +
                   '  <img src="./svg/chevron-left.svg" aria-hidden="true">' +
               //  '  <span class="sr-only">Previous slide</span>' +
                   '</button>',
        nextArrow: '<button class="next-button is-control">' +
                   '  <img src="./svg/chevron-right.svg" aria-hidden="true">' +
               //  '  <span class="sr-only">Next slide</span>' +
                   '</button>',
    });

});



// RWD small carousel

var nadia_recommend_goods_rwd = [];
var dialog, dialogOverlay, dialogCloseButton, dialogOkButton;
var triggeringElement;

window.addEventListener('DOMContentLoaded', function(e) {
  dialog = document.querySelector('.dialog');
  dialogOverlay = dialog.querySelector('.overlay');


  $('.nadia_recommend_goods_rwd').slick({
    slidesToShow: 2,
    prevArrow: '<button class="previous-button_rwd is-control">' +
               '  <img src="./svg/chevron-left.svg" aria-hidden="true">' +
              //  '  <span class="sr-only">Previous slide</span>' +
               '</button>',
    nextArrow: '<button class="next-button_rwd is-control">' +
               '  <img src="./svg/chevron-right.svg" aria-hidden="true">' +
              //  '  <span class="sr-only">Next slide</span>' +
               '</button>',
  });

});



// rwd 側拉nav
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle');
    // navClose = document.getElementById('nav-close'),
    // hamburger = document.getElementsByClassName('hamburger_box')
    // hamburger.onclick = function() {
    //     hamburger.classList.toggle('active');
    // }
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu'),
            navToggle.classList.toggle('active');
    });
};

// if (navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }

// footer plus show and hide
$("#footer-aboutus").click(function() {
    $(".footer_aboutus").slideToggle("footer_show");
    $(".footer_info").slideUp("footer_show");
    $(".footer_faq").slideUp("footer_show");
    $("#footer-aboutus").slideUp("footer_plus_none");
    $("#footer-aboutus-close").slideDown("footer_show");
    $("#footer-info").slideDown("footer_plus_none");
    $("#footer-info-close").slideUp("footer_show");
    $("#footer-faq").slideDown("footer_plus_none");
    $("#footer-faq-close").slideUp("footer_show");
});
$("#footer-aboutus-close").click(function() {
    $(".footer_aboutus").slideUp("footer_show");
    $("#footer-aboutus").slideDown("footer_plus_none");
    $("#footer-aboutus-close").slideUp("footer_show");
});
$("#footer-info").click(function() {
    $(".footer_aboutus").slideUp("footer_show");
    $(".footer_info").slideDown("footer_show");
    $(".footer_faq").slideUp("footer_show");
    $("#footer-aboutus").slideDown("footer_plus_none");
    $("#footer-aboutus-close").slideUp("footer_show");
    $("#footer-info").slideUp("footer_plus_none");
    $("#footer-info-close").slideDown("footer_show");
    $("#footer-faq").slideDown("footer_plus_none");
    $("#footer-faq-close").slideUp("footer_show");
});
$("#footer-info-close").click(function() {
    $(".footer_info").slideUp("footer_show");
    $("#footer-info").slideDown("footer_plus_none");
    $("#footer-info-close").slideUp("footer_show");
});
$("#footer-faq").click(function() {
    $(".footer_aboutus").slideUp("footer_show");
    $(".footer_info").slideUp("footer_show");
    $(".footer_faq").slideDown("footer_show");
    $("#footer-aboutus").slideDown("footer_plus_none");
    $("#footer-aboutus-close").slideUp("footer_show");
    $("#footer-info").slideDown("footer_plus_none");
    $("#footer-info-close").slideUp("footer_show");
    $("#footer-faq").slideUp("footer_plus_none");
    $("#footer-faq-close").slideDown("footer_show");
});
$("#footer-faq-close").click(function() {
    $(".footer_faq").slideUp("footer_show");
    $("#footer-faq").slideDown("footer_plus_none");
    $("#footer-faq-close").slideUp("footer_show");
});



// Web sizechart lightbox

$('.sizebutton').click(function(event) {
    $('.sizechart_lightbox_container').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.sizechart_lightbox_close').click(function(event) {
    $('.sizechart_lightbox_container').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.lightbox_background').click(function(event) {
    $('.sizechart_lightbox_container').toggleClass('open');
});



// RWD sizechart lightbox

$('.sizebutton').click(function(event) {
    $('.rwd_sizechart_lightbox_container').toggleClass('open');
    // $('.lightbox_background').toggleClass('open');
});
$('.rwd_sizechart_lightbox_close').click(function(event) {
    $('.rwd_sizechart_lightbox_container').toggleClass('open');
    // $('.lightbox_background').toggleClass('open');
});
// $('.lightbox_background').click(function(event) {
//     $('.rwd_sizechart_lightbox_container').toggleClass('open');
// });



// Web moreinfo lightbox

$('.moreinfobutton').click(function(event) {
    $('.moreinfo_lightbox_container').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.moreinfo_lightbox_close').click(function(event) {
    $('.moreinfo_lightbox_container').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.lightbox_background').click(function(event) {
    $('.moreinfo_lightbox_container').toggleClass('open');
});



// RWD moreinfo lightbox

$('.moreinfobutton').click(function(event) {
    $('.rwd_moreinfo_lightbox_container').toggleClass('open');
    // $('.lightbox_background').toggleClass('open');
});
$('.rwd_moreinfo_lightbox_close').click(function(event) {
    $('.rwd_moreinfo_lightbox_container').toggleClass('open');
    // $('.lightbox_background').toggleClass('open');
});
// $('.lightbox_background').click(function(event) {
//     $('.moreinfo_lightbox_container').toggleClass('open');
// });



// Web addtocart lightbox

$('.addtocartbutton').click(function(event) {
    $('.nadia_addtocart').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.addtocart_lightbox_close').click(function(event) {
    $('.nadia_addtocart').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.lightbox_background').click(function(event) {
    $('.nadia_addtocart').toggleClass('open');
});



// Web addtocart - login lightbox

$('.addtocartcheckbutton').click(function(event) {
    $('.nadia_login').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.nadia_login_close').click(function(event) {
    $('.nadia_login').toggleClass('open');
    $('.lightbox_background').toggleClass('open');
});
$('.lightbox_background').click(function(event) {
    $('.nadia_addtocart').toggleClass('open');
});



// click size button

$(function () {
        var collection = $(".sizebtn");
        $.each(collection, function () {
            $(this).addClass("start");
        });
    });
    function dj(dom) {
        var collection = $(".sizebtn");
        $.each(collection, function () {
            $(this).removeClass("sizebtnafter");
            $(this).addClass("sizebtnbefore");
        });
        $(dom).removeClass("sizebtnbefore");
        $(dom).addClass("sizebtnafter");
    }


// cart qty minus & plus

$(function(){
	var t = $("#cart_qty");
	$("#cart_plus").click(function(){		
		t.val(parseInt(t.val())+1)
	});
	$("#cart_minus").click(function(){
        if (parseInt(t.val())-1<1) return false;
		t.val(parseInt(t.val())-1)
	});
	
});