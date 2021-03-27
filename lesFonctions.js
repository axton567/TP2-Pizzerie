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

function afficherOuCacher() {
    var element = document.getElementById("sousMenu")
    if (element.className == "cache") {
        element.classList.remove("cache");
    }
    else {
        element.classList.add("cache");
    }
}

function chargerListeSelect(selectId, liste) {
    var s = "<option></option>";
    for (var i = 0; i < liste.length; i++) {
        s += '<option value="' + i + '">' + liste[i].lireNom() + '</option>';
    }
    var element = document.getElementById(selectId);
    element.innerHTML = s;
}
function ajouterAliments(liste, selectId, pId) {
    liste[liste.length] = (document.getElementById(selectId).value);
    document.getElementById(pId).innerHTML = liste;
}
function effacerAliments(liste, pId) {
    liste.length = 0;
    document.getElementById(pId).innerHTML = "";
}
function verificationEntrer(selectId, txt) {
    var entrer = document.getElementById(selectId).value;
    var br = "<br>";
    if (entrer == "") {
        var div = document.getElementById("verifier");
        var objet = document.createElement("a");
        var texte = document.createTextNode("Erreur:" + txt + " vide");
        objet.innerHTML = br;
        objet.appendChild(texte);
        div.appendChild(objet);
    }
    else if (selectId == "numeroPizza" || selectId == "tempCuisson" || selectId == "numeroCommande" ||
        selectId == "poidsCroute" || selectId == "poidsFromage" || selectId == "poidsGarniture"
        || selectId == "prixCroute" || selectId == "prixFromage" || selectId == "prixGarniture") {
        var number = verifierEntier(entrer);
        var div = document.getElementById("verifier");
        var objet = document.createElement("a");
        if (number == false) {
            var texte = document.createTextNode("Erreur: " + txt + " non numérique ");
        } else {
            var texte = document.createTextNode(txt + ": " + entrer);
        }
        objet.innerHTML = br;
        objet.appendChild(texte);
        div.appendChild(objet);
    }
    else if (selectId == "numeroTelephone") {
        var number = verifierNumeroDeTelephone(entrer);
        var div = document.getElementById("verifier");
        var objet = document.createElement("a");
        if (number == false) {
            var texte = document.createTextNode("Erreur: " + txt + " n'est pas un numéro valide ");
        } else {
            var texte = document.createTextNode(txt + ": " + entrer);
        }
        objet.innerHTML = br;
        objet.appendChild(texte);
        div.appendChild(objet);
    }
    else {
        var div = document.getElementById("verifier");
        var objet = document.createElement("a");
        if (selectId != "fromagePizza" && selectId != "garniturePizza" && selectId != "pizzaCommande") {
            var texte = document.createTextNode(txt + ": " + entrer);
        }
        else if (selectId == "fromagePizza") {
            var texte = document.createTextNode("Liste de fromage: " + listeFromagesChoisis);
        } else if (selectId == "garniturePizza") {
            var texte = document.createTextNode("liste de garniture: " + listeGarnituresChoisis);
        }
        else if (selectId == "pizzaCommande") {
            var texte = document.createTextNode("les pizzas: " + listePizzasChoisis);
        }
        objet.innerHTML = br;
        objet.appendChild(texte);
        div.appendChild(objet);
    }
}
function soumettreFromage(sallo, t, g) {
    entrer = document.getElementById(sallo).value;
    entrer1 = document.getElementById(t).value;
    entrer2 = document.getElementById(g).value;
    instanceFromage = new Fromage(entrer, entrer1, entrer2);
    msg = instanceFromage.lectureFromage();
    div = document.getElementById("verifier");
    objet = document.createElement("a");
    texte = document.createTextNode(msg + ',');
    objet.appendChild(texte);
    div.appendChild(objet);
}
function soumettreGarniture(sallo, t, g) {
    entrer = document.getElementById(sallo).value;
    entrer1 = document.getElementById(t).value;
    entrer2 = document.getElementById(g).value;
    instanceGarniture = new Garniture(entrer, entrer1, entrer2);
    msg = instanceGarniture.lectureGarniture();
    div = document.getElementById("verifier");
    objet = document.createElement("a");
    texte = document.createTextNode(msg + ',');
    objet.appendChild(texte);
    div.appendChild(objet);
}
function soumettreCroute(sallo, t, g, d, j) {
    entrer = document.getElementById(sallo).value;
    entrer1 = document.getElementById(t).value;
    entrer2 = document.getElementById(g).value;
    entrer3 = document.getElementById(d).value;
    entrer4 = document.getElementById(j).value;
    instanceCroute = new Croute(entrer, entrer1, entrer2, entrer3, entrer4);
    msg = instanceCroute.lectureCroute();
    div = document.getElementById("verifier");
    objet = document.createElement("a");
    texte = document.createTextNode(msg + ',');
    objet.appendChild(texte);
    div.appendChild(objet);
    console.log(instanceCroute);
}
function soumettreClient(sallo, t, g, e) {
    entrer = document.getElementById(sallo).value;
    entrer1 = document.getElementById(t).value;
    entrer2 = document.getElementById(g).value;
    entrer3 = document.getElementById(e).value;
    instanceClient = new Client(entrer, entrer1, entrer2, entrer3);
    msg = instanceClient.lectureClient();
    div = document.getElementById("verifier");
    objet = document.createElement("a");
    texte = document.createTextNode(msg + ',');
    objet.appendChild(texte);
    div.appendChild(objet);
}
function soumettrePizza(sallo, t, g, d, j, k) {
    entrer = document.getElementById(sallo).value;
    entrer1 = document.getElementById(t).value;
    entrer2 = document.getElementById(g).value;
    entrer3 = document.getElementById(d).value;                                                                  
    entrer4 = document.getElementById(j).value;
    entrer5 = document.getElementById(k).value;
    console.log(entrer,entrer1,entrer2,entrer3,entrer4,entrer5);
    instancePizza = new Pizza(entrer, listeTailles[entrer1], listeCroutes[entrer2], listeFromagesChoisis[entrer3], listeGarnituresChoisis[entrer4],entrer5);
    msg = instancePizza.lecturePizza();
    div = document.getElementById("verifier");
    objet = document.createElement("a");
    texte = document.createTextNode(msg);
    objet.appendChild(texte);
    div.appendChild(objet);
}
function soumettreCommande(sallo, t, g, d, j) {
    entrer = document.getElementById(sallo).value;
    entrer1 = document.getElementById(t).value;
    entrer2 = document.getElementById(g).value;
    entrer3 = document.getElementById(d).value;
    entrer4 = document.getElementById(j).value;
    console.log(entrer,entrer1,entrer2,entrer3,entrer4);
    instanceCommande = new Commande(entrer, listeClients[entrer1], entrer2, entrer3,listePizzasChoisis[entrer4]);
    msg = instanceCommande.lectureCommande();
    div = document.getElementById("verifier");
    objet = document.createElement("a");
    texte = document.createTextNode(msg);
    objet.appendChild(texte);
    div.appendChild(objet);
}

// Code pour tester les fonctions.
/*
function testVerifierNumeroDeTelephone(entree, attendu) {
    console.log("Entrée : " + entree);
    console.log("Résultat attendu : " + attendu);
    console.log("Résultat obtenu: " + verifierNumeroDeTelephone(entree));
}

function testVerifierEntier(entree, attendu) {
    console.log("Entrée : " + entree);
    console.log("Résultat attendu : " + attendu);
    console.log("Résultat obtenu: " + verifierEntier(entree));
}

function testVerifierCodePostal(entree, attendu) {
    console.log("Entrée : " + entree);
    console.log("Résultat attendu : " + attendu);
    console.log("Résultat obtenu: " + verifierCodePostal(entree));
}

testVerifierNumeroDeTelephone("012345678", true);
testVerifierNumeroDeTelephone("0123G5866", false);

testVerifierEntier(2, true);
testVerifierEntier(-6, false);

testVerifierCodePostal("J3H5c2", true);
testVerifierCodePostal("hhhttt22", false); */
