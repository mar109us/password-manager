const id = (calledId) => document.getElementById(calledId);

const showElement = (element) => (element.style.display = "block");
const hideElement = (element) => (element.style.display = "none");

const page = {
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
};

function findKey(obj, keyToFind) {
	return Object.entries(obj).reduce(
		(acc, [key, value]) =>
			key === keyToFind
				? acc.concat(value)
				: typeof value === "object"
					? acc.concat(findKey(value, keyToFind))
					: acc,
		[],
	);
}

console.log(findKey(page, "id"));

/* console.log(Object.keys(page.id)); */

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
