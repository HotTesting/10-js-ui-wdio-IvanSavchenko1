export class ShoppingCartPage {
    removeFromCart(){
        const removeButton = $('.input-group-btn .btn.btn-danger')
        expect(removeButton).toBeVisible({message: 'Expected remove button to be visible'})
        removeButton.click()
    }
    isEmpty(): boolean {
        return $('#content p').getText() === 'Your shopping cart is empty!'
        }

    goToCheckout(){
        const checkooutButton = $('a=Checkout')
        expect(checkooutButton).toBeVisible()
        checkooutButton.click
    }


}