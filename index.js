const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const imgSize = 600
const gridImageSize = 200
const numShirts = 5
const numRows = 3
const numCols = 4
let shirt1front, shirt1back,shirt2front, shirt2back,shirt3front,shirt3back,shirt4front, shirt4back, shirt5front, shirt5back, shirt6front, shirt6back, shirt7front, shirt7back, shirt8front, shirt8back, shirt9front, shirt9back, shirt10back, shirt11front, shirt12front, shirt13front, shirt13back, shirt14front, shirt14back
let thetaX = 0
let thetaY = 0
let mouseStart = {x: 0, y: 0}

let shirts = []

const controlCircleSize = 50
let circlePositions

let toggleButtons
const toggleButtonWidth = 100
const toggleButtonHeight = 50
const numToggles = 2
// const toggleButtonNames = ['single', 'grid']


let counter = 0
let overallState = 1
const numStates = 2


function preload(){
  shirt1front = loadImage('shirt1-front.png');
  shirt1back = loadImage('test.png');

  shirt2front = loadImage('shirt2-front.png');
  shirt2back = loadImage('shirt2-back.png');

  shirt3front = loadImage('shirt3-front.png');
  shirt3back = loadImage('shirt3-back.png');

  shirt4front = loadImage('shirt4-front.png');
  shirt4back = loadImage('shirt4-back.png');

  shirt5front = loadImage('shirt5-front.png');
  shirt5back = loadImage('shirt5-back.png');

  shirt6front = loadImage('shirt6-front.png');
  shirt6back = loadImage('shirt6-back.png');

  shirt7front = loadImage('shirt7-front.png');
  shirt7back = loadImage('shirt7-back.png');

  shirt8front = loadImage('shirt8-front.png');
  shirt8back = loadImage('shirt8-back.png');

  shirt9front = loadImage('shirt9-front.png');
  shirt9back = loadImage('shirt9-back.png');

  shirt10front = loadImage('shirt10-front.png');
  shirt10back = loadImage('shirt10-back.png');

  shirt11front = loadImage('shirt11-front.png');
  shirt11back = loadImage('shirt11-front.png');

  shirt12front = loadImage('shirt12-front.png');
  shirt12front = loadImage('shirt12-front.png');

  shirt13front = loadImage('shirt13-front.png');
  shirt13back = loadImage('shirt13-back.png');

  shirt14front = loadImage('shirt14-front.png');
  shirt14back = loadImage('shirt14-back.png');



  const shirt1 = {
    front: shirt1front,
    back: shirt1back,
  }

  const shirt2 = {
    front: shirt2front,
    back: shirt2back,
  }
  
  const shirt7 = {
    front: shirt7front,
    back: shirt7back,
  }

  const shirt8 = {
    front: shirt8front,
    back: shirt8back,
  }
  
  const shirt5 = {
    front: shirt5front,
    back: shirt5back,
  }

  const shirt6 = {
    front: shirt6front,
    back: shirt6back,
  }

  const shirt3 = {
    front: shirt3front,
    back: shirt3back,

    
  }
  const shirt4 = {
    front: shirt4front,
    back: shirt4back,

    
  }
  
  const shirt9 = {
    front: shirt9front,
    back: shirt9back,

    
  }

  const shirt10 = {
    front: shirt10front,
    back: shirt10back,

    
  }

  const shirt11 = {
    front: shirt11front,
    back: shirt11front,

    
  }

  const shirt12 = {
    front: shirt12front,
    back: shirt12front,

    
  }

  const shirt13 = {
    front: shirt13front,
    back: shirt13back,

    
  }

  const shirt14 = {
    front: shirt14front,
    back: shirt14back,

    
  }

  

  shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12, shirt13, shirt14]
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);  


  controlCircleData = Array.from({length: shirts.length}, (el, i) => {
    const x = canvasWidth/2 - controlCircleSize * 2
    const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.1)
    const col = [random(0, 255), random(0, 255), random(0, 255),]
    return {
        x,y, col
    }
})

