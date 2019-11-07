var numSquares = 6;
var colors=generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
  hardBtn.classList.remove('selected');
  easyBtn.classList.add('selected');
  numSquares = 3;
  colors=generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  for(let i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = 'none';
    }

  }
});

hardBtn.addEventListener('click', function(){
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  numSquares = 6;
  colors=generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  for(let i = 0; i<squares.length; i++){
    
      squares[i].style.backgroundColor = colors[i];
   
   
      squares[i].style.display = 'block';
   

  }
});



resetButton.addEventListener('click', function(){
  // generate random color
  colors=generateRandomColors(numSquares);
  //pick color 
  pickedColor = pickColor();
  // display
  colorDisplay.textContent = pickedColor.toUpperCase();

  // display color
  for(let i = 0; i<squares.length; i++){
   squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = " ";
  resetButton.textContent = 'NEW COLOR!';
});

colorDisplay.textContent = pickedColor.toUpperCase();


for(let i = 0; i<squares.length; i++){
  // add initial colors to square
    squares[i].style.backgroundColor = colors[i];
 // add eventListener to square
 
 squares[i].addEventListener('click', function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare pickedColor to  clickColor
    
    if(clickedColor === pickedColor){
      // make action
      messageDisplay.textContent = "CORRET!"
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = 'PLAY AGAIN!'
    }
    else{

        squares[i].addEventListener('mouseover', function(){
            this.classList.remove('mouseCursor');
        });
       this.style.backgroundColor = "#232323";
       // print the message on screen #wrong
       messageDisplay.textContent = "Try Again";


    }
 });


 // mouseover on square
squares[i].addEventListener('mouseover', function(){
    this.classList.add('mouseCursor');
});

}



// function to change color when correct
function changeColor(color){
  
    //loop through all square
    for(let i = 0; i< squares.length; i++){
      // match color
      squares[i].style.backgroundColor = color;
    }

}

// function pickColor

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

// generate random colors

function generateRandomColors(num){

  // make an array
  var arrColor = [];
  // make random color in array
 for(let i = 0; i<num; i++){
  
  arrColor.push(randomColor());
     
 }
  // return array
  return arrColor;
}



function randomColor(){
  // red 0-255
 var red = Math.floor(Math.random()*256);
 // green 0-255
 var green = Math.floor(Math.random()*256);
 // blue 0-255

 var blue = Math.floor(Math.random()*256);

 return `rgb(${red}, ${green}, ${blue})`;
 // "rgb(" + red + ", " + green + ", "+ blue + ")";
}
