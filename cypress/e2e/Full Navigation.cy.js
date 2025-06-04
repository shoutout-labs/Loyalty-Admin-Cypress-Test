import 'cypress-mochawesome-reporter/register';

describe('Navigate to All Sections Sequentially', () => {
  it('Logs in and navigates through all sections with delays', () => {
    cy.log('Visiting login page');
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.log('Entering username and password');
    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {
      cy.log('Verifying redirect to members page');
      cy.url().should('include', '/members', { timeout: 20000 });
      cy.wait(5000);

      cy.log('Navigating to Segments');
      cy.contains('Segments').click();
      cy.contains('Segments', { timeout: 20000 }).should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Find Members');
      cy.contains('Find Members').click();
      cy.contains('Find Members').should('be.visible');
      cy.wait(5000);

      cy.log('Visiting Card Pool');
      cy.visit('https://admin.loyaltybeta.cxforge.com/cards/pool');
      cy.contains('Card Pool', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.log('Navigating to Instant Cards');
      cy.contains('Instant Cards').click();
      cy.contains('Instant Cards').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Digital Cards');
      cy.contains('Digital Cards').click();
      cy.contains('Digital Cards').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Embossed Cards');
      cy.contains('Embossed Cards').click();
      cy.contains('Embossed Cards').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Transactions');
      cy.contains('Transactions').click();
      cy.contains('Transactions').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Transaction History');
      cy.contains('Transaction History').click();
      cy.contains('Transaction History').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Import Transactions');
      cy.contains('Import Transactions').click();
      cy.contains('Import Transactions').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Invalid Transactions');
      cy.contains('Invalid Transactions').click();
      cy.contains('Invalid Transactions').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Redemptions');
      cy.contains('Redemptions').click();
      cy.contains('Redemptions').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Rewards');
      cy.contains('Rewards').click();
      cy.contains('Rewards').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Merchants');
      cy.contains('Merchants').click();
      cy.contains('Merchants').should('be.visible');
      cy.wait(10000);

      cy.log('Navigating to Point Rules');
      cy.contains('Point Rules').click();
      cy.contains('Point Rules').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Non Transactional Rules');
      cy.contains('Non Transactional Rules').click();
      cy.contains('Non Transactional Rules').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Affinity Groups');
      cy.contains('Affinity Groups').click();
      cy.contains('Affinity Groups').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Tiers');
      cy.contains('Tiers').click();
      cy.contains('Tiers').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Fraudulence');
      cy.contains('Fraudulence').click();
      cy.contains('Fraudulence').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Fraud Prevention');
      cy.contains('Fraud Prevention').click();
      cy.contains('Fraud Prevention').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Fraud Rules');
      cy.contains('Fraud Rules').click();
      cy.contains('Fraud Rules').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Audit Logs');
      cy.contains('Audit Logs').click();
      cy.contains('Audit Logs').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Global');
      cy.contains('Global').click();
      cy.contains('Global').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Charity List');
      cy.contains('Charity List').click();
      cy.contains('Charity List').should('be.visible');
      cy.wait(5000);

      cy.log('Visiting Message Logs');
      cy.visit('https://admin.loyaltybeta.cxforge.com/notifications/message-logs');
      cy.contains('Message Logs', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.log('Navigating to Notification Logs');
      cy.contains('Notification Logs').click();
      cy.contains('Notification Logs').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Templates');
      cy.contains('Templates').click();
      cy.contains('Templates').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Campaigns');
      cy.contains('Campaigns').click();
      cy.contains('Campaigns').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Email');
      cy.contains('Email').click();
      cy.contains('Email').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to SMS');
      cy.contains('SMS').click();
      cy.contains('SMS').should('be.visible');
      cy.wait(5000);

      cy.log('Visiting Analytics Members');
      cy.visit('https://admin.loyaltybeta.cxforge.com/analytics/members');
      cy.contains('Members', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.log('Navigating to Points');
      cy.contains('Points').click();
      cy.contains('Points').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Rewards');
      cy.contains('Rewards').click();
      cy.contains('Rewards').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Cards');
      cy.contains('Cards').click();
      cy.contains('Cards').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Tiers');
      cy.contains('Tiers').click();
      cy.contains('Tiers').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Merchants');
      cy.contains('Merchants').click();
      cy.contains('Merchants').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Jobs');
      cy.contains('Jobs').click();
      cy.contains('Jobs').should('be.visible');
      cy.wait(5000);

      cy.log('Visiting Access Control');
      cy.visit('https://admin.loyaltybeta.cxforge.com/control-panel/access-control');
      cy.contains('Access Control', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

      cy.log('Navigating to Group Management');
      cy.contains('Group Management').click();
      cy.contains('Group Management').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Integration Management');
      cy.contains('Integration Management').click();
      cy.contains('Integration Management').should('be.visible');
      cy.wait(5000);

      cy.log('Navigating to Settings');
      cy.contains('Settings').click();
      cy.contains('Settings').should('be.visible');
      cy.wait(5000);
    });
  });
});