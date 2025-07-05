// Get all elements we need
const buttons = document.querySelectorAll('.store-btn');
const cardImage = document.getElementById('card-image');

// Define which image corresponds to which button
const cardImages = {
    shoprite: 'shoprite.jpeg',
    clicks: 'clicks.jpeg',
    pnp: 'pnp.jpeg',
    boxer: 'boxer.jpeg',
    spar: 'spar.jpeg'
};

// Add click event to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const storeName = button.id;
        cardImage.src = cardImages[storeName];
        cardImage.style.display = 'block'; // Show the image
    });
});
