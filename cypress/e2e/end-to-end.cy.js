import { faker } from '@faker-js/faker'

describe('Testes End To End do fluxo de cadastro e login', () => {

    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {

        // Massa de dados dinâmica

        const nome = faker.person.fullName()
        const email = `alex${Date.now()}@gmail.com`
        const telefone = faker.string.numeric(11)
        const senha = 'Teste@123'

        // Cadastro

        cy.cadastrarUsuario(
            nome,
            email,
            telefone,
            senha
        )

        cy.url().should('include', 'dashboard')

        // Login

        cy.visit('/login.html')

        cy.login(

            email,
            senha
        )
        cy.url().should('include', 'dashboard')
    })

})