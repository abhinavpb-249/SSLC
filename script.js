  //Mathjax
  window.MathJax = {
  tex: {
    inlineMath: [ ['$','$'],['\\(','\\)'] ],
    displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
    processEscapes: true,      
    processEnvironments: true, 
    processRefs: true       
  },
  options: {
   ignoreHtmlClass: 'tex2jax_ignore|editor-rich-text'
  }
};
  
//confetti    

  const canvas = document.querySelector('#confetti');

  const jsConfetti = new JSConfetti();



 clicked = false


 /*
 if (window.matchMedia("(max-width: 767px)").matches){
 document.getElementById("result").style.width="90%";
 document.getElementsByClassName("blue_box")[0].style.width="90%";
 document.getElementsByClassName("input_form")[0].style.width="50%";
 document.getElementsByClassName("input").style.width="20%";
 document.getElementById("table").style.width="90%";
 
 }
 */
  const grade_input = document.getElementById("grade-input"); 
  const classic_input = document.getElementById("classic-input"); 
  const grade_result = document.getElementById("grade-result"); 
  const classic_result = document.getElementById("classic-result"); 
  const radio_division = document.getElementsByClassName("input-selector")[0];
  const classic_radio = document.getElementById("classic-radio");
  const grade_radio = document.getElementById("grade-radio");
  const details = document.getElementById("details");


//show grade-input when window loads and hides classic-input
  if(grade_radio.checked){
   grade_input.style.display="block";
   classic_input.style.display="none";

}else if (classic_radio.checked) {
classic_input.style.display="block";
grade_input.style.display="none";
}



radio_division.addEventListener("click",radiochange)

function radiochange(){

   if(grade_radio.checked){
      grade_input.style.display="block";
      classic_input.style.display="none";

   }else if (classic_radio.checked) {
      classic_input.style.display="block";
      grade_input.style.display="none";
 }

}


function new_output(){
   result.style.display="block";


   S1  = document.getElementById('S1').value;
   S2  = document.getElementById('S2').value;
   S3  = document.getElementById('S3').value;
   S4  = document.getElementById('S4').value;
   S5  = document.getElementById('S5').value;
   S6  = document.getElementById('S6').value;
   S7  = document.getElementById('S7').value;
   S8  = document.getElementById('S8').value;
   S9  = document.getElementById('S9').value;
   S10 = document.getElementById('S10').value;


S1  = parseInt(S1);
S2  = parseInt(S2);
S3  = parseInt(S3);
S4  = parseInt(S4);
S5  = parseInt(S5);
S6  = parseInt(S6);
S7  = parseInt(S7);
S8  = parseInt(S8);
S9  = parseInt(S9);
S10 = parseInt(S10);


finalresult = (S1+S2+S3+S4+S5+S6+S7+S8+S9+S10)/10;
 
finalresult = finalresult.toFixed();  

finalresult = parseInt(finalresult);

finalresult=finalresult+"%-"+(finalresult+10)+"%";

result.innerHTML = finalresult;

//Aplus counter

const subjects = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];

var Aplus  = 0;
var Agrade = 0;
var Bplus  = 0;
var Bgrade = 0;
var Cplus  = 0;
var Cgrade = 0;
var Dplus  = 0;
var Dgrade = 0;
var Egrade = 0;


for (let i=0; i<subjects.length;i++) {
  if(subjects[i]==90){Aplus+=1}
  if(subjects[i]==80){Agrade+=1}
  if(subjects[i]==70){Bplus+=1}
  if(subjects[i]==60){Bgrade+=1}
  if(subjects[i]==50){Cplus+=1}
  if(subjects[i]==40){Cgrade+=1}
  if(subjects[i]==30){Dplus+=1}
  if(subjects[i]==20){Dgrade+=1}
  if(subjects[i]==0){Egrade+=1}
}

var grade_total = Aplus+Agrade+Bplus+Bgrade+Cplus+Cgrade+Dplus+Dgrade+Egrade;

console.log(grade_total); //This should always be 10

if(grade_total==10){ //if entered value is correct

  result.innerHTML = finalresult;

  
   if (Dgrade==0 && Egrade==0)
                       { //If they pass
                       details.innerHTML = "You have passed the SSLC examination" ;
                       details.style.color="#003300";
                       result.style.color="green"; 
                       jsConfetti.addConfetti() ;
   }
   else {   //If they fail
           details.innerHTML = "You have to apppear for the SAY exam to be eligible for higher studies";
           result.style.color="black";
           details.style.color="red";
   }
    
    clicked= true; //used to check before sharing. The finalresult is only shared if this condition is satisfied
    
   }

else  {  //if incorrect
result.innerHTML = "error";
result.style.color="red";
details.innerHTML = "Total number of subjects doesn't add upto 10" ;
} 


} //end of new output
     


function output(){
   result.style.display="block";


   Ap = document.getElementById('A+').value;
   Ag = document.getElementById('A').value;
   Bp = document.getElementById('B+').value;
   Bg = document.getElementById('B').value;
   Cp = document.getElementById('C+').value;
   Cg = document.getElementById('C').value;
   Dp = document.getElementById('D+').value;
   Dg = document.getElementById('D').value;
   Eg = document.getElementById('E').value;
    
  
  Ap = parseInt(Ap);
  Ag = parseInt(Ag);
  Bp = parseInt(Bp);
  Bg = parseInt(Bg);
  Cp = parseInt(Cp);
  Cg = parseInt(Cg);
  Dp = parseInt(Dp);
  Dg = parseInt(Dg);
  Eg = parseInt(Eg);
  

   total = Ap+Ag+Bp+Bg+Cp+Cg+Dp+Dg+Eg;
   console.log("total:  "+total);
  
  
  
 finalresult = 
      100/90*(9*(Ap) + 8*(Ag) + 7*(Bp)+ 6*(Bg)+ 5*(Cp)+ 4*(Cg)+ 3*(Dp)+ 2*(Dg)+ 1*(Eg) ) ;

finalresult = finalresult.toFixed();  

finalresult=(finalresult-10)+"%-"+finalresult+"%";

if(total==10){ //if entered value is correct

             result.innerHTML = finalresult;
  
             
              if (Dg==0 && Eg==0)
                                  { //If they pass
                                  details.innerHTML = "You have passed the SSLC examination" ;
                                  details.style.color="#003300";
                                  result.style.color="green"; 
                                  jsConfetti.addConfetti() ;
              }
              else {   //If they fail
                      details.innerHTML = "You have to apppear for the SAY exam to be eligible for higher studies";
                      result.style.color="black";
                      details.style.color="red";
              }
               
               clicked= true; //used to check before sharing. The finalresult is only shared if this condition is satisfied
               
              }
  
else  {  //if incorrect
        result.innerHTML = "error";
        result.style.color="red";
        details.innerHTML = "Total number of subjects doesn't add upto 10" ;
       } 
  

  
}


function share(){


  
         if(clicked==true){
               window.open(
                "https://api.whatsapp.com/send?text="+"I got "+finalresult+"% in SSLC. What about you?   "+"https://thesophile.github.io/SSLC/"
                ,'_blank');
         }
         
            
          else{ 
          
           window.open(
                "https://api.whatsapp.com/send?text=https://thesophile.github.io/SSLC/"
                ,'_blank');
           }     
                
                
        }
        
        
        

