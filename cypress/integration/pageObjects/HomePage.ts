const HOME_LOGO = ".app_logo"
const USER_BUTTON = '.user #global-user-trigger'
const GET_IN_BUTTON = '.account-management [data-affiliatename="espn"]'
const DISPLAY_USER = '.user .display-user'
const BTN_SEARCH = '#global-search-trigger'
const PAGE_CONTAINER = '.page-container:not(.page-footer-container)'
const INPUT_SEARCH = 'input#global-search-input'

class HomePage {

    static openUserArea(){
        cy.get(USER_BUTTON, { timeout: 9000 }).click()
    }
    static clickOnEnterButton(){
        cy.get(GET_IN_BUTTON, { timeout: 5000 }).eq(1).click()

    }   
    static clickOnSearchButton(){
        cy.get(BTN_SEARCH, { timeout: 9000 }).click()
    }   

    static validPageContainer(seach){
        cy.get(PAGE_CONTAINER).invoke('text').then((text) => {
            expect(text.trim()).include(seach);
        });
    }

    static searchSomething(text){
        cy.get(INPUT_SEARCH, { timeout: 9000 }).type(`${text}{enter}`)
    }

    static validUserLogged(name){
        cy.get(USER_BUTTON).click()
        cy.get(DISPLAY_USER).invoke('text').then((text) => {
            expect(text.trim()).include(name);
        });
    }
}

export default HomePage