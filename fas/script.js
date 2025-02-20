// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Validation (for contact form)
const validateForm = (formElement) => {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
};

// Add event listener to forms if they exist
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!validateForm(this)) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

// Simple Image Slider for Events Section
let currentSlide = 0;
const slides = document.querySelectorAll('.event-card');

function showSlide(n) {
    if (!slides.length) return;
    
    slides.forEach(slide => slide.style.display = 'none');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Initialize slider if events exist
if (slides.length) {
    showSlide(0);
    setInterval(() => showSlide(currentSlide + 1), 5000); // Auto-advance every 5 seconds
}

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.feature-card, .event-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
});

// FAQ Category Switching
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const faqCategories = document.querySelectorAll('.faq-category');

    if (categoryBtns && faqCategories) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and categories
                categoryBtns.forEach(b => b.classList.remove('active'));
                faqCategories.forEach(c => c.classList.remove('active'));

                // Add active class to clicked button and corresponding category
                btn.classList.add('active');
                document.getElementById(btn.dataset.category).classList.add('active');
            });
        });

        // FAQ Item Toggle
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
});
