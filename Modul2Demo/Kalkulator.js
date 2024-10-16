function input(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    } catch (err) {
        document.getElementById('screen').value = "Error";
    }
}

function clearScreen() {
    document.getElementById('screen').value = '';
}