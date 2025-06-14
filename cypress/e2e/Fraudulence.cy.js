describe('Find Tiers', () => {
  it('Create Tier Configurations', () => {

    cy.intercept('GET', '**/identityservice/userdatasets?datasetKey=memberTableColumns')
      .as('columnsLoad');
      
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');
    
    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {

      cy.visit('https://admin.loyaltybeta.cxforge.com/fraudulence/fraud');

      cy.contains('Fraud Prevention', { timeout: 10000 }).should('be.visible');
      cy.wait(5000);

      cy.contains('Fraud Incidents').click();
      cy.contains('Fraud Incidents').should('be.visible');
      cy.wait(5000);

      cy.contains('Resolved').click();
      cy.contains('Resolved').should('be.visible');
      cy.wait(5000);

      cy.contains('Pending').click();
      cy.contains('Pending').should('be.visible');
      cy.wait(5000);

      cy.contains('Auto Suspended Members').click();
      cy.contains('Auto Suspended Members').should('be.visible');
      cy.wait(5000);

      cy.contains('Fraud Rules').click();
      cy.contains('Fraud Rules').should('be.visible');
      cy.wait(5000);





    })

  })
})