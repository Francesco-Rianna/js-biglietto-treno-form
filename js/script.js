

// Al click del bottone dobbiamo leggere i km e l'età dell'utente 

const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    const userName = document.querySelector('#user-name').value;
    const userLastName = document.querySelector('#user-surname').value;
    const userKm = parseInt(document.querySelector('#user-km').value);
    const userAge = parseInt(document.querySelector('#user-age').value);

    // Calcolo costo viaggio
    const travelPrice = (userKm * 0.21)

    // Effettuo calcolo in caso di sconti

    let discount = travelPrice
    if (userAge < 18) {
        discount = travelPrice - travelPrice * 0.20
    } else if (userAge > 65) {
        discount = travelPrice - travelPrice * 0.40


    }

    const fullPrice = 'Full Price'

    let offer = fullPrice
    if (userAge < 18) {
        offer = '20%'
    } else if (userAge > 65) {
        offer = '40%'


    }


    let discountFixed = discount.toFixed(2)

    // numero posto

    const placeNumber = Math.floor(Math.random() * 10) + 1;

    // numero carrozza

    const codeNumber = Math.floor(Math.random() * 1000) + 1;

    // output per il biglietto


    document.querySelector('#name').innerHTML = userName;
    document.querySelector('#last-name').innerHTML = userLastName;
    document.querySelector('#discount').innerHTML = offer
    document.querySelector('#place').innerHTML = placeNumber
    document.querySelector('#code').innerHTML = codeNumber
    document.querySelector('#price').innerHTML = discountFixed

    // bottone per annullare








})

const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener('click', function () {
    document.querySelector('#user-name').value = "";
    document.querySelector('#user-surname').value = "";
    document.querySelector('#user-km').value = "";
    document.querySelector('#user-age').value = "";


})









