/// <reference types="Cypress" />

beforeEach("setup", () => {
  cy.server();
  cy.route("/api/articles*").as("articles");
  cy.route("/api/tags").as("tags");
  cy.visit("/");
});
it("has a favorite button", () => {
  cy.wait("@articles");
  cy.get(".article-preview")
    .first()
    .within($preview => {
      cy.get(".ion-heart").click();
    });
});
it.only("has valid Global Feed listings", () => {
  cy.fixture('articles').as('articles')
  cy.route("/api/articles*", "fx:articles");
  cy.route("/api/tags", "fx:tags").as("tags");
  cy.visit("/");
  // since fixtures are fast, no need to wait on them
  // cy.wait('@articles-stub')
  // cy.wait('@tags-stub')
  cy.get('@articles').then(articles => {

	const authorName = articles[0].author.username
	  cy.get("a.author")
		.contains(authorName)
		.should("have.attr", "href", `/@${authorName}`);
		
	const createdAt = articles[0].createdAt
	  cy.get('span.date').contains(createdAt)

	const title = articles[0].title
	const slug = articles[0].slug
	cy.get('h1')
	.contains(title)
	.should('have.attr', 'href', `/article/${slug}`)

	const desc = articles[0].description
	cy.get('p').contains(description)

	cy.get('span')
	.contains('Read more...')
	.should('have.attr', 'href', `/articles/${slug}`)

	
// contract pact testing 
// e2e vs integrations test + contrast testing





	


  })



  // cy.get('')
});
