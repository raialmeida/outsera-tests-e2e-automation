export const menuGuide = {

    btnMenuGuide() {
        cy.contains('a', 'Guide').click();
    },

    linkAlbumPhotos(linkText) {
        cy.contains('a', linkText).click();
    },

    bodyPhotos() {
        cy.get('body').then((body) => {
            const photosArray = JSON.parse(body.text());
            cy.log(photosArray)
            cy.wrap(photosArray).as('photosArray');
        })
    },

    getArrayPhotos() {
        cy.get('@photosArray').then((photosArray) => {
            const photo = photosArray.find((p) => p.id === 6);
            // Verifique se o objeto com id = 6 existe e valide seus atributos
            expect(photo).to.exist;
            expect(photo.title).to.eq('accusamus ea aliquid et amet sequi nemo');
            expect(photo.url).to.eq('https://via.placeholder.com/600/56a8c2');
            expect(photo.thumbnailUrl).to.eq('https://via.placeholder.com/150/56a8c2');
        })
    }
}