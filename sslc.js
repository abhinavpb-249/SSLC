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


 
 if (window.matchMedia("(max-width: 767px)").matches){
 document.getElementById("result").style.width="90%";
 document.getElementsByClassName("blue_box")[0].style.width="90%";
 document.getElementsByClassName("input_form")[0].style.width="50%";
 document.getElementsByClassName("input").style.width="20%";
 document.getElementById("table").style.width="90%";
 
 }
     

function output(){
   
     Ap = document.getElementById('Ap').value;
     Ag = document.getElementById('Ag').value;
     Bp = document.getElementById('Bp').value;
     Bg = document.getElementById('Bg').value;
     Cp = document.getElementById('Cp').value;
     Cg = document.getElementById('Cg').value;
     Dp = document.getElementById('Dp').value;
     Dg = document.getElementById('Dg').value;
     Eg = document.getElementById('Eg').value;
  
  
  if (Ap.length ==0 )
     {Ap=0}
  if (Ag.length ==0 )
     {Ag=0}
  if (Bp.length ==0 )
     {Bp=0}
  if (Bg.length ==0 )
     {Bg=0}
  if (Cp.length ==0 )
     {Cp=0}
  if (Cg.length ==0 )
     {Cg=0}
  if (Dp.length ==0 )
     {Dp=0}
  if (Dg.length ==0 )
     {Dg=0}
  if (Eg.length ==0 )
     {Eg=0}
  
  
  Ap = parseFloat(Ap);
  Ag = parseFloat(Ag);
  Bp = parseFloat(Bp);
  Bg = parseFloat(Bg);
  Cp = parseFloat(Cp);
  Cg = parseFloat(Cg);
  Dp = parseFloat(Dp);
  Dg = parseFloat(Dg);
  Eg = parseFloat(Eg);
  
  
   total = Ap+Ag+Bp+Bg+Cp+Cg+Dp+Dg+Eg;
   console.log("total:  "+total);
  
  
  
 finalresult = 
      100/90*(9*parseInt(Ap) + 8*parseInt(Ag) + 7*parseInt(Bp)+ 6*parseInt(Bg)+ 5*parseInt(Cp)+ 4*parseInt(Cg)+ 3*parseInt(Dp)+ 2*parseInt(Dg)+ 1*parseInt(Eg) ) ;

finalresult = finalresult.toFixed();  

finalresult=(finalresult-10)+"%-"+finalresult;

if(total==10){

             document.getElementById('result').innerHTML = finalresult+"%";
  
             
              if ( (parseInt(Dg)+ parseInt(Eg))<10  )
                                  { 
                                  document.getElementById("details").innerHTML = "You have passed the SSLC examination" ;
                                    document.getElementById('result').style.color="green"; 
                                  jsConfetti.addConfetti() ;
                                   }
               else {document.getElementById("details").innerHTML = "You have to apppear for the SAY exam to be eligible for higher   studies"; }
               
               clicked= true; //used to check before sharing. The finalresult is only shared if this condition is satisfied
               
              }
  
else   {document.getElementById('result').innerHTML = "error";
       document.getElementById("details").innerHTML = "Total number of subjects doesn't add upto 10" ;
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
        
        
        

