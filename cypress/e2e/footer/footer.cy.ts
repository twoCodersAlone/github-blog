describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render footer', () => {
    cy.get('[data-testid="footer"]').should('exist');
  });

  it('should redirect to homepage when click', () => {
    const blogLogoSelector = '[data-testid="footer-logo"]';
    cy.get(blogLogoSelector).should('exist');
    cy.get(blogLogoSelector).click();

    cy.location('pathname').should('eq', '/');
  });
});
