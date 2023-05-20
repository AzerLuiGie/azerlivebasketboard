
//prompt("Welcome");

document.querySelector("#container3").style.display = "none";
document.querySelector("#container4").style.display = "none";
document.querySelector("#container5").style.display = "none";

document.querySelector("#point1").style.display = "none";
document.querySelector("#point2").style.display = "none";

let pointsData = document.getElementById("point1").innerHTML;
let pointsData2 = document.getElementById("point2").innerHTML;
let errorMsg = document.querySelector("#error");

//Adds
let buttonPlusOne = document.querySelector("#add1");
let buttonPlusTwo = document.querySelector("#add2");
let buttonPlusThree = document.querySelector("#add3");

let buttonPlusOne2 = document.querySelector("#add1-clone");
let buttonPlusTwo2 = document.querySelector("#add2-clone");
let buttonPlusThree2 = document.querySelector("#add3-clone");

//Sub
let buttonMinusOne = document.querySelector("#sub1");
let buttonMinusOneClone = document.querySelector("#sub1-clone");

let teamNameButton1 = document.querySelector("#teamName1");

//Team Names
let teamButton = document.querySelector("#btn");
let teamValue1 = document.querySelector("#teamName1");
let teamValue2 = document.querySelector("#teamName2");

//Reset / New Game
let resetGame = document.querySelector("#reset");





//Team1
//Adds
buttonPlusOne.addEventListener("click", () => {
   
  pointsData = parseInt(pointsData + 1);
  document.getElementById("point1").innerHTML = pointsData;
  document.getElementById("sub1").disabled = false;

  document.querySelector("#point1").style.display = "flex";

  console.log("Team 1 Add Points: ",pointsData);
  console.debug(pointsData);
  

}
)

buttonPlusTwo.addEventListener("click", () => {
   
  pointsData = parseInt(pointsData + 2);
  document.getElementById("point1").innerHTML = pointsData;
  document.getElementById("sub1").disabled = false;

  document.querySelector("#point1").style.display = "flex";

  console.log("Team 1 Add Points: ",pointsData);
  console.debug(pointsData);
  
  }
  )

  buttonPlusThree.addEventListener("click", () => {
   
    pointsData = parseInt(pointsData + 3);
    document.getElementById("point1").innerHTML = pointsData;
    document.getElementById("sub1").disabled = false;

    document.querySelector("#point1").style.display = "flex";

    console.log("Team 1 Add Points: ",pointsData);
    console.debug(pointsData);
  
  }
  )


//Subtract
buttonMinusOne.addEventListener("click", () => {
   
  pointsData = parseInt(pointsData - 1);
    
    if(pointsData == 0){
      document.getElementById("point1").innerHTML = null;
      document.getElementById("sub1").disabled = true;
      //document.getElementById("reset").click();
    }
    else{
      document.getElementById("point1").innerHTML = pointsData;
      console.log("Team 1 Minus Points: ",pointsData);
    }
  
  }
  )





//Team2
//Adds
buttonPlusOne2.addEventListener("click", () => {
   
  pointsData2 = parseInt(pointsData2 + 1);
  document.getElementById("point2").innerHTML = pointsData2;
  document.getElementById("sub1-clone").disabled = false;

  document.querySelector("#point2").style.display = "flex";

  console.log("Team 2 Add Points: ",pointsData2);
  console.debug(pointsData2);
  

}
)

buttonPlusTwo2.addEventListener("click", () => {
   
  pointsData2 = parseInt(pointsData2 + 2);
  document.getElementById("point2").innerHTML = pointsData2;
  document.getElementById("sub1-clone").disabled = false;

  document.querySelector("#point2").style.display = "flex";

  console.log("Team 2 Add Points: ",pointsData2);
  console.debug(pointsData2);
  
  }
  )

  buttonPlusThree2.addEventListener("click", () => {
   
    pointsData2 = parseInt(pointsData2 + 3);
    document.getElementById("point2").innerHTML = pointsData2;
    document.getElementById("sub1-clone").disabled = false;

    document.querySelector("#point2").style.display = "flex";

    console.log("Team 2 Add Points: ",pointsData2);
    console.debug(pointsData2);
  
  }
  )


//Subtract
buttonMinusOneClone.addEventListener("click", () => {
   
  pointsData2 = parseInt(pointsData2 - 1);
    
    if(pointsData2 == 0){
      document.getElementById("point2").innerHTML = null;
      document.getElementById("sub1-clone").disabled = true;
      //document.getElementById("reset").click();
    }
    else{
      document.getElementById("point2").innerHTML = pointsData2;
      console.log("Team 2 Minus Points: ",pointsData2);
    }
  
  }
  )

  
  teamButton.addEventListener("click", ()=> {
    
     if(teamValue1.value == 0 || teamValue2.value == 0){
        errorMsg = document.getElementById("error").innerHTML = "Names Required!";
        //alert("Enter Team Names!");
        console.log("Team Names Required!");
     }
     else if(teamValue1.value == teamValue2.value){
        errorMsg = document.getElementById("error").innerHTML = "Names are the same!";
        console.log("Team Names are the same!");
     }
     else{
        //alert("Live Score Board Created");
        value1 = document.getElementById("teamName1").value;
        value2 = document.getElementById("teamName2").value;

        document.getElementById("teamLabel1").innerHTML = value1.toUpperCase();
        document.getElementById("teamLabel2").innerHTML = value2.toUpperCase();

        document.getElementById("teamName1").value = null;
        document.getElementById("teamName2").value = null;
        
        document.querySelector("#container3").style.display = "flex";
        document.querySelector("#container4").style.display = "flex";
        document.querySelector("#container5").style.display = "flex";
        
        document.querySelector("#container2").style.display = "none";
        //document.querySelector("#container").style.display = "none";

        

       
     }


  }
  )
  
    
resetGame.addEventListener("click", (event)=> {
   
  if (!confirm('You want to stop the game and create a new one? \n If you click "OK" the game will restart. \n If you click "Cancel" the game will continue. ')) {
    event.preventDefault();
  }
  

})

const today = new Date();
const yyyy = today.getFullYear();
let month1 = today.getMonth() + 1; 
let day1 = today.getDate();

if (day1 < 10) day1 = '0' + day1;
if (month1 < 10) month1 = '0' + month1;

const formattedToday = month1 + '-' + day1 + '-' + yyyy;

document.getElementById("date").innerHTML = formattedToday;
