export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {

    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart')
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' })
        addToCartButton.click()
    }

    addToWishList() {
        const addToWishList = this.root.$('i.fa-heart')
        expect(addToWishList).toBeVisible({ message: 'Expected wishlist button to be visible' })
        addToWishList.click()
    }

    compareThisProduct() {
        const compareItem = this.root.$('button[onclick*="compare.add"] i.fa-exchange' )
        expect(compareItem).toBeVisible({ message: 'Expected compare button to be visible' })
        compareItem.click()
    }
}