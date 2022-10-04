import { CalculatorService } from './Calculator.service';

describe('Teste do CalculadoraService', () => {
  const [calculate] = CalculatorService();

  it('deve garantir que 1 + 4 = 5', () => {
    let sum = calculate(1, 4, '+');
    expect(sum).toEqual(5);
  });
});
