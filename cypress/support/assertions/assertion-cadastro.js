class assertionRegister {
    assertionRegisterSuccess(response) {
        expect(response.status, "Status Code").to.eq(201)
        expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        expect(response.body._id).not.to.be.empty
    }

    assertionRegisterFail(response) {
        expect(response.status, "Status Code").to.eq(400)
        expect(response.body.message).to.eq("Este email já está sendo usado")
    }
}

export default new assertionRegister()