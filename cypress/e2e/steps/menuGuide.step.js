import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { menuGuide } from '../pages/menuGuide.page';

Given(`que acesse a plataforma`, () => {
    cy.visit('/')
});

When(`acessar o menu Guide e navegar até {string}`, (link) => {
    menuGuide.btnMenuGuide()
    menuGuide.linkAlbumPhotos(link)
});

When(`capturo os dados exibidos e os salvo em um array JSON`, () => {
    menuGuide.bodyPhotos()
});

Then(`valida os dados do objeto com id {string}`, (id) => {
    menuGuide.getArrayPhotos()
});