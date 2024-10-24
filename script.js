
//windowのサイズ取得
let window_height, window_width = 0
function catchWindowSize() {
    window_height = window.innerHeight;
    window_width = window.innerWidth;

    if (window_height * window_width < 1000000){
        $("body").css({ "font-size": "70%"});
    }else{
        $("body").css({ "font-size": "100%"});
    }
}
window.onresize = catchWindowSize;
catchWindowSize();


//スライドショー
$(function () {
    $(".slideshow-fade li").css({ "position": "relative", "overflow": "hidden" });
    $(".slideshow-fade li").hide().css({ "position": "absolute", "top": 0, "left": 0 });
    $(".slideshow-fade li:first").addClass("fade").show();
    setInterval(function () {
        var $active = $(".slideshow-fade li.fade");
        var $next = $active.next("li").length ? $active.next("li") : $(".slideshow-fade li:first");
        $active.fadeOut(1000).removeClass("fade");
        $next.fadeIn(1000).addClass("fade");
    }, 8000);
});

//最初の背景移動
$(function () {
    $(window).on('load scroll', function () {
        var scrollPos = $(this).scrollTop();
        $(".slideshow-fade").css({ "top": String(32 - scrollPos / 5) + "px" });
    });
});

//タイトルのアニメーション発火用
var $target = $('.anim')
var anim = function () {
    $target.addClass('is-animated');
}
anim();

//スクロールに合わせたアニメーション
$(function () {
    $(window).on('load scroll', function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > window_height * 0.8) {
            $("#self_introducion_title").addClass("fadein")
        }
        if (scrollPos > window_height * 0.8) {
            $("#self_introduction_plant").addClass("fadein")
            $("#self_introduction_programming").addClass("fadein delay-time1")
            $("#self_introduction_onsen").addClass("fadein delay-time2")
            $("#self_introduction_3dpuzzle").addClass("fadein delay-time3")
            $("#self_introduction_book").addClass("fadein delay-time4")

        }

        if (scrollPos > window_height * 2.1) {
            $("#backgrounds").addClass("fadein")
        }

        if (scrollPos > window_height * 2.7) {
            $("#impressions").addClass("extend")
        }

        
        if (scrollPos > window_height * 2.9) {
            $("#impressions h2:first-of-type").addClass("fadein")
            $("#impressions h3:first-of-type").addClass("fadein delay-time2")
        }
        if (scrollPos > window_height * 3.2) {
            $("#impressions h2:last-of-type").addClass("fadein")
            $("#impressions h3:last-of-type").addClass("fadein delay-time2")
        }
        if (scrollPos > window_height * 3.8) {
            //$("#backgrounds").css({ "top": "10p"});
            $("#backgrounds").css({ "transform": "translate(-50%," + String(-(scrollPos - window_height * 4) / 20)+"vh)"});
            $("#impressions h3:last-of-type").addClass("fadein delay-time2")
        }else{
            $("#backgrounds").css()
        }


    });
});

