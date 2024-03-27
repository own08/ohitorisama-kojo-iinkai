//サイトをフェードイン表示
$(function() {
	$('body').fadeIn(1000); //1秒かけてフェードイン！
});

//ハンバーガー開閉
"use strict";
{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-in_hamburger');

    hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    });
}

//ハンバーガー内メニュークリック時ハンバーガー閉じる
$(function () {
    $(".nav_item").click(function () {
    $(".hamburger").removeClass("open");
    $(".nav-in_hamburger").removeClass("open");
    });
    // function
});

//マウスストーカー用のdivを取得
    const stalker = document.getElementById('stalker'); 

 //上記のdivタグをマウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//AOSアニメーション
AOS.init({
    duration: 1000,
    once: true
});