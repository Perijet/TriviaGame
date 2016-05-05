var correct = 0;
var	incorrect = 0;
var	unanswered = 0;



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
	$('#timeLeft').hide();
	$('#startButton').click(function(){
		question1();
		gameOn();
		console.log('start');
	$('.wellq1').show();
	$('.wella1').show();
	$('.wella2').show();
	$('.wella3').show();
	$('.wella4').show();
	$('#timeLeft').show();
	$('#startButton').hide();
	});
}

var timer = {
  time:20,
  reset: function(){
    timer.time = 0;
    //$('#display').html('00:10');
  },
  start: function(){
    counter = setInterval(timer.count, 1000);
  },
  stop: function(){
    clearInterval(counter);
  },
  count: function(){
    timer.time--;
    if(timer.time === 0){
		timer.stop();
	}
    var converted = timer.timeConverter(timer.time);
    $('#display').html(converted);
    // if(timer.time === 0){
    // 	nextQuestion();
    // }
  },
  timeConverter: function(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

};


function fiveSeconds(){
  question2();
  gameOn();
  timer.reset();
}



function gameOn(){
	timer.start();
	
	$('button').click(function(){	

	var x = $(this);
if(timer.time > 0){
	if(x.val() === "yes"){
		$('.right').addClass('correct');
		$('.wrong').removeClass('incorrect');
		correct++;
		console.log(this.correct);
		$('.answer').empty().append('Correct!!!');
		setTimeout(fiveSeconds, 5000);
		

	}
	else if(x.val() === 'no'){
		$(this).addClass('incorrect').siblings().removeClass('incorrect');
		$('.right').removeClass('correct');
		incorrect++;
		console.log(this.incorrect);
		$('.answer').empty().append('Nope!<br>The correct answer was: ' + $('button.right').text());
		setTimeout(fiveSeconds, 5000);	
	}
	}
	else if (timer.time === 0){
		unanswered++;
		$('.answer').empty().append('Nope!<br>The correct answer was: ' + $('button.right').text());
		console.log(unanswered);
	}
});
}

function questions(){
	

	
}


function question1(){
	//gameOn();
	$('.wellq1').empty().append('<div>Which of the following type of variable is visible everywhere in your JavaScript code?</div>');
	$('.wella1').empty().append('<button class="right" value="yes">Global variable</button>');
	$('.wella2').empty().append('<button class="wrong" value="no">Local variable</button>');
	$('.wella3').empty().append('<button class="wrong" value="no">Both of the above</button>');
	$('.wella4').empty().append('<button class="wrong" value="no">None of the above</button>');



}


function question2(){
	//gameOn();
	$('.wellq1').empty().append('<div>Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?</div>');
	$('.wella1').empty().append('<button class="wrong" value="no">toExponential()</button>');
	$('.wella2').empty().append('<button class="right" value="yes">toFixed()</button>');
	$('.wella3').empty().append('<button class="wrong" value="no">toPrecision()</button>');
	$('.wella4').empty().append('<button class="wrong" value="no">toLocaleString()</button>');
	$('.answer').empty();


}


function question3(){
	//gameOn();
	$('.wellq1').empty().append('<div>Which of the following function of String object returns the character at the specified index?</div>');
	$('.wella1').empty().append('<button class="right" value="yes">charAt()</button>');
	$('.wella2').empty().append('<button class="wrong" value="no">charCodeAt()</button>');
	$('.wella3').empty().append('<button class="wrong" value="no">concat()</button>');
	$('.wella4').empty().append('<button class="wrong" value="no">indexOf()</button>');
	$('.answer').empty();
}

function reStart(){

}

