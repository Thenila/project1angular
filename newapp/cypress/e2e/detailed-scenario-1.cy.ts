describe('Detailed Scenario 1: Open website & basic checks', () => {

  it('should open the homepage', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Welcome to Home').should('exist'); // Adjust text if needed
    cy.screenshot('DS1-homepage'); // Screenshot for homepage
  });

  it('should navigate to login page directly', () => {
    cy.visit('http://localhost:4200/login');
    cy.url().should('include', '/login');
    cy.screenshot('DS1-login-page-url'); // Screenshot after navigating to login page
  });

  it('should display login form elements', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('#username', { timeout: 10000 }).should('exist');
    cy.get('#password').should('exist');

    // Updated submit button selector
    cy.get('body > app-root > app-login > div > form > div > button:nth-child(2)').should('exist');

    // Updated cancel button selector
    cy.get('body > app-root > app-login > div > form > div > button:nth-child(1)').should('exist');

    cy.screenshot('DS1-login-form-elements'); // Screenshot of all login form elements
  });

});
