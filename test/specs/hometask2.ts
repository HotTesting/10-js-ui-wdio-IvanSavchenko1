describe('Product return', function () {

    it("can be submited", function() {
    browser.url('/index.php?route=account/return/add');
    browser.pause(1000)
        const content = $('#content')
    expect(content.$('h1')).toHaveText('Product Returns')

    const firstName = content.$('#input-firstname')
        firstName.setValue('Test')

    const lastName = content.$('#input-lastname')
        lastName.setValue('Test')

    const email = content.$('#input-email')
    const emailString = `test+${Date.now()}@test.com`
        email.setValue(emailString)

    const telephone = content.$('#input-telephone')
        telephone.setValue('12345678')

    const orderID = content.$('#input-order-id')
        orderID.setValue('112233')

    const productName = content.$('#input-product')
        productName.setValue('iPhone')

    const productCode = content.$('#input-model')
        productCode.setValue('998877')

    const reasonForReturn = content.$('[name="return_reason_id"][value="2"]')
        reasonForReturn.click()

    const productOpened = content.$('[name="opened"][value="0"]')
    expect(productOpened).toBeChecked()

    const returnSubmitButton = content.$('[type="submit"]')
        returnSubmitButton.click()

    expect(content.$('h1')).toHaveText('Product Returns', {wait:2000, interval:200})

        browser.pause(1000)
    })

    describe("Gift Certificate", function() {
        it("can be purchased", function () {

    browser.url('/index.php?route=account/voucher');
    browser.pause(1000)
    const content = $('#content')
    expect(content.$('h1')).toHaveText('Purchase a Gift Certificate')

    const recepientName = content.$('#input-to-name')
        recepientName.setValue('Return Name')

    const recepientEmail = content.$('#input-to-email')
    const recepientEmailString = `rec+${Date.now()}@mail.com`
        recepientEmail.setValue(recepientEmailString)

    const yourName = content.$('#input-from-name')
        yourName.setValue('Your Name')

    const yourEmail = content.$('#input-from-email')
    const yourEmailString = `your+${Date.now()}@test.com`
        yourEmail.setValue(yourEmailString)

    const certTheme = content.$('[name="voucher_theme_id"][value="8"]')
        certTheme.click()

    const nonRefCheckbox = content.$('[name="agree"][value="1"]')
        nonRefCheckbox.click()
            expect(nonRefCheckbox).toBeChecked()

    const giftSubmitButton = content.$('[type="submit"]')
        giftSubmitButton.click()

    expect(content.$('h1')).toHaveText('Purchase a Gift Certificate', {wait:2000, interval:200})
    expect(content.$('p')).toHaveTextContaining('gift certificate recipient')


    browser.pause(1000)
        });
    })


    describe("Contact us form", function() {
        it("must send messages to shop administration", function () {
        browser.url('/index.php?route=information/contact');
        browser.pause(1000)

        const content = $('#content')
        expect(content.$('h1')).toHaveText('Contact Us')

        const contFormName = content.$('#input-name')
            contFormName.setValue('Contact Name')

        const contUsEmail = content.$('#input-email')
        const contUsEmailEmailString = `cont+${Date.now()}@mail.com`
            contUsEmail.setValue(contUsEmailEmailString)

        const contEnquiryText = content.$('#input-enquiry')
            contEnquiryText.setValue('Test enquiry')

        const submitButton = content.$('input[value="Submit"]');
            submitButton.click();

        expect(content.$('h1')).toHaveText('Contact Us', {wait:2000, interval:200})

            browser.pause(1000)
        })



    describe("Items search", function() {
        it("should show results in case multiple items matches", function () {
        browser.url('/');
        browser.pause(1000)

        const content = $('#content');
        const itemSearch=$('[name="search"]')
        itemSearch.setValue('Macbook')

        const searchButton=$('div[id="search"] .input-group-btn [type="button"]')
        searchButton.click()
            expect(content.$('h2')).toHaveText('Products meeting the search criteria', {wait:2000, interval:200})

        const searchItems = $$('.product-layout')
            expect(searchItems.length).not.toBe(0)

            expect($$('.product-layout h4')).toHaveTextContaining('Mac',)

        browser.pause(1000)
    });


    it("should redirect to 'no matching results' in case no items matched", function() {
        const content = $('#content');
        const itemSearch=$('[name="search"]')
        itemSearch.setValue('Nokia3310')

        const searchButton=$('div[id="search"] .input-group-btn [type="button"]')
        searchButton.click()
            expect(content.$('h2')).toHaveText('Products meeting the search criteria', {wait:2000, interval:200})
            expect(content.$ ('p:nth-of-type(2)')).toHaveText('There is no product that matches the search criteria.', {wait:2000, interval:200});

        browser.pause(1000)
    });



        })
    })
})