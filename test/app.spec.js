describe("힌트 텍스트의 형식이 요구사항과 일치해야 한다.", () => {
  it("1볼 1스트라이크", () => {
    cy.visit("../index.html");

    cy.get("#result").should("have.text", "1볼 1스트라이크");
  });

  it("낫싱", () => {
    cy.visit("../index.html");

    cy.get("#result").should("have.text", "낫싱");
  });
});
