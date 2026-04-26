const getElement = (calledId) => document.getElementById(calledId);

const showElement = (element) => (element.style.display = "block");
const hideElement = (element) => (element.style.display = "none");

const page = {
	default: {
		id: getElement("page-default"),
		button: {
			password: getElement("DEFAULT-button-password"),
			new: getElement("DEFAULT-button-new"),
			settings: getElement("DEFAULT-button-settings"),
		},
	},

	password: {
		id: getElement("page-password"),
		button: {
			back: getElement("PASSWORD-button-back"),
			show: getElement("PASSWORD-button-password-toggle"),
			qr: getElement("PASSWORD-button-qr"),
			options: getElement("PASSWORD-button-options"),
		},
	},
};

// get all keys from designated object
// take each key that match requested key and get the key value
// magic ternary conditionals, hope to understand it in the future
// as far as i understand its the same as an if else.
// need to understand concat
function findKey(selectedObject, keyToFind) {
	return Object.entries(selectedObject).reduce(
		(keyValue, [key, value]) =>
			key === keyToFind
				? keyValue.concat(value)
				: typeof value === "object"
					? keyValue.concat(findKey(value, keyToFind))
					: keyValue,
		[],
	);
}

const state = {
	show(pageName) {
		const pageToChange = page[pageName];

		if (pageToChange) {
			findKey(page, "id").forEach((key) => {
				hideElement(key);
			});
			showElement(pageToChange.id);
		}
	},

	hide(pageName) {
		const pageToChange = page[pageName];

		if (pageToChange) {
			hideElement(pageToChange.id);
		}
	},
};

page.default.button.password.addEventListener("click", goToPasswordFromDefault);
function goToPasswordFromDefault() {
	state.show("password");
}

page.password.button.back.addEventListener("click", goToDefaultFromPassword);
function goToDefaultFromPassword() {
	state.show("default");
}
