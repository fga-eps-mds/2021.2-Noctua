/// <reference types="cypress" />

describe('Título do teste', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('© 2022 Noctua Development. Todos os direitos reservados').should('be.visible')
    });
    it('Entrando na pagina inicial', () => {
        cy.contains('© 2022 Noctua Development. Todos os direitos reservados').should('be.visible')
    });
    it('Entrando no link do email', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
              win.location.href = 'http://localhost:3000/fale-conosco';
            }).as("popup")
          })
        cy.get('.css-5ernx1 > svg > path').click({force: true})
        //cy.url().should('include', 'fale-conosco')
    });

    it('Entrando no link do Discord', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
              win.location.href = 'https://discord.com/invite/cpMXU7z6tK';
            }).as("popup")
          })
        cy.get('.css-9b74cn > svg > path').click({force: true})
    });

    it('Entrando no link do Github', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
              win.location.href = 'https://github.com/fga-eps-mds/2021.2-Noctua';
            }).as("popup")
          })
        cy.get('.css-1smy5l3 > svg > path').click({force: true})
    });

    it('Voltando a pagina inicial', () => {
        cy.contains('Salário dos magistrados').click({force: true})
        cy.url().should('include', 'salario-magistrados')
        cy.get('.css-13tvsxq > .chakra-image').click()
        cy.contains('© 2022 Noctua Development. Todos os direitos reservados').should('be.visible')
    });

    it('Entrando em Salario dos Magistrados pela imagem', () => {
        cy.contains('Salário dos magistrados').click({force: true})
        cy.url().should('include', 'salario-magistrados')
    });

    it('Entrando em Dados Eleições do Brasil pela imagem', () => {
        cy.contains('Dados Eleições do Brasil').click({force: true})
        cy.url().should('include', 'eleicoes-brasil')
    });

    it('Entrando em Gastos dos deputados do Brasil pela imagem', () => {
        cy.contains('Gastos dos deputados do Brasil').click({force: true})
        cy.url().should('include', 'gastos-deputados')
    });

    //Esperando alterar a opção na topbar para Salário dos Magistrados
    it.skip('Entrando em Salario dos Magistrados pela topbar', () => {
        cy.get('.css-0').children().contains('Gastos dos deputados do Brasil').click({force: true})
    });

    it.skip('Entrando em Dados Eleições do Brasil pela topbar', () => {
        cy.get('.css-0').children().contains('Dados eleições do Brasil').click({force: true})
        cy.url().should('include', 'eleicoes-brasil') 
    });

    it.skip('Entrando em Gastos dos deputados do Brasil pela topbar', () => {
        cy.get('.css-0').children().contains('Gastos dos deputados do Brasil').click({force: true})
        cy.url().should('include', 'gastos-deputados')
    });
  
  });