window.addEventListener('DOMContentLoaded', () => {
	const pwLength = document.querySelector(".pw-length"),
		btnGet = document.querySelector(".get-password"),
		btnDel = document.querySelector(".delete"),
		password = document.querySelector('#password'),
		pwValue = document.querySelector("#password-input"),
		securityOut = document.querySelector('.security'),
		number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
		Upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
		symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ";", ":", ",", ".", "/", "?", "~", "[", "]", "{", "}"];
	let result;

	pwValue.addEventListener("input", function () {
		pwLength.innerHTML = `Длина пароля (${this.value})`;
	});

	btnGet.addEventListener("click", () => {
		genPassword();
		if (result == "") {
			password.value = `Ваш пароль не может быть пустым`;
			securityOut.innerHTML = ``;
		} else {
			result.length = pwValue.value;
			password.value = `${result.join('')}`;
			security(result);
			result = [];
		}
	});

	btnDel.addEventListener("click", () => {
		pwValue.value = `11`;
		pwLength.innerHTML = `Длина пароля(${pwValue.value})`;
		password.value = `Ваш пароль`;
		securityOut.innerHTML = ``;
	});

	function genPassword() {
		result = [];
		if (document.getElementById("number").checked) {
			for (let i = 0; i < 2; i++) {
				result = result.concat(number);
				result.push(i);
			}
		}
		if (document.getElementById("uppercase").checked) {
			result = result.concat(Upper);
		}
		if (document.getElementById("lowercase").checked) {
			result = result.concat(Lower);
		}
		if (document.getElementById("symbols").checked) {
			result = result.concat(symbols);
		}
		result.sort(getSort);
	}

	function getSort() {
		return 0.5 - Math.random();
	}

	function security(arr) {
		if (arr.length >= 10 && document.getElementById("uppercase").checked && document.getElementById("number").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else if (arr.length >= 10 && document.getElementById("lowercase").checked && document.getElementById("number").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else if (arr.length >= 10 && document.getElementById("lowercase").checked && document.getElementById("uppercase").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else if (arr.length >= 10 && document.getElementById("lowercase").checked && document.getElementById("uppercase").checked && document.getElementById("number").checked && document.getElementById("symbols").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else if (arr.length >= 12 && document.getElementById("number").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else if (arr.length >= 12 && document.getElementById("uppercase").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else if (arr.length >= 12 && document.getElementById("lowercase").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else if (arr.length >= 10 && document.getElementById("symbols").checked) {
			securityOut.innerHTML = `Сильный пароль`;
		} else {
			securityOut.innerHTML = `Слабый пароль`;
		}
	}
});