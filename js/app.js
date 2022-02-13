function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStrig = pin + '';
    if (pinStrig.length == 4) {
        return pin;
    }
    else {
        // console.log('please again', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('input-pin').value = pin;
    console.log(pin);

}

document.getElementById('number-value').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if (isNaN(number)) {
        if (number == 'C')
            return displayNumber.value = '';
    }
    else {
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + number;
        displayNumber.value = newNumber;

    }

})

function submitPin() {
    const generatePin = document.getElementById('input-pin').value;
    const inputPin = document.getElementById('display-number').value;
    if (generatePin == inputPin) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}
