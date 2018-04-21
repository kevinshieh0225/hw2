$(document).ready(function(){
  var chap=0;
  var choice=0;
  $("div").hide();
  $(".front_page") .fadeIn(1000);
  /*setInterval(flicker,500);//迴圈閃爍，間隔1秒
  function flicker(){//閃爍函數
        $('#front_page_shine').fadeOut(1000).fadeIn(1000);
  }*/

  $('body').one("click",function(){  
    $('#front_page_shine').stop().css({display:"none"});
    $('#stickright').fadeIn(1000);
    $('#stickleft').fadeIn(1000);
    $('#reel').fadeIn(1000);
    $('#right_down').fadeIn(1000);
    $('#map').fadeIn(1000);
    $('#p0_5').fadeIn(1000);
    console.log(chap)
  });
 //右鍵被碰到
  $('#right_down').mouseenter(function(){
    $(this).hide();
    $('#right_up').show();
  });
  $('#right_up').mouseleave(function(){
    $(this).hide();
    if(chap<4) $('#right_down').show();
  });

  $('#right_up').click(function(){
    chap+=1; 
    console.log(chap);
    if(chap>0) $('#left_down').fadeIn(500)
    a();
  });
 //
 //左鍵觸發
  
  $('#left_down').mouseenter(function(){
    $(this).hide();
    $('#left_up').show();
  });
  $('#left_up').mouseleave(function(){
    $(this).hide();
    $('#left_down').show();
  });
    $('#left_up').click(function(){
     chap-=1; 
     console.log(chap);
     a();
  });
 // 章節改變
  function a(){
    if(chap==1){
      $('#p0_5').fadeOut(500);
		  $('#p21').fadeOut(500);
		  $('#p22').fadeOut(500);
		  $('#p11').fadeIn(500);
		  $('#p12').fadeIn(500);
    }
    else if(chap==2){
		  $('#p31').fadeOut(500);
		  $('#p32').fadeOut(500);
		  $('#p11').fadeOut(500);
		  $('#p12').fadeOut(500);
		  $('#p21').fadeIn(500);
		  $('#p22').fadeIn(500);
	}
	else if(chap==3){
		  $('#p31').fadeIn(500);
		  $('#p32').fadeIn(500);
		  $('#p41').fadeOut(500);
		  $('#p42').fadeOut(500);
		  $('#p21').fadeOut(500);
		  $('#p22').fadeOut(500);
	}
	else if(chap==4){
		  $('#p31').fadeOut(500);
		  $('#p32').fadeOut(500);
		  $('#map').fadeOut(500);
		  $('#right_up').fadeOut(500).hide();
		  $('#right_down').hide();
		  $('#left_down').fadeOut(500).hide();
		  $('#left_up').hide();
		  $('#want').fadeIn(500);
		  $('#no').fadeIn(500);
		  $('#p41').fadeIn(500);
		  $('#p42').fadeIn(500);
	}
  }
  //
  function b(){
	  if(choice==0){
		  $('#try1').fadeOut(500);
		  $('#try2').fadeOut(500);
		  $('#tryup').hide();
		  $('#trydown').hide();
		  $('#want').fadeIn(500);
		  $('#no').fadeIn(500);
		  $('#p41').fadeIn(500);
		  $('#p42').fadeIn(500);
	  }
	  else if(choice==1){
		  $('#try1').show();
		  $('#try2').show();
		  $('#trydown').show();
		  $('#want').hide();
		  $('#no').hide();
		  $('#p41').hide();
		  $('#p42').hide();
	  }
	  else if(choice==2){
		  $('#want').hide();
		  $('#no').hide();
		  $('#p41').hide();
		  $('#p42').hide();
		  $('#win1').show();
		  $('#win2').show();
		  $('#win3').show();
		  $('#windown').show();
	  }
	  else if(choice==3){
		  $('#win1').fadeOut(500);
		  $('#win2').fadeOut(500);
		  $('#win3').fadeOut(500);
		  $('#winup').hide();
		  $('#windown').hide();
		  $('#last1').fadeIn(500);
		  $('#last2').fadeIn(500);
	  }
  }
  //
  $('#want').mouseenter(function(){
    $('#rock1').show();
  });
  $('#want').mouseleave(function(){
    $('#rock1').hide();
  });
  $('#want').click(function(){
    choice=2; 
	console.log(choice);
	b();
  });
  //
  $('#no').mouseenter(function(){
    $('#rock2').show();
  });
  $('#no').mouseleave(function(){
    $('#rock2').hide();
  });
  $('#no').click(function(){
    choice=1; 
	console.log(choice);
	b();
  });
//
  $('#trydown').mouseenter(function(){
    $('#tryup').show();
	$('#trydown').hide();
  });
  $('#tryup').mouseleave(function(){
    $('#tryup').hide();
	$('#trydown').show();
  });
  $('#tryup').click(function(){
    choice=0; 
	console.log(choice);
	b();
  });
//
  $('#windown').mouseenter(function(){
    $('#winup').show();
	$('#windown').hide();
  });
  $('#winup').mouseleave(function(){
    $('#winup').hide();
	$('#windown').show();
  });
  $('#winup').click(function(){
    choice=3; 
	console.log(choice);
	b();
  });
//
//
});
  
