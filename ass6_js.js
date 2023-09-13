//simple constructor
function myDogConst(name, sound, origin, breed, canTalk){
  this.name=name;
  this.sound = sound;
  this.origin = origin;
  this.breed=breed;
  this.canTalk=canTalk;
  this.myGreeting=function(){
    document.write("<br>Hello human, my name is <font color=blue>" + this.name + "</font>. When I bark <font color=blue>"
     + this.sound + "</font>.<br>");
     document.write(" I starred in the movie, <font color=blue>" + "<i>" + this.origin + "</font></i>.");
     document.write(" My character was a <font color=blue>" + this.breed + "</font>.");

  };
}
let first_dog = new myDogConst("Cosmo", "I am not scary", "Guardians of the Galaxy", "Golden Retriever", "No");
let second_dog= new myDogConst("Beethoven", "I am not scary", "Beethoven", "St.Bernard", "Yes");
let third_dog= new myDogConst("Bluey", "I am not scary", "Bluey", "Australian Cattle Dog", "Yes");

//conditional statement to determine if dog can talk
if (this.canTalk==="Yes"){
  document.write("<br>I can talk!<br><br>");
first_dog.myGreeting();
}else{
  document.write("<br>I can not talk!<br><br>");
}
//for in loop to display property and value in object
for(let prop_name in first_dog){
  document.write(prop_name + ": " + first_dog[prop_name] + "<br>");
}
//user prompt to select dog
var nname= prompt("Enter one of the following: Cosmo, Beethoven, or Bluey");
if (nname==="Cosmo"){
  document.write(first_dog.myGreeting());
} else if (nname==="Beethoven"){
    document.write(second_dog.myGreeting());
}else if (nname==="Bluey"){
    document.write(third_dog.myGreeting());
} else{
  document.write("<br>Error that name does not exist!");
}
