"use strict";

// Declare variables
const studentName = "Alisha van Caspel";
const studentGroup = "MD2A";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;

    let name = document.getElementsByClassName('studentName');
    for (var i = 0; i < name.length; i ++) {
        name[i].innerText = studentName;
    }

    let group = document.getElementsByClassName('studentGroup');
    for (var i = 0; i < group.length; i ++) {
        group[i].innerText = studentGroup;
    }

    let currentYear = document.getElementsByClassName('pageYear');
    for (var i = 0; i < currentYear.length; i ++) {
        currentYear[i].innerText = year;
    }

    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    main.addContenItem("Variabelen", variables);
    main.addContenItem("Object", object);
    main.addContenItem("Array", array);
    // Activate the first navigation link
    intro();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Alisha van Caspel";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);
    
    // Add the paragraph to the DOM
    element.appendChild(p); 
}

function variables() {
    let postcode = '1234AB';
    let huisnummer = 99;
    let datum = '2018-01-01';
    let gas = 300;
    let water = 30;
    let electriciteit = [1001, 1002];
    let slimmeMeter = true;

    if (slimmeMeter = true) {
        slimmeMeter = ". Dit is gedaan met een slimme meter."
    }

    let title = "<h4>Verslag van de meting</h4>";
    let verslag = "Voor postcode " + postcode + " en huisnummer " + huisnummer + " zijn op " + datum + " metingen gedaan " +
        "en dit zijn de resultaten: gas=" + gas + ", water=" + water + ", electriciteitHoog=" + electriciteit[1] + " en electriciteitLaag=" + electriciteit[0] + slimmeMeter;


    let eigenschappenTitel = "<h4>Nog wat eigenschappen</h4>";
    let tekens = verslag.length;
    let eigenschappen = "Het verslag heeft " + tekens + " tekens. Het laatste woord is: ";

    let result = title + verslag + eigenschappenTitel + eigenschappen;

    main.updateContent("Variabelen", result)
}

function object() {
    let eigenschappen = {
        postcode: "1234AB",
        huisnummer: 99,
        datum: "2018-01-01",
        gas: 300,
        water: 30,
        electriciteit: [1001, 1002],
        slimmeMeter: true
    };

    if (eigenschappen.slimmeMeter = true) {
        eigenschappen.slimmeMeter = "<p>Dit is gedaan met een slimme meter.</p>"
    }

    let title = "<h4>Verslag van de meting</h4>";
    let verslag = "<p>Voor postcode " + eigenschappen.postcode + " en huisnummer " + eigenschappen.huisnummer + "</p>";
    let tabel = "<table>" +
        "<tr>" +
        "<td>Gas:</td>" +
        "<td>" + eigenschappen.gas +"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Water:</td>" +
        "<td>" + eigenschappen.water +"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Electriciteit hoog:</td>" +
        "<td>" + eigenschappen.electriciteit[1] +"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Electriciteit laag:</td>" +
        "<td>" + eigenschappen.electriciteit[0] +"</td>" +
        "</tr>" +
        "</table>";

    let result = title + verslag + tabel + eigenschappen.slimmeMeter;

    main.updateContent("Object", result)

}

function array() {
    let eigenschappen1 = {
        postcode: "1234AB",
        huisnummer: 99,
        datum: "2018-01-01",
        gas: 300,
        water: 30,
        electriciteit: [1001, 1002],
        slimmeMeter: true
    };

    let eigenschappen2 = {
        postcode: "1234AB",
        huisnummer: 45,
        datum: "2018-01-01",
        gas: 1300,
        water: 130,
        electriciteit: [11001, 11002],
        slimmeMeter: false
    };

    let eigenschappen = [];
    eigenschappen.push(eigenschappen1);
    eigenschappen.push(eigenschappen2);

    for (let i = 0; i < eigenschappen.length; i++) {
        console.log(eigenschappen[i]);
    }

    let title = "<h4>Overzicht van de metingen voor postcode 1234AB</h4>";
    let tabel = "<table>" +
        "<tr>" +
        "<td>Postcode</td>" +
        "<td>Huisnummer</td>" +
        "<td>Datum</td>" +
        "<td>Gas</td>" +
        "<td>Water</td>" +
        "<td>Electriciteit</td>" +
        "<td>slimmeMeter</td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + eigenschappen1.postcode +"</td>" +
        "<td>" + eigenschappen1.huisnummer +"</td>" +
        "<td>" + eigenschappen1.datum +"</td>" +
        "<td>" + eigenschappen1.gas +"</td>" +
        "<td>" + eigenschappen1.water +"</td>" +
        "<td>" + eigenschappen1.electriciteit[0] + "," + eigenschappen1.electriciteit[1] +"</td>" +
        "<td>" + eigenschappen1.slimmeMeter +"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + eigenschappen2.postcode +"</td>" +
        "<td>" + eigenschappen2.huisnummer +"</td>" +
        "<td>" + eigenschappen2.datum +"</td>" +
        "<td>" + eigenschappen2.gas +"</td>" +
        "<td>" + eigenschappen2.water +"</td>" +
        "<td>" + eigenschappen2.electriciteit[0] + "," + eigenschappen2.electriciteit[1] +"</td>" +
        "<td>" + eigenschappen2.slimmeMeter +"</td>" +
        "</tr>" +
        "</table>";

    let result = title + tabel;

    main.updateContent("Array", result)
}