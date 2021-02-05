function  myStyleNumber(){
     document.getElementById("lebel").style.display="block";
  
}
function  myStyleName(){
     document.getElementById("lebel2").style.display="block";
  
}
function  myStyleEmail(){
    document.getElementById("lebel3").style.display="block";
 
}
console.log("xyz");


function validateNumber(){
    var myNumber = document.getElementById("number").value;
   console.log(myNumber);
  
    if (  myNumber.match("/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/")){
        document.getElementByTagName(small).style.visibility="visible";
    // else{
    //     document.getElementsByClassName(".mycontrol.success input").style.borderColor="green";
    // }
    }
}