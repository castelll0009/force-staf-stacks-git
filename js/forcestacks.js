/* DECLARACION DE FUNCIONES Y VARIABLES GLOBALES*/
var step1 = document.getElementById("step1");
var step2 =  document.getElementById("step2");
var step3 =  document.getElementById("step3");
var step4 =  document.getElementById("step4");
var step5 =  document.getElementById("step5");


function gotoStep2(){
    step1.style ="display: none";
    step2.style ="display: block";
}

var buttonPreviusPC = document.getElementById("button-previus-pc");

var stepcurrent = 1;
function navigation(stepcurrent){        
    if(stepcurrent == 1)
        buttonPreviusPC.style = "display: none";    
}
/* IMPLEMENTACION O LLAMADO DE LAS FUNCIONES*/
navigation();

function handleClick(element){
/*    element.style="display:none;"**/    
    if(element == 'youtube'){
        gotoStep2();        
    }
    if(element == 'hbomax'){
        gotoStep2();
    }
    if(element == 'netflix'){
        gotoStep2();
    }
    if(element == 'disney'){
        gotoStep2();
    }
    if(element == 'spotify'){
        gotoStep2();
    }
    if(element == 'crunchyroll'){
        gotoStep2();
    }
    if(element == 'primevideo'){
        gotoStep2();
    }
    
}


