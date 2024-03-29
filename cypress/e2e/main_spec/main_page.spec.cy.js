import {header, imgName, movie} from "../../support/consts";

describe('Test main page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Test main page elements', () => {
        cy.get('.page-header__title').should('have.text', header.headerTitle);
        cy.get('.page-nav__day_today').should('be.visible')
        cy.get('.page-nav__day_weekend').should('be.visible')
        cy.get('.movie').should('be.visible')
        cy.get('.movie__poster-image')
            .should('be.visible')
            .should('have.attr', 'src', imgName.imgLogan)
        cy.get('.movie__description')
            .first()
            .should('be.visible')
        cy.get('.movie__title')
            .first()
            .should('have.text',movie.logan)
        cy.get('.movie__synopsis')
            .first()
            .should('have.text',movie.wolverine)
        cy.get('.movie__data')
            .first()
            .should('contain.text','90 мин.')
        cy.get('.movie-seances__time.acceptin-button-disabled')
            .first()
            .should('be.visible')
        cy.get('.movie-seances__time')
            .first()
            .should('be.visible')
            .should('not.have.attr','class','acceptin-button-disabled' )
    })
})
