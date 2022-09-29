export class LoginPage {
        constructor(){
            this.usuarioInput = '#user'
            this.contraseñaInput = '#pass'
            this.loginButton = '#submitForm'
        };

    escribirUsuario(usuario){
        cy.get(this.usuarioInput).type(usuario)
    };

    escribirContraseña(contraseña){
        cy.get(this.contraseñaInput).type(contraseña)
    };

    clickLoginButton(){
        cy.get(this.loginButton).click();
    };

    login(usuario, contraseÑa){
        this.escribirUsuario(usuario);
        this.escribirContraseña(contraseÑa);
        this.clickLoginButton();
    };
};