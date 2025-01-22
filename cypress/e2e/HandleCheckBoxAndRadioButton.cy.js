describe("Handling Radio Button and Check Boxes", () => {
  beforeEach(() => {
    //visit the website runs before each test
    cy.visit("https://formy-project.herokuapp.com/form");
  });

  it("Selecting Radio Buttons Test", () => {
    //check the visibility of the radio buttons
    cy.get("input#radio-button-1").should("be.visible");
    cy.get("input#radio-button-2").should("be.visible");
    //cy.get("input#radio-button-3").should('be.visible')

    //select the radio button
    cy.get("input#radio-button-1").check().should("be.checked");

    //if I select one radio button, the other radio buttons should not be checked
    cy.get("input#radio-button-2").should("not.be.checked");
    cy.get("input#radio-button-3").should("not.be.checked");
  });

  it("selecting second redio Button", () => {
    //select the radio button
    cy.get("input#radio-button-2").check().should("be.checked");
    cy.get("input#radio-button-1").should("not.be.checked");
    cy.get("input#radio-button-2").check().should("be.checked");
  });

  it("Selecting CheckBox Test", () => {
    //check the visibility of the checkbox
    cy.get("input#checkbox-1").should("be.visible");

    //selecting single checkbox
    cy.get("input#checkbox-1").check().should("be.checked");

    //Unselecting single checkbox
    cy.get("input#checkbox-1").uncheck().should("not.be.checked");
  });

  it("Selecting All the Check Box", () => {
    cy.get("[type='checkbox']").check().should("be.checked");
    cy.get("[type='checkbox']").uncheck().should("not.be.checked"); //negative assertion
  });

  it("Selecting First and Last check Box", () => {
    //selecting first checkbox
    cy.get("[type = 'checkbox']").first().check().should("be.checked");

    //selecting last checkbox
    cy.get("[type = 'checkbox']:last").check().should("be.checked");
  });
});
