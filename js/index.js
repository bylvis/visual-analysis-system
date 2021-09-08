$(function(){
    $('.left_tab a').click(function(){
        var index = $(this).index()
        $('.chat').eq(index).show().siblings().hide();
    })
        
})