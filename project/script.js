document.addEventListener('DOMContentLoaded', () => {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('#password');
    
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Update eye icon
        const eyeIcon = togglePassword.querySelector('svg');
        if (type === 'password') {
            eyeIcon.style.opacity = '0.5';
        } else {
            eyeIcon.style.opacity = '1';
        }
    });
    
    // Form submission
    const form = document.querySelector('#signupForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            fullname: document.querySelector('#fullname').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        };
        
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    });
    
    // Close button
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        console.log('Close button clicked');
        // Add your close logic here
    });
    document.getElementById("navItem5").addEventListener("click", function () {
        window.location.href = "login.html";
      });
      
      document.getElementById("navItem6").addEventListener("click", function () {
        window.location.href = "register.html";
      });
      
});