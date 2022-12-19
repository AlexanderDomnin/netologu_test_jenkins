
describe('Test admin page', () => {
  beforeEach(() => {
    cy.visit('/admin')
    cy.get('input[type=\'email\']').type('qamid@qamid.ru')
    cy.get('input[type=\'password\']').type('qamid')
    cy.get('[value="Авторизоваться"]').click()
  })
  it('Test admin page create hall', () => {

    cy.contains('Создать зал').click()
    cy.get('form > .conf-step__label > .conf-step__input').type('Тест зал')
    cy.get('[value="Добавить зал"]').click()
    cy.get('.conf-step__list')
        .get('li')
        .last()
        .should('have.text', 'Тест зал');
  })
  afterEach(() => {
    cy.xpath('//*[.=\'Тест зал\']//following-sibling::a/button').click()
    cy.get('[value="Удалить"]').click()
    cy.on("window:confirm", (t) => {
      expect(t).to.equal("Все сеансы в этом зале и все записи о проданных билетах в этот зал будут удалены!");
    });
  })
})
