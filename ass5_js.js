//object literal
let myDog = {
  name: "Cosmo",
  mySound: "I am not scary",
  orgin: "Guardians of the Galaxy",
  type: "Golden Retriever",
};
document.write("Hello Earthling, my name is <font color=purple>" + myDog.name + "</font>. When I bark <font color=purple>"
 + myDog.mySound + "</font>, but I normally use my collar to communicate telepathically.<br>");
 document.write(" I starred in the movie, <font color=purple>" + "<i>" + myDog.orgin + "</font></i>.");
 document.write(" My character was a <font color=purple>" + myDog.type + "</font>.")
 document.write(" I was the (very good) dog in a space suit that lived in Knowhere.");
//simple constructor
function myDogConst(nname, sound, ori, breed){
  this.nname=nname;
  this.sound = sound;
  this.ori = ori;
  this.breed=breed;
  this.myGreeting=function(){
    document.write("<br><br>Hello Earthling, my name is <font color=blue>" + this.nname + "</font>. When I bark <font color=blue>"
     + this.sound + "</font>, but I normally use my collar to communicate telepathically.<br>");
     document.write(" I starred in the movie, <font color=blue>" + "<i>" + this.ori + "</font></i>.");
     document.write(" My character was a <font color=blue>" + this.breed + "</font>.")
     document.write(" I was the (very good) dog in a space suit that lived in Knowhere.");
  };
}

myDogConst.prototype.canTalk = "English";
let my_dog = new myDogConst("Cosmo", "I am not scary", "Guardians of the Galaxy", "Golden Retriever");
document.write(my_dog.hasOwnProperty("Talks"));//false
my_dog.myGreeting();
