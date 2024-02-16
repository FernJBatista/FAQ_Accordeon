// This puts every accordeon class from html inside the acc variable
let acc = document.getElementsByClassName("accordion");

let i;

// This lines loops through every element stored inside acc
for (i = 0; i < acc.length; i++) {

    /* For each acc element, this line adds an event listener for the "click" event
    this basically means that when a "click event occurs on any of these elements,
    the function provided as the second argument will be executed*/
    acc[i].addEventListener("click", function() {

        /* Inside the event listener function, "this" refers to the current element
         was clicked. "classList.toggle()" toggles the presence of the class "active"
         on that element. This is used to add or remove a CSS class dynamically*/
        this.classList.toggle("active");

        /* This line selects the next sibling elements of the clicked button. In this
        case the <div class="panel"> is the next sibling element.*/
        let panel = this.nextElementSibling;

        /* This asigns the img element inside button to the icon variable. */
        let icon = this.querySelector("img");
        
        
        /* This conditional statement checks the current display style of the panel.
        If it's currently set to "block", it changes it to "none"(which hides the
        panel), and vice versa. This creates the effect of the accordion by showing
        or hiding the ponel when tu button is clicked. */
        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon.src = "./CSS/images/icon.plus.svg"; // Sets the icon for the closed state
            icon.alt = "Open-FAQ-Icon"; // Set alt text to "open" state 

        } else {
            panel.style.display = "block";
            icon.src = "./CSS/images/icon.minus.svg" // Sets the icon for the open state
            icon.alt = "Close-FAQ-Icon"; // Set alt text to "closed" state 
        }
    });
}


// Try this code to see if it gives the interaction an animation.
/*
if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
*/