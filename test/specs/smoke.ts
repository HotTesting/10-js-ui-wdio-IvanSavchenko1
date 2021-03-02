describe('Website', function () {

    it('should be alive', function () {
        browser.url('/');
        expect($('#logo')).toBeDisplayed()

    })

    it('should be allowed to register', function () {
        browser.url('/index.php?route=account/register');
        expect($('#logo')).toBeDisplayed()

        const content = $('#content')

        const firstName = content.$('#input-firstname')
        firstName.setValue('Test')
        const lastName = content.$('#input-lastname')
        lastName.setValue('Test')

        const email = content.$('#input-email')
        const emailString = `test+${Date.now()}@test.com`
        email.setValue(emailString)

        const telephone = content.$('#input-telephone')
        telephone.setValue('12345678')

        const password = content.$('#input-password')
        password.setValue('123456')

        const confirmPassword = content.$('#input-confirm')
        confirmPassword.setValue('123456')

        const agreePolicy = content.$('input[type="checkbox"][name="agree"]')
        agreePolicy.click()

        const submitButton = content.$('input[type="submit"][value="Continue"]')
        submitButton.click()

        expect(content.$('h1')).toHaveText('Your Account Has Been Created!')
    })


})