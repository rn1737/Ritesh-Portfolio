 $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle navbar/items script
    $('.items-btn').click(function(){
        $('.navbar .items').toggleClass("active");
        $('.items-btn i').toggleClass("active");
    });
});

// skill section scripts

let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,    
    fill: {gradient: ['#111', '#ffff']} 
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.50
  });
  $(".react .bar").circleProgress({
    value: 0.60 
  });   

  

  