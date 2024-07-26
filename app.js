document.getElementById('dropdownMenuButton').addEventListener('click', function (event) {
    event.stopPropagation();
    const dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

document.addEventListener('click', function (event) {
    const dropdownContent = document.getElementById('dropdown-content');
    if (!event.target.matches('.dropbtn')) {
        dropdownContent.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.subscription-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            alert(`Thank you for subscribing with email: ${email}`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});
