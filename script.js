// Image URLs for different emotions
const images = {
    happy: "https://imgs.search.brave.com/TzDmruXLmcqJxEB0cpdgOhVdLJbjq9mzAoQUnYDamtY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/SWkzNDNSWldPSmdB/QUFBTS9uYWlsb25n/LWhlYXJ0LmdpZg.gif",
    sad: "https://imgs.search.brave.com/rkwaWQFu4MVD3a9IzjpL1ntKbStKEfBnpfMsXAq-4rA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiLzZi/LzI0L2FiNmIyNDk1/NTAwYzQ0ZTM5NGI0/NTk5Y2ZmNDBiNGY1/LmpwZw",
    angry: "https://imgs.search.brave.com/eFDcWNCUmUI0XGXw-yiNQCPhFMXQwdqPRgFclkKieQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZjL2Nj/LzYwLzZjY2M2MGI5/YmU5MTczYmVkNDI3/YjRiMzQyOWM2YTA3/LmpwZw"
};

// Messages that appear when "No" is clicked
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let clickCount = 0;

// Function to update the image based on click count
function updateImage() {
    const gifElement = document.getElementById('emotion-gif');
    
    if (clickCount <= 1) {
        // Clicks 0-1: Happy
        gifElement.src = images.happy;
    } else if (clickCount <= 3) {
        // Clicks 2-3: Sad
        gifElement.src = images.sad;
    } else {
        // Clicks 4+: Angry (stays angry)
        gifElement.src = images.angry;
    }
}

// Handle "No" button click
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Change button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make "Yes" button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Update image based on click count
    clickCount++;
    updateImage();
}

// Handle "Yes" button click
function handleYesClick() {
    window.location.href = "yes_page.html";
}