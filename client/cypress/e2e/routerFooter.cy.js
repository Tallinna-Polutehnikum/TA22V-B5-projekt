describe('img+text+ visit pages via footer', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('Home button navigates to a new url', () => {
        cy.visit('http://localhost:3000/movies')

        cy.get('footer').contains('Home').click()
        cy.url()
        .should('not.include', '/movies')
    })


    it('About Us button navigates to a new url', () => {
        cy.get('footer').contains('About Us').click()
        // Should be on a new URL which
        // includes '/movies'
        cy.url()
        .should('include', '/about')
    })


    it('Checkout button navigates to a new url', () => {
        cy.get('footer').contains('Checkout').click()
        cy.url()
        .should('include', '/checkout')
    })


    it('Movies button navigates to a new url', () => {
        cy.get('footer').contains('Movies').click()
        cy.url()
        .should('include', '/movies')
    })


    it('displays welcome message and content', () => {
    // Check main headings
    cy.contains('h5', 'About Us')

    cy.contains('p', '© 2024 My Movie App. All rights reserved.')
    })


    it('Logo image is displayed correctly in the footer', () => {
      cy.get('footer img[alt="Logo"]')
        .should('exist') // check if image exist
        .and('have.attr', 'src').then((src) => {
          // check the src attribute matches the expected value.
          expect(src).to.include('/static/media/logo.'); // check that the src contains part of the path
        })
        // .and('have.attr', 'width', '150') // if need, check size 
        // .and('have.attr', 'height', '150');
    });
    
      

  })
