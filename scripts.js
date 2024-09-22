const display = document.getElementById('display');
        const buttons = document.querySelectorAll('button');

        let currentNumber = '';
        let previousNumber = '';
        let operation = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;

                switch (value) {
                    case 'C':
                        currentNumber = '';
                        previousNumber = '';
                        operation = '';
                        display.value = '';
                        break;
                    case '⌫':
                        currentNumber = currentNumber.slice(0, -1);
                        display.value = currentNumber;
                        break;
                    case '=':
                        if (operation && previousNumber) {
                            const result = calculate(previousNumber, currentNumber, operation);
                            display.value = result;
                            previousNumber = result;
                            currentNumber = '';
                            operation = '';
                        }
                        break;
                    default:
                        if (value === '+' || value === '-' || value === '×' || value === '÷') {
                            operation = value;
                            previousNumber = currentNumber;
                            currentNumber = '';
                        } else {
                            currentNumber += value;
                        }
                        display.value = currentNumber;
                }
            });
        });

        function calculate(num1, num2, operation) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            switch (operation) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '×':
                    return num1 * num2;
                case '÷':
                    return num1 / num2;
            }
        }
