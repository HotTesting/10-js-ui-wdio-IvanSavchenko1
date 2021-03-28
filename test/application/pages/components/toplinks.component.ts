
export class TopLinks {
    private get root(): WebdriverIO.Element {
        return $('nav#top')
    }
    myAccount(){
        const myAccountButton = this.root.$('span=My Account')
        expect(myAccountButton).toBeVisible({message:'Expected My account button to be visible'})
        myAccountButton.click()
    }

    login(){
        const loginButton = this.root.$('a=Login')
        expect(loginButton).toBeVisible({message:'Expected Login button to be visible'})
        loginButton.click()
    }
}