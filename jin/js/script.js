$(function(){
    $('.nav>ul>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(200)
    })
    $('.nav>ul>li').mouseout(function(){
        $(this).find('.sub').stop().slideUp(200)
    })
})