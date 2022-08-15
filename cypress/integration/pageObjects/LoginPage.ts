const USER_NAME = 'input[type="email"]'
const USER_PASSWORD = 'input[type="password"]'
const SUBMIT_BUTTON = 'button.btn'
const ERROR_LABEL = 'div>h3[data-test~="error"]'
const USER_BUTTON = '.user #global-user-trigger'
const GET_IN_BUTTON = '.user.hover [data-affiliatename="espn"]'
const IFRAME_LOGIN = '#disneyid-iframe'

import HomePage from '../pageObjects/HomePage'
import 'cypress-iframe';



class LoginPage {
    static fillUsername(name){
        cy.iframe(IFRAME_LOGIN).find(USER_NAME, { timeout: 3000 }).type(name)
    }
    static fillPassword(password){
        cy.iframe(IFRAME_LOGIN).find(USER_PASSWORD, { timeout: 3000 }).type(password)
    }
    static clickSubmit(){
        cy.iframe(IFRAME_LOGIN).find(SUBMIT_BUTTON, { timeout: 3000 }).click({ timeout: 5000 })
    }
    static validadeErrorLabel(){
        cy.get(ERROR_LABEL).should('be.visible')
    }
    static openLoginPage(){
        HomePage.openUserArea()
        HomePage.clickOnEnterButton()
    }
}

export default LoginPage