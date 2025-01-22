describe("Test OrangeHRM", () => {
  beforeEach(() => {
    //visit the website runs before each test
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("verify the URL", () => {
    //verify the URL
    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("not.contain", "greenHRM"); //negative assertion
  });

  it("verify the title", () => {
    cy.title().should("include", "OrangeHRM").and("not.eq", "Hrms"); //negative assertion
  });

  it("validate the logo", () => {
    //check the visibility of elements using be.visible
    cy.get(".orangehrm-login-branding > img")
      .should("be.visible")
      //also used exist insted of be.visible
      .should("exist");
  });

  it("capture the all the links in the page", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.Xpath("//a").should("have.length", "5");
  });

  it("login to the application", () => {
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
  });

  it("validate the user name ", () => {
    const expectedName = "xxxx";

    cy.get(".oxd-userdropdown-name").then((x) => {
      const actualName = x.text();

      assert.equal(actualName, expectedName);
      assert.notEqual(actualName, expectedName);
    });
  });
});
