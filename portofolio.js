// Ikona e navbar
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

// Gjatë kohës që ikona e menus do të klikohet, do të transformohet në X
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

// Seksioni i scroll
// Merr të gjitha seksionet dhe lidhjet e navigimit
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Event listener për scroll
// Le të bëjmë që në momentin që zgjedhim një faqe seksion, ajo të ndryshoje edhe sipër
window.onscroll = () => {
  sections.forEach((sec) => {
    // Llogarit pozicionin top, offset-in dhe lartësinë e çdo seksioni
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Kontrollo nëse seksioni aktual është në pamje
    if (top >= offset && top < offset + height) {
      // Hiq klasën active nga të gjitha lidhjet e navigimit
      navLinks.forEach((links) => {
        links.classList.remove("active");
      }); // Shto klasën active në lidhjen përkatëse të navigimit
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  }); // Header ngjitës - shtojmë një opsion i cili na lejon të bëjmë një header i cili mbetet i palëvizur kur bëjmë scroll në faqe

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100); // Heqim ikonën dhe navbar-in kur klikojmë një nga lidhjet në navbar
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

//Krijojme funksionin per te derguar emaile permens EmailJS

(function () {
  emailjs.init("Bwrk0Z_tAREVyNM8N");
})();
function sendEmail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_fz7yhih", "template_6q2l54m", params).then(
    function (response) {
      alert(
        `Hi ${params.name}, it's Luis!\nThank you for reaching out! I will respond as soon as possible.`
      );

      // Clear the input fields after successful message send
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    },
    function (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  );

  return false; // Prevent form from submitting and refreshing the page
}
