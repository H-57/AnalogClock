const sec=document.getElementById('sec')
const sound = new Audio('sound.mp3');
const hr=document.getElementById('hr')
const min=document.getElementById('min')



const showTime=()=>{
    let date=new Date();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hrHand=30*hh + mm/2;
  let minHand=6*mm;
  let secHand=6*ss;
  


  hr.style.transform= `rotate(${hrHand}deg)`;
  min.style.transform= `rotate(${minHand}deg)`;
  sec.style.transform= `rotate(${secHand}deg)`;


  
 
  sound.currentTime = 0; 
  sound.play();

}



setInterval(showTime
,1000)

