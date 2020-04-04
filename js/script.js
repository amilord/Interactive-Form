// focus on the first text field. When the page loads, give focus to the first text field
document.getElementById("name").focus();

// Reveal a text field when the "Other" option is selected from the "Job Role" drop down menu. Make sure you add an text input field. Use the id of "other-title" for the field. Add placeholder text of "Your Title" for the field
var selectTitle = document.getElementById("title");
var otherTitle = document.getElementById("other-title");

// The "other" field doesn't seem to be working.  It's hidden when the page loads,
// but when I select "other" from the job role select menu, it should apear, but it doesn't.

otherTitle.style.display = "none";

selectTitle.addEventListener("change", function (event) {
	if (event.target.value == "other") {
		otherTitle.style.display = "inline-block";
	} else {
		otherTitle.style.display = "none";
	}
});

// For the T-Shirt color menu, only display the options that match the design selected in the "Design" menu.
document.getElementById("design").childNodes[1].style.display = "none";

const titleOption = document.createElement("option");
const titleOptionText = document.createTextNode(
	"Please select a T-shirt theme"
);
titleOption.appendChild(titleOptionText);
document.getElementById("color").prepend(titleOption);
document.getElementById("color").value = "Please select a T-shirt theme";

document.getElementById("color").childNodes[0].style.display = "none";

document.querySelectorAll('[value="cornflowerblue"]')[0].style.display = "none";
document.querySelectorAll('[value="darkslategrey"]')[0].style.display = "none";
document.querySelectorAll('[value="gold"]')[0].style.display = "none";
document.querySelectorAll('[value="tomato"]')[0].style.display = "none";
document.querySelectorAll('[value="steelblue"]')[0].style.display = "none";
document.querySelectorAll('[value="dimgrey"]')[0].style.display = "none";

document.getElementById("design").addEventListener("change", function () {
	var currentDesign = document.getElementById("design").value;
	if (currentDesign === "js puns") {
		document.querySelectorAll(
			'[value="cornflowerblue"]'
		)[0].style.display = "";
		document.querySelectorAll(
			'[value="darkslategrey"]'
		)[0].style.display = "";
		document.querySelectorAll(
			'[value="gold"]'
		)[0].style.display = "";

		document.querySelectorAll(
			'[value="tomato"]'
		)[0].style.display = "none";
		document.querySelectorAll(
			'[value="steelblue"]'
		)[0].style.display = "none";
		document.querySelectorAll(
			'[value="dimgrey"]'
		)[0].style.display = "none";

		document.getElementById("color").value = "cornflowerblue";
	} else {
		document.querySelectorAll(
			'[value="tomato"]'
		)[0].style.display = "";
		document.querySelectorAll(
			'[value="steelblue"]'
		)[0].style.display = "";
		document.querySelectorAll(
			'[value="dimgrey"]'
		)[0].style.display = "";

		document.querySelectorAll(
			'[value="cornflowerblue"]'
		)[0].style.display = "none";
		document.querySelectorAll(
			'[value="darkslategrey"]'
		)[0].style.display = "none";
		document.querySelectorAll(
			'[value="gold"]'
		)[0].style.display = "none";

		document.getElementById("color").value = "tomato";
	}
});

// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
const totalElement = document.createElement("p");
const totalElementText = document.createTextNode("---");
totalElement.appendChild(totalElementText);
totalElement.id = "total-element";
const activities = document.getElementsByClassName("activities")[0];
activities.appendChild(totalElement);

var activities_total = 0;
activities.addEventListener("change", function (event) {
	const selectedDayAndTime = event.target.getAttribute(
		"data-day-and-time"
	);
	const selectedName = event.target.getAttribute("name");
	const checkedBoxes = document.querySelectorAll(
		'.activities input[type="checkbox"]'
	);
	for (var checkedBoxIndex in checkedBoxes) {
		const checkBox = checkedBoxes[checkedBoxIndex];
		if (typeof checkBox === "object") {
			if (
				checkBox.getAttribute(
					"data-day-and-time"
				) === selectedDayAndTime &&
				checkBox !== event.target
			) {
				if (event.target.checked) {
					checkBox.disabled = true;
				} else {
					checkBox.disabled = false;
				}
			}
		}
	}

	const activity_value = parseInt(
		event.target.getAttribute("data-cost")
	);
	if (event.target.checked) {
		activities_total += activity_value;
	} else {
		activities_total -= activity_value;
	}
	totalElement.textContent = "Total: $" + activities_total;
});

// If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.

// As a user selects activities to register for, a running total is listed below the list of checkboxes. For example, if the user selects "Main conference" then Total: $200 should appear. If they add 1 workshop the total should change to Total: $300.

// The "Credit Card" payment option should be selected by default and result in the display of the #credit-card div, and hide the "Paypal" and "Bitcoin information.

document.getElementById("paypal").style.display = "none";
document.getElementById("bitcoin").style.display = "none";
const paymentSection = document.getElementById("payment");
paymentSection.childNodes[1].style.display = "none";

