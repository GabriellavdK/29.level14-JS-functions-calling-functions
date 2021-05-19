// Opdracht Hey kiddo
/* const checkAdult = function (age) {
    ageCheck = age >= 18;
    return ageCheck;
};

const response = function (age) {
    checkAdult(age);
    if (ageCheck == true) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(response(18)); */

// Opdracht 1 VAT calculations

// Berekent het bedrag aan VAT dat bij de basisprijs word opgeteld. 
/* const vatAmount = function (basePrice, vatPercentage) {
    let input;
    if (vatPercentage === 21) {
        input = (basePrice * 0,21)
    } else if (vatPercentage === 9) {
        input = (basePrice * 0,09)
    } else if (vatPercentage === 0) {
        input = 0
    } else {
        input = "Not valid"
    }
    return input;
};

// Berekent de prijs inclusief VAT
const priceInclVat = function (basePrice, vatPercentage) {
    const input = vatAmount(basePrice, vatPercentage);
    if (vatPercentage === 0 || vatPercentage === 9 || vatPercentage === 21) {
        return basePrice + input
    } else {
        return "This is not a valid VAT percentage in the Netherlands, please check your input and try again."
    }
};

console.log(priceInclVat(100, 21)); */

//Opdracht 2 VAT calculations

const vatAmount = function (priceInclVat, vatPercentage) {
    let input;
    if (vatPercentage === 21) { 
        input = priceInclVat - priceInclVat / 1.21
    } else if (vatPercentage === 9) {
        input = priceInclVat - priceInclVat / 1.09
    } else if (vatPercentage === 0) {
        input = 0
    } else {
        input = "Not valid"
    }
    return Math.round(input);
};

const priceExclVat = function (priceInclVat, vatPercentage) {
    const AmountOfVat = vatAmount(priceInclVat, vatPercentage);
    if (vatPercentage === 21 || vatPercentage === 9 || vatPercentage === 0 ) {
        let baseprice = priceInclVat - AmountOfVat;
        let output = [baseprice, AmountOfVat];
        return output;
    } else {
        return "This is not a valid VAT percentage in the Netherlands, please check your input and try again."
    }
};

console.log(priceExclVat(109, 21));