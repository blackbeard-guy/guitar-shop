class Error {

    render() {
        const html = `
        <div class="error-container">
        <h1 class="error-title">404</h1>
        <h1 class="error-text">Page is not found</h1>
        </div>
        `
        ROOT_ERROR.innerHTML = html
    }
}

const errorPage = new Error