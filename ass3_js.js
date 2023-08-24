//for loop for odds and even numbers
let i = 0;
for (i=0;i<11;i++){
  if ((i===0) || (i===2) || (i===4) || (i===6) || (i===8) || (i===10)){
    document.write("<br>Count " +i + " is even.");
  } else{
  document.write( "<br>Count " +i +" is odd.");
}
}
//end of for loop for odds and evens
//number prompt
document.write("<br>");
document.write("<br>");
let a = 1;
var myNum=prompt("Guess a number between 5 and 20");

// while loop from i = 1 to 5
do {
    document.write(a+" ");
    a += 1;
}while (a <= myNum);
//end of number prompt
//array
let text = "";
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
subjects.forEach(myFunction);

document.getElementById("array").innerHTML = text;
function myFunction(item) {
  text += item + ", ";
}
