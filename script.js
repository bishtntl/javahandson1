
let initialvalue=100
let highscore = 0;
let markvalue=null;
let findnumber=0;
let chance =0;


function random(n){
   return Math.floor(Math.random()*n)+1
}
 var randomnumber= random(100);
 console.log(randomnumber)

function check(){
    let inputnumber=document.getElementById("findnumber").value
    if(inputnumber!==0){
        if(inputnumber > randomnumber){
            document.querySelector(".massage").innerHTML="Your Guess is High"
            document.querySelector(".decrease").textContent=
            --initialvalue;

        }
       else if(inputnumber < randomnumber){
            document.querySelector(".massage").innerHTML="Your Guess is Low"
            document.querySelector(".decrease").textContent=
            --initialvalue;

        }
        else{
            document.body.style.backgroundColor="green"
            document.querySelector(".massage").innerHTML="😎😎Hurry You Won😎😎"
            document.querySelector(".decrease").textContent= --initialvalue
           document.querySelector(".guess").style.visibility="hidden";
           highscore=initialvalue
            document.querySelector(".high").textContent=highscore

            inputnumber=randomnumber
            document.querySelector("#mark").innerHTML=inputnumber;
            
         document.querySelector(".mark").
         markvalue==initialvalue

         
         

            // highscore=initialvalue
            // document.querySelector(".btn").style.visibility ="hidden";
          
        }


    }
    else{
        document.querySelector(".massage").textContent="Game over😓😓"
    }
}
function changeme(){
    initialvalue=100
    randomnumber= random(100);
    console.log(randomnumber)
    document.body.style.backgroundColor="coral"
    

    document.querySelector(".massage").innerHTML="Start Gussing"

    document.querySelector("#findnumber").innerHTML=findnumber

    document.getElementById("findnumber").value="";
    
    document.querySelector(".decrease").textContent=100;

    highscore=initialvalue
            document.querySelector(".high").textContent=highscore

           
            document.querySelector("#mark").innerHTML="?"
}
