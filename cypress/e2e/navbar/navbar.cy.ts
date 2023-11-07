describe('Navbar', () => {
  describe('on desktop', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('should render navbar', () => {
      cy.get('[data-testid="navbar"]').should('exist');
    });
    it('should render logo', () => {
      cy.get('[data-testid="blog-logo"]').should('exist');
    });
    it('should render navbar items', () => {
      cy.get('[data-testid="navbar-items"]').should('be.visible');
    });
    it('should hide menu button', () => {
      cy.get('[aria-label="Toggle navigation"]').should('not.be.visible');
    });

    it('should click on the navbar link and be redirected', () => {
      cy.get('[data-testid="menu-link-/react"]').click();
      cy.location('href').should('include', '/react');
    });
  });

  describe.skip('on mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
      cy.visit('/');
    });
    it('should render navbar', () => {
      cy.get('[data-testid="navbar"]').should('exist');
    });
    it('should render logo', () => {
      cy.get('[data-testid="blog-logo"]').should('exist');
    });
    it('should render navbar items', () => {
      cy.get('[data-testid="navbar-items"]').should('not.be.visible');
    });
    it('should show menu button', () => {
      cy.get('[aria-label="Toggle navigation"]').should('be.visible');
    });
  });
});
