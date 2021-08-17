$(".sidebar_title h2").click(function (event) {
    $(this).toggleClass("active");
    $(this).siblings(".sidebar_content").slideToggle();
    $(this).toggleClass("sidebar_sort_close");
    $(this).toggleClass("sidebar_category_close");
});

$(".gender_title").click(function (event) {
    $(this).toggleClass("active");
    $(this).slideToggle();
    $(this).parent().find(".sidebar_title").slideToggle();
    $(this).parent().siblings().find(".gender_title").slideDown();
    $(this).parent().siblings().find(".sidebar_title").slideUp();
});


$(".color_circle").click(function () {
    $(this).addClass("color_selected");
    $(this).siblings().removeClass("color_selected");
})


// RWD 篩選欄
$(".mobile_title").click(function (event) {
    $(this).toggleClass("active");
    $(this).siblings(".product_sidebar").slideToggle();
    $(this).toggleClass("mobile_title_close");
    // $(this).toggleClass("sidebar_underline");

});