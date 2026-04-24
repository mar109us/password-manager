
const button_password = document.getElementById("button_password")

const state = {
    page: {
        default: document.getElementById("state_default"),
        password: document.getElementById("state_show_password"),
    },

    show(specified_page) {
        const show_this_page = this.page[specified_page]

        if (show_this_page) {
            show_this_page.style.display = "block"
        }
    },

    hide(specified_page) {
        const hide_this_page = this.page[specified_page]

        if (hide_this_page) {
            hide_this_page.style.display = "none"
        }
    },
}

button_password.addEventListener("click", function_state_show_password)
    function function_state_show_password() {
        state.hide("default")
        state.show("password")
    }
