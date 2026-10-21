let webcam;
let mic;

function setup () {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  background(220); 
  ///webcam = createCapture(VIDEO, {flipped:true});
  //wbcam.size(640,480);
  //webcam.hide(); 

}

function draw () {
 
//image(webcam,0,0);
  //filter(GRAY);
  
 // width=800;
 // height=800;
// let vol = mic.getLevel();
 //let size = map(vol, 0, 1, 10, 300); //map volume to size
  //ellipse(width / 2, height / 2, size, size);
  
  let waveform = fft.waveform();
  stroke (255);
  noFill();
  beginShape();
  for(let i = 0; i < waveformD.length; i++){
    let x = map()
    vertex(x,y);
  }
  
}

function mousePressed (){
  mic.start();
  userStartAudio();
}