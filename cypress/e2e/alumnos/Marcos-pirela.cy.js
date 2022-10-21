// <reference types="cypress" />


describe("Desafio 4", () => {
  it("Resgistrar, login, Eliminar", () => {
    cy.request({
      url: "https://pushing-it-backend.herokuapp.com/api/register",
      method: "POST",
      body: {
        username: "geniuss24",
        password: "Mcx82469777!",
        gender: "male",
        day: "17",
        month: "10",
        year: "1991",
      },
    })
      .then((respuesta) => {
        cy.log(respuesta);
      })
      .then(() => {
        cy.request({
          url: "https://pushing-it-backend.herokuapp.com/api/login",
          method: "POST",
          body: {
            username: "geniuss24",
            password: "Mcx82469777!",
          },
        }).then(() => {
          cy.request({
            url: "https://pushing-it-backend.herokuapp.com/api/deleteuser/geniuss24",
            method: "DELETE",
          });
        });
      });
  });
});