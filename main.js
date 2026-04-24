const id = (calledId) => document.getElementById(calledId);
const showCss = (element) => (element.style.display = "block");
const hideCss = (element) => (element.style.display = "none");

const elements = {
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
		const pageToChange = elements.pages[pageName];

		if (pageToChange) {
			showCss(pageToChange);
		}
	},

	hide(pageName) {
		const pageToChange = elements.pages[pageName];

		if (pageToChange) {
			hideCss(pageToChange);
		}
	},
};

elements.buttons.password.addEventListener("click", pagePasswordShow);
function pagePasswordShow() {
	states.hide("default");
	states.show("password");
}
