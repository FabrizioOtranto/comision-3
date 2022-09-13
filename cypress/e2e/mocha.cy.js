describe("Suite Mocha", () => {
    const curso = "Pushing it";
    let numero;

    it("Primer test con Mocha", () => {
        cy.log("Primer test en el curso " + curso);
        numero = Math.floor(Math.random() *1000);
    });

    it.only("Segundo test con Mocha", () => {
        cy.log("Segundo test en el curso " + curso + " numero " + numero);
    });

    it.only("Tercer test con Mocha", () => {
        cy.log("Tercer test en el curso " + curso + " numero " + numero);
    });
});

it.skip("Tercer test con Mocha", () => {
    cy.log("Tercer test en el curso " + curso);
});
