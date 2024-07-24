// script.js

document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const changeColorButton = document.getElementById('change-color');
    
    // Handle player movement
    document.addEventListener('keydown', (event) => {
        const step = 10; // Define the movement step
        let top = parseInt(player.style.top) || 50;
        let left = parseInt(player.style.left) || 50;

        switch (event.key) {
            case 'ArrowUp':
                top -= step;
                break;
            case 'ArrowDown':
                top += step;
                break;
            case 'ArrowLeft':
                left -= step;
                break;
            case 'ArrowRight':
                left += step;
                break;
        }

        // Ensure the player stays within the game container bounds
        top = Math.max(0, Math.min(top, 350));
        left = Math.max(0, Math.min(left, 550));

        player.style.top = `${top}px`;
        player.style.left = `${left}px`;
    });

    // Handle color change
    changeColorButton.addEventListener('click', () => {
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
        const currentColor = player.style.backgroundColor;
        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === currentColor);

        player.style.backgroundColor = newColor;
    });
});
