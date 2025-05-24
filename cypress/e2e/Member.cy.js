describe('Loyalty Admin Portal - Full Member Flow', () => {
  it('Logs in, enrolls a new member, and verifies via search', () => {
    
    cy.visit('https://idp.loyaltybeta.cxforge.com/auth/realms/shoutout-loyalty-system/protocol/openid-connect/auth?client_id=loyalty-admin-portal&redirect_uri=https%3A%2F%2Fadmin.loyaltybeta.cxforge.com%2Fmembers&state=fe4d8c09-7138-4bf8-9173-047e5c8867f4&response_mode=fragment&response_type=code&scope=openid&nonce=65e57b95-0164-48e2-b9b2-e13df0be07f1');
    
    cy.get('input#username').type('dev+pns@getshoutout.com');
    cy.get('input#password').type('pns@1234', { log: false });
    cy.get('input[type="submit"]').click();

    cy.origin('https://admin.loyaltybeta.cxforge.com', () => {
      cy.url().should('include', '/members', { timeout: 20000 });
      cy.contains('Enroll Member', { timeout: 20000 })
  .should('exist')
  .should('be.visible')
  .should('not.be.disabled')
  .then(($btn) => {
    cy.wrap($btn).click({ force: true });
  });

  cy.contains('Digital Card', { timeout: 20000 })
  .should('be.visible')
  .should('not.be.disabled')
  .click({ force: true });

  cy.get('input[type="radio"]', { timeout: 20000 })
  .should('exist');

  cy.contains('label', 'Auto', { timeout: 10000 }).click();

cy.contains('button', 'Next', { timeout: 10000 })
  .should('exist')
  .should('be.visible')
  .should('not.be.disabled')
  .then(($btn) => {
    
    cy.wrap($btn).click({ force: true });
  });

      //Member Info
      cy.get('input[placeholder="Enter First Name"]').type('Kin6');
      cy.get('input[placeholder="Enter Last Name"]').type('Kin6');
      cy.contains('label', 'National Id', { timeout: 20000 }).click();
      cy.get('input[placeholder="Enter ID Number"]').type('975654567V');
      cy.get('input[type="radio"][value="Male"]').check({ force: true });
      cy.get('input[placeholder="Enter Company"]').type('Sho4');
      cy.get('input[placeholder="Enter Occupation"]').type('QAs');
      cy.contains('Next').click();

      //Contact
      cy.get('input[placeholder="Enter Email"]').type('Test5@example.com');
      cy.get('input[placeholder="Address Line One *"]').type('25 Side St');
      cy.get('input[placeholder="Enter City"]').type('Colombo');
      cy.get('input[placeholder="Zip or Postcode"]').type('10104');
      cy.get('input[type="tel"]').first().type('0774557194');
      cy.contains('Next').click();

//Location
      
cy.get('[placeholder="Select nearest store location"]').click();


cy.get('div.rbt-menu')
  .should('be.visible')
  .contains('2 / Grameenphone Center Jatrabari 6')
  .click({ force: true });

//Mobile
cy.contains('Preferred Contact')
  .parent()
  .find('select')
  .should('be.visible')
  .select('Mobile');

cy.get('.modal.show').within(() => {
  
  cy.contains('button', 'Enrol')
    .should('be.visible')
    .click();
});

    });
  });
});
