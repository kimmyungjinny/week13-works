

  $(document).ready(function() {
    var $imgList = $('.sqrs>div');
    var nImgCount = $imgList.children().length;
    var nDuration = 1000;
    var bAuto = true;
    var nIndex = 0;

  	dd();
    ee1();
    uu();
    gg();
    ee2();
    ll();


  
    if(bAuto == true) {
    setInterval(autoSlide, nDuration);
}
function autoSlide(){
  var next = (++nIndex% nImgCount);
  $($imgList.get(next-1)).fadeOut(0);
  $($imgList.get(next)).fadeIn(0);
}
  });  

  

  function dd(){
  	$('.d')
  	.animate({
  		top: '-=35px',
      
  	}, 1200, "", function(){
  		$(this)
  		.animate({
  			top: '+=35px',
        

  		}, 1200, "", function(){
  		dd();
  	});
  	});
  } 
  function ee2(){
    $('.e2')
    .animate({
      
      top: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
        
        top: '+=35px'

      }, 1200, "", function(){
      ee2();
    });
    });
  } 
  function uu(){
    $('.u')
    .animate({
      
      top: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
        
        top: '+=35px'

      }, 1200, "", function(){
      uu();
    });
    });
  } 
   function gg(){
  	$('.g')
  	.animate({
  		
  		left: '-=35px'
  	}, 1200, "", function(){
  		$(this)
  		.animate({
  			
  			left: '+=35px'

  		}, 1200, "", function(){
  		gg();
  	});
  	});
  } 
  function ee1(){
    $('.e1')
    .animate({
       
      left: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
        
        left: '+=35px'

      }, 1200, "", function(){
      ee1();
    });
    });
  } 
  function ll(){
    $('.l')
    .animate({
      
      left: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
       
        left: '+=35px'

      }, 1200, "", function(){
      ll();
    });
    });
  } 

