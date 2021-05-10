import {App} from "../application/application";
afterEach(function() {
    browser.deleteCookies()
});

const address = {
    firstName: 'CannonTest',
    lastName: 'CannonTest',
    email: `test+${Date.now().toString()}@test.com`,
    address1: 'CannonTest',
    telephone: '123456',
    city: 'CannonCity',
    postCode: '123123',
}

describe('Purchase cannon', function (){
    it('Buy cannon', function (){
        browser.url('/')
        const app = new App()
        app.home.openCategory('Cameras')
        const cannonEOS5D = app.productCategory.products.find(product => product.title() === 'Canon EOS 5D')
        expect(cannonEOS5D).toBeDefined()
        cannonEOS5D.addToCart('Canon EOS 5D')
        cannonEOS5D.redCannonOptionAdd()
        app.home.alertMessages.openShopCart()
        app.checkout.open()
        app.checkout.checkoutOptions.selectGuestCheckout()
        app.checkout.checkoutOptions.continue()
        browser.waitUntil(() => app.checkout.billingDetails.isInputReady(), {
            timeoutMsg: "Expected confirmation page to be loaded"
        })
        //@ts-ignore
        browser.execute(function(_address) {

            document.querySelector('#input-payment-firstname').value = _address.firstName;
            document.querySelector('#input-payment-lastname').value = _address.lastName;
            document.querySelector('#input-payment-email').value = _address.email;
            document.querySelector('#input-payment-telephone').value = _address.telephone;
            document.querySelector('#input-payment-address-1').value = _address.address1;
            document.querySelector('#input-payment-city').value = _address.city;
            document.querySelector('#input-payment-postcode').value = _address.postCode;
        }, address)

        app.checkout.billingDetails.fillCountryRegion('Ukraine', 'Kyiv')

        app.checkout.billingDetails.continue()

        if (app.checkout.billingDetails.isCheckboxSelected() == true) {
            app.checkout.billingDetails.unselectCheckbox()
        }

        browser.pause(1000)
        browser.execute(function() {

            const delAdress = {
                firstName: 'Test',
                lastName: 'Test',
                address1: 'Address',
                city: 'cannonCity',
            }

            document.querySelector('#input-shipping-firstname').value = delAdress.firstName;
            document.querySelector('#input-shipping-lastname').value = delAdress.lastName;
            document.querySelector('#input-shipping-address-1').value = delAdress.address1;
            document.querySelector('#input-shipping-city').value = delAdress.city;
        })

        app.checkout.deliveryDetails.fillDelieveryCountryRegion('Ukraine', 'Crimea')

        app.checkout.deliveryDetails.continue()
        app.checkout.deliveryMethod.continue()
        app.checkout.paymentMethod.acceptTermsAndConditions()
        app.checkout.paymentMethod.continue()
        app.checkout.confirmOrder.continue()
        browser.waitUntil(() => app.confirmation.isOpened(), {
            timeoutMsg: "Expected confirmation page to be loaded"
        })
    })
})

describe ('Purchase 2 and more items', function (){
    it('Purchase 2 players', function (){
        browser.url('/')
        const app = new App()

        app.home.openAllForCategory('MP3 Players')
        const iPodClassic = app.productCategory.products.find(product => product.title() === 'iPod Classic')
        expect(iPodClassic).toBeDefined()
        const iPodNano = app.productCategory.products.find(product => product.title() === 'iPod Nano')
        expect(iPodNano).toBeDefined()
        iPodClassic.addToCart('iPod Classic')
        app.home.alertMessages.openShopCart()
        app.home.openAllForCategory('MP3 Players')
        iPodNano.addToCart('iPod Nano')

        app.home.alertMessages.openShopCart()

        app.checkout.open()
        browser.execute(function() {

            const cartLogin = {
                email: 'execute@gmail.com',
                password: 'execute@gmail.com',

            }
            document.querySelector('#input-email').value = cartLogin.email;
            document.querySelector('#input-password').value = cartLogin.password;

        })
        app.checkout.checkoutOptions.login()
        app.checkout.billingDetails.continue()
        app.checkout.deliveryDetails.continue()
        app.checkout.deliveryMethod.continue()
        app.checkout.paymentMethod.acceptTermsAndConditions()
        app.checkout.paymentMethod.continue()
        app.checkout.confirmOrder.continue()
        browser.waitUntil(() => app.confirmation.isOpened(), {
            timeoutMsg: "Expected confirmation page to be loaded"
        })


    })
})