

	// Validate text box, then add value in text box to list

	$('#add').click(function() {
		if( $('#input_text').val().trim().length == 0 ) {
				// alert("missing");
				$('#error').show();
				$('#input_text').val("");
		} else { 

		$('.items').append('<li class="item"><button class="remove">Mark Complete</button>' + $('#input_text').val() + '</li>');
		$('#input_text').val("");
		$('#error').hide();

		};	
	
	});

	// Change class when user clicks Mark Complete button	

	$('.items').on('click', '.new_item', function() {
		$(this).closest('li').toggleClass('new_item complete');
		$(this).remove();

	});
