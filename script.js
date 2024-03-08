(function () {
  emailjs.init("qGHjZ_DIMJBF3pf_6");
});

const formContainer = document.getElementById("form-container");
const contactLink = document.getElementById("contact-link");
const overlay = document.getElementById("overlay");
const mobileNavbar = document.getElementById("mobile-navbar");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const mobileOverlay = document.getElementById("mobile-navbar-overlay");

mobileOverlay.addEventListener("click", () => {
  mobileNavbar.classList.add("mobile-navbar-hidden");
  mobileOverlay.classList.remove("mobile-navbar-overlay");
});

menuButton.addEventListener("click", () => {
  mobileNavbar.classList.remove("mobile-navbar-hidden");
  mobileOverlay.classList.add("mobile-navbar-overlay");
});

closeButton.addEventListener("click", () => {
  mobileNavbar.classList.add("mobile-navbar-hidden");
  mobileOverlay.classList.remove("mobile-navbar-overlay");
});

const submitButton = document.getElementById("submit-button");

function submitForm() {
  let nameEle = document.getElementById("name");
  let emailEle = document.getElementById("email");
  let phoneEle = document.getElementById("phone");
  let messageEle = document.getElementById("message");

  let name = nameEle.value;
  let email = emailEle.value;
  let phone = phoneEle.value;
  let message = messageEle.value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill all the fields");
    return;
  }

  const templateParams = {
    name,
    email,
    phone,
    message,
  };

  emailjs
    .send(
      "service_bmi0j4r",
      "template_4b65d32",
      templateParams,
      "qGHjZ_DIMJBF3pf_6"
    )
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        nameEle.value = "";
        emailEle.value = "";
        phoneEle.value = "";
        messageEle.value = "";
        formContainer.classList.remove("active");
        alert("Message sent successfully!");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Error sending message. Please try again later.");
      }
    );
}

submitButton.addEventListener("click", submitForm);

contactLink.addEventListener("click", () => {
  formContainer.classList.add("active");
});

overlay.addEventListener("click", () => {
  formContainer.classList.remove("active");
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async () => {
  const number = document.getElementById("mobileNumber").value;
  const mobileNumber = "+91" + number;
  console.log(number);
  const apiUrl = `https://enterprise.smsgupshup.com/GatewayAPI/rest?userid=2000236219&password=JWLEzyyqC&send_to=${mobileNumber}&method=SendMessage&msg=Dear%20Customer,%3Cbr%3E%3Cbr%3E%20Your%20friend%20Goformeet,%20has%20invited%20you%20to%20download%20Goformeet.%20Download%20https://onelink.to/zyv2v2%3Cbr%3E%20Goformeet &msg_type=TEXT&&auth_scheme=plain&v=1.1&format=text`;
  try {
    const response = await fetch(apiUrl, { method: "GET" });
    console.log(response);
    if (response.ok) {
      alert("Sent successfully! check your mobile");
    } else {
      alert("Request Failed Try again Later");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    document.getElementById("mobileNumber").value = "";
  }
});
