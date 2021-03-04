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

class taille {
    constructor(nom,diametre,facteur){
        this.nom = nom;
        this.diametre = diametre;
        this.facteur = facteur;
    }
    lectureTaille(){
        return "taille: " + this.nom + "diametre de: " + this.diametre + "facteur: " + this.facteur;
    }
    modifierTaille(taille){
        this.nom = taille;
    }
    modifierDiametre(diametre){
        this.diametre = diametre;
    }
    modifierFacteur(facteur){
        this.facteur = facteur;
    }

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

        this.prixComplet = this.croute.prix + (fromage*this.taille.facteur) + (garniture*this.taille.facteur);
        if (this.taille.nom == "P") {
            this.prixComplet = this.prixComplet * 1;
        }
        if (this.taille.nom == "M") {
            this.prixComplet = this.prixComplet * 2;
        }
        if (this.taille.nom == "G") {
            this.prixComplet = this.prixComplet * 3;
        }
        return this.prixComplet;
    }
}

class Commande {
    constructor(numeroCommande, dateCommande, heureCommande, pizza, montantTotal, tps= 0.05, tvq = 0.09975,client) {
        this.numeroCommande = numeroCommande;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.pizza = pizza;
        this.montantTotal = montantTotal;
        this.tps =tps;
        this.tvq = tvq;
        this.client = client;
    }
    lectureCommande() {
        return "Numéro de commande: " + this.numeroCommande + "\nDate de la commande: " + this.dateCommande + "\nHeure de la commende: " + this.heureCommande +
            "\nLes pizzas: " + this.pizza[this.pizza.length] + "\nMontant total de la facture: " + this.montantTotal + "Client: " + this.client;
    }
    ajouterPizza(pizzaSupplémentaire) {
        this.pizza[this.pizza.length] = pizzaSupplémentaire;
    }
    PrixTotal() {
        for (var i = 0; i < this.pizza.length; i++) {
            this.montantTotal += this.pizza[i].prixComplet;
        }
        this.montantTotal += this.montantTotal * this.tps;
        this.montantTotal += this.montantTotal * this.tvq;
        return this.montantTotal
    }
}

class Client {
    constructor(nom, prénom, numeroTelephone, adresseCouriel) {
        this.nom = nom;
        this.prenom = prénom;
        this.numeroTelephone = numeroTelephone;
        this.adresseCouriel = adresseCouriel;

    }
    lectureClient() {
        return "\nNom du client: " + this.nom + "\nPrénom du client: " + this.prenom + "\nNuméro de Téléphone: " + this.numeroTelephone +
            "\nAdresse couriel: " + this.adresseCouriel;
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
var croute1 = new Croute("mince", 1, "mince", 2, "P");
var croute2 = new Croute("Épaise", 1, "Épaise", 2, "G");
var fromage1 = new Fromage("mozarella", 3, 3);
var fromage2 = new Fromage("Chedar", 5, 1);
var fromage3 = new Fromage("Suisse", 3, 2);
var garniture1 = new Garniture("Bacon", 6, 5);
var garniture2 = new Garniture("oignon", 8, 1);
var garniture3 = new Garniture("tomate", 5, 2);
var garniture4 = new Garniture("champignon", 8, 3);
var epice1 = new Epice("Origant", 2);
var tailleP = new taille("P",7,1);
var tailleM = new taille("M",12,2);
var tailleG = new taille("G",15,3);

//Code pour tester la classe Pizza(modifier la taille, type de croute, fromage, garniture, ajoute de fromage et son prix, ajoute de garniture et son prix). 

var pizza1 = new Pizza(1, tailleP, croute1, [], [], null, 45);
pizza1.prixCompletPizza();
pizza1.modifierTaillePizza(tailleM);
pizza1.modifierCroutePizza(croute2);
pizza1.modifierFromagePizza(fromage3, 0);
pizza1.modifierGarniturePizza(garniture3, 0);
pizza1.ajouterFromage(fromage2);;
pizza1.ajouterFromage(fromage1);
pizza1.ajouterGarniture(garniture2);
pizza1.modifierTempsPizza(60);
pizza1.prixCompletPizza();
console.log(pizza1.lecturePizza());
console.log(pizza1);

var pizza2 = new Pizza(2, tailleM, croute1, [], [], null, 45);

pizza2.modifierTaillePizza(tailleG);
pizza2.modifierCroutePizza(croute1);
pizza2.modifierFromagePizza(fromage3, 0);
pizza2.modifierGarniturePizza(garniture3, 0);
pizza2.ajouterFromage(fromage2);;
pizza2.ajouterGarniture(garniture1);
pizza2.prixCompletPizza();
console.log(pizza2.lecturePizza());
console.log(pizza2);

//Code pour tester classe client( modifier le nom, prénom, adresse e-mail, numéro de télephone et la lecture des informations entrées.)

var client1 = new Client("Harington", "Kit", 4564631, "kitHarington1@qc.ca");

console.log(client1.lectureClient());
client1.modifierNomClient("Leslie");
client1.modifierPrenomClient("Rose");
client1.modifierAdresseClient("JolieDemoiselle@qc.ca")
client1.modifierNumeroClient(450996655);
console.log(client1.lectureClient());

var client2 = new Client("Harington", "Kit", 4564631, "kitHarington1@qc.ca");

client2.modifierNomClient("Malo");
client2.modifierPrenomClient("Mathieu");
client2.modifierAdresseClient("MathieuMalo22@hotmail.ca")
client2.modifierNumeroClient(45018215);
console.log(client2.lectureClient());

//Code pour tester la classe Commande( ajoute des pizza, calcule total de la facture).

var commande1 = new Commande(1325645, "2021/02/14", "17:45", [], null,this.tps,this.tvq,client1);

commande1.ajouterPizza(pizza1);
commande1.ajouterPizza(pizza2);
commande1.PrixTotal();;
console.log(commande1.lectureCommande());
console.log(commande1);

var commande2 = new Commande(13, "2021/02/1", "10:30", [], null,this.tps,this.tvq,client2);

commande2.ajouterPizza(pizza2);
commande2.PrixTotal();;
console.log(commande2.lectureCommande());
console.log(commande2);