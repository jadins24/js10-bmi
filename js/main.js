let button=document.getElementById("btn")
button.addEventListener("click",myFunction)
function myFunction(){
  let weight =document.getElementById("weigh").value;
  let height=document.getElementById("high").value;
  height=height/100;
  let calc=weight/(height*height);
  document.getElementById("bmi").value=calc;
  if(calc<18){
    console.log("under weight")
  }
  else if(calc>=18 && calc<25){
    console.log("normal weight")
  }
  else if(calc>=25 && calc<30){
    console.log("over weight")
  }
  else{
    console.log("obesity")
  }

} 