describe("this is the landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("backdrop loads", () => {
    cy.get(".background").should("exist");
  });

  it("sign in inputs load", () => {
    cy.get(".button-container").should("exist");
  });

  it("Allows user to login or register", () => {
    cy.get(".login-button")
      .should("exist")
      .click();
  });
});
