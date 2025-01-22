describe("Drop Down Test", () => {
  it("Drop down with select (Normal Dropdown)", () => {
    //visit the website
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    cy.get("#zcf_address_country")
      .select("India")
      //verify the value correctly select or not using .should('have.value')
      .should("have.value", "India");

    cy.get("#zcf_users")
      .select("Yes, I currently sell online")
      .should("have.value", "Yes, I currently sell online");
  });
});
