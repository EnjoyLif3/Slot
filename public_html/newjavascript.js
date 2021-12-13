function symbal(){
    var options = ["Cherries","Oranges","Plums","Bells","Mellons","Bars"]; 
    return options[Math.floor(Math.random()*options.length)];
}


var bet = Number(prompt("Enter your bet"));


var spinOne =symbal(); 
var spinTwo =symbal();
var spinThree =symbal();

var points = 0;  

if(spinOne===spinTwo && spinTwo===spinThree) { 
    points = bet*3; 
} else if (spinOne === spinTwo) {
    points = bet*2;
} else if (spinTwo===spinThree) {
    points = bet*2;
} else if (spinThree === spinOne) {
    points = bet*2;
}

document.write(spinOne+" "+spinTwo+" "+spinThree);
document.write("<br>"+"Your point total is " + points); 


