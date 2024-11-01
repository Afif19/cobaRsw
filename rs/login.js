// login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const loginBtn = document.querySelector('.login-btn');
        
        try {
            loginBtn.classList.add('loading');
            
            // Simulasi API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Ganti dengan actual API call
            /*
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message);
            }
            */
            
            // Simpan token di localStorage
            localStorage.setItem('token', 'sample-token');
            
            // Tampilkan pesan sukses
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Login berhasil! Mengalihkan...';
            loginForm.insertBefore(successMessage, loginForm.firstChild);
            
            // Redirect ke dashboard
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
            
        } catch (error) {
            // Tampilkan pesan error
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = error.message || 'Terjadi kesalahan saat login';
            loginForm.insertBefore(errorMessage, loginForm.firstChild);
            
        } finally {
            loginBtn.classList.remove('loading');
        }
    });
});