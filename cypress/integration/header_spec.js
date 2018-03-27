/// <reference types="Cypress" />

const apiUrl = Cypress.env('apiUrl')

describe("Header", ()=> {

	describe("no auth", ()=>{
		beforeEach('', ()=>{
			cy.visit('/')
		})
		it("can click logo to go home", ()=> {
			cy.get('.navbar').find('.navbar-brand')
				.should('be.visible')
				.its('href').should('eq', '/')
		})
		it("can go home", ()=>{
			cy.get('.navbar').contains('Home')
				.should('be.visible')
				.its('href').should('eq', '/')
			// two ways to do it
			// cy.get('.nav').contains('Home').click()
			// cy.location('pathname').should('eq','/')
		})
		it("can nav to sign in", ()=>{
			cy.get('.navbar').contains('Sign in').click()
			cy.location('pathname').should('eq','/login')
		})
		it("can nav to sign up", ()=>{
			cy.get('.navbar').contains('Sign up').click()
			cy.location('pathname').should('eq','/register')
		})
	})

	describe.only("auth", ()=> {
		beforeEach('login as jake', ()=> {
			cy.login()
			cy.visit('/')
		})
		it("can click logo to go home", ()=> {
			cy.get('.navbar').find('.navbar-brand').its('href').should('eq', '/')
		})
		it('can nav to New Post', ()=>{
			cy.get('.navbar').contains('New Post').click()
			cy.location('pathname').should('eq', '/editor')
		})
		it('can nav to Settings', ()=>{
			cy.get('.navbar').contains('Settings').click()
			cy.location('pathname').should('eq', '/settings')
		})
		it('can nav to profile', ()=>{
			cy.get('.navbar').contains('jake').click()
			cy.location('pathname').should('eq', '/@jake')
		})
		it("doesn't have sign in / sign up links", ()=>{
			cy.get('.navbar').contains('Sign in').should('not.exist')
			cy.get('.navbar').contains('Sign up').should('not.exist')
		})
	})
})