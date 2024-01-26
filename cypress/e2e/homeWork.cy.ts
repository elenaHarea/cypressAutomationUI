describe('Trigger Button', () => {
    it('Trigger', () => {
       cy.visit(Cypress.env('homeWork'));
      
       cy.get('#visibility_trigger').should('be.visible').click();
       cy.get('#visibility_target').should('be.visible','have.text', "Click Me");
       });
       it('Invisibility of Spiner', ()=>{
        cy.visit(Cypress.env('homeWork'));
        cy.get('#invisibility_trigger').should('be.visible', 'exist'). click();
        cy.get('#spinner_gone').contains("Thank God that spinner is gone!");
       })
});