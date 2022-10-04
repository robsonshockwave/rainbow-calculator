export function CalculatorService() {
  function calculate(number1: number, number2: number, operator: string) {
    const result = {
      '+': number1 + number2,
      '-': number1 - number2,
      '*': number1 * number2,
      '/': number1 / number2,
    };

    return result[operator as keyof typeof result];
  }

  return [calculate];
}
