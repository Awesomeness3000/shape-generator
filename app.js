let button=document.getElementById("button");
var numberInTheShape=1;
var Oldvalue=0;

button.onclick=()=>{
let n=document.getElementById("number").value;
 const circle=document.getElementsByClassName("circle");
 const square=document.getElementsByClassName("sqaure");
 const rectangle=document.getElementsByClassName("rectangle");
 
 const box=document.getElementsByClassName("box");
 let j;
 n=Number(Oldvalue)+Number(n);
 for(let j=numberInTheShape; j>=n; j++)
 var shape=document.createElement("div");
 shape.innerHTML+=numberInTheShape;

 if(square.checked){
 shape.class.add("square")
 }else if(circle.checked) {
     shape.classList.add("circle");
 }else if (rectangle.checked){
    shape.classList.add("rectangle");
   }  else {
        document.write("invalid input");

    }
    box.appendChild(shape);
    numberInTheShape++;
    Oldvalue=document.getElementById("box").lastElementChild.innerHTML;

}