toggleButtons = Array.from({ length: numToggles}, (el, i  ) => {
  const x = - ((numToggles - 1) * toggleButtonWidth) + (i * toggleButtonWidth * 1.5) - toggleButtonWidth/2
  const y = -canvasHeight/2 + 50
  const col = [random(255), random(255), random(255)]
  const hoverCol = [random(255), random(255), random(255)]
  return {
    x,
    y,
    col,
    hoverCol,
    width: toggleButtonWidth,
    height: toggleButtonHeight
  } 
})

}

function draw(){
  background(120, 120, 120, 100)
  rectMode(CENTER);
  drawToggleButtons()
 

  renderCurrentState(overallState)
}

function mousePressed(){
  mouseStart = {x: mouseX, y: mouseY}
  checkCircles(mouseX - canvasWidth/2, mouseY - canvasHeight/2)
  const clicked = (checkToggles(mouseX - canvasWidth/2, mouseY - canvasHeight/2))
  
  if(clicked){
    overallState = clicked
    }
  

}

function mouseDragged(){
    thetaY = map(Math.abs(mouseX - mouseStart.x), 0,  200, 0, TWO_PI)
    thetaX = map(Math.abs(mouseY - mouseStart.y), 0,  200, 0, TWO_PI)
    // console.log(theta)
}


const drawControlCircles = () => {
  
  controlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawToggleButtons = () => {
  toggleButtons.forEach(button => {
    fill(button.col)
    rect(button.x, button.y, button.width, button.height, 120)
  })
  
}



// const checkHover = () => {
//   if(mouseX > canvasWidth/4 && 
//       mouseX < canvasWidth/4 + canvasWidth/2 &&
//       mouseY > canvasHeight/4 && 
//       mouseY < canvasHeight/4 + canvasHeight/2){
//           return true
//       }else{
//           return false
//       }

// }

const checkCircles = (mX, mY) => {
  console.log(mX, mY)
  controlCircleData.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })
}

const checkToggles = (mX, mY) => {
  console.log(mX, mY)
  const toggleChecks = toggleButtons.map((toggle, idx) => {
      if(mX > toggle.x  - toggleButtonWidth/2&&
          mX < toggle.x + toggleButtonWidth/2 &&
          mY > toggle.y - + toggleButtonHeight/2 &&
          mY < toggle.y + toggleButtonHeight/2){
              return idx + 1
          }else{
            return false
          }
  })
  const found = toggleChecks.filter((el, i) => el > 0)
  if(found){
    return found[0] 
  }
}


function drawBackgroundBox(size, xOff, yOff){
  push()
    translate(xOff - imgSize/4, yOff,0)
    rotateX(-thetaX)
    rotateY(-thetaY)
    fill(130)
    box(size,size,1)
  pop()
}


function drawShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(xOff, yOff, side)
    translate(xOff,yOff, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    translate(xOff, yOff, side)
    // console.log(img)
    texture(img)
    rect(0,0, size, size)
  pop()
}




function drawGridShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(-size/2 + xOff, -size/2 + yOff, side)
    // translate(size/2,size/2, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    // translate(-size/2, -size/2, side)
    
    texture(img)
    rect(0,0, size, size)
  pop()
}



const renderCurrentState = (overallState) => {
  // console.log(overallState)
  switch(overallState){
    case 1:
      drawGrid()
      return
    case 2: 
      drawCloseUp()
      drawControlCircles()
      return
    default : 
      return
  }
}

const drawGrid = () => {

    // rotateX(PI)
  let count = 0
  for(let i = 0; i< numCols; i++){
    for(let j = 0; j < numRows; j++){
      // drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

      drawGridShirtSide(shirts[count].front, gridImageSize, 
                      (i * gridImageSize) - canvasWidth/6, 
                      (j * gridImageSize) - canvasHeight/6 + 100, 2)
      drawGridShirtSide(shirts[count].back, gridImageSize,
                      (i * gridImageSize) - canvasWidth/6,  
                      (j * gridImageSize) - canvasHeight/6 + 100, -2)
      //shirtCount++
      count++
    }

  }
}


const drawCloseUp = () => {

  drawShirtSide(shirts[counter].front, imgSize, 0, 0, 10)
  drawShirtSide(shirts[counter].back, imgSize, 0, 0 , -10)
}

