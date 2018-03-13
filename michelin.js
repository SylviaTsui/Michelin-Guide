'user,strict'
$(()=>{
  $(document).ready(()=>{
    $('.cover-wrapper').slick({
       arrows:false,
       dots:true,
       autoplay:true,
       adaptiveHeight:true,
       autoplaySpeed:1500
    })
    $(window).resize(()=>{
      if (window.innerWidth<848){

        $('.cover-wrapper').slick('unslick')
      }else{
        $('.cover-wrapper').slick({
           arrows:false,
           dots:true,
           autoplay:true,
           adaptiveHeight:true,
           autoplaySpeed:1500
        })
      }
    })



  })
})
