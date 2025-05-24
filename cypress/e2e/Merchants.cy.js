describe('Navigate to Card Sections', () => {
  it('Logs in and navigates through all card tabs with delays', () => {
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {
     
      cy.visit('https://admin.loyaltybeta.cxforge.com/cards/pool');

      
      cy.contains('Merchants', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

cy.get('button').contains('Create Merchant').should('be.visible').click();

cy.contains('Create Merchant').should('be.visible');


cy.get('input[placeholder="Enter Merchant Name"]').type('Test1 Merchant');
cy.get('input[placeholder="Enter Email"]').type('merchant@gmail.com');
cy.get('input[type="tel"]').type('712345678');
cy.get('input[placeholder="Enter State/Province/Parity/District"]').type('Western{enter}');
cy.get('input[placeholder="Address Line One *"]').type('123 Main St');
cy.get('input[placeholder="Address Line Two"]').type('Suite 2');
cy.get('input[placeholder="Address Line Three"]').type('Building B');
cy.get('input[placeholder="Enter City"]').type('Colombo{enter}');
cy.get('input[placeholder="Zip or Postcode"]').type('10200');

cy.contains('label', 'Internal').click(); 


cy.get('.modal-content') 
  .scrollTo('bottom', { duration: 1000 });

cy.contains('button', 'Create').should('be.visible').click();




});
  });
});