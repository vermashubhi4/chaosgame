var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var rect=canvas.getBoundingClientRect();
var x=10,y=10,left=rect.left,right=rect.right,top=rect.top,bottom=rect.bottom;
var ax=right/2,ay=20,bx=left+50,by=bottom-50,cx=right-50,cy=bottom-50;
c.fillRect(ax,ay,5,5);
c.fillRect(bx,by,5,5);
c.fillRect(cx,cy,5,5);
c.fillRect(x,y,5,5);

setInterval("move(1,4)",0);

function move(min,max){
  var r=Math.floor(Math.random()*(max-min))+min;
  if(r==1)
  {
    x=(x+ax)/2;
    y=(y+ay)/2;
  }
  else if(r==2)
  {
    x=(x+bx)/2;
    y=(y+by)/2;
  }
  if(r==3)
  {
    x=(x+cx)/2;
    y=(y+cy)/2;
  }
  c.fillRect(x,y,5,5);
}
