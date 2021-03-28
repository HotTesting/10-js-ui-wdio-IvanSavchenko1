export class CheckoutOptionsComponent {
    private get root():WebdriverIO.Element {
        return $('div#collapse-checkout-option')
    }

    selectGuestCheckout() {
        const guestCheckoutRadio = this.root.$('input[type="radio"][value="guest"]')
        expect(this.root.$('[aria-expanded="true"] .panel-body')).toBeVisible()
        expect(guestCheckoutRadio).toBeVisible({
            message: 'Expected guest Checkout radio button to be visible'} )
        browser.pause(500) //couldn`t find workaround atm
        guestCheckoutRadio.click()
    }

    continue() {
        const continueButton = this.root.$('[aria-expanded="true"] .panel-body input[type="button"][value="Continue"]')
        expect(continueButton).toBeClickable({
            message: 'Expected Continue button to be visible'})
        continueButton.click()
    }
}