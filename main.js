const buttonPassword = document.getElementById("button-password")

const page = {
    default: document.getElementById("page-default"),
    password: document.getElementById("page-password"),
}

const state = {
    show(calledPage) {
        const pageToChange = page[calledPage]

        if (pageToChange) {
            pageToChange.style.display = "block"
        }
    },

    hide(calledPage) {
        const pageToChange = page[calledPage]

        if (pageToChange) {
            pageToChange.style.display = "none"
        }
    },
}

buttonPassword.addEventListener("click", pagePasswordShow)
    function pagePasswordShow() {
        state.hide("default")
        state.show("password")
    }
