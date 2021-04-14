import { TopLinks } from "./components/toplinks.component"
import { AlertMessages } from "./components/alertMessages";


export class HomePage {
    topLinks: TopLinks = new TopLinks()
    alertMessages: AlertMessages = new AlertMessages()

    openAllForCategory(categoryName: string) {
        $(`a=${categoryName}`).click()
        const openedSeeAllLink = $('.dropdown.open .see-all')
        expect(openedSeeAllLink).toBeVisible()
        openedSeeAllLink.click()
    }

    openCart(){
        const cartButton = $('span#cart-total')
        cartButton.click()
        expect($('.dropdown-menu .text-left')).toHaveText('iPod Shuffle')
        const viewCart = $('a[href$="cart"]')
        expect(viewCart).toBeVisible()
        viewCart.click()
        expect ($('#content h1')).toHaveTextContaining('Shopping Cart',{wait:2000, interval:200})
    }
}