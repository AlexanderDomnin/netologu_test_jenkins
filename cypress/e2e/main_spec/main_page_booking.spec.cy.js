import {imgName} from "../../support/consts";

describe('Test main page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Test main page booking', () => {
        cy.get('.movie-seances__time')
            .first()
            .click()
        cy.xpath('//*[@class=\'buying-scheme__chair buying-scheme__chair_standart\']')
            .first()
            .click()
        cy.contains('Забронировать').click()
        cy.contains('Получить код бронирования').click()
        cy.get('.ticket__info-qr ')
            .should('be.visible')
            .should('have.attr', 'src', imgName.imgQR)
    })
})
