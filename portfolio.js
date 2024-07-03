document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-item a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').split('.html')[0].substring(1);
            const targetSection = document.getElementById(targetId + '-section');
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                window.location.href = link.getAttribute('href');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="message"]');
        
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }
        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            emailInput.focus();
            return;
        }
        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            messageInput.focus();
            return;
        }
        
        alert('Form submitted successfully!');
        
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
    
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const aboutBody = document.getElementById('about-body');
    if (aboutBody) {
        aboutBody.style.backgroundColor = '#f8f9fa'; 
    }

});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const aboutBody = document.getElementById('portfolio-body');
    if (aboutBody) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                aboutBody.style.backgroundColor = '#f8f9fa'; 
            } else {
                aboutBody.style.backgroundColor = 'transparent'; 
            }
        });
    }

    const githubLogo = document.querySelector('.github-logo');
    if (githubLogo) {
        githubLogo.addEventListener('click', function() {
            const githubImage = document.getElementById('github-image');
            if (githubImage) {
                githubImage.classList.toggle('d-none'); 
            }
        });
    }

});


