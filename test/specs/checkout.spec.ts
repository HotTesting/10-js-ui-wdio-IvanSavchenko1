import {App} from "../application/application";

describe ('Item', function (){



    it('can be purchased', function() {
       const app = new App()
        app.home.openAllForCategory('MP3 Players')

        const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        browser.pause(500)
        iPodShuffle.addToCart()
        browser.pause(500)
        app.checkout.open()
        browser.pause(500)

        app.checkout.checkoutOptions.selectGuestCheckout()
        //browser.pause(500)
        app.checkout.checkoutOptions.continue()

        app.checkout.billingDetails.fillBillingDetails({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
            address1: 'test',
            city: 'test',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        })

        app.checkout.billingDetails.unselectCheckbox()
        browser.pause(3500)
        app.checkout.billingDetails.continue()
        browser.pause(500)
        app.checkout.deliveryMethod.continue()
        browser.pause(500)
        app.checkout.paymentMethod.acceptTermsAndConditions()
        app.checkout.paymentMethod.continue()
        browser.pause(500)
        app.checkout.confirmOrder.continue()


        browser.waitUntil(() => app.confirmation.isOpened(), {
            timeoutMsg: "Expected confirmation page to be loaded"
        })
    })
})