def ajoutObjet(objetJson, fichier):
    file = open(fichier, "r")
    data = json.load(file)
    file.close()

    data.append(objetJson)
    # print(data)

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
def croute():
    if request.method == "POST":
        crouteJson = json.loads(request.form["instanceCroute"])
        # print(crouteJson)
        ajoutObjet(crouteJson, "croutes.json")
        return render_template("croute.html")
    else:
        return render_template("croute.html")

@app.route("/fromage", methods=["POST", "GET"])
def fromage():
    if request.method == "POST":
        fromageJson = json.loads(request.form["instanceFromage"])
        # print(crouteJson)
        ajoutObjet(fromageJson, "fromages.json")

        return render_template("fromage.html")
    else:
        return render_template("fromage.html")


@app.route("/pizza", methods=["POST", "GET"])
def pizza():
    listeTailles = obtenirListe("tailles.json")
    listeCroutes = obtenirListe("croutes.json")
    listeFromages = obtenirListe("fromages.json")
    listeGarnitures = obtenirListe("garnitures.json")


    if request.method == "POST":
        pizzaJson = json.loads(request.form["instancePizza"])
        # print(crouteJson)
        ajoutObjet(pizzaJson, "pizzas.json")

        return render_template("pizza.html", listePyTailles=listeTailles, listePyCroutes=listeCroutes, listePyFromages=listeFromages, listePyGarnitures=listeGarnitures)
    else:
        return render_template("pizza.html", listePyTailles=listeTailles, listePyCroutes=listeCroutes, listePyFromages=listeFromages, listePyGarnitures=listeGarnitures)


if __name__ == "__main__":
    app.run()
