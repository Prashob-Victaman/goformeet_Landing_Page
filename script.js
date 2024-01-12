(
    function () {
        emailjs.init('qGHjZ_DIMJBF3pf_6');
    }
)

const formContainer = document.getElementById('form-container');
const contactLink = document.getElementById('contact-link');
const overlay = document.getElementById('overlay');


const submitButton = document.getElementById('submit-button');

function submitForm() {
    let nameEle = document.getElementById('name');
    let emailEle = document.getElementById('email');
    let phoneEle = document.getElementById('phone');
    let messageEle = document.getElementById('message');
    
    let name = nameEle.value;
    let email = emailEle.value;
    let phone = phoneEle.value;
    let message = messageEle.value;

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill all the fields');
        return;
    }

    const templateParams = {
        name,
        email,
        phone,
        message
    };

    emailjs.send('service_bmi0j4r', 'template_4b65d32', templateParams, 'qGHjZ_DIMJBF3pf_6')
    .then(function(response) {
        console.log("Email sent successfully:", response);
        nameEle.value = '';
        emailEle.value = '';
        phoneEle.value = '';
        messageEle.value = '';
        formContainer.classList.remove('active');
        alert("Message sent successfully!");

      }, function(error) {
        console.error("Error sending email:", error);
        alert("Error sending message. Please try again later.");
      });
}

submitButton.addEventListener('click', submitForm);

contactLink.addEventListener('click', () => {
    formContainer.classList.add('active')
})

overlay.addEventListener('click', () => {
    formContainer.classList.remove('active')
})