/// <reference types="Cypress" />

describe("Articles List", ()=> {
	describle("auth", ()=> {
		beforeEach('login', ()=> {
			cy.login()
			cy.request('/')
		})
		it("has 'Your Feed'", ()=> {
			cy.get('.feed-toggle').contains("Your Feed").click()
		})
		it("has 'Global Feed'", ()=> {
			cy.get('.feed-toggle').contains("Global Feeed").click()
		})
		it("contains articles", ()=> {
			cy.get('.article-preview')
		})

	})
})