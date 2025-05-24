describe('Navigate to Card Sections', () => {
  it('Logs in and navigates through all card tabs with delays', () => {
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {
      // ✅ After login, force navigation to Card Pool
      cy.visit('https://admin.loyaltybeta.cxforge.com/cards/pool');

      
      cy.contains('Card Pool', { timeout: 20000 }).should('be.visible');
      cy.wait(10000);

     
      cy.contains('Instant Cards').click();
      cy.contains('Instant Cards').should('be.visible');

      cy.wait(10000);
      cy.contains('Digital Cards').click();
      cy.contains('Digital Cards').should('be.visible');

      cy.wait(10000);
      cy.contains('Embossed Cards').click();
      cy.contains('Embossed Cards').should('be.visible');
    });
  });
});
