export class DeliveryDetailsComponent {
    private get root():WebdriverIO.Element {
        return $('div#collapse-shipping-address').parentElement()
    }

    fillDeliveryDetails(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        country: string,
        region: string
    })

    {
        this.root.$('#input-shipping-firstname').setValue(data.firstName)
        this.root.$('#input-shipping-lastname').setValue(data.lastName)
        this.root.$('#input-shipping-address-1').setValue(data.address1)
        this.root.$('#input-shipping-city').setValue(data.city)
        this.root.$('#input-shipping-country').selectByVisibleText(data.country)
        this.root.$('#input-shipping-zone').selectByVisibleText(data.region)
    }

    fillDelieveryCountryRegion(country: string, region: string) {
        this.root.$('#input-shipping-country').selectByVisibleText(country)
        browser.pause(500)
        //expect($( this.root.$('#input-payment-zone'))).toBeClickable()
        this.root.$('#input-shipping-zone').selectByVisibleText(region)
    }

    isInputReady(): boolean {
        return this.root.$('#input-shipping-firstname').isDisplayed()
    }

    continue() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]')
        expect(continueButton).toBeVisible({message: 'Expected Continue button to be visible'})
        continueButton.click()
    }


}