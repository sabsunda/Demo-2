
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
    
    /*
        Form
    */
	
	$.get("rest/question", function(data){
		var rowTemplate = $("#q-table-template table").html();
		console.log(rowTemplate);
		for(index in data){
			var row = rowTemplate.replace("q_id",data[index].id)
						.replace("title",data[index].title)
						.replace("no-of-views",data[index].views)
			$("#q-table").append(row);
		}
	});
	
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
		$.ajax({
			url: "rest/signup",
			data: {},
			error: 	function(xhr, statusText, errorThrown){
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
					}
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
    
	
	// Login
	$('.login-form').on('submit', function(e) {
       	var parent_fieldset = $(this).parents('fieldset');
		var emptyCredential = false;
    	
		$(this).find('input[type="text"], input[type="password"]').each(function() {
			if( $(this).val() == "" ) {
				e.preventDefault();
    			$(this).addClass('input-error');
				emptyCredential = true;
    		}
		});
    	
		if(emptyCredential == false) {
			var email = $("#form-email").val();
			var password = $("#form-password").val();
			
			/*$.ajax({
				url: "/rest/signup",
				beforeSend: function (xhr) {
					xhr.setRequestHeader ("Authorization", "Basic " + btoa(email + ":" + password));
				},
				error: 	function(xhr, statusText, errorThrown){
					e.preventDefault();
					$(this).addClass('input-error');
				},
				success: function(){
					$(this).removeClass('input-error');
				}
			});*/
			
			/*$.ajax({
				xhrFields: {
					withCredentials: true
				},
				headers: {
					'Authorization': 'Basic ' + btoa(email + ":" + password)
				},
				url: "rest/signup",
				error: 	function(xhr, statusText, errorThrown){
					e.preventDefault();
					$(this).addClass('input-error');
				}
			});*/
			
			
			if (typeof XMLHttpRequest == "undefined"){
				XMLHttpRequest = function () {
					try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
					  catch (e) {}
					try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
					  catch (e) {}
					try { return new ActiveXObject("Msxml2.XMLHTTP"); }
					  catch (e) {}
					//Microsoft.XMLHTTP points to Msxml2.XMLHTTP.3.0 and is redundant
					throw new Error("This browser does not support XMLHttpRequest.");
				};
			}
			
			// using XMLHttpRequest
			var xhr = new XMLHttpRequest();
			
			xhr.open("GET", "rest/signup", false);
			xhr.withCredentials = true;
			xhr.setRequestHeader("Authorization", 'Basic ' + btoa(email + ":" + password));
			xhr.send();
		
			if(xhr.status == 200)  {
				$(this).removeClass('input-error');
			}else {
				$(".login-error-info").fadeIn();
				$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
					e.preventDefault();
					$(this).addClass('input-error');
				});
			}
		}
    	
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

	/*$('table :button').on('click', function() {	
		$(".table-responsive").fadeOut(400, function(){
	
		});
	});*/
	
	/*$(document).on("keyup", function (event) {
        if (event.which == 13) {
            $("#clicking").trigger('click');
        }
    });*/
	
    
    
});
	