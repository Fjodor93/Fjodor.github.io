const productPages = 3;
let leftArrow = document.getElementById("btn-left");
let rightArrow = document.getElementById("btn-right");
let i=1;
let perMin = [6,8,12];

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
var kostnad1 = document.getElementById("pris1");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var kostnad2 = document.getElementById("pris2");
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
var kostnad3 = document.getElementById("pris3");

    document.getElementById("scroll-"+i%productPages).style.visibility = "visible";
    document.getElementById("scroll-"+(i+1)%productPages).style.visibility = "hidden";
    document.getElementById("scroll-"+(i+2)%productPages).style.visibility = "hidden";
    document.getElementById("dot-"+i%productPages).style.backgroundColor = "black";
    document.getElementById("dot-"+(i+1)%productPages).style.backgroundColor = "#bbb";
    document.getElementById("dot-"+(i+2)%productPages).style.backgroundColor = "#bbb";

    if(i==productPages-1){
        rightArrow.style.opacity ="0.3";
    }
    if(i==0){
        leftArrow.style.opacity ="0.3";
    }
    else{
        leftArrow.style.opacity = "1";
        rightArrow.style.opacity = "1";
    }
output1.innerHTML = slider1.value;
kostnad1.innerHTML = slider1.value *perMin[0];
output2.innerHTML = slider2.value;
kostnad2.innerHTML = slider2.value *perMin[1];
output3.innerHTML = slider3.value;
kostnad3.innerHTML = slider3.value *perMin[2];

slider1.oninput = function() {
    output1.innerHTML = this.value;
    kostnad1.innerHTML = this.value*perMin[0];
}
slider2.oninput = function() {
    output2.innerHTML = this.value;
    kostnad2.innerHTML = this.value*perMin[1];
}
slider3.oninput = function() {
    output3.innerHTML = this.value;
    kostnad3.innerHTML = this.value*perMin[2];
}
rightArrow.addEventListener("click",()=>{

    if(i<2){
    i += 1;
    document.getElementById("scroll-"+i%productPages).style.visibility = "visible";
    document.getElementById("scroll-"+(i+1)%productPages).style.visibility = "hidden";
    document.getElementById("scroll-"+(i+2)%productPages).style.visibility = "hidden";
    document.getElementById("dot-"+i%productPages).style.backgroundColor = "black";
    document.getElementById("dot-"+(i+1)%productPages).style.backgroundColor = "#bbb";
    document.getElementById("dot-"+(i+2)%productPages).style.backgroundColor = "#bbb";
    }
    if(i==productPages-1){
        rightArrow.style.opacity ="0.3";
    }
    else{
        leftArrow.style.opacity = "1";
        rightArrow.style.opacity = "1";
    }
});
leftArrow.addEventListener("click",()=>{

    if(i>0){
    i -= 1;
    document.getElementById("scroll-"+i%productPages).style.visibility = "visible";
    document.getElementById("scroll-"+(i+1)%productPages).style.visibility = "hidden";
    document.getElementById("scroll-"+(i+2)%productPages).style.visibility = "hidden";
    document.getElementById("dot-"+i%productPages).style.backgroundColor = "black";
    document.getElementById("dot-"+(i+1)%productPages).style.backgroundColor = "#bbb";
    document.getElementById("dot-"+(i+2)%productPages).style.backgroundColor = "#bbb";
    }
    if(i==0){
        leftArrow.style.opacity ="0.3";
    }
    else{
        leftArrow.style.opacity = "1";
        rightArrow.style.opacity = "1";
    }
});
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
