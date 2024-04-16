function setup() {
  createCanvas(800, 600);
  background(0,0,0);
}

function draw() {

  stroke(255,255,255)
  //earth
  fill( 0,102,44);//green
  
  circle(400,300,100,100);

  //moon
  fill(123,126,138);//grey
  circle(475,225,25,25);

  //jupiter
  fill(201,127,16);//rust orange
  circle(700,500,125,125);

  //venus
  fill(158,0,84)
  circle(75,250,80,80)

  //mars
  fill(255,0,0)
  circle(700,75,50,50)
}