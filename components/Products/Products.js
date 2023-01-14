class Products {

    constructor() {
        this.activeClass = 'products-element__btn_active'
        this.textAdd = 'Add to Cart'
        this.textRemove = 'Remove from Cart'
    }

    handleSetLocationStorage(el, id) {
        const {pushProducts, products} = localStorageUtil.putProducts(id)
        if (pushProducts) {
            el.classList.add(this.activeClass)
            el.innerHTML = this.textRemove
        } else {
            el.classList.remove(this.activeClass)
            el.innerHTML = this.textAdd
        }

        headerPage.render(products.length)
    }

    render() {
        let htmlCatalog = ''

        CATALOG.forEach(({id, name, price, img}) => {
            const productsStore = localStorageUtil.getProducts()
            let activeClass = ''
            let activeText = ''
            if(productsStore.indexOf(id) === -1) {
                activeText = this.textAdd
            } else {
                activeText = this.textRemove
                activeClass = ' ' + this.activeClass
            }

            htmlCatalog += `
            <li class='products-element'>
            <span class='products-element__name'>${name}</span>
            <img class='products-element__img' src='${img}'>
            <span class='products-element__price'>💥 ${price.toLocaleString()} USD</span>
            <button class='products-element__btn${activeClass}' onclick='productsPage.handleSetLocationStorage(this, "${id}")'>${activeText}</button>
            </li>`
        } )

        const html = `
        <ul class='products-container'>
        ${htmlCatalog}
        </ul>
        `

        ROOT_PRODUCTS.innerHTML = html
    } 
}

const productsPage = new Products