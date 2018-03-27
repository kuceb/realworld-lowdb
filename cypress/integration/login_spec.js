/// <reference types="Cypress" />

describe('Login', ()=>{
	beforeEach('visit /login', ()=> {
		cy.visit('/login')
	})

	it("can login with cy.request", () => {
		cy.login({email:"jake@jake.jake", password:"jakejake"})
		cy.window().its('localStorage.jwt').should.exist
		cy.visit('/')
		cy.get('.navbar').contains('jake')
  	})
	it('can log in with click', ()=>{
		cy.get('input[type="email"]').type('jake@jake.jake')
		cy.get('input[type="password"]').type('jakejake')
		cy.get('button').contains('Sign in').click()

		cy.window().its('localStorage.jwt').should.exist
		// should redirect to "/"
		cy.get('.navbar').contains('jake')
	})
	it('can log in with enter', ()=>{
		cy.get('input[type="email"]').type('jake@jake.jake')
		cy.get('input[type="password"]').type('jakejake'+'{enter}')

		cy.window().its('localStorage.jwt').should.exist
		// should redirect to "/"
		cy.get('.navbar').contains('jake')
	})
})
