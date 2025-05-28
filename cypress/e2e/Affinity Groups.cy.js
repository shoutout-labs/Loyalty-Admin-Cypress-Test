describe('Navigate to Point Rule', () => {
  it('Logs in and creates a new earning rule', () => {
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {
      cy.visit('https://admin.loyaltybeta.cxforge.com/affinity-groups');


// Wait for page to fully load
cy.contains('Affinity Groups', { timeout: 10000 }).should('be.visible');

cy.wait(5000);
cy.contains('Create Affinity Group').click();

// Wait for modal to open
cy.contains('Create Affinity Group').should('be.visible');

// Fill form
cy.get('input[placeholder="Enter Group Name"]').should('be.visible').type('Automated Cypress Group');
cy.get('input[placeholder="Enter Group Description"]').type('Automated Cypress Group Description');

// Proceed
cy.contains('button', 'Next').click();
cy.wait(2000);

cy.get('input[placeholder="Enter Benefit"]').should('be.visible').type('Automated Benefit');

cy.get('.modal.show').within(() => {
  
  cy.contains('button', 'Create')
    .should('be.visible')
    .click();
});

  })
})
})