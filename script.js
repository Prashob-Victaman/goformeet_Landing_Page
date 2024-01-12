const formContainer = document.getElementById('form-container');
const contactLink = document.getElementById('contact-link');
const overlay = document.getElementById('overlay');

contactLink.addEventListener('click', () => {
    formContainer.classList.add('active')
})

overlay.addEventListener('click', () => {
    formContainer.classList.remove('active')
})