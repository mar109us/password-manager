const id = (calledId) => document.getElementById(calledId);

const showElement = (element) => (element.style.display = "block");
const hideElement = (element) => (element.style.display = "none");

/* const page = {
	default: {
		id: id("page-default"),
		buttons: {
			password: id("button-password"),
			new: id,
			settings: id,
		},
	},

	password: {
		id: id("page-password"),
	},
}; */

const element = {
	pages: {
		default: id("page-default"),
		password: id("page-password"),
	},
	buttons: {
		password: id("button-password"),
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
};

element.buttons.password.addEventListener("click", pagePasswordShow);
function pagePasswordShow() {
	states.show("password");
}
