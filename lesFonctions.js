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