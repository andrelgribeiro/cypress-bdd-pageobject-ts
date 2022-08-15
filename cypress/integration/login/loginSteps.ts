import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'

When('I submit login with {string} and {string}',(username, password) => {
    LoginPage.openLoginPage()
    LoginPage.fillUsername(username)
    LoginPage.fillPassword(password)
    LoginPage.clickSubmit()
})
Then('I should see my user {string}', (name) => {
    HomePage.validUserLogged(name)
})

Then ('I should see error message', ()=>{
    LoginPage.validadeErrorLabel()
})

