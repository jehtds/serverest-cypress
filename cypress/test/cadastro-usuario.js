import faker from 'faker';
import assertionRegister from "../support/assertions/assertion-cadastro"

before(() => {
    globalThis.nameUser = faker.name.findName();
    globalThis.email = faker.internet.email();
    globalThis.password = faker.internet.password()
})

describe ("Cadastro de usuário na serverest", () => {
    it ("Cadastro de usuário com sucesso", () => {
        cy.registerUser(nameUser, email, password).then((response) => {
            assertionRegister.assertionRegisterSuccess(response)
        })
    })

    it("Cadastro de usuário com email existente", () => {
        cy.registerUser(nameUser, email, password).then((response) => {
            assertionRegister.assertionRegisterFail(response)
        })
    })
})