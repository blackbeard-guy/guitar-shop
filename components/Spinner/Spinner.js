class Spinner {

    render() {
        const html = `
        <div class="spinner-container">
        <img class="spinner-element" src='./components/Spinner/img/spinner.svg'>
        </div>`

        ROOT_SPINNER.innerHTML = html
    }

    stopRendering() {
        ROOT_SPINNER.innerHTML = ''
    }
}

const spinnerPage = new Spinner