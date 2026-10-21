let webcam;
let mic;

function setup () {
  creatCanvas(400, 400);
  mic = new p5.AudioIn();
  background(220); 
  //mic.start();
  ///webcam = createCapture(VIDEO, {flipped:true});
  //wbcam.size(640,480);
  //webcam.hide(); 

}

function draw () {
 
//image(webcam,0,0);
  //filter(GRAY);
  
  width=800;
  height=800;
  let vol = mic.getLevel();
  let size = map(vol, 0, 1, 10, 300); //map volume to size
  ellipse(width / 2, height / 2, size);
}