
jQuery(document).ready(function() {
	
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*var xmlhttp;	   
    // put more code here in case you are concerned about browsers that do not provide XMLHttpRequest object directly
    xmlhttp = new XMLHttpRequest();

    var url = "http://localhost:8080/CMADWebApp/rest/signup" + empno.value;*/
    
	/*
        Form
    */
	
	$('.btn-questions').on('click', function() {
		
		if($('.login-form fieldset:first-child').is(':visible')){
			$('.login-form fieldset:first-child').fadeOut(400, function(){
				if($('.text').is(':visible')) {
					$('.text').fadeOut(400, function(){
						$(".table-responsive").fadeIn();
					});
				}
				else{
					$(".table-responsive").fadeIn();
				}	
			});
		}
		else{
			var  parent_fieldset = $('.registration-form fieldset:first-child');		
			
			for (var i = 0; i < 2; i++) {
				if(parent_fieldset.is(':visible')) {
					parent_fieldset.fadeOut(400, function() {
						if($('.text').is(':visible')) {
							$('.text').fadeOut(400, function(){
								$(".table-responsive").fadeIn();
							});
						}
						else{
							$(".table-responsive").fadeIn();
						}
						
					});
					
					break;
				}			
				 parent_fieldset =  parent_fieldset.next();
			}
		}	
    });	
	
	$('.btn-ask-question').on('click', function() {
			
		var  parent_fieldset = $('.registration-form fieldset:first-child');
		
		for (var i = 0; i < 2; i++) {
			if(parent_fieldset.is(':visible')) {
				parent_fieldset.fadeOut(400, function() {
					$(".table-responsive").fadeOut(400, function(){
						$('.text').fadeIn('slow');
						$('.login-form fieldset:first-child').fadeIn('slow');	
					})							
				});				
				exit;
			}
			
			 parent_fieldset =  parent_fieldset.next();
		}
		
		$(".table-responsive").fadeOut(400, function(){
			$('.text').fadeIn('slow');
			$('.login-form fieldset:first-child').fadeIn('slow');
		});

	}); 

    $(".btn-signup-page").click(function(){
		/*$('.text').fadeOut();		
		
		$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).next().fadeIn();
    	});*/
		if($('.login-form fieldset:first-child').is(':visible')) {
			$('.login-form fieldset:first-child').fadeOut(400, function(){
				
				if ( $('.text').is(':visible')){
					$('.text').fadeOut(400, function(){
						
						if($(".table-responsive").is(':visible')){
						$(".table-responsive").fadeOut(400, function(){
							$('.registration-form fieldset:first-child').fadeIn();	
						});
						}
						else{
							$('.registration-form fieldset:first-child').fadeIn();	
						}
					});	
				}
				else{
					if($(".table-responsive").is(':visible')){
						$(".table-responsive").fadeOut(400, function(){
							$('.registration-form fieldset:first-child').fadeIn();	
						});
					}
					else{
						$('.registration-form fieldset:first-child').fadeIn();	
					}
				}
			});
		}
		else{
			if ( $('.text').is(':visible')){
				$('.text').fadeOut();	
			}
			if($(".table-responsive").is(':visible')){
				$(".table-responsive").fadeOut(400, function(){
					$('.registration-form fieldset:first-child').fadeIn();	
				});
			}
			else{
				$('.registration-form fieldset:first-child').fadeIn();	
			}
		}
	}); 
	
	$(".btn-login-page").click(function(){

		var  parent_fieldset = $('.registration-form fieldset:first-child');		
		
		for (var i = 0; i < 2; i++) {
			if(parent_fieldset.is(':visible')) {
				parent_fieldset.fadeOut(400, function() {
					if($('.text').is(':visible')) {
						$('.text').fadeOut(400, function(){
							$('.login-form fieldset:first-child').fadeIn('slow');
						});
					}
					else{
						$('.login-form fieldset:first-child').fadeIn('slow');
					}
					
				});
				
				break;
			}			
			 parent_fieldset =  parent_fieldset.next();
		}
		if(i == 2){
			$(".table-responsive").fadeOut(400, function(){			
				$('.login-form fieldset:first-child').fadeIn('slow');
			});	
		}
		
	}); 
	
	// Login
    $('.registration-form .btn-login').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"], input[type="password"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});   	
    	
    });

	// next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });

    
    
});
	