document.addEventListener("DOMContentLoaded", (event) => {

    // Select the button element from the document
    const button = document.querySelector('.btn');

    // Get the button's bounding rectangle dimensions and position
    let boundingRect = button.getBoundingClientRect();

    // Add an event listener to the window to update the bounding rectangle dimensions
    // when the window is resized
    window.addEventListener('resize', () => {
        boundingRect = button.getBoundingClientRect();
    });

    // Add an event listener for mouse movement over the button
    button.addEventListener('mousemove', (e) => {
        // Calculate mouse position relative to the button
        const mousePosX = e.clientX - boundingRect.left - boundingRect.width / 2; // X position relative to the center of the button
        const mousePosY = e.clientY - boundingRect.top - boundingRect.height / 2; // Y position relative to the center of the button
        
        // Use GSAP (GreenSock Animation Platform) to animate the button
        gsap.to(button, {
            scale: 1.5,
            x: mousePosX * 0.6, // Move horizontally towards mouse
            y: mousePosY * 0.6, // Move vertically towards mouse
            duration: 0.3, // Duration of the animation
            ease: 'power3.out', // Easing function for smooth animation
        });
    });

    // Add an event listener for when the mouse leaves the button area
    button.addEventListener('mouseleave', () => {
        // Animate the button back to its original position and size
        gsap.to(button, {
            x: 0, // Reset horizontal position
            y: 0, // Reset vertical position
            scale: 1, // Reset scale
            duration: 1, // Duration of the animation
            ease: 'elastic.out(1,0.3)' // Easing function for a 'springy' return
        });
    });

})

