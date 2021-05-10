import { TopLinks } from "./components/toplinks.component"
import { AlertMessages } from "./components/alertMessages";


export class HomePage {
    topLinks: TopLinks = new TopLinks()
    alertMessages: AlertMessages = new AlertMessages()

    openCategory(categoryName: string) {
        $(`a=${categoryName}`).click()
        expect($('#content')).toBeVisible({wait:2000, interval: 500})
        expect($('#content>h2')).toHaveTextContaining(`${categoryName}`)
    }

    openAllForCategory(categoryName: string) {
        $(`a=${categoryName}`).click()
        const openedSeeAllLink = $('.dropdown.open .see-all')
        expect(openedSeeAllLink).toBeVisible()
        openedSeeAllLink.click()
    }

    openCart(title: string){
        const cartButton = $('span#cart-total')
        cartButton.click()
        //expect($('.dropdown-menu .text-left')).toHaveText('iPod Shuffle')
        expect($('.dropdown-menu .text-left')).toHaveText(`${title}`)
        const viewCart = $('a[href$="cart"]')
        expect(viewCart).toBeVisible()
        viewCart.click()
        expect ($('#content h1')).toHaveTextContaining('Shopping Cart',{wait:2000, interval:200})
    }
}