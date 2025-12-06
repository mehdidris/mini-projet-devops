
document.addEventListener('DOMContentLoaded', function() {
    const rockButton = document.getElementById('rockButton');
    const rockSound = document.getElementById('rockSound');
    
    rockButton.addEventListener('click', function() {
        // Play the sound
        rockSound.currentTime = 0;
        rockSound.play();
        
        // Create new Rock image
        const newRock = document.createElement('img');
        newRock.src = 'the_r.png';
        newRock.alt = 'The Rock';
        newRock.classList.add('rock-image');
        
        // Set random position on screen
        const maxX = window.innerWidth - 160;
        const maxY = window.innerHeight - 160;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        newRock.style.position = 'fixed';
        newRock.style.left = `${randomX}px`;
        newRock.style.top = `${randomY}px`;
        
        // Add drag functionality
        setupDrag(newRock);
        
        // Add random movement
        setupRandomMovement(newRock);
        // Add to document body
        document.body.appendChild(newRock);
        
        // Remove after 15 seconds
        setTimeout(() => {
            if (newRock.parentNode) {
                newRock.remove();
            }
        }, 15000);
});
function setupDrag(element) {
        let isDragging = false;
        let offsetX, offsetY;
        
        element.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.clientX - element.getBoundingClientRect().left;
            offsetY = e.clientY - element.getBoundingClientRect().top;
            element.style.cursor = 'grabbing';
            element.style.pointerEvents = 'none'; // Allow click-through when moving
            e.preventDefault(); // Prevent text selection
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;
            
            // Constrain to screen boundaries
            newX = Math.max(0, Math.min(newX, window.innerWidth - 160));
            newY = Math.max(0, Math.min(newY, window.innerHeight - 160));
            
            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
            element.style.cursor = 'grab';
            element.style.pointerEvents = 'auto';
        });
    }
    
    function setupRandomMovement(element) {
        let dx = (Math.random() - 0.5) * 4;
        let dy = (Math.random() - 0.5) * 4;
        
        function move() {
            if (element.isDragging) {
                requestAnimationFrame(move);
                return;
            }
            
            let rect = element.getBoundingClientRect();
            let newX = rect.left + dx;
            let newY = rect.top + dy;
            
            // Bounce off screen edges
            if (newX <= 0 || newX >= window.innerWidth - rect.width) {
                dx = -dx;
                newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
            }
            
            if (newY <= 0 || newY >= window.innerHeight - rect.height) {
                dy = -dy;
                newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
            }
            
            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
            
            requestAnimationFrame(move);
        }
        
        move();
    }
});