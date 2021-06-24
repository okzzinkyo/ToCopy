$(window).ready(function(){

  $(window).scroll(function () {
    
    // header scroll logo height 변화 
    if (
      $(window).scrollTop() >= 55 &&
      $("#in-header").hasClass("fixed") == false
    ) {
      $("#in-header").addClass("fixed");
      $("#logo").addClass("fixed");
      console.log("menu addClass");
    } else if (
      $(window).scrollTop() < 55 &&
      $("#in-header").hasClass("fixed") == true
    ) {
      $("#in-header").removeClass("fixed");
      $("#logo").removeClass("fixed");
      console.log("menu removeClass");
    }
  });
  
  // section1 video shadow animate
  $("#video-shadow").delay(1000).animate({
    opacity: 0.5
  });

  // Section1-des animate
  $("#section1-des > img").delay(1500).animate({
    marginLeft: 0,
    opacity:1
  });
  $("#section1-des > .details").delay(1700).animate({
    marginLeft: 0,
    opacity:1
  });

  // 
  $("#video-food").delay(1700).animate({
    bottom: "-150px",
    opacity:1
  },500);

  // section3 hover conLeft conRight width 변화
  var v_con = $(".con").width();

  $(window).resize(function(){
    v_con = $(".con").width();
  });

  $("#conLeft-wrap").hover(
    function(){
      $(this).css({
        width: 0.8*v_con
      });
      $("#conRight-wrap").css({
        width:0.2*v_con
      });
    },function(){
      $("#conLeft-wrap, #conRight-wrap").css({
        width: 0.5*v_con
      });
    }
  );
  
  $("#conRight-wrap").hover(
    function(){
      $(this).css({
        width: 0.8*v_con
      });
      $("#conLeft-wrap").css({
        width: 0.2*v_con
      })
    },function(){
      $("#conLeft-wrap, #conRight-wrap").css({
        width: 0.5*v_con
      });        
    }
  );
});