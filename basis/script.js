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
    var postcode = '1234AB';
    var huisnummer = 99;
    var datum = '2018-01-01';
    var gas = 300;
    var water = 30;
    var electriciteit = [1001, 1002];
    var slimmeMeter = true;

    if (slimmeMeter = true) {
        slimmeMeter = ". Dit is gedaan met een slimme meter."
    }

    var title = "<h4>Verslag van de meting</h4>";
    var verslag = "Voor postcode " + postcode + " en huisnummer " + huisnummer + " zijn op " + datum + " metingen gedaan " +
        "en dit zijn de resultaten: gas=" + gas + ", water=" + water + ", electriciteitHoog=" + electriciteit[1] + " en electriciteitLaag=" + electriciteit[0] + slimmeMeter;

    var eigenschappenTitel = "<h4>Nog wat eigenschappen</h4>";
    var tekens = verslag.length;
    var eigenschappen = "Het verslag heeft " + tekens + " tekens."

    var result = title + verslag + eigenschappenTitel + eigenschappen;

    main.updateContent("Variabelen", result)
}