/// <reference types="cypress" />
describe('Api testing', () => {

    it("Primer test de api rest", () => {
        cy.request('http://localhost:3000/posts').then(respuesta => {
            cy.log(respuesta)
        })
    })

    it("Primer test de api rest utilizando querys", () => {
        cy.request({
            url: "http://localhost:3000/posts",
            method: 'GET',
            qs: {
                id: 55
            }
        }).then(respuesta => {
            expect(respuesta.body[0].id).equal(55)
        })
    })

    it("Peticion GET utilizando sorting", () => {
        cy.request({
            url: "http://localhost:3000/posts",
            method: 'GET',
            qs: {
                _sort: 'id',
                _order: 'desc'
            }
        }).then(respuesta => {
            cy.log(respuesta)
        })
    })

    it("Peticion GET utilizando slides", () => {
        cy.request({
            url: "http://localhost:3000/posts",
            method: 'GET',
            qs: {
                _start: '15',
                _end: '30'
            }
        }).then(respuesta => {
            cy.log(respuesta.body)
        })
    })

    it("Peticion GET utilizando rango", () => {
        cy.request({
            url: "http://localhost:3000/posts",
            method: 'GET',
            qs: {
                id_gte: '15',
                id_lte: '30'
            }
        }).then(respuesta => {
            cy.log(respuesta.body)
        })
    })

    it("Peticion GET excluyendo elementos", () => {
        cy.request({
            url: "http://localhost:3000/posts",
            method: 'GET',
            qs: {
                id_ne: ['15', '25']
            }
        }).then(respuesta => {
            cy.log(respuesta.body)
        })
    })

    it("Deberia agregar un nuevo post", () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'POST',
            body: {
                id: Math.floor(Math.random() * 1000),
                userid: 15,
                title: 'Curso Cypress comision 3',
                body: 'Clase API testing comision 3'
            }
        }).then(({ body, status, headers }) => {
            cy.log(body)
            cy.log(`status: ${status}`)
            cy.log(headers)
        })
    })

    it("Deberia agregar un nuevo post agregando headers", () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: 'POST',
            body: {
                id: Math.floor(Math.random() * 1000),
                userid: 15,
                title: 'Curso Cypress comision 3',
                body: 'Clase API testing comision 3'
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then(({ body, status, headers }) => {
            cy.log(body)
            cy.log(`status: ${status}`)
            cy.log(headers)
        })
    })

    it("Deberia actualizar un documento utilizando PUT", () => {
        cy.request({
            url: 'http://localhost:3000/posts/649',
            method: 'PUT',
            body: {
                id: Math.floor(Math.random() * 1000),
                userid: 15,
                title: 'Curso Cypress comision 3 actualizado con peticion PUT',
                body: 'Clase API testing comision 3 actualizado con peticion PUT'
            },
        }).then(({ body }) => {
            expect(body.title).equal('Curso Cypress comision 3 actualizado con peticion PUT')
        })
    })

    it("Deberia actualizar un documento utilizando PUT", () => {
        cy.request({
            url: 'http://localhost:3000/posts/649',
            method: 'DELETE',
        }).then(({ status }) => {
            expect(status).equal(200)
        })
    })

    it("Deberia agregar un nuevo post agregando autorizacion en el headers", () => {
        cy.request({
            url: 'https://pushing-it-backend.herokuapp.com/api/login',
            method: 'POST',
            body: {
                username: "pushingit",
                password: '123456!',
            },
        }).then(respuesta => {
            cy.request({
                url: 'https://pushing-it.herokuapp.com/api/save-task',
                method: 'POST',
                body: {
                    name: "15",
                    description: 'Curso Cypress comision 3',
                    status: false
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': `Bearer ${respuesta.body.token}`
                }
            }).then(respuesta => {
                cy.log(respuesta)
            })
        })
    })

    it("Deberia agregar, actualizar, eliminar y dar error al intentar obtener el post eliminado", () => {
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "POST",
            body: {
                userid: 16,
                id: Math.floor(Math.random() * 100000),
                title: "nuevo post",
                body: "Body del nuevo post"
            }
        }).then(respuesta => {
            expect(respuesta.status).equal(201)
        }).then(respuesta => {
            cy.request({
                url: 'http://localhost:3000/posts/' + respuesta.body.id,
                method: 'PUT',
                body: {
                    userid: 16,
                    id: respuesta.body.id,
                    title: "Nuevo post editado",
                    body: "Body del nuevo post editado"
                }
            }).then(respuesta => {
                expect(respuesta.status).equal(200)
                expect(respuesta.body.title).equal('Nuevo post editado')
                expect(respuesta.body.body).equal('Body del nuevo post editado')
            }).then(respuesta => {
                cy.request({
                    url: 'http://localhost:3000/posts/' + respuesta.body.id,
                    method: 'DELETE',
                }).then(respuesta => {
                    expect(respuesta.status).equal(200)
                }).then(respuesta => {
                    cy.request({
                        url: `http://localhost:3000/posts/${respuesta.body.id}`,
                        failOnStatusCode: false
                    }).then(respuesta => {
                        expect(respuesta.status).equal(404)
                    })
                })
            })
        })
    })

    it.only('Deberia ingresar a pushingIT utilizando request', () => {
        cy.request({
            method: "POST",
            url: "https://pushing-it-backend.herokuapp.com/api/login",
            body: {
                username: "pushingit",
                password: "123456!"
            }
        }).then(respuesta =>{
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
        cy.visit('');
    });
});