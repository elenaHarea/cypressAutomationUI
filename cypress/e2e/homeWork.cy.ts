describe('Trigger Button', () => {
    it('Test1', () => {
       cy.visit(Cypress.env('homeWork'));
       cy.contains('.card-header', 'Wait for element to be visible');
       cy.contains('.col-sm-4','Click the Trigger and an invisible button will be visible!');
       cy.get('#visibility_trigger').should('be.visible').click();
       cy.contains('.col-sm-8', 'A clickable button will appear here after Trigger button is clicked.')
       cy.get('#visibility_target').should('be.visible','have.text', "Click Me");
       });
       it('Invisibility of Spiner', ()=>{
        cy.visit(Cypress.env('homeWork'));
        cy.get('#invisibility_trigger').should('be.visible', 'exist'). click();
        cy.get('#spinner_gone').contains("Thank God that spinner is gone!");
       })
       it('Wait for element to be enable', ()=>{
        cy.visit(Cypress.env('homeWork'));
        cy.contains('.card-header', 'Wait for element to be enabled / Wait for an attribute to contain certain text');
        cy.contains('.col-sm-4', 'Click the Trigger and the Disabled Button will become active.');
        cy.get('#enabled_trigger').should('be.visible', 'have.text', 'Trigger').click();
        cy.contains('.text-left','After the Trigger button is clicked, this button will be active and the class attribute will be "btn btn-success');
        //cy.get('#enabled_target').should('have.text', 'Disabled Button');
        


       })
});