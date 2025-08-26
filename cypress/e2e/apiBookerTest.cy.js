describe('Restful Booker - Testes de API', () => {
  let bookingId
  const firstname = "Joao"
  const lastname = "Silva"

  it('1 - Criar booking com sucesso e validar o response body', () => {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      body: {
        firstname: firstname,
        lastname: lastname,
        totalprice: 120,
        depositpaid: true,
        bookingdates: {
          checkin: "2025-01-01",
          checkout: "2025-01-10"
        },
        additionalneeds: "Breakfast"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('bookingid')
      expect(response.body.booking).to.include({
        firstname: firstname,
        lastname: lastname,
        totalprice: 120,
        depositpaid: true,
        additionalneeds: "Breakfast"
      })

      bookingId = response.body.bookingid
    })
  })

  it('2 - Buscar booking por firstname e verificar se bookingId está na lista', () => {
    cy.request({
      method: 'GET',
      url: `https://restful-booker.herokuapp.com/booking?firstname=${firstname}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      const ids = response.body.map(b => b.bookingid)
      expect(ids).to.include(bookingId)
    })
  })

  it('3 - Erro ao criar booking com payload inválido', () => {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      failOnStatusCode: false,
      body: {
        firstname: "Invalido"                           //payload inválido
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 500])
    })
  })

  it('4 - Buscar por firstname inexistente', () => {
    cy.request({
      method: 'GET',
      url: 'https://restful-booker.herokuapp.com/booking?firstname=NomeInexistente123'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array').that.is.empty
    })
  })

})
