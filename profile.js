document.addEventListener('DOMContentLoaded', () => {
    const editToggle = document.getElementById('edit-toggle');
    const profileInfo = document.getElementById('profile-info');
    const editBtn = document.getElementById('edit-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // Toggle Edit Mode
    editToggle.addEventListener('click', () => {
        if (editToggle.textContent === 'Edit Profile') {
            profileInfo.querySelectorAll('span').forEach(span => {
                span.innerHTML = `<input type="text" value="${span.textContent}">`;
            });
            editBtn.style.display = 'inline-block';
            editToggle.textContent = 'Cancel';
        } else {
            profileInfo.querySelectorAll('span').forEach(span => {
                span.innerHTML = span.querySelector('input') ? span.querySelector('input').value : span.textContent;
            });
            editBtn.style.display = 'none';
            editToggle.textContent = 'Edit Profile';
        }
    });

    // Confirm Logout and Redirect
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to log out?')) {
            // Redirect to index.html
            window.location.href = 'index.html';
        }
    });
});
