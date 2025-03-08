// Add hover effects for event cards
const eventCards = document.querySelectorAll('.event-card');

eventCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 20px rgba(0, 201, 255, 0.4)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Add hover effects for team members
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.style.transform = 'scale(1.05)';
        member.style.boxShadow = '0 8px 20px rgba(0, 201, 255, 0.4)';
    });

    member.addEventListener('mouseleave', () => {
        member.style.transform = 'scale(1)';
        member.style.boxShadow = 'none';
    });
});

// Add click effects for buttons
const buttons = document.querySelectorAll('.register-btn, .cta-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! Redirecting to registration...');
        // Add your registration link here
        window.location.href = 'home/header.html#eventShowcase';
    });
});