describe("How To Use Assertion", () => {
  it("Verify the URL", () => {
    //visit the webSite
    cy.visit("https://courseweb.sliit.lk/");

    //insted of using should we can use and
    cy.url()
      .should("include", "sliit.lk")
      .and("eq", "https://courseweb.sliit.lk/")
      .and("contain", "sliit.lk")
      .and("not.contain", "Ssliit.lk"); //negative assertion (not.contain), (not.eq), (not.include)
  });

  it("verify the title", () => {
    //visit the webSite
    cy.visit("https://courseweb.sliit.lk/");

    //verify the title
    cy.title()
      .should("include", "IIT")
      .and("eq", "SLIIT CourseWeb")
      .and("contain", "SLIIT")
      .and("not.eq", "SLIIT Test CourseWeb"); //negative assertion
  });

  it("Validate the Logo", () => {
    //visit the webSite
    cy.visit("https://courseweb.sliit.lk/");

    //verify the title
    cy.get(".logo > .img-responsive").should("be.visible");

    //we can use exist method instead of be.visible
    cy.get(".logo > .img-responsive").should("exist");
  });
});
