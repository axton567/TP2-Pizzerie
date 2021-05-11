def ajoutObjet(objetJson, fichier):
    file = open(fichier, "r")
    data = json.load(file)
    file.close()

    data.append(objetJson)
    
    file = open(fichier, "w")
    json.dump(data, file, indent=4)
    file.close()

def obtenirListe(fichier):
    file = open(fichier, "r")
    liste = json.load(file)
    file.close()
    return liste


from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route("/", methods=["POST", "GET"])
def home():
    if request.method == "POST":
        crouteJson = json.loads(request.form["instanceCroute"])
        ajoutObjet(crouteJson, "croutes.json")
        msg = "Croute enregistrée"
        return render_template("croute.html",message=msg)
    else:
        return render_template("croute.html")

@app.route("/croute", methods=["POST", "GET"])
def croute():
    if request.method == "POST":
        crouteJson = json.loads(request.form["instanceCroute"])
        ajoutObjet(crouteJson, "croutes.json")
        msg = "Croute enregistrée"
        return render_template("croute.html",message=msg)
    else:
        return render_template("croute.html")


@app.route("/fromage", methods=["POST", "GET"])
def fromage():
    if request.method == "POST":
        fromageJson = json.loads(request.form["instanceFromage"])
        ajoutObjet(fromageJson, "fromages.json")
        msg = "Fromage enregistrée"
        return render_template("fromage.html",message=msg)
    else:
        return render_template("fromage.html")

@app.route("/garniture", methods=["POST", "GET"])
def garniture():
    if request.method == "POST":
        garnitureJson = json.loads(request.form["instanceGarniture"])
        ajoutObjet(garnitureJson,"garnitures.json")
        msg = "Garniture enregistrée"
        return render_template("garniture.html",message=msg)
    else:
        return render_template("garniture.html")


@app.route("/client", methods=["POST", "GET"])
def client():
    if request.method == "POST":
        clientJson = json.loads(request.form["instanceClient"])
        ajoutObjet(clientJson, "clients.json")
        msg = "Client enregistrée"
        return render_template("client.html",message=msg)
    else:
        return render_template("client.html")

@app.route("/commande", methods=["POST", "GET"])
def commande():
    listeClients=obtenirListe("clients.json")
    listePizzas=obtenirListe("pizzas.json")
    prixPizza = 0

    if request.method == "POST":
        commandeJson = json.loads(request.form["instanceCommande"])
        for  valeur in commandeJson["pizzas"]:
            prixPizza += valeur["prixComplet"]
        prixTps = prixPizza * 0.05
        prixTvq = prixPizza * 0.0975
        prixPizza += (prixTps + prixTvq)
        commandeJson["montantTotal"] = prixPizza
        ajoutObjet(commandeJson, "commandes.json")

        return render_template("commande.html",message=msg, prix=prix ,request=request,listePyClients=listeClients, listePyPizzas=listePizzas)
    else:
        return render_template("commande.html", listePyClients=listeClients, listePyPizzas=listePizzas)

    if request == "POST":
            msg = "Commande enregistrée"
            prix = "Prix de la commande: " + str(prixPizza)+"$(avec taxes)"

@app.route("/pizza", methods=["POST", "GET"])
def pizza():
    listeTailles = obtenirListe("tailles.json")
    listeCroutes = obtenirListe("croutes.json")
    listeFromages = obtenirListe("fromages.json")
    listeGarnitures = obtenirListe("garnitures.json")
    fromagePrix=0
    garniturePrix=0

    if request.method == "POST":
        pizzaJson = json.loads(request.form["instancePizza"])
        for clef, valeur in pizzaJson["croute"].items():
            if clef  == "prix":
                croutePrix =valeur
        for valeur in pizzaJson["fromages"]:
            fromagePrix+=valeur["prix"]
        for valeur in pizzaJson["garnitures"]:
            garniturePrix+=valeur["prix"]
        for clef, valeur in pizzaJson["taille"].items():
            if clef  == "facteur":
                TailleFacteur =valeur
        prixComplet = croutePrix +(fromagePrix * TailleFacteur)+(garniturePrix * TailleFacteur)
        pizzaJson["prixComplet"] = prixComplet
        ajoutObjet(pizzaJson, "pizzas.json")

        return render_template("pizza.html",message=msg, prix=prix ,request=request,listePyTailles=listeTailles, listePyCroutes=listeCroutes, listePyFromages=listeFromages, listePyGarnitures=listeGarnitures)
    else:
        return render_template("pizza.html", listePyTailles=listeTailles, listePyCroutes=listeCroutes, listePyFromages=listeFromages, listePyGarnitures=listeGarnitures)
    
        if request == "POST":
            msg = "Pizza enregistrée"
            prix = "Prix de la pizza: " + str(prixComplet)+"$"


if __name__ == "__main__":
    app.run()

