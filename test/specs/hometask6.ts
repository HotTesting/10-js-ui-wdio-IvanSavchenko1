import {App} from "../application/application";
// todo: add for items list
// const items = [
//     {title:'iPod Classic'},
//     {title:'iPod Nano'},
//     {title:'iPod Shuffle'},
//     {title:'iPod Touch'}
// ]
// todo: add for user
// const user = {
//     email: 'wishtest@gmail.com',
//     password: 'wishtest@gmail.com'
//
// }
afterEach(function() {
    browser.deleteCookies()
});

const comparisonFunction = function (){
    const app = new App()
    app.home.openAllForCategory('MP3 Players')
    const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')
    expect(iPodShuffle).toBeDefined()
    iPodShuffle.compareThisProduct()
    app.home.alertMessages.openComparison()
    expect ($('#content h1')).toHaveTextContaining('Product Comparison',{wait:2000, interval:200})
    app.comparison.removeFromComparison()
    browser.waitUntil(()=> app.comparison.isEmpty(),{
        timeoutMsg: "Expected Comparison Page is empty"
    })
}

const addToCart = function () {
    const app = new App()
    app.home.openAllForCategory('MP3 Players')
    const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')
    expect(iPodShuffle).toBeDefined()
    iPodShuffle.addToCart()
    app.home.openCart()
    expect ($('#content h1')).toHaveTextContaining('Shopping Cart',{wait:2000, interval:500})
    app.shoppingCart.removeFromCart()
    browser.waitUntil(() => app.shoppingCart.isEmpty(), {
        timeoutMsg: "Expected Shopping cart is empty"
    })
}

const login = function () {
    browser.url('/')
    const app = new App()
    app.home.topLinks.myAccount()
    app.home.topLinks.login()
    app.loginPage.returnCustomerLogin()
}

const addToWishlist = function () {
    const app = new App()
    app.home.openAllForCategory('MP3 Players')
    const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')
    expect(iPodShuffle).toBeDefined()
    iPodShuffle.addToWishList()

    app.home.alertMessages.openWishlist()
    app.wishlist.removeFromWishList()
    browser.waitUntil(()=> app.wishlist.isEmpty(),{
        timeoutMsg: "Expected Wishlist is empty"
    })
}

const purchaseItemSameDelievery = function(){
    const app = new App()
    app.home.openAllForCategory('MP3 Players')

    const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')
    expect(iPodShuffle).toBeDefined()
    iPodShuffle.addToCart()
    app.home.openCart()
    expect ($('#content h1')).toHaveTextContaining('Shopping Cart',{wait:2000, interval:200})
    app.checkout.open()
    expect($('#content h1')).toHaveTextContaining('Checkout',{wait:2000, interval:200})
    app.checkout.checkoutOptions.selectGuestCheckout()
    app.checkout.checkoutOptions.continue()
    browser.waitUntil(() => app.checkout.billingDetails.isInputReady(), {
        timeoutMsg: "Expected confirmation page to be loaded"
    })

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

    if (app.checkout.billingDetails.isCheckboxSelected() !== true ){
        app.checkout.billingDetails.selectCheckbox()
    }
    app.checkout.billingDetails.continue()
    app.checkout.deliveryMethod.continue()
    app.checkout.paymentMethod.acceptTermsAndConditions()
    app.checkout.paymentMethod.continue()
    app.checkout.confirmOrder.continue()
    browser.waitUntil(() => app.confirmation.isOpened(), {
        timeoutMsg: "Expected confirmation page to be loaded"
    })
}

const purchaseItemDiffDelievery = function () {
    const app = new App()
    app.home.openAllForCategory('MP3 Players')

    const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')
    expect(iPodShuffle).toBeDefined()
    iPodShuffle.addToCart()
    app.home.openCart()
    expect($('#content h1')).toHaveTextContaining('Shopping Cart', {wait: 2000, interval: 200})
    app.checkout.open()
    expect($('#content h1')).toHaveTextContaining('Checkout', {wait: 2000, interval: 200})
    app.checkout.checkoutOptions.selectGuestCheckout()
    app.checkout.checkoutOptions.continue()
    browser.waitUntil(() => app.checkout.billingDetails.isInputReady(), {
        timeoutMsg: "Expected confirmation page to be loaded"
    })

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

    if (app.checkout.billingDetails.isCheckboxSelected() == true) {
        app.checkout.billingDetails.unselectCheckbox()
    }

    app.checkout.billingDetails.continue()

    browser.waitUntil(() => app.checkout.deliveryDetails.isInputReady(), {
        timeoutMsg: "Expected confirmation page to be loaded"
    })
    app.checkout.deliveryDetails.fillDeliveryDetails({
        firstName: 'Deliverytest',
        lastName: 'Deliverytest',
        address1: 'Deltest',
        city: 'Deltest',
        country: 'Ukraine',
        region: 'Cherkas\'ka Oblast\''
    })
    app.checkout.deliveryDetails.continue()
    app.checkout.deliveryMethod.continue()
    app.checkout.paymentMethod.acceptTermsAndConditions()
    app.checkout.paymentMethod.continue()
    app.checkout.confirmOrder.continue()
    browser.waitUntil(() => app.confirmation.isOpened(), {
        timeoutMsg: "Expected confirmation page to be loaded"
    })
}

const purchaseByRegisteredUser = function() {
    const app = new App()
    app.home.openAllForCategory('MP3 Players')

    const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')
    expect(iPodShuffle).toBeDefined()
    iPodShuffle.addToCart()
    app.home.openCart()
    expect($('#content h1')).toHaveTextContaining('Shopping Cart', {wait: 2000, interval: 200})
    app.checkout.open()
    expect($('#content h1')).toHaveTextContaining('Checkout', {wait: 2000, interval: 200})

    //expect (app.checkout.billingDetails.isAreaExpanded())
    browser.pause(1000) //Couldn`t find a workaround yet

    app.checkout.billingDetails.continue()


    app.checkout.deliveryDetails.continue()
    app.checkout.deliveryMethod.continue()
    app.checkout.paymentMethod.acceptTermsAndConditions()
    app.checkout.paymentMethod.continue()
    app.checkout.confirmOrder.continue()
    browser.waitUntil(() => app.confirmation.isOpened(), {
        timeoutMsg: "Expected confirmation page to be loaded"
    })
}




describe ('Guest user', function (){
    it(`iPodShuffle can be added to cart by guest user`, function() {
        addToCart()
    })
    it(`Item be selected for comparison by guest`, function () {
       comparisonFunction()
    })
    it('can be purchased with same delivery address', function() {
        purchaseItemSameDelievery()
    })
    it('can be purchased with different delivery address', function() {
        purchaseItemDiffDelievery()
    })
})

describe('Registered user', function () {
    beforeEach(function () {
        login()
        }
    )
    it(`Item be selected for comparison by registered user`, function () {
        comparisonFunction()
    })

    it(`Item be added to cart by registered user`, function () {
        addToCart()
    })

    it(`Item be added wishlist by registered user`, function () {
        addToWishlist()
    })

    it('Item can be purchased by registered user with same address', function() {
        purchaseByRegisteredUser()
    })
})