
describe('Login Page', () => {
    beforeEach(() =>{
        cy.visit('click')
        // {
        //     url:'click',
        //     method:'Get'
        // }
    })
    it.skip('debug', ()=>{
cy.get('#badButton').debug().click()
    });
    it('Pause', ()=> {
        cy.pause()
        cy.get('#badButton').click()
        cy.pause()
        cy.get('#badButton').should('have.css', 'background-color', 'rgb(40, 167, 69)')
    })
});