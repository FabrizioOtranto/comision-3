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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("esperarMascaraDeCarga", () => {
    cy.get('[role="progressbar"]', { timeout: 11000 }).should('not.exist');
})

Cypress.Commands.add("loginWithSessions", () => {
    cy.session([], () => {
        cy.request({
            method: "POST",
            url: "https://pushing-it-backend.herokuapp.com/api/login",
            body: {
                username: "pushingit",
                password: "123456!"
            }
        }).then(respuesta => {
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
    })
})
Cypress.Commands.add('openEyes', (appName, testName) => {
    cy.eyesOpen({
        appName: appName,                       // The name of the app under test
        testName: testName,        // The name of the test case
    })
})