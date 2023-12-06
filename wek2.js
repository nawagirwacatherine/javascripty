//var age = 10;
if (age >= 65){
console.log("you get your income from your pension")
}
else if (age<65 && age>=18){
    console.log("Each month you get a salary")
}
else if (age<18){
    console.log("you get an allowance")
}
else {
    console.log("The value of the age variable is not numerical")
}//

var day = "sunday";
switch(day){
    case('monday'):
    console.log('country music');
    break;

    case('tuesday'):
     console.log('rnd');
     break;

     case('wednesday'):
     console.log('fresh hits');
     break;

     case('thursday'):
     console.log('old school music');
     break;

     case("friday"):
     console.log('gym');
     break;

     case("saturday"):
     console.log("clubbing");
     break;
      
     case("sunday"):
     console.log("church");
     break;

     default:
        console.log('There is no such a day');
        break;
}