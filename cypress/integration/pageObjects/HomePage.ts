const HOME_LOGO = ".app_logo"
const USER_BUTTON = '.user #global-user-trigger'
const GET_IN_BUTTON = '.account-management [data-affiliatename="espn"]'
const DISPLAY_USER = '.user .display-user'


class HomePage {

    static openUserArea(){
        cy.get(USER_BUTTON, { timeout: 3000 }).click()
    }
    static clickOnEnterButton(){
        cy.get(GET_IN_BUTTON, { timeout: 3000 }).eq(1).click()

    }    
    static validUserLogged(name){
        cy.get(USER_BUTTON).click()
        cy.get(DISPLAY_USER).invoke('text').then((text) => {
            expect(text.trim()).include(name);
        });
    }
}

export default HomePage