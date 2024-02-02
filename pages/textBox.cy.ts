import {TextBoxPage} from "../../pages/textBox"

describe('Text Box', ()=>{

beforeEach(() =>{
    cy.visit(`${Cypress.env('demoQA')}/text-box`)
})
it('TextBox', () =>{
    cy.get('#userName-label').type('Elena')
    cy.get('#currentAddress-label').type('19000 OAK RD W')
    cy.get('#permanentAddress-label').type('19000 OAK RD W')
    cy.get('#submit').click();
    cy.get('#name').should('have.text', 'Elena Harea');
    cy.get('email').should('have.text5', 'cucalca87@yahoo.com');
    cy.get('#currentAddress').should('have.text', '19000 OAK RD W');
    cy.get('#permanentAddress').should('have.text', '19000 OAK RD W');
});
it('login with PageObject',()=>{
    TextBoxPage.submitButton()
    cy.contains('Submit')
})
});