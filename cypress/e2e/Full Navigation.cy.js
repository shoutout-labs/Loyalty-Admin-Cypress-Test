describe('Navigate to All Sections Sequentially', () => {
  it('Logs in and navigates through all sections with delays', () => {
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {

      cy.url().should('include', '/members', { timeout: 20000 });
      cy.wait(5000);

      cy.contains('Segments').click();
      cy.contains('Segments', { timeout: 20000 }).should('be.visible');
      cy.wait(5000);

      cy.contains('Find Members').click();
      cy.contains('Find Members').should('be.visible');
      cy.wait(5000);

      cy.visit('https://admin.loyaltybeta.cxforge.com/cards/pool');
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

      // Transactions
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

      // Redemptions
      cy.contains('Redemptions').click();
      cy.contains('Redemptions').should('be.visible');
      cy.wait(5000);

      cy.contains('Rewards').click();
      cy.contains('Rewards').should('be.visible');
      cy.wait(5000);

      // Merchants
      cy.contains('Merchants').click();
      cy.contains('Merchants').should('be.visible');
      cy.wait(10000);

      // Point Rules
      cy.contains('Point Rules').click();
      cy.contains('Point Rules').should('be.visible');
      cy.wait(5000);

      cy.contains('Non Transactional Rules').click();
      cy.contains('Non Transactional Rules').should('be.visible');
      cy.wait(5000);

      // Affinity Gruops
      cy.contains('Affinity Groups').click();
      cy.contains('Affinity Groups').should('be.visible');
      cy.wait(5000);

      // Tiers
      cy.contains('Tiers').click();
      cy.contains('Tiers').should('be.visible');
      cy.wait(5000);

      // Fraudulence
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

      // Charity List
      cy.contains('Charity List').click();
      cy.contains('Charity List').should('be.visible');

      cy.visit('https://admin.loyaltybeta.cxforge.com/notifications/message-logs');
      cy.contains('Message Logs', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.contains('Notification Logs').click();
      cy.contains('Notification Logs').should('be.visible');
      cy.wait(5000);

      cy.contains('Templates').click();
      cy.contains('Templates').should('be.visible');
      cy.wait(5000);

      cy.contains('Campaigns').click();
      cy.contains('Campaigns').should('be.visible');
      cy.wait(5000);

      cy.contains('Email').click();
      cy.contains('Email').should('be.visible');
      cy.wait(5000);

      cy.contains('SMS').click();
      cy.contains('SMS').should('be.visible');
      cy.wait(5000);

      cy.visit('https://admin.loyaltybeta.cxforge.com/analytics/members');
      cy.contains('Members', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.contains('Points').click();
      cy.contains('Points').should('be.visible');
      cy.wait(5000);

      cy.contains('Rewards').click();
      cy.contains('Rewards').should('be.visible');
      cy.wait(5000);

      cy.contains('Cards').click();
      cy.contains('Cards').should('be.visible');
      cy.wait(5000);

      cy.contains('Tiers').click();
      cy.contains('Tiers').should('be.visible');
      cy.wait(5000);

      cy.contains('Merchants').click();
      cy.contains('Merchants').should('be.visible');
      cy.wait(5000);

      cy.contains('Jobs').click();
      cy.contains('Jobs').should('be.visible');
      cy.wait(5000);

      cy.visit('https://admin.loyaltybeta.cxforge.com/control-panel/access-control');
      cy.contains('Access Control', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.contains('Group Management').click();
      cy.contains('Group Management').should('be.visible');
      cy.wait(5000);

      cy.contains('Integration Management').click();
      cy.contains('Integration Management').should('be.visible');
      cy.wait(5000);

      cy.contains('Settings').click();
      cy.contains('Settings').should('be.visible');
      cy.wait(5000);



    });
  });
});
