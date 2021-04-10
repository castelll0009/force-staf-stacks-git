/* DECLARACION DE FUNCIONES Y VARIABLES GLOBALES*/
var step1 = document.getElementById("step1");
var step2 =  document.getElementById("step2");
var step3 =  document.getElementById("step3");
var step4 =  document.getElementById("step4");
var step5 =  document.getElementById("step5");
var buttonPreviusPC = document.getElementById("button-previus-pc"); //boton pc
var buttonPreviusAndroid = document.getElementById("button-previus"); // boton android resolution
var stepcurrent = 1;
var anchoVentana = window.innerWidth;

const funcion1 = () => {
    alert("funcion1");    
  }
  
  const funcion2 = () => {
    alert("funcion2");
  }
  
  const funcion3 = () => {
    alert("funcion3");
  }

function gotoNextStep(Pstepcurrent){
    switch(Pstepcurrent){
        case 1:      
            step1.style ="display: none";
            step2.style ="display: block";  
            stepcurrent = 2;   
        break;
        case 2:
            step2.style ="display: none";
            step3.style ="display: block";     
            stepcurrent= 3;  
        break;
        case 3:
            step3.style ="display: none";
            step4.style ="display: block";   
            stepcurrent= 4;   
        break;
        case 4:
            step4.style ="display: none";
            step5.style ="display: block";     
            stepcurrent= 5; 
        break;
        case 5:
            step5.style ="display: none";
            step6.style ="display: block";     
        break;
        case 6:
        break;     
    }
}

function gotoStepPrevius(Pstepcurrent){
    switch(Pstepcurrent){
        case 1:          
        break;
        case 2:
            step1.style ="display: block";
            step2.style ="display: none";  
            stepcurrent = 1;
        break;
        case 3:
            step2.style ="display: block";
            step3.style ="display: none";  
            stepcurrent = 2;
        break;
        case 4:            
            step3.style ="display: block";
            step4.style ="display: none";  
            stepcurrent = 3;
        break;
        case 5:
            step4.style ="display: block";
            step5.style ="display: none";  
            stepcurrent = 4;
        break;
        case 6:
        break;     
    }
}

/*ir hacia atras cuando presiono boton previus anddroid o pc*/
buttonPreviusAndroid.onclick = function(){
    gotoStepPrevius(stepcurrent);    
}
buttonPreviusPC.onclick = function(){
    gotoStepPrevius(stepcurrent);    
}
/*pra ocultar el boton de ir hacia trans antes del step 1*/

/* IMPLEMENTACION O LLAMADO DE LAS FUNCIONES*/
buttonPreviusAndroid.style = "display: none";   

function handleClick(element){
/* significa que ya sali delpaso 1*/        
    if(element == 'youtube'){                
        gotoNextStep(stepcurrent);        
    }
    if(element == 'hbomax'){
        gotoNextStep(stepcurrent);
    }
    if(element == 'netflix'){
        gotoNextStep(stepcurrent);
    }
    if(element == 'disney'){
        gotoNextStep(stepcurrent);
    }
    if(element == 'spotify'){
        gotoNextStep(stepcurrent);
    }
    if(element == 'crunchyroll'){
        gotoNextStep(stepcurrent);
    }
    if(element == 'primevideo'){
        gotoNextStep(stepcurrent);
    }    
    
}

/* diferentes comportamientos dependiento de la resolucion de lapantalla*/

window.onresize = function(){

    anchoVentana = window.innerWidth;
    console.log(anchoVentana); 

    if(anchoVentana > 1000){        
        funcion1();
      }else if(anchoVentana > 700 && anchoVentana < 1000){
        funcion2();
      }else{
        funcion3();
      }
};

   /*
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');    
        function reportWindowSize() {                
            heightOutput.textContent = window.innerHeight;
            widthOutput.textContent = window.innerWidth;  
            if(widthOutput.textContent <= 700){
                buttonPreviusPC.style = "display: none";  
                buttonPreviusAndroid.style = "display: block"; 
            }else{
                buttonPreviusPC.style = "display: block";  
                buttonPreviusAndroid.style = "display: none"; 
            }
        }  
       
window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);
*/
