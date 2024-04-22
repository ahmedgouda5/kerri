const aboutOffset=$("#about").offset().top
$(window).on("scroll",function(){
   if ($(this).scrollTop()>aboutOffset) {
    $(".navbar").addClass("nav-fixed")
    $(".scroll_to_top").fadeIn(500)
   }else{
    $(".navbar").removeClass("nav-fixed")
    $(".scroll_to_top").fadeOut(500)
   }
})

// !!!! scroll_to_top
$(".scroll_to_top").on("click",function (){
   $("html").animate({scrollTop:0},2000,function(){
   })
   }
)


// ^^scroll to section

$(".navbar li a").on("click",function(){
    const offsetSection=$(this).attr("href")
    const scroll_to_section=$(offsetSection).offset().top;
    $("html , body").animate({scrollTop:scroll_to_section},2000)
})