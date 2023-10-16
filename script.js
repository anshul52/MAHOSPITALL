let menubtn =document.querySelector('#menu_bars');
let mynav =document.querySelector('.navbar');

menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}


var ts = document.querySelector('#testimonialsSlide');
var psd= document.querySelector('#pointsliderdiv');
let countTS = 0;
let psdCnt =0;
document.querySelector("#buttonsss1").addEventListener('click',function(){

    
    psdCnt -=14
    if(psdCnt === -14){
        psdEnd()
    }
    psd.style.left= psdCnt + '%'; 

    countTS += 100;
    if(countTS === 100){
        TreachStart();
    }
    ts.style.left = countTS + 'vw';  
})

document.querySelector("#buttonsss2").addEventListener('click',function(){


    psdCnt +=14
    if(psdCnt === 98){
        psdStart()
    }
    psd.style.left = psdCnt + '%';  
  

    countTS -= 100;
    if(countTS === -700){
        TreachEnd();
    }
    ts.style.left = countTS + 'vw';  
})

function psdEnd(){
    psdCnt = 84;
}
function psdStart(){
    psdCnt = 0;
}

function TreachEnd(){
    countTS = 0;
}
function TreachStart(){
    countTS = -600;
}

function movingTestimonials(){
    document.querySelector("#buttonsss2").click();
}

setInterval(movingTestimonials,7000);



document.addEventListener("DOMContentLoaded", function() {
    const scrollRight = document.getElementById("scrollRight");
    const productListContainer = document.querySelector(".product-list-container");
  
    console.log("Initial Scroll Left:", productListContainer.scrollLeft);
  
    scrollRight.addEventListener("click", function() {
      console.log("Clicked!");
      productListContainer.scrollBy({
        top: 0, 
        left: 620, 
        behavior: 'smooth'
      });
      console.log("Scroll Left After:", productListContainer.scrollLeft);
    });
  });
  