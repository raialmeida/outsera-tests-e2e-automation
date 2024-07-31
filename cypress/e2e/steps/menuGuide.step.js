import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { menuGuide } from '../pages/menuGuide.page'

Given(`que acesse a plataforma`, () => {
    cy.visit('/')
})

When(`clicar no menu Guide`, () => {
    menuGuide.btnMenuGuide()
})

When(`acessar {string} e capturar os dados exibidos e salvar em um array JSON`, (link) => {
    menuGuide.linkAlbumPhotos(link)
})

Then(`valida os dados do objeto com id {int}`, (id) => {
    menuGuide.getArrayPhotos().then((photosArray) => {
        const photoComId = photosArray.find(photo => photo.id === id)
        expect(photoComId).to.exist
        expect(photoComId).to.have.property('id', id)
        expect(photoComId).to.have.property('albumId', 1)
        expect(photoComId).to.have.property('title', 'accusamus ea aliquid et amet sequi nemo')
        expect(photoComId).to.have.property('url', 'https://via.placeholder.com/600/56a8c2')
        expect(photoComId).to.have.property('thumbnailUrl', 'https://via.placeholder.com/150/56a8c2')
    })
})