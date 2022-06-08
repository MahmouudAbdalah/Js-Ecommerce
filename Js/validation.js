
var RegExpFirstName=/^[A-Za-z]{3,10}$/;
var RegExpLastName=/^[A-Za-z]{3,10}$/;
var RegExpEmail = /^[a-zA-Z]{3,10}@[a-zA-Z]{3,6}.com/;

var RegExpPassword = /^[0-9]{8,}/;


var forms=document.forms[0];
var spans = document.getElementsByTagName("span");
var flag = false;

/*forms.elements[0].value="Hello"*/

// console.log( document.getElementsByTagName("span")[0].innerHTML.style.display="block");
submit.addEventListener('click', function(){
    
   
    if(!(RegExpFirstName.test(forms.elements[0].value)))
    { spans[0].style.display="block";
   flag=false;
   }
    else{  spans[0].style.display="none";
       flag=true;

   }  



    
       if(!(RegExpLastName.test(forms.elements[1].value)))
   { spans[1].style.display="block";
   flag=false;
}
    else{  spans[1].style.display="none";
      flag=true;
}   





      if(!(RegExpEmail.test(forms.elements[2].value)))
    { spans[2].style.display="block";
      flag=false;
}
    else{  spans[2].style.display="none";
      flag=true;
}  
    
    


     if(!(RegExpPassword.test(forms.elements[3].value)))
    { spans[3].style.display="block";
      flag=false;
}
    else{  spans[3].style.display="none";
      flag=true;
}  
 
    if(!(forms.elements[4].value !=""))
   { spans[4].style.display="block";
   flag=false;
}
    else{  spans[4].style.display="none";
      flag=true;
}   

   if(!(forms.elements[5].value!=""))
 { spans[5].style.display="block";
   flag=false;
}
    else{  spans[5].style.display="none";
      flag=true;
}  

      if(!(forms.elements[6].selected))
   { spans[6].style.display="block";
   flag=false;
}
    else{  spans[6].style.display="none";
      flag=true;
}  

     if(!(forms.elements[7].value!=""))
    { spans[7].style.display="block";
      flag=false;
}
    else{  spans[7].style.display="none";
      flag=true;
}  

    if(flag){
 window.location.href = "index.html";}  
 })