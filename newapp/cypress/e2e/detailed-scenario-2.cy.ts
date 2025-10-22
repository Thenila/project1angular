describe('Detailed Scenario 2: Username verification and login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/login'); // Directly go to login page
  });

  it('should check if Username field is empty', () => {
    cy.get('#username').should('have.value', ''); // Check if field is empty
  });

  it('should enter a valid username', () => {
    cy.get('#username').type('testuser');
    cy.get('#username').should('have.value', 'testuser'); // Verify entered value
  });

  it('should enter a valid password and click submit', () => {
    cy.get('#username').type('testuser');
    cy.get('#password').type('Test@123');
   cy.get('body > app-root > app-login > div > form > div > button:nth-child(2)').should('exist');

  });
});
