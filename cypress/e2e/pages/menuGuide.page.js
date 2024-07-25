export const menuGuide = {

    btnMenuGuide() {
        cy.contains('a', 'Guide').click();
    },

    linkAlbumPhotos(linkText) {
        cy.request(linkText).then((response) => {
            const photos = response.body;
            cy.wrap(photos).as('photosArray', { type: 'static' });
        })
    },

    getArrayPhotos() {
        return cy.get('@photosArray');
    }
}