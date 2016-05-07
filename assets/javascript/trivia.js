$(document).ready(function(){
	start.hide();
});

//Object containing variables and elements for the start screen
var start = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	question: 0,

//Elements containg questions and answers ar hidden to allow only start button and quiz title to show
	hide: function(){
	$('.start').append('<button  type="button" id="startButton">START</button>');
	$('.wellq1').hide();
	$('.wella1').hide();
	$('.wella2').hide();
	$('.wella3').hide();
	$('.wella4').hide();
	$('#timeLeft').hide();

//Click function for the start button on the start page to start the game and show hidden elements containing questions and answers
//The click function resets the game numbers and calls function question1 to begin the game
	$('#startButton').click(function(){
	reStart();
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
	},
};

//game timer that starts, stops and reset the time. Timer also advances game to next question when time is zero and question not answered
//Timer also shows the correct answer if the question is missed before advancing to the next question
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
		start.unanswered++;
		start.question++;
		$('.answer').empty().append('The correct answer was: ' + $('button.right').text());
		setTimeout(threeSeconds, 3000);
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

//The start button and setTimeout checks the logic in this function to determine which of the question functions to call next
function threeSeconds(){

 if(start.question === 0){
 	question1();
 }
 if(start.question === 1){
 	question2();
 }
 if(start.question === 2){
 	question3();
 }
 if(start.question === 3){
 	question4();
 }
 if(start.question === 4){
 	question5();
 }
 if(start.question === 5){
 	question6();
 }
 if(start.question === 6){
 	question7();
 }
 if(start.question === 7){
 	question8();
 }
 if(start.question === 8){
 	endPage();
 }
  
  gameOn();
  timer.reset();
}

//This function determins which questions are right or wrong and advances the game and adds to the number of right or wrong answers
function gameOn(){	
	$('button').click(function(){	
	var x = $(this);
	if(x.val() === "yes"){
		$('.right').addClass('correct');
		$('.wrong').removeClass('incorrect');
		start.correct++;
		start.question++;
		$('.answer').empty().append('Correct!!!');
		setTimeout(threeSeconds, 3000);
	}
	else if(x.val() === 'no'){
		$(this).addClass('incorrect').siblings().removeClass('incorrect');
		$('.right').removeClass('correct');
		start.incorrect++;
		start.question++;
		$('.answer').empty().append('Nope!<br>The correct answer was: ' + $('button.right').text());
		setTimeout(threeSeconds, 3000);	
	}
});

console.log(start.question);
}
//The following eight functions are called in chronological order by the threeSecond function
function question1(){
	$('.wellq1').empty().append('<div>Which of the following type of variable is visible everywhere in your JavaScript code?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">Global variable</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">Local variable</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">Both of the above</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">None of the above</button>');
}

function question2(){
	$('.wellq1').empty().append('<div>Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">toExponential()</button>');
	$('.wella2').empty().append('<button class="right next" value="yes">toFixed()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">toPrecision()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">toLocaleString()</button>');
	$('.answer').empty();
}

function question3(){
	$('.wellq1').empty().append('<div>Which of the following function of String object returns the character at the specified index?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">charAt()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">charCodeAt()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">concat()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">indexOf()</button>');
	$('.answer').empty();
}

function question4(){
	$('.wellq1').empty().append('<div>Which of the following function of String object returns the characters in a string between two indexes into the string?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">splice()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">split()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">substra()</button>');
	$('.wella4').empty().append('<button class="right next" value="yes">substring()</button>');
	$('.answer').empty();
}

function question5(){
	$('.wellq1').empty().append('<div>Which of the following function of String object returns the calling string value converted to upper case?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">toLocaleUppercas()</button>');
	$('.wella2').empty().append('<button class="right next" value="yes">toUpperCase()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">toString()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">substring()</button>');
	$('.answer').empty();
}

function question6(){
	$('.wellq1').empty().append('<div>Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a tag?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">sup()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">small()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">strike()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">sub()</button>');
	$('.answer').empty();
}

function question7(){
	$('.wellq1').empty().append('<div>Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?</div>');
	$('.wella1').empty().append('<button class="right next" value="yes">indexOf()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">lastIndexOf()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">join()</button>');
	$('.wella4').empty().append('<button class="wrong next" value="no">map()</button>');
	$('.answer').empty();
}

function question8(){
	$('.wellq1').empty().append('<div>Which of the following function of Array object returns a string representing the array and its elements?</div>');
	$('.wella1').empty().append('<button class="wrong next" value="no">toSource()</button>');
	$('.wella2').empty().append('<button class="wrong next" value="no">sort()</button>');
	$('.wella3').empty().append('<button class="wrong next" value="no">splice()</button>');
	$('.wella4').empty().append('<button class="right next" value="yes">string()</button>');
	$('.answer').empty();
}

//This function displays the end of game page with the player stats and asks if the player wants to start over
function endPage (){
	//var startOverButton = this.startOverButton;
	timer.stop();
	$('.wellq1').empty().append('<div id="answ"><h2>All done, here\'s how you did</h2><br><p>Correct Answers: ' + start.correct + '<br>Incorrect Answers: ' + start.incorrect + '<br>Unanswered: ' + start.unanswered +'</div>');
	$('.wella1').empty();
	$('.wella2').hide();
	$('.wella3').hide();
	$('.wella4').hide();
	$('#startButton').show().html('Start Over?');

}

//This function is attached to the start button click event and is called to reset the game stats. 
function reStart(){
	start.correct = 0;
	start.incorrect = 0;
	start.unanswered = 0;
	start.question = 0;
}

