<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>忘記密碼</title>
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
        <div class="yen-row ">
            <div class="forget_password_h_box">
                <h1 class="forget_password_h">忘記密碼</h1>
            </div>

            <div class="loginbox">
                <div class="forget_password_p_box">
                    <p class="forget_password_p">信箱</p>
                </div>
                <div class="passwordbox">
                    <input type="text" class="mailinputwrap" placeholder="請輸入信箱">
                </div>
            </div>
            <div class="forget_password_p_box2">
                <p class="forget_password_p2">我們將發送更改密碼信件到此信箱</p>
            </div>
            <div class="loginbox_forget_password_btn">

                <a class="login_btn" href="#" id="loginbox_forget_password_BackToLastPage_btn">返回上一頁</a>
                <a class="login_btn" href="#" id="loginbox_forget_password_sure_btn">確認</a>

            </div>
        </div>
    </div>

    <?php require_once 'tpl/foot.inc.php' ?>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./大專切版/js/main.js"></script>

    <script src="https://kit.fontawesome.com/f56e5ae7a8.js" crossorigin="anonymous"></script>

</body>

</html>