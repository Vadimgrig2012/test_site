document.addEventListener("DOMContentLoaded", (event) => {
    // Select the button element from the document
    const button = document.querySelector('.btn');
    const txtBtn = document.querySelector('.btn-text')
  
    // Add an event listener for mouse movement over the button
    button.addEventListener('mousemove', (e) => {
      // Get the current bounding rectangle dimensions and position
      boundingRect = button.getBoundingClientRect();
      boundingRectTxt = txtBtn.getBoundingClientRect();
  
      // Calculate mouse position relative to the button
      const mousePosX = e.clientX - boundingRect.left - boundingRect.width / 2; // X position relative to the center of the button
      const mousePosY = e.clientY - boundingRect.top - boundingRect.height / 2; // Y position relative to the center of the button
  
      const zDisplacement = Math.max(-80, Math.min(80, (mousePosX / boundingRect.width) * 80));

      // Use GSAP (GreenSock Animation Platform) to animate the button
      gsap.to(button, {
        scale: 1.5,
        x: mousePosX * 2, // Move horizontally towards mouse
        y: mousePosY * 2, // Move vertically towards mouse
        duration: 0.5, // Duration of the animation
        ease: 'power3.out', // Easing function for smooth animation
      });
      gsap.to(txtBtn,{
        x: mousePosX * 0.5, // Move horizontally towards mouse
        y: mousePosY * 0.4, // Move vertically towards mouse
        // rotationZ: zDisplacement,
        rotationY: zDisplacement,
        duration: 0.5, // Duration of the animation
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
      gsap.to(txtBtn, {
        x: 0, // Reset horizontal position
        y: 0, // Reset vertical position
        scale: 1, // Reset scale
        rotationZ: 0,
        duration: 1, // Duration of the animation
        ease: 'elastic.out(1,0.3)' 
      });
    });
  });
