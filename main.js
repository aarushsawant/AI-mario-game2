img="";
marioX=325;
marioY=325;

function preload() {
	img=loadImage("mario.jpg");
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('gameconsole');

	poseNet=ml5.poseNet(video,modalLoaded);
	poseNet.on('pose', gotPoses);


}

function draw() {
	game()
}

function modalLoaded()
{
	console.log('modal Loaded!!!');
}

function gotPoses(results)
{
	if(results.length>0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		nosey=results[0].pose.nose.y;
	}
}











