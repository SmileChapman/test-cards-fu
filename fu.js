let form = document.querySelector('.js-form'),
	formInputs = document.querySelectorAll('.js-input'),
	inputPhone = document.querySelector('.js-input-phone'),
	inputFirstName = document.querySelector('.js-input-first-name'),
	inputCheckbox = document.querySelector('.js-input-checkbox');

function validatePhone(phone) {
	let re = /^(\+\d|\d)[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
	return re.test(String(phone));
}
function validateFirstName(name) {
	let re = /^[A-ZА-ЯЁ]{1}[a-zа-яё]*(-[A-ZА-ЯЁ]{1}[a-zа-яё]*)?$/;
	return re.test(String(name));
}

form.onsubmit = function (e) {
	e.preventDefault();

	let phoneVal = inputPhone.value,
	firstNameVal = inputFirstName.value,
		emptyInputs = Array.from(formInputs).filter(input => input.value === '');

	formInputs.forEach(function (input) {
		if (input.value === '') {
			input.classList.add('error');

		} else {
			input.classList.remove('error');
		}
	});

	if (emptyInputs.length !== 0) {
		console.log('inputs not filled');
		return false;
	}

	if (!validatePhone(phoneVal)) {
		console.log('phone not valid');
		inputPhone.classList.add('error');
		return false;
	} else {
		inputPhone.classList.remove('error');
	}
	if (!validateFirstName(firstNameVal)) {
		console.log('first name not valid');
		inputFirstName.classList.add('error');
	return false;
	} else {
		inputFirstName.classList.remove('error');
	}

	if(!inputCheckbox.checked) {
		console.log('checkbox not checked');
		inputCheckbox.classList.add('error');
		return false;
	} else {
		inputCheckbox.classList.remove('error')
	}


}

