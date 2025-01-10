// Function to fetch and display a random dog image
async function loadNewDog() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        
        const dogImage = document.getElementById('dogImage');
        dogImage.src = data.message;
    } catch (error) {
        console.error('Error loading dog image:', error);
    }
}

function handleCute() {
    const heartOverlay = document.getElementById('heartOverlay');
    heartOverlay.style.display = 'flex';
    
    // Array of cute responses
    const cuteResponses = [
        "Aww thanks! 🥰",
        "You're so sweet! 💝",
        "That made my day! ✨",
        "Tail wags for you! 🐾",
        "*happy puppy noises* 🐶",
        "You're the best! 💫",
        "Sending virtual licks! 👅",
        "Pawsome compliment! 🐾",
        "You make me smile! 😊",
        "Woof woof! (Thank you!) 🐕"
    ];
    
    // Pick a random response
    const randomResponse = cuteResponses[Math.floor(Math.random() * cuteResponses.length)];
    
    // Update overlay with the random phrase
    heartOverlay.innerHTML = `<span style="font-size: 3rem; text-align: center;">${randomResponse}</span>`;
    
    // Remove message after animation
    setTimeout(() => {
        heartOverlay.style.display = 'none';
        loadNewDog();
    }, 1000);
}

function handleReallyCute() {
    const heartOverlay = document.getElementById('heartOverlay');
    heartOverlay.style.display = 'flex';
    
    // Create celebration emojis
    heartOverlay.innerHTML = '🎉🎊🎈'.repeat(50);
    
    // Remove celebration after animation
    setTimeout(() => {
        heartOverlay.style.display = 'none';
        loadNewDog();
    }, 1000);
}

// Load initial dog image when page loads
window.onload = loadNewDog; 