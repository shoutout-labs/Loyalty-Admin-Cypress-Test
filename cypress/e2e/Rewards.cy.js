describe('Navigate to Card Sections', () => {
  it('Logs in and navigates through all card tabs with delays', () => {
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&response_mode=fragment&response_type=code&scope=openid');

    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {
     
      cy.visit('https://admin.loyaltybeta.cxforge.com/redemptions/rewards');

      
     cy.contains('Redemptions', { timeout: 20000 }).should('be.visible');
      cy.wait(5000);
      
cy.contains('button', 'Create Reward').should('be.visible').click();

cy.contains('Basic Information').should('be.visible');

cy.get('input[placeholder="Enter reward name"]').type('Free Mug');
cy.get('input[placeholder="Enter description"]').type('This is a free travel mug.');
cy.get('select').select('Gift'); 
cy.get('input[placeholder="Voucher"]').clear().type('MUG123');
cy.contains('label', 'No Expiry').click(); 
cy.contains('label', 'Partner And Customer').click(); 
cy.contains('Reward Image').scrollIntoView();

cy.get('.modal-content') 
  .scrollTo('bottom', { duration: 1000 });

cy.contains('button', 'Next').should('be.visible').click();

      

});
  });
});