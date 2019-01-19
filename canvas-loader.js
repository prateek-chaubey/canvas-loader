/*
JS FOR: Canvas Loaders
Author: Prateek Chaubey
Author URI: https://h4c-k3r.github.io/
Version: 0.0.1
*/
/*
|----------------------------------------------------------------------------
| Made by PRATEEK CHAUBEY
| MIT LICENSE
|----------------------------------------------------------------------------
|
\\//\\// Officially - CanvasLoader.js
|
/*---------------------------------
	© Prateek Chaubey 2019-present
-----------------------------------*/


(window.onload=function(){
this.canvas=document.getElementById(initialize.id);
this.toop=initialize.top;
this.left=initialize.left;
this.width=initialize.width;
this.time=initialize.time;
this.radius=initialize.radius;
this.sangle=initialize.sangle;
this.fontstyle=initialize.fontstyle;
this.color=initialize.color;
this.stroke=initialize.stroke;
this.background=initialize.background;
this.per=initialize.percentage;

var interval=this.time;
var halfinterval=(interval/100)*64;
var start=this.sangle;
var end=(this.sangle+6.33);
var per=this.per;
var sper=0;
var canvas=this.canvas;
var ctx=canvas.getContext("2d");
var ch=canvas.height;
var cw=canvas.width;


/*var img=new Image();
img.src="img2.png";
img.style.borderRadius="50%";

var back=document.createElement("div");
document.body.appendChild(back);
back.style.position="absolute";
back.style.height=this.radius+60+"px";
back.style.width=this.radius+60+"px";
back.style.background=this.background;
back.style.zIndex="99";
back.style.top=(initialize.top-47)+"px";
back.style.left=(this.left-47)+"px";
back.style.opacity="0.5";
back.style.borderRadius="50%";*/

var loadbar=setInterval(function(){

ctx.clearRect(0,0,cw,ch); 
ctx.strokeStyle=this.stroke;
ctx.fillStyle=this.color;
ctx.font=this.fontstyle;
ctx.lineWidth=this.width;
ctx.textAlign="center";
start=start+.1;

//ctx.drawImage(img,(initialize.top-55),(this.left-55),this.radius*2+10,this.radius*2+10)
ctx.arc(initialize.top,this.left,this.radius,start,start);
ctx.stroke();
ctx.fillText(sper+"%", (initialize.top+5),(this.left+5));
if(start>=end){clearInterval(loadbar);}

}

,interval);

var showper=setInterval(function(){
if(sper!==per){
sper=sper+1;
}
else{
ctx.clearRect(0,0,cw,ch); 
//ctx.drawImage(img,(initialize.top-55),(this.left-55),this.radius*2+10,this.radius*2+10)
ctx.fillText(sper+"%", (initialize.top+5),(this.left+5));
ctx.arc(initialize.top,this.left,this.radius,start,start);
ctx.stroke();
clearInterval(loadbar);
}
},halfinterval);
});