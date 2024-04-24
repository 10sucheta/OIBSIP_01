let display = document.getElementById('display');
let history = document.getElementById('history');
let input = '';

function appendInput(value) {
    input += value;
    display.innerHTML = input;
}

function clearDisplay() {
    input = '';
    display.innerHTML = '0';
}

function clearAll() {
    input = '';
    display.innerHTML = '0';
    history.innerHTML = '';
}

function calculate() {
    try {
        let result;
        if (input.includes('%')) {
            let parts = input.split('%');
            let number = parseFloat(parts[0]);
            result = number * 0.01;
        } else {
            let replacedInput = input.replace(/%/g, '*0.01*');
            result = eval(replacedInput);
        }

        // Display the result
        display.innerHTML = result;

        // Add calculation to history
        history.innerHTML += input + ' = ' + result + '<br>';

        // Store the result in input for further calculations
        input = result.toString();
    } catch (error) {
        display.innerHTML = 'Error';
        input = '';
    }
}
