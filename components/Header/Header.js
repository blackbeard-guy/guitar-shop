class Header {

    handlerOpenShoppingPage() {
        shoppingPage.render()
        document.body.classList.add('stop-scrolling')
    }

    render(count) {
        const html = `
            <div class='header-container'>
                <div class='header-counter' onclick='headerPage.handlerOpenShoppingPage()'>
                🔥 ${count}
                </div>
            </div>
        `  
        ROOT_HEADER.innerHTML = html
    }
}

const headerPage = new Header
