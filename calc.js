let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function erase() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}

function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    document.getElementById('display').value = currentInput;
}

function calculateSquareRoot() {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    document.getElementById('display').value = currentInput;
}

function calculateExponent() {
    currentInput += '^';
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        if (currentInput.includes('^')) {
            const parts = currentInput.split('^');
            if (parts.length === 2) {
                const base = parseFloat(parts[0]);
                const exponent = parseFloat(parts[1]);
                const result = Math.pow(base, exponent);
                document.getElementById('display').value = result;
                currentInput = result.toString();
            } else {
                document.getElementById('display').value = 'Error';
                currentInput = '';
            }
        } else {
            const result = eval(currentInput);
            document.getElementById('display').value = result;
            currentInput = result.toString();
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
