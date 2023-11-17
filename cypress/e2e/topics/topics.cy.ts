import { navbarItems } from '@/src/data/navbar';

describe('Topics', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render topics', () => {
    cy.get('[data-testid="topics-section"]').should('exist');
  });

  it('should render call to action', () => {
    cy.get('[data-testid="call-to-action"]').should('exist');
  });

  it('should render topics items', () => {
    cy.get('[data-testid="topics-items"]').should('be.visible');
  });

  it('should redirect to a random topic when click', () => {
    const randomTopicButtonSelector = '[data-testid="random-topic-button"]';
    cy.get(randomTopicButtonSelector).should(
      'include.text',
      'Choose one to me'
    );

    cy.get(randomTopicButtonSelector).click();

    cy.location('href').should('satisfy', (href) => {
      const isOneOfValidUrl = navbarItems.some(({ href: navItemHref }) =>
        href.includes(navItemHref)
      );

      return isOneOfValidUrl;
    });
  });

  it('should redirect when click on topic items', () => {
    navbarItems.forEach(({ name: title, href }) => {
      const selector = `[aria-label="Go to ${title} topic"]`;
      const linkElement = cy.get(selector);

      linkElement.should('include.text', title);
      linkElement.click();
      cy.location('href').should('include', href);
      cy.visit('/');
    });
  });
});
