//  登入/註冊切換
$(".tab").each(function (index) {
    $(this).click(function (e) {
        triggletab();
        triigletabcontent();
        $(this).toggleClass("active");
        $(".tab-c")
            .eq(index)
            .toggleClass("active");
    });
});
//to remove all tab headers
function triggletab() {
    $(".tab").each(function () {
        $(this).removeClass("active");
    });
}

//triggle the tab content
function triigletabcontent() {
    $(".tab-c").each(function () {
        $(this).removeClass("active");
    });
}


// 密碼欄 明碼(睜眼)/暗碼(閉眼)
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    var a = document.getElementById("password_open_eye_svg");
    if (a.src.endsWith('eye.svg') == true)  //Comparison
    {
        a.src = "./大專切版/svg/eye-off.svg"; //assignment  

    } else if (a.src.endsWith('eye-off.svg') == true) {
        a.src = "./大專切版/svg/eye.svg";

    }
}
function myFunction2() {
    var y = document.getElementById("myInput2");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }

    var b = document.getElementById("password_open_eye_svg2");
    if (b.src.endsWith('eye.svg') == true)  //Comparison
    {
        b.src = "./大專切版/svg/eye-off.svg"; //assignment  

    } else if (b.src.endsWith('eye-off.svg') == true) {
        b.src = "./大專切版/svg/eye.svg";

    }
}
function myFunction3() {
    var z = document.getElementById("myInput3");
    if (z.type === "password") {
        z.type = "text";
    } else {
        z.type = "password";
    }

    var c = document.getElementById("password_open_eye_svg3");
    if (c.src.endsWith('eye.svg') == true)  //Comparison
    {
        c.src = "./大專切版/svg/eye-off.svg"; //assignment  

    } else if (c.src.endsWith('eye-off.svg') == true) {
        c.src = "./大專切版/svg/eye.svg";

    }
}