/*
 * Projet : Les classes destinées à pouvoir passer une commande à une pizzeria.
 * Auteur : Véronique Poulin et Pierre-Luc Hamel
 * Date : 26 février 2021
 */

class Aliments {
    constructor(nom, poids) {
        this.nom = nom;
        this.poids = poids;
    }
    lectureAliments() {
        return "nom de l'aliment: " + this.nom + "\nPoids(gramme):" + this.poids;
    }
    modifierNom(nouveauNom) {
        this.nom = nouveauNom;
    }
    modifierPoids(nouveauPoids) {
        this.poids = nouveauPoids;
    }
}

class Croute extends Aliments {
    constructor(nom, poids, type, prix, taille) {
        super(nom, poids);
        this.type = type;
        this.prix = prix;
        this.taille = taille;
    }
    lectureCroute() {
        return "type de croute: " + this.type + "\ntaille(P/M/G): " + this.taille + "\nPrix: " + this.prix;
    }
    modifierTaille(nouvelleTaille) {
        this.taille = nouvelleTaille;
    }
    modifierCroute(nouveauType) {
        this.type = nouveauType;
    }
    modifierPrixCroute(nouveauPrix) {
        this.prix = nouveauPrix;
    }
}

class Fromage extends Aliments {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
    lecturePrixFromage() {
        return "Prix: " + this.prix;
    }
    modifierPrixFromage(nouveauPrix) {
        this.prix = nouveauPrix;
    }
}

class Garniture extends Aliments {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
    lecturePrixGraniture() {
        return "Prix: " + this.prix;
    }
    modifierPrixGraniture(nouveauPrix) {
        this.prix = nouveauPrix
    }
}

class Epice extends Aliments {
}

class Pizza {
    constructor(numeroPizza, taille, croute, fromage, garniture, prixComplet, tempsCuisson) {
        this.numeroPizza = numeroPizza;
        this.taille = taille;
        this.croute = croute;
        this.fromage = fromage;
        this.garniture = garniture;
        this.prixComplet = prixComplet;
        this.tempsCuisson = tempsCuisson;
    }
    lecturePizza() {
        return "Numéro de pizza: " + this.numeroPizza + "\nTaille de la Pizza: " + this.taille + "\nType de croûte: " + this.croute.type +
            "\nFromage: " + this.fromage + "\nGarniture: " + this.garniture + "\nPrix de la Pizza : " + this.prixComplet + "\nTemps de cuisson: " + this.tempsCuisson;
    }
    modifierTaillePizza(nouvelleTaille) {
        this.taille = nouvelleTaille;
    }
    modifierCroutePizza(nouvelleCroute) {
        this.croute = nouvelleCroute;
    }
    modifierFromagePizza(fromage, p) {
        this.fromage[p] = fromage;
    }
    modifierGarniturePizza(garniture, p) {
        this.garniture[p] = garniture;
    }
    modifierTempsPizza(nouveauTemps) {
        this.tempsCuisson = nouveauTemps;
    }
    ajouterGarniture(garnitureSupplémentaire) {
        this.garniture[this.garniture.length] = garnitureSupplémentaire;
    }
    ajouterFromage(fromageSupplémentaire) {
        this.fromage[this.fromage.length] = fromageSupplémentaire;
    }
    prixCompletPizza() {
        var fromage = 0;
        var garniture = 0;
        var i = 0;

        for (i = 0; i < this.fromage.length; i++) {
            fromage += this.fromage[i].prix;
        }
        for (i = 0; i < this.garniture.length; i++) {
            garniture += this.garniture[i].prix;
        }

        this.prixComplet = this.croute.prix + fromage + garniture;
        if (this.croute.taille == "P") {
            this.prixComplet = this.prixComplet;
        }
        if (this.croute.taille == "M") {
            this.prixComplet = this.prixComplet * 2;
        }
        if (this.croute.taille == "G") {
            this.prixComplet = this.prixComplet * 3;
        }
        return this.prixComplet;
    }
}

class Commande {
    constructor(numeroCommande, dateCommande, heureCommande, pizza, montantTotal) {
        this.numeroCommande = numeroCommande;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.pizza = pizza;
        this.montantTotal = montantTotal;
    }
    lectureCommande() {
        return "Numéro de commande: " + this.numeroCommande + "\nDate de la commande: " + this.dateCommande + "\nHeure de la commende: " + this.heureCommande +
            "\nLes pizzas: " + this.pizza[this.pizza.length] + "\nMontant total de la facture: " + this.montantTotal;
    }
    ajouterPizza(pizzaSupplémentaire) {
        this.pizza[this.pizza.length] = pizzaSupplémentaire;
    }
    PrixTotal() {
        var prixPizza = 0;

        for (var i = 0; i < this.pizza.length; i++) {
            prixPizza += this.pizza[i].prixComplet;
        }
        this.montantTotal = prixPizza;
        return this.montantTotal
    }
}

class Client {
    constructor(nom, prénom, numeroTelephone, adresseCouriel, commande) {
        this.nom = nom;
        this.prenom = prénom;
        this.numeroTelephone = numeroTelephone;
        this.adresseCouriel = adresseCouriel;
        this.commande = commande;
    }
    lectureClient() {
        return "\nNom du client: " + this.nom + "\nPrénom du client: " + this.prenom + "\nNuméro de Téléphone: " + this.numeroTelephone +
            "\nAdresse couriel: " + this.adresseCouriel + "\nNuméro de commende en ligne: " + this.commande;
    }
    modifierNomClient(nouveauNom) {
        this.nom = nouveauNom;
    }
    modifierPrenomClient(nouveauPrenom) {
        this.prenom = nouveauPrenom;
    }
    modifierNumeroClient(nouveauNumeroTelephone) {
        this.numeroTelephone = nouveauNumeroTelephone;
    }
    modifierAdresseClient(nouvelleAdresseCouriel) {
        this.adresseCouriel = nouvelleAdresseCouriel;
    }
}