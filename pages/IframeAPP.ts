class IFrameApp {
    
  
   getIframe(){ }
   
   visit(){
      cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
  }
  }
  
  export const IFrameAppPage = new IFrameApp()