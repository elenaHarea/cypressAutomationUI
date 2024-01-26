describe("test testBox", ()=> {
    it("test", ()=> {
        cy.visit("https://uitestingplayground.com/textinput")
        cy.get("input.form-control").type("hi Elena")
        cy.get("#updatingButton").click()
        cy.contains("button","hi Elena")
        cy.get("#updatingButton").should("have.text","hi Elena")
        cy.get("#updatingButton").then(element=>{
        expect(element.text()).to.equal("hi Elena")
        })
        
    })
})
