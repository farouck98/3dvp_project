const { val, calcule, suppr } = require('../app');

const { JSDOM } = require('jsdom');
let dom, document;

beforeAll(() => {
    dom = new JSDOM(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Calculator Test</title>
        </head>
        <body>
            <form name="form">
                <input type="text" name="fenetre" id="fenetre">
            </form>
        </body>
        </html>
    `);
    document = dom.window.document;
    global.document = document;
});

afterAll(() => {
    global.document = undefined; // Réinitialise document après les tests
});

test('Test de la fonction val', () => {
    const input = document.querySelector('input[name="fenetre"]');
    input.value = ''; // Assurez-vous que le champ est vide initialement

    val('2');
    expect(input.value).toBe('2');

    val('+');
    expect(input.value).toBe('2+');

    val('3');
    expect(input.value).toBe('2+3');
});

test('Test de la fonction calcule', () => {
    const input = document.querySelector('input[name="fenetre"]');
    input.value = '2 + 3 * 4'; // Une opération simple à calculer

    calcule();
    expect(input.value).toBe('14');

    // Test pour vérifier le cas d'erreur
    input.value = '2 + *'; // Opération invalide
    calcule();
    expect(input.value).toBe('Error');
});

test('Test de la fonction suppr', () => {
    const input = document.querySelector('input[name="fenetre"]');
    input.value = '123'; // Valeur à effacer

    suppr();
    expect(input.value).toBe('');
});

