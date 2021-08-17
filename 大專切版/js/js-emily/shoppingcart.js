//step2控制表單









// 購物車的分頁

$(".tab").each(function(index) {
    $(this).click(function(e) {
        triggletab();
        triigletabcontent();
        $(this).toggleClass("active");
        $(".tab-c")
            .eq(index)
            .toggleClass("active");
    });
});
// to remove all tab headers
function triggletab() {
    $(".tab").each(function() {
        $(this).removeClass("active");
    });
}

// triggle the tab content
function triigletabcontent() {
    $(".tab-c").each(function() {
        $(this).removeClass("active");
    });
}



//增加商品數量
$('#btn_plus').click(function(event) {
    let input_qty = $('input#number');
    input_qty.val(parseInt(input_qty.val()) + 1);
});

//減少商品數量
$('#btn_minus').click(function(event) {
    let input_qty = $('input#number');
    if (parseInt(input_qty.val()) - 1 < 1) return false;
    input_qty.val(parseInt(input_qty.val()) - 1);
});


//信用卡


$('.input-cart-number').on('keyup change', function() {
    $t = $(this);

    if ($t.val().length > 3) {
        $t.next().focus();
    }

    var card_number = '';
    $('.input-cart-number').each(function() {
        card_number += $(this).val() + ' ';
        if ($(this).val().length == 4) {
            $(this).next().focus();
        }
    })

    $('.credit-card-box .number').html(card_number);
});

$('#card-holder').on('keyup change', function() {
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-holder').on('keyup change', function() {
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function() {
    m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#card-expiration-year').val().substr(2, 2);
    $('.card-expiration-date div').html(m + '/' + y);
})

$('#card-ccv').on('focus', function() {
    $('.credit-card-box').addClass('hover');
}).on('blur', function() {
    $('.credit-card-box').removeClass('hover');
}).on('keyup change', function() {
    $('.ccv div').html($(this).val());
});


/*--------------------
CodePen Tile Preview
--------------------*/
setTimeout(function() {
    $('#card-ccv').focus().delay(1000).queue(function() {
        $(this).blur().dequeue();
    });
}, 500);

/*function getCreditCardType(accountNumber) {
  if (/^5[1-5]/.test(accountNumber)) {
    result = 'mastercard';
  } else if (/^4/.test(accountNumber)) {
    result = 'visa';
  } else if ( /^(5018|5020|5038|6304|6759|676[1-3])/.test(accountNumber)) {
    result = 'maestro';
  } else {
    result = 'unknown'
  }
  return result;
}
 
$('#card-number').change(function(){
  console.log(getCreditCardType($(this).val()));
})*/








$('input[type="radio"]').on("mousedown", function() {
    if (this.checked) {
        $(this).one("click", function() {
            this.checked = false;
        });
    }
});






//auto input

$('#radio-member').click(function() {
    console.log('hi')
    $('#p1').val('小童童');
    $('#t1').val('0999888666');
    $('#e1').val('helloworld@hotmail.com');
})

$('#radio-member-receiver').click(function() {
    console.log('yo')
    $('#p2').val('小童童');
    $('#t2').val('0999888666');
    $('#e2').val('helloworld@hotmail.com');

})

$('#radio-member-receiver3').click(function() {
    console.log('ho')
    $('#p3').val('小童童');
    $('#t3').val('0999888666');
    $('#e3').val('helloworld@hotmail.com');
    $('#address').val('復興南路一段390號2樓');
    $(".county").find('option[value="台北市"]').prop("selected", true);
    $(".district").find('option[value="大安區"]').prop("selected", true);
})




//檢查是否輸入








new TwCitySelector();

new TwCitySelector({
    el: ".my-selector-c",
    elCounty: ".county", // 在 el 裡查找 dom
    elDistrict: ".district", // 在 el 裡查找 dom
    elZipcode: ".zipcode" // 在 el 裡查找 dom
});



/*
          1. 取消与当前控件name 相同的所有控件的选中状态
          2. 选中当前控件
          3. 如果当前控件在点击前是选中状态，则点击后取消其选中状态
      */
$("input:radio").click(function() {

    $(this).attr('checked', true)
    var domName = $(this).attr('name'); //获取当前单选框控件name 属性值 
    var checkedState = $(this).attr('checked'); //记录当前选中状态
    $("input:radio[name='" + domName + "']").attr('checked', false); //1.

    $(this).attr('checked', true); //2.
    if (checkedState == 'checked') {
        $(this).attr('checked', false); //3.
    }

});






// 選了超商取貨
$(document).ready(function() {

    $("#radio-1").click(function() {
        $("#7-11shop").show();
    });

    $("#radio-1").click(function() {
        $("#buymen").show();
    });

    $("#radio-1").click(function() {
        $("#takemen").show();
    });


    $("#radio-1").click(function() {
        $("#couponway").show();
    });

    $("#radio-1").click(function() {
        $("#yourpayway").show();
    });

    // 選了來店取貨


    $("#radio-3").click(function() {
        $("#buymen").show();
    });

    $("#radio-3").click(function() {
        $("#takemen").show();
    });


    $("#radio-3").click(function() {
        $("#couponway").show();
    });

    $("#radio-3").click(function() {
        $("#yourpayway").show();
    });
});


$(document).ready(function() {

    $("#radio-credit").click(function() {
        $("#creditcardinfo").show();
    });

});


$(document).ready(function() {

    $("#radio-atm").click(function() {
        $("#creditcardinfo").hide();
    });

});
// 選了宅配
$(document).ready(function() {
    $("#radio-2").click(function() {
        $("#buymen").show();
    });

    $("#radio-2").click(function() {
        $("#7-11shop").hide();
    });

    $("#radio-2").click(function() {
        $("#takemen").hide();
    });

    $("#radio-2").click(function() {
        $("#homemen").show();
    });

    $("#radio-2").click(function() {
        $("#couponway").show();
    });

    $("#radio-2").click(function() {
        $("#yourpayway").show();
    });

});

//優惠券

$(document).ready(function() {
    $("#radio-coupon").click(function() {

        if ($('#radio-coupon').prop('checked', true)) {
            $(".coupon_detail").show();

        } else {
            $(".coupon_detail").hide();
        }

    });
});