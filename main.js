const button_password = document.getElementById("button_password")

const page = {
    default: document.getElementById("page_default"),
    password: document.getElementById("page_password"),
}

const state = {
    show(recieved_page) {
        const page_to_change = page[recieved_page]

        if (page_to_change) {
            page_to_change.style.display = "block"
        }
    },

    hide(recieved_page) {
        const page_to_change = page[recieved_page]

        if (page_to_change) {
            page_to_change.style.display = "none"
        }
    },
}

button_password.addEventListener("click", page_password_show)
    function page_password_show() {
        state.hide("default")
        state.show("password")
    }
