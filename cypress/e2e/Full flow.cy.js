describe('Navigate to Card Sections', () => {
  it('Logs in and navigates through all card tabs with delays', () => {
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {

      cy.url().should('include', '/members', { timeout: 20000 });
      cy.wait(10000);

      cy.contains('Segments').click();
      cy.contains('Segments').should('be.visible');
      cy.wait(5000);

      cy.contains('Find Members').click();
      cy.contains('Find Members').should('be.visible');
      cy.wait(5000);


      cy.contains('nav', 'Cards', { timeout: 10000 }).click();
      cy.contains('Card Pool', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.contains('Instant Cards').click();
      cy.contains('Instant Cards').should('be.visible');

      cy.wait(5000);
      cy.contains('Digital Cards').click();
      cy.contains('Digital Cards').should('be.visible');

      cy.wait(5000);
      cy.contains('Embossed Cards').click();
      cy.contains('Embossed Cards').should('be.visible');


      cy.wait(5000);
      cy.contains('Transactions').click();
      cy.contains('Transactions').should('be.visible');
      
      cy.wait(5000);
      cy.contains('Transaction History').click();
      cy.contains('Transaction History').should('be.visible');

      cy.wait(5000);
      cy.contains('Import Transactions').click();
      cy.contains('Import Transactions').should('be.visible');

      cy.wait(5000);
      cy.contains('Invalid Transactions').click();
      cy.contains('Invalid Transactions').should('be.visible');

      cy.wait(5000);
      cy.contains('Redemptions').click();
      cy.contains('Redemptions').should('be.visible');

      cy.wait(5000);
      cy.contains('Rewards').click();
      cy.contains('Rewards').should('be.visible');

      cy.wait(5000);
      cy.contains('Merchants').click();
      cy.contains('Merchants').should('be.visible');

      cy.wait(10000);
      cy.contains('Point Rules').click();
      cy.contains('Point Rules').should('be.visible');

      cy.wait(5000);
      cy.contains('Non Transactional Rules').click();
      cy.contains('Non Transactional Rules').should('be.visible');

      cy.wait(5000);
      cy.contains('Affinity Groups').click();
      cy.contains('Affinity Groups').should('be.visible');

      cy.wait(5000);
      cy.contains('Tiers').click();
      cy.contains('Tiers').should('be.visible');

      cy.wait(5000);
      cy.contains('Fraudulence').click();
      cy.contains('Fraudulence').should('be.visible');

      cy.wait(5000);
      cy.contains('Fraud Prevention').click();
      cy.contains('Fraud Prevention').should('be.visible');

      cy.wait(5000);
      cy.contains('Fraud Rules').click();
      cy.contains('Fraud Rules').should('be.visible');

      cy.wait(5000);
      cy.contains('Audit Logs').click();
      cy.contains('Audit Logs').should('be.visible');

      cy.wait(5000);
      cy.contains('Global').click();
      cy.contains('Global').should('be.visible');

      cy.wait(5000);
      cy.contains('Charity List').click();
      cy.contains('Charity List').should('be.visible');
    
    });
  });
});
