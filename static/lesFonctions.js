/**
 * Fonction qui ajoute ou enleve une class à un élément
 * (on l'utilise pour afficher ou cacher le sous-menu)
 */
 function afficherOuCacher() {
    var element = document.getElementById("sousmenu");
    if (element.className == "cache") {
        element.classList.remove("cache");
    }
    else {
        element.classList.add("cache");
    }
}

/**
 * Génere la liste d'objets selectionnés 
 * @param {objet} listeIndex : tableau avec les index des objets selectionnés
 * @param {object} listeObjets : liste des objets où chercher les objets
 * @returns 
 */
function genererListe(listeIndex, listeObjets) {
    var l = [];
    if (listeIndex.length > 0) {
        //Boucle qui parcours l'objet NodeList.
        for (var i = 0; i < listeIndex.length; i++) {
            l[l.length] = listeObjets[listeIndex[i]];
        }
    }

    return l;
}
