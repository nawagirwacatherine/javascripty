// Task 1: Build a function-based console log message generator
function consoleStyler(cl, bg, fs, txt) {
    var message = "%c" + txt;
    var style = `color: ${cl};`;
         style += `background: ${bg};`;
         style += `font-size:${fs};`;

    console.log(message,style);
        
}
consoleStyler('red','grey','15px','happybirthday');



// // Task 2: Build another console log message generator

// function celebrateStyler(reason) {
//     var fontstyle = "color:tomato; fontsize:5px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontstyle)
//     }

//     else if(reason == "champions"){
//         console.log(`%c congrats on the title!`, fontstyle);
//     }
//          else {
//         console.log(message,style);
//     }
// }



// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#id5c63','#ede6db','40px','congrats!');
// celebrateStyler('birthday');


// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontsize, txt, reason) {
//     consoleStyler = (color, background, fontsize, txt );
//     celebrateStyler = (reason);

// }

  

// // Call styleAndCelebrate
// consoleStyler('ef7c8e', 'fae8eo', '30', 'you made it!');
// celebrateStyler('champions');


// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');