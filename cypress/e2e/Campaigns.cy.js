describe('Navigate to Transaction History', () => {
  it('Logs in and navigates to the Transaction History section', () => {
  
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {

      cy.visit('https://admin.loyaltybeta.cxforge.com/campaigns/email');

      cy.contains('Email Campaigns', { timeout: 20000 }).should('be.visible');
      cy.wait(5000);
      
     
      
    });
  });
});
