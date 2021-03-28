export class LoginPage {
    private get root(): WebdriverIO.Element {
        return $('h2=Returning Customer').parentElement()
    }

    returnCustomerLogin(){
        const userEmail = this.root.$('#input-email')
        expect(userEmail).toBeVisible({message: 'Expect Email input to be visible'  })
        userEmail.setValue(`wishtest@gmail.com`)
        const userPassword = this.root.$('#input-password')
        userPassword.setValue(`wishtest@gmail.com`)
        const loginSubmit = this.root.$('[type="submit"]')
        loginSubmit.click()
        expect($('h2=My Account')).toBeVisible({message:'My Account page is open'})
    }

}





