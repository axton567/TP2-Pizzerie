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
        return "Nom de l'aliment: " + this.nom + ", poids:" + this.poids;
    }
    modifierNom(nouveauNom) {
        this.nom = nouveauNom;
    }
    modifierPoids(nouveauPoids) {
        this.poids = nouveauPoids;
    }
    lireNom() {
        return this.nom;
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
        return this.lectureAliments() + ", type: " + this.type + ", taille(P/M/G): " + this.taille + ", prix: " + this.prix;
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
    lectureFromage() {
        return this.lectureAliments() + ", prix: " + this.prix;
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
    lectureGarniture() {
        return this.lectureAliments() + ", prix: " + this.prix;
    }
    modifierPrixGarniture(nouveauPrix) {
        this.prix = nouveauPrix
    }
}

class Epice extends Aliments {
}

class Taille {
    constructor(nom, diametre, facteur) {
        this.nom = nom;
        this.diametre = diametre;
        this.facteur = facteur;
    }
    lectureTaille() {
        return "Nom: " + this.nom + ", diametre: " + this.diametre + ", facteur: " + this.facteur;
    }
    modifierTaille(taille) {
        this.nom = taille;
    }
    modifierDiametre(diametre) {
        this.diametre = diametre;
    }
    modifierFacteur(facteur) {
        this.facteur = facteur;
    }
    lireNom() {
        return this.nom;
    }

}
class Pizza {
    constructor(numeroPizza, taille, croute, fromage, garniture, tempsCuisson) {
        this.numeroPizza = numeroPizza;
        this.taille = taille;
        this.croute = croute;
        this.fromage = fromage;
        this.garniture = garniture;
        this.tempsCuisson = tempsCuisson;
        this.prixComplet = 0;
        this.prixCompletPizza();

    }
    lireNom() {
        return "Pizza #" + this.numeroPizza;
    }
    lecturePizza() {

        return "Numéro de pizza: " + this.numeroPizza +
            ", taille de la Pizza: {" + this.taille.lectureTaille() + "}" +
            ", type de croûte: {" + this.croute.lectureCroute() + "}" +
            ", fromage: [" + this.lireFromage() + "]" +
            ", garniture: [" + this.lireGarniture() + "]" +
            ", prix de la Pizza : " + this.prixComplet +
            ", Temps de cuisson: " + this.tempsCuisson;
    }
    lireFromage() {
        if (listeFromagesChoisis == "") {
            var s = "";
            for (var i = 0; i < this.fromage.length; i++) {
                s += "{" + this.fromage[i].lectureFromage() + "}, ";
            }
            s = s.substr(0, s.length - 2);
            return s;
        } else {
            var s = "";
            for (var i = 0; i < listeFromagesChoisis.length; i++) {
                s += "{" + listeFromages[listeFromagesChoisis[i]].lectureFromage() + "}, ";
            }
            s = s.substr(0, s.length - 2);
            return s;
        }

    }
    lireGarniture() {
        if (listeFromagesChoisis == "") {
            var s = "";
            for (var i = 0; i < this.garniture.length; i++) {
                s += "{" + this.garniture[i].lectureGarniture() + "}, ";
            }
            s = s.substr(0, s.length - 2);
            return s;
        } else {
            var s = "";
            for (var i = 0; i < listeGarnituresChoisis.length; i++) {
                s += "{" + listeGarnitures[listeGarnituresChoisis[i]].lectureGarniture() + "}, ";
            }
            s = s.substr(0, s.length - 2);
            return s;
        }
    }
    lirePrix() {
        return this.prixComplet;
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
        if (listeFromagesChoisis == "") {
            var i = 0;
            var fromage = 0;
            var garniture = 0;
            for (i = 0; i < this.fromage.length; i++) {
                fromage += this.fromage[i].prix;
            }
            for (i = 0; i < this.garniture.length; i++) {
                garniture += this.garniture[i].prix;
            }
        } else {
            var i = 0;
            var fromage = 0;
            var garniture = 0;
            for (i = 0; i < listeFromagesChoisis.length; i++) {
                fromage += listeFromages[listeFromagesChoisis[i]].prix;
            }
            for (i = 0; i < listeGarnituresChoisis.length; i++) {
                garniture += listeGarnitures[listeGarnituresChoisis[i]].prix;
            }
        }


        this.prixComplet = this.croute.prix + (fromage * this.taille.facteur) + (garniture * this.taille.facteur);
        return this.prixComplet;
    }
}

class Commande {
    constructor(numeroCommande, client, dateCommande, heureCommande, pizza) {
        this.numeroCommande = numeroCommande;
        this.client = client;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.pizza = pizza;
        this.montantTotal = 0;
        this.tps = 0.05;
        this.tvq = 0.0975;
        this.prixTotal();

    }
    lectureCommande() {
        return "Numéro de commande: " + this.numeroCommande +
            ", client: {" + this.client.lectureClient() + "}" +
            ", date de la commande: " + this.dateCommande +
            ", heure de la commande: " + this.heureCommande +
            ", les pizzas: [" + this.lirePizza() + "]" +
            ", montant total de la facture: " + this.montantTotal;
    }
    lirePizza() {
        var s = "";
        for (var i = 0; i < listePizzasChoisis.length; i++) {
            s += "{" + listePizzas[listePizzasChoisis[i]].lecturePizza() + "}, ";
        }
        s = s.substr(0, s.length - 2);
        return s;
    }
    lireMontant() {
        return this.montantTotal;
    }
    ajouterPizza(pizzaSupplémentaire) {
        this.pizza[this.pizza.length] = pizzaSupplémentaire;
    }
    prixTotal() {
        for (var i = 0; i < listePizzasChoisis.length; i++) {
            this.montantTotal += listePizzas[listePizzasChoisis[i]].prixComplet;
        }
        var montantTps = this.montantTotal * this.tps;
        var montantTvq = this.montantTotal * this.tvq;
        this.montantTotal += (montantTps + montantTvq);
        return this.montantTotal;
    }

}

class Client {
    constructor(nom, prénom, numeroTelephone, adresseCourriel) {
        this.nom = nom;
        this.prenom = prénom;
        this.numeroTelephone = numeroTelephone;
        this.adresseCourriel = adresseCourriel;

    }
    lectureClient() {
        return "nom: " + this.nom + ", prénom: " + this.prenom + ", numéro de téléphone: " + this.numeroTelephone +
            ", adresse courriel: " + this.adresseCourriel;
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
    modifierAdresseClient(nouvelleAdresseCourriel) {
        this.adresseCourriel = nouvelleAdresseCourriel;
    }
    lireNom() {
        return this.prenom + " " + this.nom;
    }
}
/*  var croute1 = new Croute("mince", 1, "mince", 2, "P");
var croute2 = new Croute("Épaise", 1, "Épaise", 2, "G");
var fromage1 = new Fromage("mozarella", 3, 3);
var fromage2 = new Fromage("Chedar", 5, 1);
var fromage3 = new Fromage("Suisse", 3, 2);
var garniture1 = new Garniture("Bacon", 6, 5);
var garniture2 = new Garniture("oignon", 8, 1);
var garniture3 = new Garniture("tomate", 5, 2);
var garniture4 = new Garniture("champignon", 8, 3);
var epice1 = new Epice("Origant", 2);
var tailleP = new Taille("P", 7, 1);
var tailleM = new Taille("M", 12, 2);
var tailleG = new Taille("G", 15, 3); 

//Code pour tester la classe Pizza(modifier la taille, type de croute, fromage, garniture, ajoute de fromage et son prix, ajoute de garniture et son prix). 

var pizza1 = new Pizza(1, tailleP, croute1, [], [], 45);
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

var pizza2 = new Pizza(2, tailleM, croute1, [], [], 45);

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

var commande1 = new Commande(1325645, "2021/02/14", "17:45", [], client1);

commande1.ajouterPizza(pizza1);
commande1.ajouterPizza(pizza2);
commande1.prixTotal();;
console.log(commande1.lectureCommande());
console.log(commande1);

var commande2 = new Commande(13, "2021/02/1", "10:30", [],client2);

commande2.ajouterPizza(pizza2);
commande2.prixTotal();;
console.log(commande2.lectureCommande());
console.log(commande2);
 */
/**
 * Instanciations avec des faux données pour les tests
 */

var tailleP = new Taille("P", 12, 1);
var tailleM = new Taille("M", 20, 2);
var tailleG = new Taille("G", 30, 3);
var listeTailles = [tailleP, tailleM, tailleG];

var fausseCroute1 = new Croute("fausse-croute1", 18, "mince", 5, "P");
var fausseCroute2 = new Croute("fausse-croute2", 23, "épaisse", 7, "M");
var fausseCroute3 = new Croute("fausse-croute3", 23, "grains", 6, "G");
var listeCroutes = [fausseCroute1, fausseCroute2, fausseCroute3];

var fausseFromage1 = new Fromage("faux-fromage1", 11, 2.5);
var fausseFromage2 = new Fromage("faux-fromage2", 13, 3);
var fausseFromage3 = new Fromage("faux-fromage3", 12, 2);
var listeFromages = [fausseFromage1, fausseFromage2, fausseFromage3];
var listeFromagesChoisis = [];

var fausseGarniture1 = new Garniture("fausse-garniture1", 10, 5.3);
var fausseGarniture2 = new Garniture("fausse-garniture2", 12, 4.7);
var fausseGarniture3 = new Garniture("fausse-garniture3", 15, 3.5);
var listeGarnitures = [fausseGarniture1, fausseGarniture2, fausseGarniture3];
var listeGarnituresChoisis = [];
var faussePizza1 = new Pizza(
    10001, tailleM, fausseCroute1,
    [fausseFromage1],
    [fausseGarniture1],
    15
)
var faussePizza2 = new Pizza(
    10002, tailleP, fausseCroute2,
    [fausseFromage2],
    [fausseGarniture2],
    13
)
var faussePizza3 = new Pizza(
    10003, tailleG, fausseCroute1,
    [fausseFromage1, fausseFromage2],
    [fausseGarniture1, fausseGarniture2],
    18
)
var listePizzas = [faussePizza1, faussePizza2, faussePizza3];
var listePizzasChoisis = [];

var fausseClient1 = new Client("Eliot", "Billy", 4501231234, "be@mail.ca");
var fausseClient2 = new Client("Uzumaki", "Naruto", 4507896789, "nu@mail.ca");
var fausseClient3 = new Client("Uchiha", "Sasuke", 4501582765, "su@mail.ca");
var listeClients = [fausseClient1, fausseClient2, fausseClient3];
