var index = 0;
var li = $(".banner ul li");
var img = $(".music .m_img img");
var text = $(".music .m_text");
var prev = $(".music .m_btn .m_prev");
var play = $(".music .m_btn .m_play");
var next = $(".music .m_btn .m_next");
var mp3 = $(".music .m_mp3");
var flag = false;
var close = true;

li.click(function(){
    index = $(this).index();
    show();
});

function show(){
    change_bg(index+1);
    change_img_text(index+1);
    change_btn_title();
    img_rotate();
    play_mp3();

}
//更换背景
function change_bg(idx){
    $("body").css({
        "background": "url(img/" + idx + "_bg.jpg) no-repeat center top",
        "background-size": "cover"
    });
}
//更换播放器图片、文本
function change_img_text(idx){
    img.attr("src","img/" + idx + ".jpg");
    text.html(li.eq(index).attr("title"));
}
//更换播放按钮及title为暂停
function change_btn_title(){
    play.removeClass("m_play");
    play.addClass("m_pause");
    play.attr("title","暂停");
}
//图片旋转
function img_rotate(){
    li.children().removeClass("img_rotate");
    li.eq(index).children().addClass("img_rotate");
}
//播放歌曲
function play_mp3(){
    mp3.attr("src",li.eq(index).attr("datasrc"));
    mp3.get(0).play();
    flag = true;
}
play.click(function(){
    if(flag){
        mp3.get(0).pause();//暂停歌曲
        li.eq(index).children().removeClass("img_rotate");//移除图片旋转
        play.removeClass("m_pause").addClass("m_play").attr("title","播放");//暂停按钮更换为播放，title变换为播放
        flag = false;
    }else{
        mp3.get(0).play();
        li.eq(index).children().addClass("img_rotate");
        play.removeClass("m_play").addClass("m_pause").attr("title","暂停");
        flag = true;
        change_bg(index+1);
    }
});
//上一首
prev.click(function(){
    index--;
    if(0>index){
        index = li.length - 1;
    }
    show();
});
//下一首
next.click(function(){
    index++;
    if(index>li.length-1){
        index = 0;
    }
    show();
})
// 播放器隐藏与显示
$(".m_close").click(function(){
    if(close){
        $(this).addClass("m_open");
        $(".music").animate({"left":"-475px"},800);
        close = false;
    }else{
        $(this).removeClass("m_open");
        $(".music").animate({"left":"0px"},800);
        close = true;
    }
})