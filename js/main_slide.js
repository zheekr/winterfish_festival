$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows: true,
        dots : true,
        autoplay : true,
        autoplaySpeed : 2000,
        pauseOnHover : false,
        fade:true
      });
})