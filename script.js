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
    const response = await fetch(apiUrl, { method: "GET", mode: "no-cors" });
    alert("Sent successfully! check your mobile");
  } catch (error) {
    alert("Sent successfully! check your mobile");
    console.log(error.message);
  } finally {
    document.getElementById("mobileNumber").value = "";
  }
});

const internshipFormContainer = document.getElementById(
  "internshipFormContainer"
);
const internshipForm = document.getElementById("internshipForm");
const internshipLink = document.getElementById("internshipLink");
const mobileInternshipLink = document.getElementById("mobileInternshipLink");
const internshipSubmitButton = document.getElementById(
  "internshipSubmitButton"
);

internshipLink.addEventListener("click", () => {
  internshipFormContainer.classList.add("active");
});

mobileInternshipLink.addEventListener("click", () => {
  internshipFormContainer.classList.add("active");
});

overlay.addEventListener("click", () => {
  internshipForm.classList.remove("active");
});

internshipSubmitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  let name = document.getElementById("internshipName").value;
  let email = document.getElementById("internshipEmail").value;
  let phoneNumber = document.getElementById("internshipNumber").value;
  let qualification = document.getElementById("internshipQualification").value;
  let currentAddress = document.getElementById("currentAddress").value;
  let permenantAddress = document.getElementById("permenantAddress").value;
  let emergencyNumber = document.getElementById("emergencyNumber").value;

  if (
    name &&
    email &&
    phone &&
    qualification &&
    currentAddress &&
    permenantAddress &&
    emergencyNumber
  ) {
    var content =
      "Name: " +
      name +
      "<br>" +
      "Email: " +
      email +
      "<br>" +
      "Phone Number: " +
      phoneNumber +
      "<br>" +
      "Qualification: " +
      qualification +
      "<br>" +
      "Current Address: " +
      currentAddress +
      "<br>" +
      "Permenant Address: " +
      permenantAddress +
      "<br>" +
      "Emergency Phone: " +
      emergencyNumber;

    // Send data to API
    var apiURL =
      "https://enterprise.webaroo.com/GatewayAPI/rest?method=EMS_POST_CAMPAIGN&userid=2000702445&password=LEP9yt&v=1.1&content_type=text/html&name=New%20Internship%20ApplicationfromEmailId=info@ecomadminpro.com&subject=New%20Internship%20Application&recipients=career@goformeet.co";
    var encodedContent = encodeURIComponent(content);
    var finalURL =
      apiURL +
      "&content=" +
      encodedContent +
      "&replyToEmailID=info@ecomadminpro.com";
    try {
      const response = await fetch(finalURL, {
        method: "GET",
        mode: "no-cors",
      });
      alert("Application Successfull");
    } catch (e) {
      alert("Application isn't successfull. Try again later");
    } finally {
      internshipForm.reset();
      internshipFormContainer.classList.remove("active");
    }
  }
});
