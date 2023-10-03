let img1 = document.getElementById('firstImage'); 
let img2 = document.getElementById('secondImage'); 
let img3 = document.getElementById('thirdImage');
let img4 = document.getElementById('fourthImage');
let img5 = document.getElementById('fiveImage'); 
let headerImage = document.getElementById('header'); 
let bg = document.getElementsByClassName('container')[0] ; 
console.log(bg);
console.log(img1,img2,img3,img4,img5); 
function Click(srcValue){
headerImage.src =srcValue;
} 
function ChangeColor(color){ 
bg.style.backgroundColor = color;
}