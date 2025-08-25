// document.getElementById("myForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const fname = document.getElementById("fname").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const number = document.getElementById("number").value.trim();
//   const password = document.getElementById("password").value.trim();

//   if (!fname || !email || !number || !password) {
//     alert("من فضلك املأ كل الحقول قبل الإرسال!");
//     return;
//   }

//   // لو كله تمام
//   let counterEl = document.getElementById("counter");
//   let current = parseInt(counterEl.textContent);
//   counterEl.textContent = current + 1;

//   this.reset();
// });

// const form = document.getElementById("myForm");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const phoneInput = document.getElementById("phone");
// const passwordInput = document.getElementById("password");
// const successMsg = document.getElementById("successMsg");

// function showError(input, message) {
//   const formGroup = input.parentElement;
//   const error = formGroup.querySelector(".error");
//   error.textContent = message;
//   input.style.borderColor = "red";
// }

// function showSuccess(input) {
//   const formGroup = input.parentElement;
//   const error = formGroup.querySelector(".error");
//   error.textContent = "";
//   input.style.borderColor = "green";
// }

// function checkName() {
//   if (nameInput.value.trim() === "") {
//     showError(nameInput, "Name is required");
//     return false;
//   } else {
//     showSuccess(nameInput);
//     return true;
//   }
// }

// function checkEmail() {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (emailInput.value.trim() === "") {
//     showError(emailInput, "Email is required");
//     return false;
//   } else if (!re.test(emailInput.value.trim())) {
//     showError(emailInput, "Invalid email format");
//     return false;
//   } else {
//     showSuccess(emailInput);
//     return true;
//   }
// }

// function checkPhone() {
//   const re = /^[0-9]{10,15}$/;
//   if (phoneInput.value.trim() === "") {
//     showError(phoneInput, "Phone number is required");
//     return false;
//   } else if (!re.test(phoneInput.value.trim())) {
//     showError(phoneInput, "Enter a valid phone number");
//     return false;
//   } else {
//     showSuccess(phoneInput);
//     return true;
//   }
// }

// function checkPassword() {
//   if (passwordInput.value.trim() === "") {
//     showError(passwordInput, "Password is required");
//     return false;
//   } else if (passwordInput.value.length < 6) {
//     showError(passwordInput, "Password must be at least 6 characters");
//     return false;
//   } else {
//     showSuccess(passwordInput);
//     return true;
//   }
// }

// // real-time validation
// nameInput.addEventListener("blur", checkName);
// emailInput.addEventListener("blur", checkEmail);
// phoneInput.addEventListener("blur", checkPhone);
// passwordInput.addEventListener("blur", checkPassword);

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const validName = checkName();
//   const validEmail = checkEmail();
//   const validPhone = checkPhone();
//   const validPassword = checkPassword();

//   if (validName && validEmail && validPhone && validPassword) {
//     successMsg.textContent = "Form submitted successfully!";
//     form.reset();
//     // reset borders
//     [nameInput, emailInput, phoneInput, passwordInput].forEach(
//       (input) => (input.style.borderColor = "#ddd")
//     );
//   } else {
//     successMsg.textContent = "";
//   }
// });

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
