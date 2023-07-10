$(document).ready(function(){


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
})