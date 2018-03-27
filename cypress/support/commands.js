// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const apiUrl = Cypress.env('apiUrl')

Cypress.Commands.add("login", ({email, password}={email:"jake@jake.jake", password:"jakejake"}) => {
	cy.request("POST", `${apiUrl}/users/login`, {
		user: {
		  email,
		  password
		}
	  }).then(res=>{
		  window.localStorage.setItem('jwt', res.body.user.token)
	  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
