// FAQ Toggle Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all open items
        faqItems.forEach(i => i.classList.remove('active'));
        // Open the clicked item if it was not active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
