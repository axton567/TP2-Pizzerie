class Aliments {
    constructor(nom, poids) {
        this.nom = nom;
        this.poids = poids;
    }
}

class Croute extends Aliments {
    constructor(nom, poids, type, prix) {
        super(nom, poids);
        this.type = type;
        this.prix = prix;
    }
}

class Fromage extends Aliments {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
}

class Garniture extends Aliments {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
}

class Client {
    constructor(nom, prenom, telephone, courriel) {
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.courriel = courriel;
    }

}

class Pizza {
    constructor(numero, taille, croute, fromages, garnitures, tempsCuisson, prixComplet) {
        this.numero = numero;
        this.taille = taille;
        this.croute = croute;
        this.fromages = fromages;
        this.garnitures = garnitures;
        this.tempsCuisson = tempsCuisson;
        this.prixComplet = prixComplet;
    }

}

class Commande {
    constructor(numero, client, date, heure, pizzas) {
        this.numero = numero;
        this.client = client;
        this.date = date;
        this.heure = heure;
        this.pizzas = pizzas;
    }

}

class Taille {
    constructor(nom, diametre, facteur) {
        this.nom = nom;
        this.diametre = diametre;
        this.facteur = facteur;
    }

}
