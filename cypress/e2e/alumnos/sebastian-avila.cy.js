/// <reference types="cypress" />

describe('Challenge 4/ API Testing',()=>{

    const number= Math.floor(Math.random()*10000);
    const user= `zebass${number}`;
    const pass= 'sebas1233!'
    const sex= 'male';
    const day= '21';
    const month= 'june';
    const year= '1985';


    it('Registering new user',()=>{
        cy.request({
            url: 'https://pushing-it-backend.herokuapp.com/api/register',
            method: 'POST',
            body: {
                username: user,
                password: pass,
                gender: sex,
                day: day,
                month: month,
                year:year,
            }
        }).then(response=>{
            cy.log(response);
            expect(response.body.newUser.username).equal(user);
            assert.equal(response.status, 200)
            
        }).then(response=>{
            cy.request({
                url: 'https://pushing-it-backend.herokuapp.com/api/login',
                method: 'POST',
                body:{
                    username: user,
                    password: pass
                }
            }).then(response=>{
                cy.log(response);
                assert.equal(response.body.user.username, user);
                expect(response.status).equal(200);
            
            }).then(response=>{
                cy.request({
                    url:`https://pushing-it-backend.herokuapp.com/api/deleteuser/${user}`,
                    method: 'DELETE',
                    failOnStatusCode: false

                }).then(response=>{
                    assert.equal(response.status, 200)
                    cy.log(response)
                })
            })
        })
    })
})