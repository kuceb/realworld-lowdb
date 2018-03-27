/// <reference types="Cypress" />
// WIP
// beforeEach('visit', () => {
// 	cy.server()
// 	cy.visit('/')
// })
// it('has tags', ()=> {
// 	cy.get('.sidebar>.tag-list') //.parentsUntil('p:contains("Popular Tags")')
// })

// it('requests articles based on tag', ()=> {
// 	cy.route('/api/articles?tag=*').as('article?tag')
// 	cy.get('.sidebar>.tag-list>a').first().click()
// 	cy.wait('@article?tag')
// })