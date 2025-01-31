const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.ops');
const result = document.querySelector('.main-result');
let hash = document.querySelector('.hash');

numbers.addEventListener('click', (event) => {
    const content = event.target.textContent;
    if (!isNaN(content) || content === '.') {
        result.textContent += content;
    }
});

operators.addEventListener('click', (event) => {
    const operator = event.target.textContent;
    if (['+', '-', '*', '/'].includes(operator)) {
        hash.style.display = 'block';
        hash.textContent = result.textContent;
        result.textContent += operator;
    }
});

function deleteNum() {
    result.textContent = result.textContent.slice(0, -1);
}

function clearAll() {
    hash.textContent = '';
    hash.style.display = 'none';
    result.textContent = '';
}

function getResult() {
    try {
        hash.textContent = result.textContent;
        hash.style.display = 'block';
        result.textContent = eval(result.textContent) || '0';
    } catch (error) {
        result.textContent = 'Error';
    }
}
