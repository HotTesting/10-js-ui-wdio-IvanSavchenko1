import {ApiClient} from "../application/apiClient";

describe('api calls', function () {
        it('first call', function (){
            browser.url('/')
            const user = new ApiClient().createNewUser()
            browser.pause(2000)
            browser.url('/index.php?route=account/login')
            const userEmail = $('#input-email')
            expect(userEmail).toBeVisible({message: 'Expect Email input to be visible'  })
            userEmail.setValue(user.email)
            const userPassword = $('#input-password')
            userPassword.setValue(`testmail@gmail.com`)
            const loginSubmit = $('[type="submit"]')
            loginSubmit.click()
            expect($('h2=My Account')).toBeVisible({message:'My Account page is open'})
            browser.pause(3000)

        })
    }
)



describe ('execute JS', function (){

    it('register user: data to JS  ', function(){
        browser.url('/index.php?route=account/register')
        const result = browser.execute(function() {

            const user = {
                firstName: 'Test',
                lastName: 'Test',
                email: `test+${Date.now().toString()}@test.com`,
                password: '123456',
                confirmPassword: '123456',
                telephone: '123456',
                acceptTerms: true,
            }

            document.querySelector('input#input-firstname').value = user.firstName;
            document.querySelector('input#input-lastname').value = user.lastName;
            document.querySelector('input#input-email').value = user.email;
            document.querySelector('input#input-telephone').value = user.telephone;
            document.querySelector('input#input-password').value = user.password;
            document.querySelector('input#input-confirm').value = user.confirmPassword;

            if (user.acceptTerms) {
                document.querySelector('input[type="checkbox"][name="agree"]').click();
            }
            document.querySelector('input[type="submit"][value="Continue"]').click();

            return user
        })
        console.log('user was created', result)
        browser.pause(2000)
    })

    it.only('register user: data from jS', function(){
        browser.url('/index.php?route=account/register')
        const user = {
            firstName: 'Test',
            lastName: 'Test',
            email: `test+${Date.now().toString()}@test.com`,
            password: '123456',
            confirmPassword: '123456',
            telephone: '123456',
            acceptTerms: true,
        }
        //@ts-ignore
        browser.execute(function(_user) {
            console.dir(_user)

            document.querySelector('input#input-firstname').value = _user.firstName;
            document.querySelector('input#input-lastname').value = _user.lastName;
            document.querySelector('input#input-email').value = _user.email;
            document.querySelector('input#input-telephone').value = _user.telephone;
            document.querySelector('input#input-password').value = _user.password;
            document.querySelector('input#input-confirm').value = _user.confirmPassword;

            if (_user.acceptTerms) {
                document.querySelector('input[type="checkbox"][name="agree"]').click();
            }
            document.querySelector('input[type="submit"][value="Continue"]').click();

        }, user)
        console.log('user was created', user)
        browser.pause(2000)
    })
})