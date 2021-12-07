import { browser, element, by } from "protractor";

describe('Prueba E2E', () => {
    //Código de Configuración
    beforeEach(() => {
        browser.get("/");
    });
    // Prueba 1
    it("El usuario navega por la pagina home", () => {
        expect(element(by.css(".home-selected ion-label")).getText()).toContain("home.page.html");
    });
    //Prueba 2
    it("El usuario puede navegar al inicio de la pantalla", async () => {
        expect(element(by.css(".inicio-selected")).getText()).toContain("inicio");
    });
    it("El componente 1 se muestra por defecto", () => {
        expect(element(by.css(".componente-uno-selected ion-label")).getText()).toContain("Componente-uno");
    });
});
