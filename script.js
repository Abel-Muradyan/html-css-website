
var x = document.getElementById('btn');

 function functionScroll(){
    if(document.body.scrollTop > 20|| document.documentElement.scrollTop > 20){
        x.style.display = 'block'
    }
    else{
        x.style.display = 'none'
    }
 }
    
 window.onscroll = function(){
    functionScroll()
 }

 function topFunc(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
 }


 function myFunction(nkar){
   var myImg2 = document.getElementById('myImg2');
   myImg2.src = nkar.src;
   myImg2.parentElement.style.display = "block"
}