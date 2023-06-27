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
  
   
  clicked = false

  const canvas = document.querySelector('#confetti');     //confetti 
  const jsConfetti = new JSConfetti();

  const grade_input = document.getElementById("grade-input"); 
  const classic_input = document.getElementById("classic-input"); 
  const grade_result = document.getElementById("grade-result"); 
  const classic_result = document.getElementById("classic-result"); 
  const radio_division = document.getElementsByClassName("input-selector")[0];
  const classic_radio = document.getElementById("classic-radio");
  const grade_radio = document.getElementById("grade-radio");
  const details = document.getElementById("details");
  const grade_number = document.querySelector('#grade_number'); 
  const grade_output = document.querySelector('#grade_output');
  const science = document.getElementById("science");




radio_division.addEventListener("click",radiochange)

function radiochange(){

   if(grade_radio.checked){
    grade_input.style.rotate="y 0deg";
    classic_input.style.rotate="y 180deg";
      // grade_input.style.display="block";
      // classic_input.style.display="none";

   }else if (classic_radio.checked) {
    classic_input.style.rotate="y 0deg";
    grade_input.style.rotate="y 180deg";
      // classic_input.style.display="block";
      // grade_input.style.display="none";
 }

}


function new_output(){
   result.style.display="block";

   sub1  = document.getElementById("S1");
   sub2  = document.getElementById("S2");
   sub3  = document.getElementById("S3");
   sub4  = document.getElementById("S4");
   sub5  = document.getElementById("S5");
   sub6  = document.getElementById("S6");
   sub7  = document.getElementById("S7");
   sub8  = document.getElementById("S8");
   sub9  = document.getElementById("S9");
   sub10 = document.getElementById("S10");


   S1  = sub1.value;
   S2  = sub2.value;
   S3  = sub3.value;
   S4  = sub4.value;
   S5  = sub5.value;
   S6  = sub6.value;
   S7  = sub7.value;
   S8  = sub8.value;
   S9  = sub9.value;
   S10 = sub10.value;


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


var minimum = (S1+S2+S3+S4+S5+S6+S7+S8+S9+S10)*100/740;
 
minimum = minimum.toFixed();  

minimum = parseInt(minimum);

finalresult=`${minimum}%-${minimum+10}%`;

result.innerHTML = finalresult;

//Science stream percentage

var science_min = (S6+S7+S8)*100/150;

science_min = Math.round(science_min);

science.innerHTML = `Science stream Percentage: ${science_min}% - ${science_min+10}%` ;

//Aplus counter

// const subjects = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];

var Aplus  = 0;
var Agrade = 0;
var Bplus  = 0;
var Bgrade = 0;
var Cplus  = 0;
var Cgrade = 0;
var Dplus  = 0;
var Dgrade = 0;
var Egrade = 0;


var s1text  = sub1.options[sub1.selectedIndex].text;
var s2text  = sub2.options[sub2.selectedIndex].text;
var s3text  = sub3.options[sub3.selectedIndex].text;
var s4text  = sub4.options[sub4.selectedIndex].text;
var s5text  = sub5.options[sub5.selectedIndex].text;
var s6text  = sub6.options[sub6.selectedIndex].text;
var s7text  = sub7.options[sub7.selectedIndex].text;
var s8text  = sub8.options[sub8.selectedIndex].text;
var s9text  = sub9.options[sub9.selectedIndex].text;
var s10text = sub10.options[sub10.selectedIndex].text;

// console.log(s1text,s2text,s3text,s4text,s5text,s6text,s7text,s8text,s9text,s10text);

const selected_grade = [s1text,s2text,s3text,s4text,s5text,s6text,s7text,s8text,s9text,s10text];


for (let i=0; i<selected_grade.length;i++) {
  if(selected_grade[i]=="A+" ){Aplus+=1}
  if(selected_grade[i]=="A"){Agrade+=1}
  if(selected_grade[i]=="B+"){Bplus+=1}
  if(selected_grade[i]=="B"){Bgrade+=1}
  if(selected_grade[i]=="C+"){Cplus+=1}
  if(selected_grade[i]=="C"){Cgrade+=1}
  if(selected_grade[i]=="D+"){Dplus+=1}
  if(selected_grade[i]=="D"){Dgrade+=1}
  if(selected_grade[i]=="E"){Egrade+=1}
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

//Display number of grades

grade_number.innerHTML=""; //clears all the previous text, if any

const grades = [Aplus,Agrade,Bplus,Bgrade,Cplus,Cgrade,Dplus,Dgrade,Egrade]
const grades_text = [" A+"," A"," B+"," B"," C+"," C"," D+"," D"," E"]

for(i=0;i<grades.length;i++){
    if (grades[i]!=0){
    const para = document.createElement("div");
    const node = document.createTextNode(grades[i]+grades_text[i]);
    para.appendChild(node);
    grade_number.appendChild(para);
    }
}

grade_output.style.display="block";



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

finalresult=`${finalresult-10}%-${finalresult}%`;

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
        
        
        

