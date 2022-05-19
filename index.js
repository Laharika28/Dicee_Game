var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;
var win = document.querySelector("h1");
var p1 = document.querySelector(".img1");
var p2 = document.querySelector(".img2");

whoWins();

function whoWins()
{
  setImages(num1,p1);
  setImages(num2,p2);
  if(num1>num2)
  {
    win.innerHTML="🎉 Player 1 wins! 🎉";
  }
  else if(num2>num1)
  {
    win.innerHTML="🎉 Player 2 wins! 🎉";
  }
  else
  {
    win.innerHTML="✌️ Draw!";
    p1.setAttribute("src","images/dice6.png");
    p2.setAttribute("src","images/dice6.png");
  }
}

function setImages(num,p)
{
  if(num==1)
    p.setAttribute("src","images/dice1.png");
  else if(num==2)
    p.setAttribute("src","images/dice2.png");
  else if(num==3)
    p.setAttribute("src","images/dice3.png");
  else if(num==4)
    p.setAttribute("src","images/dice4.png");
  else if(num==5)
    p.setAttribute("src","images/dice5.png");
  else if(num==6)
    p.setAttribute("src","images/dice6.png");
}
