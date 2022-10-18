/// <reference types="Cypress" />
//Cenário de teste 
describe('Fluxo de visualização do mapa - onde aceita VR', () => {

    //ACessando pagina inicial para poder navegar até a pagina de onde aceita VR
    it('Acessando pagina incial da VR"', () => {
        cy.visit('https://www.vr.com.br/')
        cy.title().should('be.equal', 'VR Benefícios - Vale Refeição, Vale Alimentação e Transporte')
    })

    //Acessando a pagina pra você para poder acesasr o mapa de visualização
    it('Acessando pagina "Pra Você"', () => {
        cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
        cy.title().should('be.equal', 'VR Benefícios - Onde aceita VR')
        cy.url().should('eq', 'https://www.vr.com.br/onde-aceita.htm')
    })

    //Garantindo que o mapa ta sendo exibido atraves da modal de mapa
    it('Visualizando mapa', () => {
        cy.get('.vr-hero__actions > .vr-button--negative').click()
        cy.get('#rede-credenciada.vr-modal.vr-modal--map').should('be.visible')
    })
})
