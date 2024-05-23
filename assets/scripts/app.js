const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  const enteredNumber = parseInt(usrInput.value);
  if (enteredNumber <= 0 || enteredNumber > 1000) {
    alert('Введите число от 1 до 1000');
    usrInput.value = '';
    return 0;
  }
  if (typeof(enteredNumber) != 'number' || isNaN(enteredNumber)) {
    alert('Введите целое число от 1 до 1000, включительно');
    usrInput.value = '';
    return 0;
  }
  return enteredNumber;
}

// Generates and writes calculation log
function createAndWriteOutput(mathOperator, resultBeforeCalc, enteredNumber) {
  const calcDescription = `${resultBeforeCalc} ${mathOperator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
    type: typeof(operationNumber)
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput(); // возвращаем цифру, введеную пользователем в формате int
  const resultBeforeCalc = currentResult;
  let mathOperator;
  switch (calculationType) {
    case 'ADD':
      currentResult += enteredNumber;
      mathOperator = '+';
      break;
    case 'SUBTRACT':
      currentResult -= enteredNumber;
      mathOperator = '-';
      break;
    case 'MULTIPLY':
      currentResult *= enteredNumber;
      mathOperator = '*';
      break;
    case 'DIVIDE':
      currentResult /= enteredNumber;
      mathOperator = '/';
      break;
    default:
      return 'False math operator';
  }
  createAndWriteOutput(mathOperator, resultBeforeCalc, enteredNumber);
  writeToLog(calculationType, resultBeforeCalc, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculateResult.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculateResult.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculateResult.bind(this, 'DIVIDE'));
