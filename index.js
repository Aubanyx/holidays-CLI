#!/usr/bin/env node

// ----- CALL PACKAGES - START -----
const countryList = require('country-list');
const axios = require('axios');
const chalk = require('chalk');
const ora = require('ora');
const figlet = require('figlet');
// ----- CALL PACKAGES - END -----


// ----- START -----

// On crée une table avec les arguments
const myArgs = process.argv.slice(2);


// On utilise le package ora pour le loading ou dans ce cas pour le succeed ou le fail
const oraSymbol = ora();


// On teste la longueur de l'argument
if (myArgs.length != 2 && myArgs.length != 1) {
    oraSymbol.fail(chalk.red("Synthax error !"));
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


// On utilise figlet pour le titre
figlet.text(myArgs[0] + '\'s holidays', function(err, data) {
    if (err) {
        oraSymbol.fail(chalk.red('Something went wrong...'));
        console.dir(err);
        return;
    }
    console.log(data);
    console.log(chalk.blue('-------------------------------------'));
});


// On crée une requête au date nager API
axios.get('https://date.nager.at/api/v2/publicholidays/' + year + '/' + code)
    .then(function (response) {
        // Handle réussi
        // On fait une boucle où on entre le nom et l'année
        response.data.forEach(holiday => {
            oraSymbol.succeed(chalk.yellow(holiday.name) + chalk.cyan(' - ') + chalk.magenta(holiday.date));
        })
        console.log(chalk.blue('-------------------------------------'));
    }).catch(function (error) {
        // Handle raté
        // Si une erreur se produit..
        oraSymbol.fail(chalk.red("Vous avez entré soit un mauvais pays soit une année invalide"));
});

// ----- END -----
