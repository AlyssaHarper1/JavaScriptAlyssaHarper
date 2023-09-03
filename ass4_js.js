


function validAmount() {
  // Get the value of the input field with id="numb"
let x = document.getElementById("numb").value;
  // If x is Not a Number or less than 5.00 or greater than 500.00
  let text;
  if (isNaN(x) || x < 5.00 || x > 500.00) {
    text = "The amount entered must between $5.00 and $500.00";
  } else {
    text = "The amount you entered is: " + x;
  }
  document.getElementById("demo").innerHTML = text;


function validService() {
  // Get the value of the input field with id="service"
let i = document.getElementById("service").value;
  // If i is Not a Number or less than one or greater than 3
  let tex;

  if (isNaN(i) || i < 1 || i > 3) {
    tex = "Incorrect number entered";
  } else {
    tex = "You entered: " + i;
  }
  document.getElementById("demo2").innerHTML = tex;
function calcTip(){
  if (i===1){
    document.write("Im glad your service was great! The recommended tip is 20%. The
    amount you entered is:  " + x + " And the tip would be: " + (x * 0.20) ;
  }else if(i===2){
    document.write("Im sorry your service was only Ok! The recommended tip is 20%. The
    amount you entered is:  " + x + " And the tip would be: " + (x * 0.15) ;
  } else {
    document.write("Im sorry your service was poor! The recommended tip is 10%.  The
    amount you entered is:  " + x + " And the tip would be: " + (x * 0.10) ;
  }
}
}
}
