
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

    logout(){
        const logoutButton = this.root.$('a=Logout')
        expect(logoutButton).toBeVisible({message:'Expected Logout button to be visible'})
        logoutButton.click()
        expect ($('h1=Account Logout')).toBeVisible({message:'Expected Logout Screen to be visible'})
    }
}