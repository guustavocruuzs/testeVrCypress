/// <reference types="Cypress" />

describe('Testes automatizados VR', () => {
    
  it('Acessando pagina incial da VR"', () => {
      cy.visit('https://www.vr.com.br/')
      cy.title().should('be.equal', 'VR Benefícios - Vale Refeição, Vale Alimentação e Transporte')
  })
  it('Acessando pagina "Pra Você"', () => {
      cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
      cy.title().should('be.equal', 'VR Benefícios - Onde aceita VR')
      cy.url().should('eq', 'https://www.vr.com.br/onde-aceita.htm')
  })

  it('Visualizando mapa', () => {
      cy.get('.vr-hero__actions > .vr-button--negative').click()
      cy.get('#rede-credenciada.vr-modal.vr-modal--map').should('be.visible')
  })
})
