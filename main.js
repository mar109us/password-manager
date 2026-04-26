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

function findKey(selectedObject, keyToFind) {
	return Object.entries(selectedObject).reduce((keyValue, [key, value]) => {
		if (key === keyToFind) {
			return keyValue.concat(value);
		}

		if (typeof value === "object" && value !== null) {
			return keyValue.concat(findKey(value, keyToFind));
		}

		return keyValue;
	}, []);
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
