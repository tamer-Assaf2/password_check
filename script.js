const passwordInput = document.querySelector(".password-input");
const requirements = document.querySelectorAll(".requirements-list li");

passwordInput.addEventListener("input", (e) => {
  const password = e.target.value;

  requirements.forEach((item) => {
    const rule = item.getAttribute("data-rule");
    let isValid = false;

    switch (rule) {
      case "upplow":
        isValid = /(?=.*[a-z])(?=.*[A-Z])/.test(password);
        break;
      case "number":
        isValid = /\d/.test(password);
        break;
      case "special":
        isValid = /[1@#$%^]/.test(password);
        break;
      case "length":
        isValid = password.length >= 8;
        break;
    }

    item.classList.toggle("valid", isValid);
  });
});
// تفعيل/إلغاء إظهار كلمة المرور
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
