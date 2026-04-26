const getElement = (calledId) => document.getElementById(calledId);

const showElement = (element) => (element.style.display = "block");
const hideElement = (element) => (element.style.display = "none");

const page = {
	default: {
		id: getElement("page-default"),
		button: {
			password: getElement("button-password"),
			new: getElement,
			settings: getElement,
		},
	},

	password: {
		id: getElement("page-password"),
	},
};

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

console.log(findKey(page, "id"));

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

page.default.button.password.addEventListener("click", pagePasswordShow);
function pagePasswordShow() {
	state.show("password");
}

/* console.log(Object.keys(page.id)); */

/* const element = {
	pages: {
		default: getElement("page-default"),
		password: getElement("page-password"),
	},
	buttons: {
		password: getElement("button-password"),
	},
};

const states = {
	show(pageName) {
		const pageToChange = element.pages[pageName];

		if (pageToChange) {
			for (const allPages in element.pages) {
				states.hide(allPages);
			}
			showElement(pageToChange);
		}
	},

	hide(pageName) {
		const pageToChange = element.pages[pageName];

		if (pageToChange) {
			hideElement(pageToChange);
		}
	},
}; */

/* element.buttons.password.addEventListener("click", pagePasswordShow);
function pagePasswordShow() {
	states.show("password");
} */
