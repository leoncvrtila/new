
/*
==================================================================================================================================================================================
==================================================================================================================================================================================
> 

==================================================================================================================================================================================
==================================================================================================================================================================================
*/



/*
____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


																	**SLIDER**

____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

*/

/*===Slide 1====*/

/*CLICK*/

$(document).ready(function(){
    $("#radio1,#img2-left,#img6-right").click(function(){
		
		document.getElementById('image').setAttribute('style', 'margin-left:0%;');
		document.getElementById('radio1').checked = true;
			
		$( ".slider-text-h2" ).css({"left": "0%","visibility": "visible"});
		$( ".slider-text-p" ).css({"right": "0%","visibility": "visible","z-index": "1"});
		
		$(".slider-text-h2-1,.slider-text-p-1,.slider-text-line").removeAttr('style');
        
    });
});

/*MOUSOVER*/

$(document).ready(function(){
	
    $(".img1").mouseover(function(){
        
		$( ".slider-text-h2" ).css({"left": "0%","visibility": "visible"});	
		$( ".slider-text-p" ).css({"right": "0%","visibility": "visible","z-index": "1"});
		
		$(".slider-text-h2-1,.slider-text-p-1,.slider-text-line").removeAttr('style');
		
    });

});

/*WINDOW LOAD*/

$(document).ready(function(){
	
    $(window).load(function(){
        
		$( ".slider-text-h2" ).css({"left": "0%","visibility": "visible"});	
		$( ".slider-text-p" ).css({"right": "0%","visibility": "visible","z-index": "1"});

		
    });

});

/*===Slide 2====*/

/*CLICK*/

$(document).ready(function(){
    $("#radio2,#img1-right,#img3-left").click(function(){
		
		document.getElementById('image').setAttribute('style', 'margin-left:-100%;');
		document.getElementById('radio2').checked = true;
			
		$( ".slider-text-h2-1" ).css({"top": "0px", "visibility": "visible"});	
		$( ".slider-text-p-1" ).css({"top": "0px", "visibility": "visible"});
		$( ".slider-text-line" ).css({"top": "0px", "visibility": "visible"});
		
		$(".slider-text-h2,.slider-text-p").removeAttr('style');
        
    });
});

/*MOUSOVER*/

$(document).ready(function(){
	
    $(".img2").mouseover(function(){
        
		$( ".slider-text-h2-1" ).css({"top": "0px", "visibility": "visible"});	
		$( ".slider-text-p-1" ).css({"top": "0px", "visibility": "visible"});
		$( ".slider-text-line" ).css({"top": "0px", "visibility": "visible"});
		
		$(".slider-text-h2,.slider-text-p").removeAttr('style');
		
    });

});

/*===Slide 3====*/

/*CLICK*/

$(document).ready(function(){
    $("#radio3,#img2-right,#img4-left").click(function(){
		
		document.getElementById('image').setAttribute('style', 'margin-left:-200%;');
		document.getElementById('radio3').checked = true;
        
		$(".slider-text-h2,.slider-text-p,.slider-text-h2-1,.slider-text-p-1,.slider-text-line").removeAttr('style');
		
    });
});

/*MOUSOVER*/

$(document).ready(function(){
	
    $(".img3").mouseover(function(){
        

		
    });

});

/*===Slide 4====*/

/*CLICK*/

$(document).ready(function(){
    $("#radio4,#img3-right,#img5-left").click(function(){
		
		document.getElementById('image').setAttribute('style', 'margin-left:-300%;');
		document.getElementById('radio4').checked = true;
		
		$(".slider-text-h2,.slider-text-p,.slider-text-h2-1,.slider-text-p-1,.slider-text-line").removeAttr('style');
        
    });
});

/*MOUSOVER*/

$(document).ready(function(){
	
    $(".img4").mouseover(function(){
        

		
    });

});


/*===Slide 5====*/

/*CLICK*/

$(document).ready(function(){
    $("#radio5,#img4-right,#img6-left").click(function(){
		
		document.getElementById('image').setAttribute('style', 'margin-left:-400%;');
		document.getElementById('radio5').checked = true;
		
		$(".slider-text-h2,.slider-text-p,.slider-text-h2-1,.slider-text-p-1,.slider-text-line").removeAttr('style');
        
    });
});

