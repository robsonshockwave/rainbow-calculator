export function CalculatorService() {
  function calculate(number1: number, number2: number, operator: string) {
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

  return [calculate];
}
