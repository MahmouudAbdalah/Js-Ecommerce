
/*Image Array*/
var ImagesArray = ["Images/1.jpg","Images/2.jpg","Images/3.jpg","Images/4.png","Images/5.png","Images/7.jpg","Images/8.jpg","Images/9.jpg"]
var i=0;
 setInterval("next()",10000);

function prev() {
    i--;
    if (i < 0) i = ImagesArray.length-1;
    var images = document.querySelector(".landing");
   images.style.backgroundImage=`url("${ImagesArray[i]}")`;
}
 function next() {
    i++;
    if(i>=ImagesArray.length)i=0;
    var images = document.querySelector(".landing");
   images.style.backgroundImage=`url("${ImagesArray[i]}")`;
} 
btntwo.addEventListener('click',next);
btnone.addEventListener("click",prev);

var allcategory= document.getElementById("all");
var menfilter= document.getElementById("menfilter");
var womenfilter= document.getElementById("womenfilter");
var otherfilter= document.getElementById("otherfilter");

var men=document.querySelectorAll('.men');
var women=document.querySelectorAll('.women');
var other=document.querySelectorAll('.others');

menfilter.addEventListener('click',function(e){
men.forEach(e=>{ e.style.display="block";});

women.forEach(e=>{ e.style.display="none";});
other.forEach(e=>{e.style.display="none";});
});

womenfilter.addEventListener('click',function(e){
   women.forEach(e=>{ e.style.display="block";});

men.forEach(e=>{e.style.display="none";});
other.forEach(e=>{e.style.display="none";});
});

otherfilter.addEventListener('click',function(e){
  other.forEach(e=>{e.style.display="block";}); 
women.forEach(e=>{e.style.display="none";})
men.forEach(e=>{e.style.display="none";});
})

allcategory.addEventListener('click',function(e){
women.forEach(e=>{e.style.display="block"});
men.forEach(e=>{e.style.display="block"});
other.forEach(e=>{e.style.display="block"})
})
var btn= document.getElementById("up")
window.onscroll=function(e){
if(window.scrollY>=600){
   btn.style.display="block";
}
else{   btn.style.display="none";}
}
btn.onclick=function(){
   window.scrollTo({
      left:0,
      top:0,
      behavior:"smooth"
   });
}

