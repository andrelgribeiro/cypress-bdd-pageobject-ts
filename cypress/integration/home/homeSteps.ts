import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../pageObjects/HomePage'



When('I search something in the page',() => {
    HomePage.clickOnSearchButton()
    HomePage.searchSomething('basquete')
})

Then('I should see my search parameter',() => {
    HomePage.validPageContainer('basquete')
})
