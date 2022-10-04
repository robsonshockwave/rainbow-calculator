import { CalculatorService } from './Calculator.service';

describe('Teste do CalculadoraService', () => {
  const [calculate] = CalculatorService();

  it('deve garantir que 1 + 4 = 5', () => {
    let sum = calculate(1, 4, '+');
    expect(sum).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3', () => {
    let sum = calculate(1, 4, '-');
    expect(sum).toEqual(-3);
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    let sum = calculate(1, 4, '/');
    expect(sum).toEqual(0.25);
  });

  it('deve garantir que 1 * 4 = 4', () => {
    let sum = calculate(1, 4, '*');
    expect(sum).toEqual(4);
  });

  it('deve retornar 0 para operação inválida', () => {
    let sum = calculate(1, 4, '%');
    expect(sum).toEqual(0);
  });
});
