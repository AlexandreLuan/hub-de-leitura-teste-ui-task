import { faker } from '@faker-js/faker'

describe('Testes End To End do fluxo de cadastro e login', () => {

    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {

        // Massa de dados dinâmica

        const nome = faker.person.fullName()

        const email = `alex${Date.now()}@gmail.com`

        const telefone = faker.string.numeric(11)

        const senha = 'Teste@123'

        // Cadastro

        cy.visit('/register.html')

        cy.get('#name').type(nome)

        cy.get('#email').type(email)

        cy.get('#phone').type(telefone)

        cy.get('#password').type(senha)

        cy.get('#confirm-password').type(senha)

        cy.get('#terms-agreement').check()

        cy.get('#register-btn').click()

        // Validação do cadastro

        cy.url().should('include', 'dashboard')

        // Acessa tela de login

        cy.visit('/login.html')

        // Login usando o usuário recém-criado

        cy.get('#email').type(email)

        cy.get('#password').type(senha)

        cy.get('button[type="submit"]').click()

        // Validação do login

        cy.url().should('include', 'dashboard')

    })

})