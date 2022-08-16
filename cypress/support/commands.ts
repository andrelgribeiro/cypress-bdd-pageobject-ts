const { faker } = require('@faker-js/faker');

declare namespace Cypress{
    interface Chainable {
        accessAccount(): Chainable<Element>
        visitHost(): Chainable<Element>
        generateFixture(): Chainable<Element>
    }
}

Cypress.Commands.add('visitHost', ()=>{
    cy.visit('www.espn.com/')
})

Cypress.Commands.add('generateFixture', () => {
    cy.log(faker.name)

    cy.writeFile('cypress/fixtures/user.json', {
          'firstName': faker.name.firstName(),
          'lastName': faker.name.lastName(),
          'email':`automation_espn_${faker.datatype.number()}@mailinator.com`,
          'password':'secret_123',
    })
  })