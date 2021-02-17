    
    // AOS
    AOS.init();

  var typed = new Typed('#typed', {
    strings: ['你好，我是李育瑄', '我是前端工程師'],
    typeSpeed: 150,
    loop: true,
    loopCount: Infinity,
    backDelay: 3000
  });

    // 回到頂端 top 按鈕
  $('#go_top_page').on('click', function () {
    $('html,body').animate({
        scrollTop: 0,
    }, 700)
  });

    $('#go_top_page').css({ display: 'none' })
    let nowloc = 0
    $(window).on('scroll', function () {
      nowloc = $(window).scrollTop()
      if (nowloc > 250) {
        $('#go_top_page').fadeIn(1000)
        // 改變 CSS 的跳動
        $('#go_top_page').css({ 'animation-iteration-count': 3 })
      } else {
        $('#go_top_page').fadeOut(1000)
        $('#go_top_page').css({ 'animation-iteration-count': 'none' })
      }
      if ($(window).width() > 576 && nowloc <= 99) {
        $('#navbar').css({
          background: 'transparent'
        })
        $('.navbar-brand').css({
          color: 'white'
        })
      } else {
        $('#navbar').css({
          background: 'var(--color4)'
        })
      }
    })