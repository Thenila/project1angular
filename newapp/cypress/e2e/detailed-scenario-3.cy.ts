describe('Detailed Scenario 3: Reset Password', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/login'); // Start from login page
  });

  it('should verify Reset Password link exists', () => {
    cy.get('body > app-root > app-login > div > a').should('exist'); // Updated selector
    cy.screenshot('DS3-reset-link-exists'); // Screenshot of Reset Password link
  });

  it('should click Reset Password link and verify URL', () => {
    cy.get('body > app-root > app-login > div > a').click();

    // Current link navigates to home page '/'
    cy.location('pathname', { timeout: 10000 }).should('eq', '/');

    // Optionally check that home page content exists
    cy.contains('Welcome to Home').should('exist');

    cy.screenshot('DS3-reset-link-clicked-home'); // Screenshot after navigation to home page
  });

});
