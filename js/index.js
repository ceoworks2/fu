document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

            navLinks.forEach(el => el.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const subscribeForm = document.querySelector('.subscribe__form');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = subscribeForm.querySelector('.subscribe__input');
            const userEmail = emailInput.value;

            const submitBtn = subscribeForm.querySelector('.subscribe__btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Надсилання...';

            setTimeout(() => {
                alert(`Дякуємо! Email ${userEmail} успішно підписано на розсилку.`);
                emailInput.value = '';
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1000);
        });
    }

    const videoBtn = document.querySelector('.video-section__play-btn');
    const videoBlock = document.querySelector('.video-section__block');

    if (videoBtn && videoBlock) {
        videoBtn.addEventListener('click', () => {
            videoBlock.innerHTML = `
                <iframe 
                    class="video-section__iframe"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    style="width: 100%; height: 450px; border-radius: 10px;">
                </iframe>
            `;
        });
    }
});