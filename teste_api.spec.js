/// <reference types="Cypress" />

//Script de Teste contendo a validação do Status do Serviço e validação dos Campos
//Feito por Edson Jr.

describe('Teste de API', () => {

    it('Validar Status do Serviço People', () => {

        cy.request({
            url: 'https://swapi.co/api/people/1/'
        })
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })

    })

    it('Validar propriedade campos do Serviço - People', () => {

        cy.request('GET', 'https://swapi.co/api/people/1/')
            .then((resp) => {
                //Validação dos Campos
                expect(resp.body).to.have.property('name', 'Luke Skywalker')
                expect(resp.body).to.have.property('height', '172')
                expect(resp.body).to.have.property('mass', '77')
                expect(resp.body).to.have.property('hair_color', 'blond')
                expect(resp.body).to.have.property('skin_color', 'fair')
                expect(resp.body).to.have.property('eye_color', 'blue')
                expect(resp.body).to.have.property('birth_year', '19BBY')
                expect(resp.body).to.have.property('gender', 'male')
            })

    })

    it('Validar Status do Serviço Planets', () => {

        cy.request({
            url: 'https://swapi.co/api/planets/1/'
        })
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })

    })

    it('Validar propriedade campos do Serviço - Planets', () => {

        cy.request('GET', 'https://swapi.co/api/planets/1/')
            .then((resp) => {
                //Validação dos Campos
                expect(resp.body).to.have.property('name', 'Tatooine')
                expect(resp.body).to.have.property('rotation_period', '23')
                expect(resp.body).to.have.property('orbital_period', '304')
                expect(resp.body).to.have.property('diameter', '10465')
                expect(resp.body).to.have.property('climate', 'arid')
                expect(resp.body).to.have.property('gravity', '1 standard')
                expect(resp.body).to.have.property('terrain', 'desert')
                expect(resp.body).to.have.property('surface_water', '1')
                expect(resp.body).to.have.property('population', '200000')
            })

    })
    

})