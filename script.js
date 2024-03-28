var confirmPasswordInput = document.getElementById('confirm_password');
var passwordInput = document.getElementById('user_password');
var createAccountButton = document.querySelector('button[type="submit"]');
var emailInput = document.getElementById('user_email');
var phoneInput = document.getElementById('phone_number');

var errorMessage = document.createElement('div');
errorMessage.textContent = 'Passwords do not match.';
errorMessage.id = 'password_error_message';
errorMessage.style.display = 'none';
passwordInput.parentNode.insertBefore(errorMessage, passwordInput.nextSibling);

function validatePasswords() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    var doPasswordsMatch = password === confirmPassword && confirmPassword !== '';

    if (!doPasswordsMatch) {
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
        errorMessage.style.display = 'block';
        errorMessage.classList.add('error');
    } else {
        passwordInput.classList.remove('invalid');
        confirmPasswordInput.classList.remove('invalid');
        errorMessage.style.display = 'none';
        errorMessage.classList.remove('error');
    }
    validateForm();
}

function validateForm() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var isAnyFieldBlank = !password || !confirmPassword || !email || !phone;
    var isEmailValid = emailInput.validity.valid;
    var isPhoneValid = phoneInput.validity.valid;

    createAccountButton.disabled = isAnyFieldBlank || !isEmailValid || !isPhoneValid;
}

confirmPasswordInput.addEventListener('input', validatePasswords);
emailInput.addEventListener('input', validateForm);
phoneInput.addEventListener('input', validateForm);
