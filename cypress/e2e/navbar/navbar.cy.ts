import { navbarItems } from '@/src/data/navbar';

describe('Navbar', () => {
  describe('on desktop', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should render navbar', () => {
      cy.get('[data-testid="navbar"]').should('exist');
    });
    it('should render logo', () => {
      cy.get('[data-testid="navbar-logo"]').should('exist');
    });
    it('should render navbar items', () => {
      cy.get('[data-testid="navbar-items"]').should('be.visible');
    });
    it('should hide menu button', () => {
      cy.get('[aria-label="Toggle navigation"]').should('not.be.visible');
    });

    it('should redirect when click on navbar item', () => {
      navbarItems.forEach(({ name, href }) => {
        const selector = `[data-testid="menu-link-${href}"]`;
        const linkElement = cy.get(selector);

        linkElement.should('have.text', name);
        linkElement.click();
        cy.location('href').should('include', href);
      });
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
      cy.visit('/');
    });

    it('should render navbar', () => {
      cy.get('[data-testid="navbar"]').should('exist');
    });
    it('should render logo', () => {
      cy.get('[data-testid="navbar-logo"]').should('exist');
    });
    it('should render navbar items', () => {
      cy.get('[data-testid="navbar-items"]').should('not.be.visible');
    });
    it('should show menu button', () => {
      cy.get('[aria-label="Toggle navigation"]').should('be.visible');
    });

    it('should redirect when click on navbar item', () => {
      const menuButtonSelector = '[aria-label="Toggle navigation"]';

      navbarItems.forEach(({ name, href }) => {
        cy.get(menuButtonSelector).click();

        const selector = `[data-testid="menu-link-${href}"]`;
        const linkElement = cy.get(selector);

        linkElement.should('have.text', name);
        linkElement.click();
        cy.location('pathname').should('eq', href);
      });
    });

    it('should open the menu', () => {
      const menuButtonSelector = '[aria-label="Toggle navigation"]';
      const navbarItemsSelector = '[data-testid="navbar-items"]';

      cy.get(menuButtonSelector).click();
      cy.get(navbarItemsSelector).should('be.visible');
    });

    it('should close the menu', () => {
      const menuButtonSelector = '[aria-label="Toggle navigation"]';
      const navbarItemsSelector = '[data-testid="navbar-items"]';

      cy.get(menuButtonSelector).click();
      cy.get(navbarItemsSelector).should('be.visible');

      cy.get(menuButtonSelector).click();
      cy.get(navbarItemsSelector).should('not.be.visible');
    });
  });
});
