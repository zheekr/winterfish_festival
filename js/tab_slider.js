$('document').ready(function(){
  tabslider();
  
});

function tabslider(){
  //add class 'active-tab' to the first link
  $('.act_nav a').first().addClass("active-tab");

  $('.act_nav a').click(function(){
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
    
    $('.act_nav a').removeClass('active-tab').eq(position).addClass('active-tab');
    
    if(position == 1){
      $('.slide-belt').animate({"left": "-100%"}, 200);
    } else if(position == 2){
      $('.slide-belt').animate({'left': '-200%'}, 200);
    } else {
      $('.slide-belt').animate({'left': '0%'}, 200);
    }
    
    
  });
  
  
}