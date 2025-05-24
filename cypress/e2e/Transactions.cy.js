describe('Navigate to Transaction History', () => {
  it('Logs in and navigates to the Transaction History section', () => {
  
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {

      cy.visit('https://admin.loyaltybeta.cxforge.com/transactions/history');

      cy.contains('Transactions', { timeout: 20000 }).should('be.visible');
      cy.wait(5000);
      
      cy.contains('Transaction History').click();
      cy.contains('Transaction History').should('be.visible');
      cy.wait(3000);
      
      cy.get('button')
        .contains(/^Export$/) 
        .filter(':visible')
        .click();
      
      cy.wait(3000);
      
      cy.get('button')
        .contains('Export Transaction')
        .should('be.visible')
        .click();
      
      cy.wait(10000);
      
     
      cy.contains('Import Transactions').click();
      cy.contains('Import Transactions').should('be.visible');
      cy.wait(3000);
     
      cy.get('button')
        .contains('Import Transactions')
        .filter(':visible')
        .click();
      
      cy.wait(5000);
      
      cy.contains('Invalid Transactions').click();
      cy.contains('Invalid Transactions').should('be.visible');

      cy.get('button')
        .contains(/^Export$/) 
        .filter(':visible')
        .click();
      
      cy.wait(3000);
      
      cy.get('button')
        .contains('Export Transaction')
        .should('be.visible')
        .click();
      
    });
  });
});
