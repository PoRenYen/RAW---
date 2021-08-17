<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>更改密碼</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./大專切版/css/main.css">
    <link rel="stylesheet" href="./大專切版/css/css-yen/login_yen.css">

</head>

<body>
    <?php require_once 'tpl/head.inc.php' ?>

    <!-- content -->

    <div class="tabs-container">
        <div class="change_pasword_h_box">
            <h1 class="change_pasword_h">更改密碼</h1>
        </div>

        <div class="loginbox">
            <div class="singUpinput_box">
                <p class="singUp_input_p" id="change_password_singUp_input_p">密碼</p>
            </div>
            <div class="passwordbox" style="margin-bottom: 32px;">
                <input type="password" class="codeinputwrap" value="" id="myInput" placeholder="輸入密碼">
                <div class="open_eye">
                    <input type="image" onclick="myFunction()" src="./大專切版/svg/eye-off.svg" id="password_open_eye_svg">
                </div>
            </div>
        </div>

        <div class="loginbox">
            <div class="singUpinput_box">
                <p class="singUp_input_p" id="change_password_singUp_input_p">密碼</p>
            </div>
            <div class="passwordbox" style="margin-bottom: 32px;">
                <input type="password" class="codeinputwrap" value="" id="myInput2" placeholder="輸入密碼">
                <div class="open_eye">
                    <input type="image" onclick="myFunction2()" src="./大專切版/svg/eye-off.svg" id="password_open_eye_svg2">
                </div>
            </div>
        </div>

        <div class="loginbox_btn">

            <a class="login_btn" href="#" id="change_password_sure_btn">確定</a>

        </div>

    </div>

    <?php require_once 'tpl/foot.inc.php' ?>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./大專切版/js/main.js"></script>
    <script src="./大專切版/js/js-yen/singup_login.js"></script>
    <script src="https://kit.fontawesome.com/f56e5ae7a8.js" crossorigin="anonymous"></script>
</body>

</html>