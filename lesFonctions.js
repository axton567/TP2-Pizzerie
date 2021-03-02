/*
 * Projet : Les fonctions destinées à vérifier les informations entrer pour une commande à une pizzeria.  
 * Auteur : Véronique Poulin et Pierre-Luc Hamel
 * Date : 26 février 2021
 */

function verifierNumeroDeTelephone(numero) {
    var vérifier = false;
    var numeroLength = numero.length;

    if (!isNaN(numero) && numeroLength == 9) {
        vérifier = true;
    }
    else {
        vérifier = false;
    }
    return vérifier;
}

function verifierEntier(entier) {
    var vérifier = false;

    if (!isNaN(entier) && entier > 0) {
        vérifier = true;
    }
    else {
        vérifier = false;
    }
    return vérifier;
}

function verifierCodePostal(codePostal) {
    var vérifier = false;
    var codePostalMaj = codePostal.toUpperCase();
    var codePostalLength = codePostal.length;
    var i = 0;

    if (codePostalLength == 6) {
        while (i < 6) {
            if (i == 0 || i == 2 || i == 4) {
                if (codePostalMaj.charCodeAt(i) >= 65 && codePostalMaj.charCodeAt(i) <= 90) {
                    vérifier = true;
                    i++;
                }
                else {
                    vérifier = false;
                    i = 6;
                }
            }
            else (i == 1 || i == 3 || i == 5)
            {
                if (codePostalMaj.charCodeAt(i) >= 48 && codePostalMaj.charCodeAt(i) <= 57) {
                    vérifier = true;
                    i++;
                }
                else {
                    vérifier = false;
                    i = 6;
                }
            }
        }
    }
    else {
        vérifier = false;
    }
    return vérifier;
}
// Code pour tester les fonctions.

function testVerifierNumeroDeTelephone(entree, attendu){
    console.log("Entrée : " + entree);
    console.log("Résultat attendu : " + attendu);
    console.log("Résultat obtenu: "+ verifierNumeroDeTelephone(entree));
}

function testVerifierEntier(entree, attendu){
    console.log("Entrée : " + entree);
    console.log("Résultat attendu : " + attendu);
    console.log("Résultat obtenu: "+ verifierEntier(entree));
}

function testVerifierCodePostal(entree, attendu){
    console.log("Entrée : " + entree);
    console.log("Résultat attendu : " + attendu);
    console.log("Résultat obtenu: "+ verifierCodePostal(entree));
}

testVerifierNumeroDeTelephone("012345678",true);
testVerifierNumeroDeTelephone("0123G5866",false);

testVerifierEntier(2,true);
testVerifierEntier(-6,false);

testVerifierCodePostal("J3H5c2",true);
testVerifierCodePostal("hhhttt22",false);