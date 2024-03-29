var age = 10;
if (age>=65){
    console.log("You get your income from your pension");

}
else if(age<65 ||age>=18){
    console.log("Each month you get a salary.")
}
else if (age<18){
    console.log("You get an allowance.")
}

else {
    console.log("The value of the age variable is not numerical")
}


var day ="sunday";
switch(day){
    case"monday":
        console.log("Making a schedule for the week")
    
    break;
    case"Tuesday":
        console.log("All workers meeting");
    
    break;
    
    case"wednesday":
        console.log("Attending wednesday service");
    
    break;
    case"Thursday":
        console.log("going to work");
    
    break;
    case"Friday":
        console.log("gym and attending bible study");
    
    break;
    case"saturday":
        console.log("going to club");
    
    break;
    case"sunday":
        console.log("going to church");
    
    break;
    default:
        console.log("There is no such a day");
   
}