// Calculator state
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let resetScreen = false;
let isScientificMode = false;

// DOM elements
const currentOperandElement = document.getElementById('current-operand');
const previousOperandElement = document.getElementById('previous-operand');
const scientificButtons = document.getElementById('scientific-buttons');
const historyPanel = document.getElementById('history-panel');
const historyItems = document.getElementById('history-items');
const themeToggle = document.getElementById('theme-toggle');

// Initialize calculator
function init() {
    updateDisplay();
    loadHistory();
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('calculator-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.checked = true;
    }
    
    // Check for saved mode preference
    const savedMode = localStorage.getItem('calculator-mode');
    if (savedMode === 'scientific') {
        toggleScientificMode();
    }
}

// Append number to current operand
function appendNumber(number) {
    if (currentOperand === '0' || resetScreen) {
        currentOperand = '';
        resetScreen = false;
    }
    
    // Limit the length of the number to prevent overflow
    if (currentOperand.length >= 15) return;
    
    currentOperand += number.toString();
    updateDisplay();
}

// Append decimal point
function appendDecimal() {
    if (resetScreen) {
        currentOperand = '0.';
        resetScreen = false;
        updateDisplay();
        return;
    }
    
    if (currentOperand.includes('.')) return;
    
    if (currentOperand === '') {
        currentOperand = '0.';
    } else {
        currentOperand += '.';
    }
    
    updateDisplay();
}

// Choose operation
function chooseOperation(op) {
    if (currentOperand === '') return;
    
    if (previousOperand !== '') {
        compute();
    }
    
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

// Compute the result
function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    
    // Save to history
    addToHistory(previousOperand + ' ' + operation + ' ' + currentOperand, computation);
    
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    resetScreen = true;
    updateDisplay();
}

// Calculate scientific functions
function calculateFunction(func) {
    if (func === 'factorial(') {
        const num = parseFloat(currentOperand);
        if (isNaN(num)) return;
        
        if (num < 0 || !Number.isInteger(num)) {
            currentOperand = 'Error';
            updateDisplay();
            return;
        }
        
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        
        addToHistory(currentOperand + '!', result);
        currentOperand = result.toString();
        resetScreen = true;
        updateDisplay();
        return;
    }
    
    if (func === '(' || func === ')') {
        currentOperand += func;
        updateDisplay();
        return;
    }
    
    try {
        let expression;
        if (func.endsWith('(')) {
            expression = func + currentOperand + ')';
        } else {
            expression = func;
        }
        
        const result = eval(expression);
        addToHistory(expression, result);
        currentOperand = result.toString();
        resetScreen = true;
        updateDisplay();
    } catch (error) {
        currentOperand = 'Error';
        updateDisplay();
    }
}

// Clear all
function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Delete last character
function deleteLastChar() {
    if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith('-'))) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
    updateDisplay();
}

// Update display
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    
    if (operation != null) {
        previousOperandElement.textContent = `${previousOperand} ${operation}`;
    } else {
        previousOperandElement.textContent = previousOperand;
    }
}

// Toggle scientific mode
function toggleScientificMode() {
    isScientificMode = !isScientificMode;
    scientificButtons.classList.toggle('active');
    
    const modeToggleBtn = document.querySelector('.mode-toggle');
    if (isScientificMode) {
        modeToggleBtn.textContent = 'Standard Mode';
        localStorage.setItem('calculator-mode', 'scientific');
    } else {
        modeToggleBtn.textContent = 'Scientific Mode';
        localStorage.setItem('calculator-mode', 'standard');
    }
}

// History functions
function addToHistory(expression, result) {
    const history = getHistory();
    history.unshift({ expression, result });
    localStorage.setItem('calculator-history', JSON.stringify(history));
    loadHistory();
}

function getHistory() {
    const historyJSON = localStorage.getItem('calculator-history');
    return historyJSON ? JSON.parse(historyJSON) : [];
}

function loadHistory() {
    const history = getHistory();
    historyItems.innerHTML = '';
    
    if (history.length === 0) {
        historyItems.innerHTML = '<div style="padding: 20px; text-align: center; color: rgba(var(--text-color), 0.5)">No history yet</div>';
        return;
    }
    
    history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-expression">${item.expression}</div>
            <div class="history-result">= ${item.result}</div>
        `;
        historyItem.addEventListener('click', () => {
            currentOperand = item.result.toString();
            updateDisplay();
            toggleHistory();
        });
        historyItems.appendChild(historyItem);
    });
}

function clearHistory() {
    localStorage.removeItem('calculator-history');
    loadHistory();
}

function toggleHistory() {
    historyPanel.classList.toggle('active');
}

// Theme toggle
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('light-theme');
        localStorage.setItem('calculator-theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('calculator-theme', 'dark');
    }
});

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(parseInt(event.key));
    } else if (event.key === '.') {
        appendDecimal();
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        chooseOperation(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        compute();
    } else if (event.key === 'Escape') {
        clearAll();
    } else if (event.key === 'Backspace') {
        deleteLastChar();
    } else if (event.key === 'h' || event.key === 'H') {
        toggleHistory();
    } else if (event.key === 'm' || event.key === 'M') {
        toggleScientificMode();
    }
});

// Initialize calculator
init();