/*MOUSOVER*/

$(document).ready(function(){
	
    $(".img5").mouseover(function(){
        

		
    });

});

/*===Slide 6====*/

/*CLICK*/

$(document).ready(function(){
    $("#radio6,#img5-right,#img1-left").click(function(){
		
		
		document.getElementById('image').setAttribute('style', 'margin-left:-500%;');
		document.getElementById('radio6').checked = true;
		
		$(".slider-text-h2,.slider-text-p,.slider-text-h2-1,.slider-text-p-1,.slider-text-line").removeAttr('style');

        
    });
});

/*MOUSOVER*/

$(document).ready(function(){
	
    $(".img6").mouseover(function(){
        

		
    });

});


/*
____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


																	**SCROLL**

____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

*/

	$(document).ready(function(){
	  $("a").on('click', function(event) {

		if (this.hash !== "") {
		  event.preventDefault();

		  var hash = this.hash;

		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			window.location.hash = hash;
		  });
		} 
	  });
	});
	

/*
____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


																	**CONTACT**

____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

*/



$(document).ready(function(){
    $("#tab1").click(function(){
		
		
		$( "#location" ).css({"top": "0px"});	
		$( "#tab1" ).css({"background": "#525564"});	
		$("#tab2").removeAttr('style');


        
    });
});

$(document).ready(function(){
    $("#tab2").click(function(){
		
		
		$( "#location" ).css({"top": "-600px"});
		$( "#tab2" ).css({"background": "#525564"});	
		$("#tab1").css({"background": "#74828F"});	


        
    });
});



/*
____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


																	**ANIMATIONS**

____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

*/



/*=======FADE=======*/

/*About*/

$(document).ready(function(){
    $("section").mouseover(function(){
		
		
		$( "#about" ).css({"visibility": "visible"}).animate({top:0}, 2000);

        
    });
});

$(document).ready(function(){
    $("#linkAbout").click(function(){
		
		
		$( "#about" ).css({"visibility": "visible", "top": "0px"}).animate({top:0}, 2000);

        
    });
});

/*Team*/


$(document).ready(function(){
    $("#team").mouseover(function(){
		
		
		$( "#team-heading" ).css({"visibility": "visible"}).animate({bottom:0}, 1000);
		$( ".team-feature" ).css({"visibility": "visible"}).animate({bottom:0}, 1000);

        
    });
});

$(document).ready(function(){
    $("#linkTeam").click(function(){
		
		
		$( "#team-heading" ).css({"visibility": "visible"}).animate({bottom:0}, 1000);
		$( ".team-feature" ).css({"visibility": "visible"}).animate({bottom:0}, 1000);

        
    });
});

/*=======JUMP IN=======*/

/*Work*/

$(document).ready(function(){
    $("#work").mouseover(function(){
		
		
		$( "#work-heading" ).animate({left:0}, 700);
		$( "#work-features" ).animate({right:0}, 700);
		

        
    });
});

$(document).ready(function(){
    $("#linkWork").click(function(){
		
		
		$( "#work-heading" ).animate({left:0}, 700);
		$( "#work-features" ).animate({right:0}, 700);

        
    });
});

/*Timeline*/

$(document).ready(function(){
    $("#timeline").mouseover(function(){
		
		$( "#timeline-heading" ).animate({right:0}, 700);
		$( "#timeline-all" ).animate({left:0}, 700);

        
    });
});

$(document).ready(function(){
    $("#linkTimeline").click(function(){
		
		
		$( "#timeline-heading" ).animate({right:0}, 700);
		$( "#timeline-all" ).animate({left:0}, 700);

        
    });
});


/*=======NAV MOUSEOUT=======*/

$(window).scroll(function() {
	
    if ($(this).scrollTop() >= 200) { 
	
		$( "nav" ).css({"background": "#525564"});
		$( "#logo" ).css({"height": "80px", "width": "80px" });
        
		}
	});


$(window).scroll(function() {
	
    if ($(this).scrollTop() < 200) { 
	
		$( "nav,#logo" ).removeAttr('style');
        
		}
	});
























