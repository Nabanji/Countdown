// Main container
const mainContainer = document.querySelector(".container");

// Event name Selector
const eventName = document.querySelector("#event");

// Event time selector
const eventTime = document.querySelector("#event-dateTime");

// Countdown div selector
const countdownContainer = document.querySelector(".countdown-container");

// Submit button Selector
const submitBtn = document.querySelector("#submit-btn");

// Selector for event entered by the user
let reminder = document.querySelector(".event-value");

// Setting the months and days arrays 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//Button event handling and functionality
submitBtn.addEventListener("click", (e) => {
    // preventing the page from reloading once someone submits
    e.preventDefault();

    const date = new Date();
    let m = date.getMonth();
    let d = date.getDay();
    let h = date.getHours();
    let mins = date.getMinutes();
    let s = date.getSeconds();

    console.log(eventTime.value);
    console.log(h);
    console.log(parseInt(h - eventTime.value));

    if (eventName.value.length <= 0 || eventTime.value.length <= 0) {
        if (eventName.value.length <= 0) {
            window.alert("Enter an event");
        } else {
            window.alert("Enter a date");
        }
    }
    else {
        // Setting the content of the reminder and the styles to be applied
        reminder.textContent = eventName.value;
        reminder.style.marginBottom = "20px";
        reminder.style.fontSize = "2rem";
        reminder.style.color = "orangered";

        // Displaying the countdown container
        countdownContainer.style.display = "flex";
        // Hiding the main container
        mainContainer.style.display = "none";
    }

})

// Reset button selector
const resetBtn = document.querySelector("#reset-btn");

// Setting the reset event handling and functionality
resetBtn.addEventListener("click", () => {
    // Displaying the main container
    mainContainer.style.display = "flex";

    // Hiding the countdown container
    countdownContainer.style.display = "none";
})

// Event entered by the user selector
const eventValue = document.querySelector(".event-value");
eventValue.textContent = eventName.value;
