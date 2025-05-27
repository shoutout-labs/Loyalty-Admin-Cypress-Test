describe('Navigate to Point Rule', () => {
  it('Logs in and creates a new earning rule', () => {
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {
      cy.visit('https://admin.loyaltybeta.cxforge.com/point-rules');
     
cy.contains('Create Earning Rule').click();

cy.get('input[placeholder="Enter rule name"]').should('be.visible');

cy.get('[placeholder="Select a merchant..."]').click();

cy.get('div.rbt-menu')
  .should('be.visible')
  .contains('Celeste (ACTIVE)')
  .click({ force: true });

cy.get('[placeholder="Select a rule sub type..."]').click();

cy.get('div.rbt-menu')
  .should('be.visible')
  .contains('General Spending Rule')
  .click({ force: true });

cy.get('input[placeholder="Enter rule name"]').type('Automated Cypress Rule');

cy.get('textarea[placeholder="Enter a description..."]').type('This is a Cypress test rule');

cy.contains('label', 'Enabled').click();

cy.contains('button', 'Next').click();

cy.get('input[placeholder="Enter currency amount that is needed to earn 1 point"]').type('10');

cy.get('.modal.show').within(() => {
  
  cy.contains('button', 'Create')
    .should('be.visible')
    .click();
});

    });
  });
});
