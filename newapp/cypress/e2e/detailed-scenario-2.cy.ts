describe('Detailed Scenario 2: Username verification and login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/login'); // Directly go to login page
  });

  it('should check if Username field is empty', () => {
    cy.get('#username').should('have.value', ''); // Check if field is empty
    cy.screenshot('DS2-username-empty'); // Screenshot for empty username field
  });

  it('should enter a valid username', () => {
    cy.get('#username').type('testuser');
    cy.get('#username').should('have.value', 'testuser'); // Verify entered value
    cy.screenshot('DS2-username-entered'); // Screenshot after entering username
  });

  it('should enter a valid password and click submit', () => {
    cy.get('#username').type('testuser');
    cy.get('#password').type('Test@123');
    cy.get('body > app-root > app-login > div > form > div > button:nth-child(2)').should('exist');
    cy.screenshot('DS2-password-entered-submit'); // Screenshot after entering password and checking submit button
  });

});
