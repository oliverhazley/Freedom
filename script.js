// Set the date we're counting down to
const targetDate = new Date("September 16, 2074 16:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the difference between now and the target date
    const timeLeft = targetDate - now;

    // Calculate years, days, hours, minutes, seconds, and milliseconds
    const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const milliseconds = timeLeft % 1000;

    // Output the result with separate spans for numbers and text
    document.getElementById("countdown").innerHTML =
        `<span class="number">${years}</span> <span class="label">Years</span><br>` +
        `<span class="number">${days}</span> <span class="label">Days</span><br>` +
        `<span class="number">${hours}</span> <span class="label">Hours</span><br>` +
        `<span class="number">${minutes}</span> <span class="label">Minutes</span><br>` +
        `<span class="number">${seconds}</span> <span class="label">Seconds</span><br>` +
        `<span class="number">${milliseconds}</span> <span class="label">Ms</span>`;

    // If the countdown is over, display the message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Congratulations mofaka! You did it! I'm soooo proud of you ❤️";
    }
}, 1); // Set to update every 1 millisecond for millisecond precision
