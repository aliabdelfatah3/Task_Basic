const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");
const passCounter = document.getElementById("passCounter");

// Password Counter
password.addEventListener("input", () => {
  passCounter.textContent = `${password.value.length} characters`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Phone validation (10 digits)
  if (phone.value.length < 10) {
    phoneError.textContent = "Phone must be at least 10 digits";
    valid = false;
  }

  // Password validation
  if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully ✅";
    form.reset();
    passCounter.textContent = "0 characters"; // reset counter
  }
});
