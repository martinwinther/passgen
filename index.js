// javascript
let passwordLen = 12;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = '!@#$%^&*()_-+=~`[]{}|:;"<>,.?/';

const characters = lowerCase + upperCase + numbers + symbols;

let passwords = [0, 0];
const passwordLenEl = document.getElementById("password-len");
const decPasswordLen = document.getElementById("dec-password");
const incPasswordLen = document.getElementById("inc-password");
const generateBtn = document.getElementById("generate-btn");
const passwordEls = [...document.getElementsByClassName("password-el")];
const copyBtnOne = document.getElementById("copy-1");
const copyBtnTwo = document.getElementById("copy-2");
const strengthMeter = document.getElementById("strength-meter");

function renderPasswordLen() {
	passwordLenEl.textContent = passwordLen;
}

function generateRandomPassword(chars, m) {
	let password = "";
	const n = chars.length;

	for (let i = 0; i < m; i++) {
		const randomIndex = Math.floor(Math.random() * n);
		password += chars[randomIndex];
	}

	return password;
}

function renderPassword() {
	passwords[0] = generateRandomPassword(characters, passwordLen);
	passwords[1] = generateRandomPassword(characters, passwordLen);

	passwordEls[0].textContent = passwords[0];
	passwordEls[1].textContent = passwords[1];
}

decPasswordLen.addEventListener("click", function () {
	passwordLen = Math.max(passwordLen - 1, 1);
	renderPasswordLen();
});

incPasswordLen.addEventListener("click", function () {
	passwordLen = Math.min(passwordLen + 1, 20);
	renderPasswordLen();
});

generateBtn.addEventListener("click", function () {
	renderPassword();
	if (passwordLen <= 6) {
		strengthMeter.textContent = "WEAK";
		strengthMeter.style.color = "#ff0022";
	} else if (passwordLen < 10) {
		strengthMeter.textContent = "GOOD";
		strengthMeter.style.color = "#ffff44";
	} else {
		strengthMeter.textContent = "STRONG";
		strengthMeter.style.color = "#00ff88";
	}
	copyBtnTwo.textContent = "copy";
	copyBtnOne.textContent = "copy";
});

copyBtnOne.addEventListener("click", function () {
	navigator.clipboard.writeText(passwords[0]);
	copyBtnOne.textContent = "copied";
	copyBtnTwo.textContent = "copy";
});

copyBtnTwo.addEventListener("click", function () {
	navigator.clipboard.writeText(passwords[1]);
	copyBtnTwo.textContent = "copied";
	copyBtnOne.textContent = "copy";
});

renderPassword();
