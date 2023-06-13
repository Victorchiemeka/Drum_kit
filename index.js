// declaring a variable that selects the class drum
let drums = document.querySelectorAll(".drum");

// a loop that iterates through all the drum classes and using the length to get the numbers
for (let x = 0; x < drums.length; x++) {
  
  // selecting all the items in the drum class by putting them in an array
  // and adding an event listener on click to the drum class 
  drums[x].addEventListener("click", (event) => {

    // declared a variable that stores the element between opening and closing tags
    let buttonInnerHTML = event.target.innerHTML;

    // a conditional statement that checks for each clicked element 
    switch (buttonInnerHTML) {
      
      // each case adds a sound to a different drum element that is clicked 
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        var crash = new Audio('sounds/kick-bass.mp3');
        crash.play();
        break;
      case "l":
        var kick = new Audio('sounds/crash.mp3');
        kick.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
}
