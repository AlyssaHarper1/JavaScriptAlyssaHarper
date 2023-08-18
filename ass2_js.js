var header = "<h1>Module 2 Assignment</h>";
const piValue = Math.PI;

var myArea = (myFavNum, piValue) => {
  return pi * myFavNum * myFavNum;
}

let fName = window.prompt ("What is your first name?", " ");
let myFavNum = prompt("What is your favorite number?");

if ((fName === null) || (fName === " ")){
  document.write(`"Hello random stranger! You entered ${myFavNum} as your
  favorite number. If that was the radius of a circle the area would be ${myArea}."`);
} else
document.write(`"Hello ${fName}, you entered ${myFavNum} as your favorite
number. If that was the radius of a circle the area would be ${myArea}."`);
}
