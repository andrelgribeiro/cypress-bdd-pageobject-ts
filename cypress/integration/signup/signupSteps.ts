import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pageObjects/LoginPage'
import SignupPage from '../pageObjects/SignupPage'

Given('I have a new user to create',() => {
    cy.generateFixture()
})

When('I access the signup form',() => {
    LoginPage.openLoginPage()
    LoginPage.clickRegister()
})

When('I fill all fields correctly and click on Register button',() => {
    cy.fixture('user').then(function (testdata) {
        SignupPage.fillFirstName(testdata.firstName)
        SignupPage.fillLastName(testdata.lastName)
        SignupPage.fillEmail(testdata.email)
        SignupPage.fillPassword(testdata.password)
        SignupPage.clickSubmit()   
    })    })

When('I should see the confirmation',() => {
    LoginPage.isFormLoginVisible()
})