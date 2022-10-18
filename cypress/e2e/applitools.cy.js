/// <reference types="cypress" />

// This test case spec contains everything needed to run a full visual test against the ACME bank site.
// The file `applitools.config.js` specifies how to run this test against multiple browsers in Applitools Ultrafast Grid.

// This "describe" method contains related test cases with per-test setup and cleanup.
// In this example, there is only one test.
describe('ACME Bank', () => {

    // This method performs setup before each test.
    beforeEach(() => {

        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.openEyes('PushingIt', Cypress.currentTest.title)
    })

    it('Deberia verificar el nombre de usuario en el navbar de PushingiT', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick()

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true
        });
        let usuario = 'pushingit'

        // Perform login.
        cy.get('#user').type(usuario)
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id^='user_${usuario}_']`).should('exist')

        // Verify the full main page loaded correctly.
        // This snapshot uses LAYOUT match level to avoid differences in closing time text.
        cy.eyesCheckWindow({
            tag: "Main page",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'
        });
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})