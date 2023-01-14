function render() {
    const productsStore = localStorageUtil.getProducts()
    
    headerPage.render(productsStore.length)
    productsPage.render()
}
spinnerPage.render()

let CATALOG = []

// async function getCatalog() {
//     const resp = await fetch('server/catalog.json')
//     const data = await resp.json()
//     CATALOG = data
//     spinnerPage.stopRendering()
//     render()
// } //my version

// getCatalog()

fetch('server/catalog.json')
    .then(resp => resp.json())
    .then(data => {
        CATALOG = data
        spinnerPage.stopRendering()
        render()
    })
    .catch(error => {
        spinnerPage.stopRendering()
        errorPage.render()
    })

