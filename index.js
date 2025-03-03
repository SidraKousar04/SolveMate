let newCalculation = true;
        
function appendValue(value) {
    let screen = document.getElementById('screen');
    if (newCalculation) {
        screen.value = '';
        newCalculation = false;
    }
    screen.value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
    newCalculation = true;
}

function calculateResult() {
    try {
        let screen = document.getElementById('screen');
        let result = eval(screen.value);
        screen.value = parseFloat(result.toPrecision(12)); // Fix floating point precision
        newCalculation = true;
    } catch {
        document.getElementById('screen').value = 'Error';
        newCalculation = true;
    }
}

function calculateEMC2() {
    let mass = prompt("Enter mass (kg):");
    let c = 299792458; // Speed of light in m/s
    if (mass) {
        let energy = mass * c * c;
        document.getElementById('screen').value = `E = ${energy.toExponential(5)} J`;
    }
}

function calculateQuadratic() {
    let a = prompt("Enter coefficient a:");
    let b = prompt("Enter coefficient b:");
    let c = prompt("Enter coefficient c:");
    if (a && b && c) {
        let discriminant = b * b - 4 * a * c;
        if (discriminant >= 0) {
            let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            document.getElementById('screen').value = `Roots: ${root1.toFixed(5)}, ${root2.toFixed(5)}`;
        } else {
            document.getElementById('screen').value = "No Real Roots";
        }
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d|[\+\-\/\*\.]/.test(key)) {
        event.preventDefault();
        appendValue(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Escape') {
        event.preventDefault();
        clearScreen();
    } else if (key === 'Backspace') {
        event.preventDefault();
        let screen = document.getElementById('screen');
        screen.value = screen.value.slice(0, -1);
    }
});