// app.js

function val(resultat) {
    document.forms['form'].elements['fenetre'].value += resultat;
}

function calcule() {
    const fenetre = document.forms['form'].elements['fenetre'];
    try {
        fenetre.value = eval(fenetre.value);
    } catch (e) {
        fenetre.value = 'Error';
    }
}

function suppr() {
    document.forms['form'].elements['fenetre'].value = "";
}

module.exports = { val, calcule, suppr };
