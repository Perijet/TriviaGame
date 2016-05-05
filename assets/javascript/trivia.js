var correct = 0;
var	incorrect = 0;
var	unanswered = 0;

function next(){

}

$(document).ready(function(){
	//$('.wella1, .wella2, .wella3, .wella4').addClass('hoverOut');
	$('button').addClass('hoverOut');

	$('button').hover(function(){
		$('button').addClass('hoverIn').removeClass('hoverOut');
	}, function(){
		$('button').removeClass('hoverIn').addClass('hoverOut');
	});

	// $('.wella1').hover(function(){
	// 	$('.wella1').addClass('hoverIn').removeClass('hoverOut');
	// }, function(){
	// 	$('.wella1').removeClass('hoverIn').addClass('hoverOut');
	// });

	// $('.wella2').hover(function(){
	// 	$('.wella2').addClass('hoverIn').removeClass('hoverOut');
	// }, function(){
	// 	$('.wella2').removeClass('hoverIn').addClass('hoverOut');
	// });

	// $('.wella3').hover(function(){
	// 	$('.wella3').addClass('hoverIn').removeClass('hoverOut');
	// }, function(){
	// 	$('.wella3').removeClass('hoverIn').addClass('hoverOut');
	// });

	// $('.wella4').hover(function(){
	// 	$('.wella4').addClass('hoverIn').removeClass('hoverOut');
	// }, function(){
	// 	$('.wella4').removeClass('hoverIn').addClass('hoverOut');
	// });

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
		timer.start();
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
  time:30,
  reset: function(){
    timer.time = 30;
    $('#display').html('00:30');
  },
  start: function(){
    counter = setInterval(timer.count, 1000);
    gameOn();
  },
  stop: function(){
    clearInterval(counter);
  },
  count: function(){
    timer.time--;
    if(timer.time === 0){
		timer.stop();
		unanswered++;
		$('.answer').empty().append('<div class="nextone">The correct answer was: ' + $('button.right').text() +'</div>');
		setTimeout(threeSeconds, 2000);
		timer.start();
	}
    var converted = timer.timeConverter(timer.time);
    $('#display').html(converted);
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

function threeSeconds(){
  next();
  gameOn();
  timer.reset();
}

function gameOn(){	
	$('button').click(function(){	
	var x = $(this);
	if(x.val() === "yes"){
		$('.right').addClass('correct');
		$('.wrong').removeClass('incorrect');
		correct++;
		$('.answer').empty().append('Correct!!!');
		//setTimeout(threeSeconds, 3000);
	}
	else if(x.val() === 'no'){
		$(this).addClass('incorrect').siblings().removeClass('incorrect');
		$('.right').removeClass('correct');
		incorrect++;
		console.log(this.incorrect);
		$('.answer').empty().append('Nope!<br>The correct answer was: ' + $('button.right').text());
		//setTimeout(threeSeconds, 3000);	
	}

});

}

function question1(){
	$('.wellq1').empty().append('<div>Which of the following type of variable is visible everywhere in your JavaScript code?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">Global variable</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">Local variable</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">Both of the above</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">None of the above</button>');

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		question2();
  		gameOn();
  		timer.reset();
		}
	});	

	// if($('div .status:contains(answer)')){
	// 	question2();
	// }
}

function question2(){
	$('.wellq1').empty().append('<div>Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">toExponential()</button>');
	$('.wella2').empty().append('<button class="right next" value="yes">toFixed()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">toPrecision()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">toLocaleString()</button>');
	$('.answer').empty();

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		question3();
  		gameOn();
  		timer.reset();
		}
	});	
}


function question3(){
	$('.wellq1').empty().append('<div>Which of the following function of String object returns the character at the specified index?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">charAt()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">charCodeAt()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">concat()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">indexOf()</button>');
	$('.answer').empty();

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		question4();
  		gameOn();
  		timer.reset();
		}
	});	
}

function question4(){
	$('.wellq1').empty().append('<div>Which of the following function of String object returns the characters in a string between two indexes into the string?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">splice()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">split()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">substra()</button>');
	$('.wella4').empty().append('<button class="right next" value="yes">substring()</button>');
	$('.answer').empty();

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		question5();
  		gameOn();
  		timer.reset();
		}
	});	
}

function question5(){
	$('.wellq1').empty().append('<div>Which of the following function of String object returns the calling string value converted to upper case?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">toLocaleUppercas()</button>');
	$('.wella2').empty().append('<button class="right next" value="yes">toUpperCase()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">toString()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">substring()</button>');
	$('.answer').empty();

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		question6();
  		gameOn();
  		timer.reset();
		}
	});	
}

function question6(){
	$('.wellq1').empty().append('<div>Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a tag?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">sup()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">small()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">strike()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">sub()</button>');
	$('.answer').empty();

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		question7();
  		gameOn();
  		timer.reset();
		}
	});	
}

function question7(){
	$('.wellq1').empty().append('<div>Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">indexOf()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">lastIndexOf()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">join()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">map()</button>');
	$('.answer').empty();

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		question8();
  		gameOn();
  		timer.reset();
		}
	});	
}

function question8(){
	$('.wellq1').empty().append('<div>Which of the following function of Array object returns a string representing the array and its elements?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">toSource()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">sort()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">splice()</button>');
	$('.wella4').empty().append('<button class="right next" value="yes">string()</button>');
	$('.answer').empty();

	$('.next').click(function(){
		setTimeout(next, 2000);
		function next(){
  		endPage();
  		gameOn();
  		timer.reset();
		}
	});	
}

function endPage(){
	timer.stop();
	$('.wellq1').empty().append('<div id="answ"><h2>All done, here\'s how you did</h2><br><p>Correct Answers: ' + correct + '<br>Incorrect Answers: ' + incorrect + '<br>Unanswered: ' + unanswered +'</div>');
	$('.wella1').empty().append('<button type="button" onclick="reStart()" id="startOverButton">START Over?</button>');
	$('.wella2').empty().append('');
	$('.wella3').empty().append('');
	$('.wella4').empty().append('');
	$('.answer').empty();
}

function reStart(){
	question1();
	timer.start();
	correct = 0;
	incorrect = 0;
	unanswered = 0;

}

