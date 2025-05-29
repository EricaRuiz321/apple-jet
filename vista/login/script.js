document.addEventListener('DOMContentLoaded', () => {
    const signInTab = document.getElementById('signInTab');
    const registerTab = document.getElementById('registerTab');
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');
    const tabButtons = document.querySelectorAll('.tab-button');
    const forms = document.querySelectorAll('.form');

    function switchTab(event) {
        // Deactivate all tabs and hide all forms
        tabButtons.forEach(button => button.classList.remove('active'));
        forms.forEach(form => form.classList.remove('active'));

        // Activate clicked tab
        event.currentTarget.classList.add('active');
        
        // Show corresponding form
        const formIdToShow = event.currentTarget.dataset.form;
        document.getElementById(formIdToShow).classList.add('active');
    }

    signInTab.addEventListener('click', switchTab);
    registerTab.addEventListener('click', switchTab);

    // Handle form submissions (basic example, prevents default)
    signInForm.addEventListener('submit', (event) => {
        
        // Add sign-in logic here
        console.log('Sign In attempt:', 
            document.getElementById('signInName').value
        );
       
    });

    registerForm.addEventListener('submit', (event) => {
        
        // Add registration logic here
        console.log('Register attempt:', 
            document.getElementById('registerName').value,
            document.getElementById('registerEmail').value
        );
        
    });

    const googleSignInButtons = document.querySelectorAll('.google-signin-button');
    googleSignInButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add Google Sign-In logic here
            console.log('Google Sign-In button clicked');
            alert('Iniciando sesión con Google (simulación)');
        });
    });
});