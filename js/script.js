

// Al click del bottone dobbiamo leggere i km e l'età dell'utente 

const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {


    const userKm = parseInt(document.querySelector('#user-km').value);
    const userAge = parseInt(document.querySelector('#user-age').value);


    // Calcolo costo viaggio
    const travelPrice = (userKm * 0.21)
    console.log(travelPrice)

    // Effettuo calcolo in caso di sconti

    let discount = travelPrice
    if (userAge < 18) {
        discount = travelPrice - travelPrice * 0.20
    } else if (userAge > 65) {
        discount = travelPrice - travelPrice * 0.40


    }
    console.log(discount)

    let discountFixed = discount.toFixed(2)
    console.log(discountFixed)
})


