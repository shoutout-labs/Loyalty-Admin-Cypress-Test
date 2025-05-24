describe('Find Member by First Name', () => {
  it('Logs in and searches for a member by first name', () => {
    // Intercept request early (outside cy.origin)
    cy.intercept('GET', '**/identityservice/userdatasets?datasetKey=memberTableColumns')
      .as('columnsLoad');

    // Login via IDP
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');
    
    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    // Switch to admin portal origin
    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {

      cy.visit('https://admin.loyaltybeta.cxforge.com/find-members');

      // Confirm Find Members page loaded
      cy.contains('Find Members', { timeout: 20000 }).should('be.visible');

      // Wait for dropdown then select "First Name"
      cy.get('[placeholder="Select search key"]')
        .should('be.visible')
        .click()
        .wait(5000); // short buffer

      cy.contains('First Name', { timeout: 10000 })
        .should('be.visible')
        .click({ force: true });

      // Wait for dataset load (from intercept)
      cy.wait('@columnsLoad');

      // Wait for input to become available and stable before typing
      cy.get('input[placeholder="Search by first name"]', { timeout: 20000 })
        .should('be.visible')
        .click()
        .type('Kinash')
        .wait(3000) // buffer before Enter
        .type('{enter}');

      // Assert result appears
      cy.contains('Kinash Rko', { timeout: 10000 }).should('exist');
    });
  });
});
