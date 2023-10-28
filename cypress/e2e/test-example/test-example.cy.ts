describe('Test Example', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have h1 element with text GITHUB BLOG', () => {
    cy.get('h1').should('be.visible').should('have.text', 'GITHUB BLOG');
  });

  it('should have example text', () => {
    cy.get('[data-testid="example-container"]')
      .should('be.visible')
      .should('have.text', 'example');
  });
});
