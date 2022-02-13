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