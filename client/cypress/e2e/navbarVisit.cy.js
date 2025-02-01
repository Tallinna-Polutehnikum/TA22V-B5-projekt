describe('visit pages via navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('Home button navigates to a new url', () => {
        cy.contains('Home').click()
    })


    it('About Us button navigates to a new url', () => {
        cy.contains('About Us').click()
        // Should be on a new URL which
        // includes '/movies'
        cy.url().should('include', '/about')
    })


    it('Checkout button navigates to a new url', () => {
        cy.contains('Checkout').click()
        cy.url().should('include', '/checkout')
    })


    it('Movies button navigates to a new url', () => {
        cy.contains('Movies').click()
        cy.url().should('include', '/movies')
    })


    it('sign In button...', () => {
        cy.get('[id=signIn]')
        // cy.url().should('include', '/xxx')
    })

  })

//   describe('My First Test', () => {
//     it('clicking "type" navigates to a new url', () => {
//       cy.visit('https://example.cypress.io')
  
//       cy.contains('type').click()
  
//       // Should be on a new URL which
//       // includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
//     })
//   })




