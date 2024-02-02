class TextBox {

    fullName: string = '#userName-label';
    currentAddress: string = '#currentAddress-label';
    permanentAddress: string = '#permanentAddress-label';
    submit: string = '#submit';
    
    
    submitButton(){
        cy.get(this.fullName).type('Elena');
            cy.get(this.currentAddress).type('19000 OAK RD W');
            cy.get(this.permanentAddress).type('19000 OAK RD W');
            cy.get(this.submit).click();
    }
    }
    export const TextBoxPage = new TextBox()