// Since you have the error for not having a payment method selected, the credit card errors don't fire.   Once you change it up so "Credit Card"
// is the selected payment method, I think this will work correctly.

paymentSection.value = "credit card";
paymentSection.addEventListener("change", function (event) {
	const currentPaymentType = paymentSection.value;
	if (currentPaymentType === "credit card") {
		document.getElementById("credit-card").style.display = "";
		document.getElementById("paypal").style.display = "none";
		document.getElementById("bitcoin").style.display = "none";
	} else if (currentPaymentType === "paypal") {
		document.getElementById("credit-card").style.display =
			"none";
		document.getElementById("paypal").style.display = "";
		document.getElementById("bitcoin").style.display = "none";
	} else if (currentPaymentType === "bitcoin") {
		document.getElementById("credit-card").style.display =
			"none";
		document.getElementById("paypal").style.display = "none";
		document.getElementById("bitcoin").style.display = "";
	}
});

// When a user selects the "PayPal" payment option, display the Paypal information, and hide the credit card information and the "Bitcoin" information.

// When a user selects the "Bitcoin" payment option, display the Bitcoin information, and hide the credit card information.

// Display error messages and don't let the user submit the form if any of these validation errors exist:
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
	// prevent the default submit and page reload
	event.preventDefault();
	if (!isFormValid()) {
		// this is collecting all of the data once you press the submit button and putting it in the console log
		for (var i = 0; i < form.elements.length; i++) {
			var element = form.elements[i];
			console.log(element.name, element.value);
		}
	}
});

function isFormValid() {
	var valid = true;
	valid = isNameValid() && valid;
	valid = isEmailValid() && valid;
	valid = isActivityValid() && valid;
	valid = isPaymentOptionValid() && valid;
	if (document.getElementById("payment").value === "credit card") {
		valid = isCreditCardValid() && valid;
	}
	return valid;
}

// Name field can't be empty
function isNameValid() {
	const nameField = document.getElementById("name");
	const valid = nameField.value !== "";
	if (valid) {
		nameField.style.borderColor = "";
	} else {
		nameField.style.borderColor = "red";
	}
	return valid;
}

// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example. You'll need to use a regular expression to get this requirement. See the list of Resources for links to learn about regular expressions.
function isEmailValid() {
	const emailField = document.getElementById("mail");
	const valid =
		emailField.value !== "" &&
		/[\w\d]+@[\w\d]+\.[\w\d]+/.test(emailField.value);
	if (valid) {
		emailField.style.borderColor = "";
	} else {
		emailField.style.borderColor = "red";
	}
	return valid;
}

// At least one activity must be checked from the list under "Register for Actitivities."
function isActivityValid() {
	const activityFieldTitle = document.querySelector(
		".activities legend"
	);
	const valid =
		document.querySelectorAll(
			'.activities input[type="checkbox"]:checked'
		).length !== 0;
	if (valid) {
		activityFieldTitle.style.color = "";
	} else {
		activityFieldTitle.style.color = "red";
	}
	return valid;
}

// Payment option must be selected.
function isPaymentOptionValid() {
	const paymentOptionLabel = document.querySelector('[for="payment"]');
	const valid = paymentSection.value !== "select method";
	if (valid) {
		paymentOptionLabel.style.color = "";
	} else {
		paymentOptionLabel.style.color = "red";
	}
	return valid;
}

// If "Credit card" is the selected payment option, make sure the user supplied a credit card number, a zip code, and a 3 number CVV value.
function isCreditCardValid() {
	var valid = true;
	valid = isCCNumberValid() && valid;
	valid = isZipCodeValid() && valid;
	valid = isCVVValid() && valid;
	return valid;
}

function isCCNumberValid() {
	const label = document.querySelector('[for="cc-num"]');
	const value = document.getElementById("cc-num").value;
	var valid = false;
	var parsedNumber = parseInt(value);
	if (
		value.length >= 13 &&
		value.length <= 16 &&
		parsedNumber == value
	) {
		valid = true;
	}
	if (valid) {
		label.style.color = "";
	} else {
		label.style.color = "red";
	}
	return valid;
}

function isZipCodeValid() {
	const label = document.querySelector('[for="zip"]');
	const value = document.getElementById("zip").value;
	var valid = false;
	var parsedNumber = parseInt(value);
	if (value.length == 5 && parsedNumber == value) {
		valid = true;
	}
	if (valid) {
		label.style.color = "";
	} else {
		label.style.color = "red";
	}
	return valid;
}

function isCVVValid() {
	const label = document.querySelector('[for="cvv"]');
	const value = document.getElementById("cvv").value;

	var valid = false;
	var parsedNumber = parseInt(value);
	if (value.length == 3 && parsedNumber == value) {
		valid = true;
	}
	if (valid) {
		label.style.color = "";
	} else {
		label.style.color = "red";
	}
	return valid;
}
