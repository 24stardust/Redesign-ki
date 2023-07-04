$(document).ready(function(){

    // 메뉴 화살표 돌아가는 거 찾아서 넣기
    // $('.mb-menu>li').click(function(){
    // })


    $('.mobile-burger').click(()=>{
        $('.mb-nav').slideToggle(200);
        $('.mb-menu > li').height(70);
    })

    $('.depth1 > li').mouseenter(function(){
        $(this).find('.depth2').stop().slideDown(300); //0.3초
    })
    $('.depth1 > li').mouseleave(function(){
        $(this).find('.depth2').stop().slideUp(300); //0.3초
    })

    

    const mb_mainmenu = $('.mb-mainmenu')
    const mb_submenu = $('.mb-submenu')
    let mb_submenu_height = []
    $.each(mb_submenu, function(index){
        let count = $(this).find('li').length;
        console.log(count)
        mb_submenu_height[index]= 55*count+20;
    })

    let mb_li = $('.mb-menu > li')
    $.each(mb_mainmenu, function(index){
        $(this).click(function(e){
            e.preventDefault();
            $(this).toggleClass('mb-mainmenu-open')
            let active = $(this).hasClass('mb-mainmenu-open')
            if(active){
                let temp = mb_submenu_height[index]
                mb_li.eq(index).height(temp+55)
                // mb_li.eq(index).siblings().height(70)
            }else {
                mb_li.eq(index).height(70)
            }
        })
    })

})