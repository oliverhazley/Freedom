// Set the date we're counting down to
const targetDate = new Date("September 16, 2024 16:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the difference between now and the target date
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Output the result with separate spans for numbers and text
    document.getElementById("countdown").innerHTML =
        `<span class="number">${days}</span> <span class="label">Days</span><br>` +
        `<span class="number">${hours}</span> <span class="label">Hours</span><br>` +
        `<span class="number">${minutes}</span> <span class="label">Minutes</span><br>` +
        `<span class="number">${seconds}</span> <span class="label">Seconds</span>`;

    // If the countdown is over, display the message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-title").innerHTML = "Congratulations mofaka! You did it! I'm soooo proud of you ❤️";
        document.getElementById("countdown").innerHTML = "Congratulations mofaka! You did it! I'm soooo proud of you ❤️";
        document.getElementById("time-left").innerHTML = "Congratulations mofaka! You did it! I'm soooo proud of you ❤️";
    }
}, 1000);
