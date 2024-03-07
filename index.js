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

// Reset button selector
const resetBtn = document.querySelector("#reset-btn");

// Selector for event entered by the user
let reminder = document.querySelector(".event-value");

// Selectors for displaying the time remaining
const dys = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Function to update the countdown timer
function updateCountdown() {
    const eventDateTime = new Date(eventTime.value);
    const currentTime = new Date();

    const difference = eventDateTime - currentTime;

    if (difference <= 0) {
        window.alert("The time you entered has already been reached");
        window.alert("Enter a new event time");
        mainContainer.style.display = "flex";
        countdownContainer.style.display = "none";
        eventTime.value = "";
        console.clear();

    }
    else {
        const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minsRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secsRemaining = Math.floor((difference % (1000 * 60)) / 1000);

        dys.textContent = daysRemaining + "d:";
        hours.textContent = hoursRemaining + "h:";
        mins.textContent = minsRemaining + "m:";
        seconds.textContent = secsRemaining + "s";
    }
}

//Button event handling and functionality
submitBtn.addEventListener("click", (e) => {
    // preventing the page from reloading once someone submits
    e.preventDefault();

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
        reminder.style.color = "orangered";

        // Displaying the countdown container
        countdownContainer.style.display = "flex";
        // Hiding the main container
        mainContainer.style.display = "none";

        // Update the countdown initially
        updateCountdown();

        // Update the countdown every second
        setInterval(updateCountdown, 1000);
    }

})


// Setting the reset event handling and functionality
resetBtn.addEventListener("click", () => {
    // clearing the console
    console.clear();

    // Stop displaying the countdown container
    countdownContainer.style.display = "none";

    // Displaying the main container
    mainContainer.style.display = "flex";

    // Clear the countdown interval
    clearInterval(countdownInterval);

})

// Event entered by the user selector
const eventValue = document.querySelector(".event-value");
eventValue.textContent = eventName.value;
