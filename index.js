#!/usr/bin/env node

// ----- CALL PACKAGES - START -----
const countryList = require('country-list');
const axios = require('axios');
// ----- CALL PACKAGES - END -----

// ----- START -----

// On crée une table avec les arguments
const myArgs = process.argv.slice(2);

// On teste la longueur de l'argument
if (myArgs.length != 2 && myArgs.length != 1) {
    console.log("Synthax error !");
    return;
}

// On récupère l'argument puis on récupère le code du pays à deux lettres
let country = myArgs[0];
let code = countryList.getCode(country);

// On récupère l'année actuelle
let year = new Date().getFullYear();

// On teste la longueur de l'argument, si 2, on récupère l'argument de l'année
if (myArgs.length == 2) {
    year = Number(myArgs[1]);
}

// On crée une requête au date nager API
axios.get('https://date.nager.at/api/v2/publicholidays/' + year + '/' + code)
    .then(function (response) {
        // Handle réussi
        // On fait une boucle où on entre le nom et l'année
        response.data.forEach(holiday => {
            console.log(holiday.name + ' - ' + holiday.date);
        })
    }).catch(function (error) {
        // Handle raté
        // Si une erreur se produit..
        console.log("Vous avez entré soit un mauvais pays soit une année invalide");
})

// ----- END -----
