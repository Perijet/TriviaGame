var Trivia = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
};

$(document).ready(function(){
	$('.wella1, .wella2, .wella3, .wella4').addClass('hoverOut');
	$('button').addClass('hoverOut');

	$('button').hover(function(){
		$('button').addClass('hoverIn').removeClass('hoverOut');
	}, function(){
		$('button').removeClass('hoverIn').addClass('hoverOut');
	});

	$('.wella1').hover(function(){
		$('.wella1').addClass('hoverIn').removeClass('hoverOut');
	}, function(){
		$('.wella1').removeClass('hoverIn').addClass('hoverOut');
	});

	$('.wella2').hover(function(){
		$('.wella2').addClass('hoverIn').removeClass('hoverOut');
	}, function(){
		$('.wella2').removeClass('hoverIn').addClass('hoverOut');
	});

	$('.wella3').hover(function(){
		$('.wella3').addClass('hoverIn').removeClass('hoverOut');
	}, function(){
		$('.wella3').removeClass('hoverIn').addClass('hoverOut');
	});

	$('.wella4').hover(function(){
		$('.wella4').addClass('hoverIn').removeClass('hoverOut');
	}, function(){
		$('.wella4').removeClass('hoverIn').addClass('hoverOut');
	});

	$('.well-sm').click(function(){
		
	});
start();
});

function start(){
	$('.start').append('<button type="button" id="startButton">START</button>');
	$('.wellq1').hide();
	$('.wella1').hide();
	$('.wella2').hide();
	$('.wella3').hide();
	$('.wella4').hide();
	$('#startButton').click(function(){
		question1();
		console.log('start');
	$('.wellq1').show();
	$('.wella1').show();
	$('.wella2').show();
	$('.wella3').show();
	$('.wella4').show();
	$('#startButton').hide();
	});
}

function question1(){
	$('.wellq1').empty().append('<div>Which of the following type of variable is visible everywhere in your JavaScript code?</div>');
	$('.wella1').empty().append('<button class="right" value="yes">Global variable</button>');
	$('.wella2').empty().append('<button value="no">Local variable</button>');
	$('.wella3').empty().append('<button value="no">Both of the above</button>');
	$('.wella4').empty().append('<button value="no">None of the above</button>');
	
	
$('button').click(function(){
	var x = $(this);
	if(x.val() === "yes"){
		//correct++;
		console.log(this.correct);
		$('.answer').empty().append('Correct!!!');
	}
	else if(x.val() === 'no'){
		//incorrect++;
		console.log(this.incorrect);
		$('.answer').empty().append('Nope!<br>The correct answer was: ' + $('button.right').text());	
	}
	else{
		//unanswered++;
		console.log(this.unanswered);
	}
});



}

