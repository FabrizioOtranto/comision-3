export class NavbarPage {

    verificarUsuario(usuario){
        cy.get(`[id^='user_${usuario}_']`).should('exist')
    }
}