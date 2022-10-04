export function CalculatorService() {
  function calculate(
    number1: number,
    number2: number,
    operator: string | null
  ) {
    const operatorInvalid =
      !operator || !['+', '-', '*', '/'].includes(operator);

    const result = {
      '+': number1 + number2,
      '-': number1 - number2,
      '*': number1 * number2,
      '/': number1 / number2,
      operatorInvalid: 0,
    };

    return operatorInvalid
      ? result['operatorInvalid']
      : result[operator as keyof typeof result];
  }

  function concatenateNumber(
    currentNumber: string | null,
    concatNumber: string
  ) {
    // caso contenha apenas '0' ou null, reinicie o valor
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }

    // primeiro digito for '.', concatena '0' antes do ponto
    if (concatNumber === '.' && currentNumber === '') {
      return '0.';
    }

    // caso '.' digitado e já contenha um '.', apenas retorna
    if (concatNumber === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + concatNumber;
  }

  return { calculate, concatenateNumber };
}
