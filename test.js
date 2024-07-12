// Fonction pour vérifier si une assertion est vraie
function assert(condition, message) {
    if (!condition) {
        console.error("Assertion failed:", message);
    } else {
        console.log("Test passed successfully.");
    }
}

// Test 1 : Vérifier l'ajout de chiffres et d'opérateurs
function testAjoutChiffresEtOperateurs() {
    form.fenetre.value = ""; // Assurez-vous que le champ est vide initialement
    val("2"); // Simuler l'ajout du chiffre '2'
    val("+"); // Simuler l'ajout de l'opérateur '+'
    val("3"); // Simuler l'ajout du chiffre '3'
    assert(form.fenetre.value === "2+3", "L'ajout de chiffres et d'opérateurs fonctionne correctement.");
}

// Test 2 : Calculer une opération simple
function testCalculSimple() {
    form.fenetre.value = "2 + 3 * 4";
    calcule();
    assert(form.fenetre.value === "14", "Le calcul 2 + 3 * 4 a donné le résultat attendu de 14.");
}

// Test 3 : Effacer le champ de texte
function testSuppressionChamp() {
    form.fenetre.value = "123";
    suppr();
    assert(form.fenetre.value === "", "Le champ de texte a été correctement effacé.");
}

// Test 4 : Affichage des messages d'information
function testMessagesInformation() {
    // Vérifier que le message d'information est vide initialement
    assert(info.innerText === "", "Le message d'information est vide au début.");

    // Simuler un clic sur '=' sans saisir de chiffre
    calcule();
    setTimeout(() => {
        assert(info.innerText === "Veuillez écrire un chiffre", "Le message d'information s'affiche correctement lorsque le champ est vide.");

        // Simuler la saisie d'un chiffre pour effacer le message d'information
        form.fenetre.value = "1";
        allBtns.forEach(btn => {
            btn.click(); // Simuler le clic pour effacer le message d'information
        });
        setTimeout(() => {
            assert(info.innerText === "", "Le message d'information est effacé après la saisie d'un chiffre.");
        }, 100); // Attendre 100 ms pour que l'interface utilisateur soit mise à jour
    }, 100); // Attendre 100 ms pour que l'interface utilisateur soit mise à jour
}

// Exécuter tous les tests
function runTests() {
    console.log("Début des tests...");

    // Test 1
    console.log("Test 1 : Ajout de chiffres et d'opérateurs");
    testAjoutChiffresEtOperateurs();

    // Test 2
    console.log("Test 2 : Calculer une opération simple");
    testCalculSimple();

    // Test 3
    console.log("Test 3 : Suppression du contenu du champ de texte");
    testSuppressionChamp();

    // Test 4
    console.log("Test 4 : Affichage des messages d'information");
    testMessagesInformation();

    console.log("Fin des tests.");
}

// Appeler la fonction pour exécuter tous les tests lors du chargement du script
runTests();
