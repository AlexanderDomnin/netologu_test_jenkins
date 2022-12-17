
describe('Test admin page', () => {
  beforeEach(() => {
    cy.visit('/admin')
    cy.get('input[type=\'email\']').type('qamid@qamid.ru')
    cy.get('input[type=\'password\']').type('qamid')
    cy.get('[value="Авторизоваться"]').click()
  })
  it('Test admin page create hall', () => {

    cy.contains('Создать зал').click()
    cy.get('input[type=\'text\']').type('Тест зал')
    cy.get('[value="Добавить зал"]').click()
    cy.get('.conf-step__list')
        .get('li')
        .first()
        .should('have.text', 'Тест зал');
  })
  afterEach(() => {
    cy.get('.conf-step__list')
        .get('li')
        .first()
        .first()
        .click()
    cy.get('[value="Удалить"]').click()
    cy.on("window:confirm", (t) => {
      expect(t).to.equal("Все сеансы в этом зале и все записи о проданных билетах в этот зал будут удалены!");
    });
  })
})
