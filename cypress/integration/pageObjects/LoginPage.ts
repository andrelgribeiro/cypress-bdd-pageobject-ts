const USER_NAME = 'input[type="email"]'
const USER_PASSWORD = 'input[type="password"]'
const SUBMIT_BUTTON = 'button.btn'
const ERROR_LABEL = '.banner[role="alert"]'
const IFRAME_LOGIN = '#disneyid-iframe'
const BTN_REGISTER = '[did-translate="login.label.CREATE_ACCOUNT"]'
const FORM_LOGIN = '#did-ui-view'

import HomePage from '../pageObjects/HomePage'
import 'cypress-iframe';



class LoginPage {
    static fillUsername(name){
        cy.iframe(IFRAME_LOGIN).find(USER_NAME, { timeout: 9000 }).type(name)
    }
    static fillPassword(password){
        cy.iframe(IFRAME_LOGIN).find(USER_PASSWORD, { timeout: 5000 }).type(password)
    }
    static clickSubmit(){
        cy.iframe(IFRAME_LOGIN).find(SUBMIT_BUTTON, { timeout: 5000 }).click({ timeout: 5000 })
    }
    static clickRegister(){
        cy.iframe(IFRAME_LOGIN).find(BTN_REGISTER, { timeout: 5000 }).click({ timeout: 5000 })
    }    
    static validadeErrorLabel(){
        cy.iframe(IFRAME_LOGIN).find(ERROR_LABEL).should('be.visible')
    }
    static isFormLoginVisible(){
        cy.iframe(IFRAME_LOGIN).find(FORM_LOGIN).should('be.visible')
    }
    static openLoginPage(){
        HomePage.openUserArea()
        HomePage.clickOnEnterButton()
    }
}

export default LoginPage