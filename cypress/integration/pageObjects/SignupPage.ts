const USER_FIRST_NAME = 'input[name="firstName"]'
const USER_LAST_NAME = 'input[name="lastName"]'
const USER_EMAIL = 'input[name="email"]'
const USER_PASSWORD = 'input[name="newPassword"]'
const SUBMIT_BUTTON = 'button.btn'
const ERROR_LABEL = '.banner[role="alert"]'
const IFRAME_LOGIN = '#disneyid-iframe'

import HomePage from '../pageObjects/HomePage'
import 'cypress-iframe';



class SignupPage {
    static fillFirstName(name){
        cy.iframe(IFRAME_LOGIN).find(USER_FIRST_NAME, { timeout: 9000 }).type(name)
    }
    static fillLastName(name){
        cy.iframe(IFRAME_LOGIN).find(USER_LAST_NAME, { timeout: 5000 }).type(name)
    }
    static fillEmail(email){
        cy.iframe(IFRAME_LOGIN).find(USER_EMAIL, { timeout: 5000 }).type(email)
    }    
    static fillPassword(password){
        cy.iframe(IFRAME_LOGIN).find(USER_PASSWORD, { timeout: 5000 }).type(password)
    }
    static clickSubmit(){
        cy.iframe(IFRAME_LOGIN).find(SUBMIT_BUTTON, { timeout: 5000 }).click({ timeout: 5000 })
    }
    static validadeErrorLabel(){
        cy.iframe(IFRAME_LOGIN).find(ERROR_LABEL).should('be.visible')
    }
    static openLoginPage(){
        HomePage.openUserArea()
        HomePage.clickOnEnterButton()
    }
}

export default SignupPage