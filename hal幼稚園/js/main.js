var swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },speed: 1000,
  
  }
  new Swiper('.swiper-container', swipeOption);


  
  $('.slider').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 6900,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 4,//スライドを画面に4枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		responsive: [
			{
			  breakpoint: 769,//モニターの横幅が769px以下の見せ方
			  settings: {
			  	slidesToShow: 2,//スライドを画面に2枚見せる
			  }
		  },
		  
	  ]
	});


  ScrollReveal().reveal('.box', { 
    duration: 1480, // アニメーションの完了にかかる時間
    delay: 500, 
    easing: "ease-in",
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
  });
  
  ScrollReveal().reveal('.box2', { 
    duration: 1500, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    distance: '20px',
    origin: 'left'
  });
  ScrollReveal().reveal('.box3', { 
    duration: 1530, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    distance: '100px',
    origin: 'right',
    delay: 200
  });


