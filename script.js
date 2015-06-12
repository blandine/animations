// Code goes here
function init(){
  
  var btn = document.querySelector('.anim-button');
  var btnReset = document.querySelector('.reset-button');
  var container = document.querySelector('.container');
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  
  
  var createAllBricks = function(){
	  var bricks = [];
	  for (var i = 0; i < 50 ; i++){
		  var width = getRandomArbitrary(20,120);
		  bricks.push({width: width});
	  }
	  return bricks;
  };
  
  var createBrick = function(index, width){
    var brick = document.createElement('div');
    brick.className="brick";
    brick.style.background = COLORS[index % COLORS.length];
    brick.style.width = width+"px";
    container.appendChild(brick);
    return brick;
  };
  
  var animate = function(){
	var bricks = createAllBricks();
	var positions = getPositions(bricks);
    for(var i = 0; i < bricks.length; i++){
      var brick = createBrick(i, bricks[i].width);
      snabbt(brick,{
      position: positions[i],
	  fromOpacity:0,
	  opacity: 1,
      easing: 'ease',
      delay: i * 50
    });
      
    }
  };
  
  	var resetContainer = function() {
		container.innerHTML = "";
	};
  
  btn.addEventListener('click', animate);
  btnReset.addEventListener('click', resetContainer);
  
  var COLORS = randomColor({
  count: 40,
  luminosity: 'dark',
});

   var getPositions = function(bricks) {
	   var positions = [];
	   var j = 0;
	   var index = 0;
	   var previousX = 0;
	   for(var i = 0; i < bricks.length; i++){
		   console.log(previousX);
		   var x = containerWidth - (bricks[i].width + previousX);
		   
		   if( x < 0 ){
			j++;
			index = 0;
			previousX = 0;
			x = containerWidth - (bricks[i].width + previousX);
		   }
		   var y = containerHeight - (50 * j);
		   positions.push([x, y, 0]);
		   index++;
		   previousX = bricks[i].width + 5 + previousX;
	   }
	   return positions;
   }
   
   var getRandomArbitrary = function (min, max) {
		return Math.random() * (max - min) + min;
	};
	

}