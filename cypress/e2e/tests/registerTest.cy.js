import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'

const registerObj = new registerPage()

describe('To test the Register functionality', () => {
    it('register flow', () => {

        registerObj.openUrl()
        registerObj.enterFirstName(registerData.firstname)
        registerObj.enterLastName(registerData.lastname)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()

    })
})