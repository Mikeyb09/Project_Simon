var colors = ["#red", "#green", "#yellow", "#blue"];
var simon = [];
var player = [];
var count = 0, clickCount = 0;


// for (i = 0; i < 10; i++) {
//   simon[i] = colors[randomNum()];
//   player[i] = colors[randomNum()];
// }


//************//
// Game Start //
//************//

simonsTurn();

//**********************//
// Button Click Function//
//**********************//

$(".block").click(function(event) {
    // console.log(event.target.id);

    var target = "\#" + event.target.id;

    buttonBlink(target);
  	player[clickCount] = target;
  	// TODO : If statemnt to compare colors
  	if (player[clickCount] == simon[clickCount]) {
      clickCount++;
      
      if (clickCount == count) {
        clickCount = 0;
        
        simonsTurn();
      }
    } else {
      count = 0;
      clickCount = 0;
      $("h1").text("GAME OVER");
    }
});


//**********//
// Functions//
//**********//

function simonsTurn() {
  simon[count] = colors[randomNum()];
  
  count++;
  $("h1").text("Level " + count);
  
  var simonClicks = setInterval(function() {
    buttonBlink(simon[clickCount]);
    
    clickCount++;
    
    if (clickCount == count) {
      clearInterval(simonClicks);
      clickCount = 0;
    }
  }, 1500);

}


function buttonBlink(target) {
  	$(target).animate({
        opacity: 0.5
    });

    $(target).animate({
        opacity: 1
    })
}

function randomNum() {
  var num = Math.random();
	num *= colors.length - 1;
	num = Math.round(num);
	return num;
}