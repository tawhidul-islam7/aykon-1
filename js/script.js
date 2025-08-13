// Aykon Website JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#newsletter form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // WhatsApp Floating Icon
  const whatsappIcon = document.createElement("a");
  whatsappIcon.href = "https://wa.me/8801786001877"; // Replace with your WhatsApp number
  whatsappIcon.target = "_blank";
  whatsappIcon.style.position = "fixed";
  whatsappIcon.style.bottom = "20px";
  whatsappIcon.style.right = "20px";
  whatsappIcon.style.zIndex = "9999";
  whatsappIcon.innerHTML = '<img src="img/whatsapp-icon.png" alt="Chat on WhatsApp" style="width:60px;height:60px;">';

  document.body.appendChild(whatsappIcon);
});
