class Shopping {

    handlerCloseShoppingPage(){
        ROOT_SHOPPING.innerHTML = ''
        document.body.classList.remove('stop-scrolling')
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let summCatalog = 0

        CATALOG.forEach(({id, name, price}) => {
            if(productsStore.indexOf(id) > -1) {
                htmlCatalog += `
                    <tr class='shopping-element'>
                    <td class='shopping-element__name'>💥 ${name}</td>
                    <td class='shopping-element__price'>${price.toLocaleString()} USD</td>
                    </tr>
                `
                summCatalog += price
            }
        })

        const html =`
            <div class='shopping-container'>
            <div><button onclick='shoppingPage.handlerCloseShoppingPage()'><img class='shopping-element__closeBtn' src="./components/Shopping/img/close.png"></button></div>
            <table>
                ${htmlCatalog}
                <tr class='shopping-element'>
                    <td class='shopping-element__name'>✨ Total:</td>
                    <td class='shopping-element__price'>${summCatalog.toLocaleString()} USD</td>
                </tr>
            </table>
            </div>
        `
        
        ROOT_SHOPPING.innerHTML = html
    }
}

const shoppingPage = new Shopping
