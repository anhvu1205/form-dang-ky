const form = document.getElementById('registrationForm');
const result = document.getElementById('resultArea');

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneNumberError = document.getElementById('phoneNumberError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const fullNameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(84|0)[35789]\d{8}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    if (!fullNameRegex.test(fullName.value)) {
        nameError.innerText = 'Tên không hợp lệ';
        isValid = false;
    } else {
        nameError.innerText = '';
    }

    if (!emailRegex.test(email.value)) {
        emailError.innerText = 'Email không hợp lệ';
        isValid = false;
    } else {
        emailError.innerText = '';
    }

    if (!phoneRegex.test(phoneNumber.value)) {
        phoneNumberError.innerText = 'Số điện thoại không hợp lệ';
        isValid = false;
    } else {
        phoneNumberError.innerText = '';
    }

    if (!passwordRegex.test(password.value)) {
        passwordError.innerText = 'Mật khẩu không hợp lệ';
        isValid = false;
    } else {
        passwordError.innerText = '';
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerText = 'Mật khẩu không khớp';
        isValid = false;
    } else {
        confirmPasswordError.innerText = '';
    }

    if (isValid) {
        const userData = {
            hoTen: fullName.value,
            email: email.value,
            soDienThoai: phoneNumber.value,
            matKhau: password.value
        };
        result.innerText = 'Đăng ký thành công!\n' + JSON.stringify(userData, null, 2);
    }
});
