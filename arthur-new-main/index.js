const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const imgSize = 600
const numShirts = 5
const numRows = 5
const numCols = 5
let shirt1front, shirt1back,shirt2front, shirt2back,shirt3front,shirt3back,shirt4front, shirt4back, shirt5front, shirt5back, shirt6front, shirt6back, shirt7front, shirt7back, shirt8front, shirt8back, shirt9front, shirt9back, shirt10back, shirt11front, shirt12front, shirt13front, shirt13back, shirt14front, shirt14back
let thetaX = 0
let thetaY = 0
let mouseStart = {x: 0, y: 0}

let shirts = []
const controlCircleSize = 25
let circlePositions
let counter = 0


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
    const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 2)
    const col = [random(0, 255), random(0, 255), random(0, 255),]
    return {
        x,y, col
    }
})


}

function draw(){
  background(120)
  rectMode(CENTER);

  drawControlCircles()

  // rotateX(PI)
 
  // for(let i = 0; i< numCols; i++){
  //   for(let j = 0; j < numRows; j++){
  //     drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

  //     drawShirt(shirt1front, imgSize, (i * imgSize) - canvasWidth/3, (j * imgSize) - canvasHeight/3, 2)
  //     drawShirt(shirt1back, imgSize,(i * imgSize) - canvasWidth/3,  (j * imgSize) - canvasHeight/3 , -2)
  //     //shirtCount++
  //   }

  // }

    // drawBackgroundRectangle(imgSize, (imgSize) - canvasWidth/4, -100)

    drawShirtSide(shirts[counter].front, imgSize, 0, 0, 1)
    drawShirtSide(shirts[counter].back, imgSize, 0, 0 , -1)



  // // replace the images below with new images
  // drawBackgroundBox(imgSize, 250, -100)
  // drawShirt(shirt1front, imgSize, 250, -100, 1)
  // drawShirt(shirt1back, imgSize, 250, -100, -1)

  // theta+=0.01
}

function mousePressed(){
  mouseStart = {x: mouseX, y: mouseY}
  checkCircles(mouseX - canvasWidth/2, mouseY - canvasHeight/2)
}

function mouseDragged(){
    thetaY = map(Math.abs(mouseX - mouseStart.x), 0,  200, 0, TWO_PI)
    thetaX = map(Math.abs(mouseY - mouseStart.y), 0,  200, 0, TWO_PI)
    // console.log(theta)
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
    
    texture(img)
    rect(0,0, size, size)
  pop()
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
