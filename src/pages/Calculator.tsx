import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { CalculatorService } from './Calculator.service';

export default function Calculator() {
  const customButtonClear = 'bg-red-500 rounded-sm border-purple-700 border-2';
  const customTextClear = 'text-white font-extrabold';

  const customButtonNumber = 'bg-black rounded-sm border-yellow-600 border-2';
  const customTextNumber =
    'text-transparent bg-gradient-rainbow bg-clip-text text-lg font-extrabold';

  const customButtonOperator =
    'bg-yellow-500 rounded-sm border-blue-800 border-2';
  const customTextOperator = 'font-extrabold';

  const customButtonEqual = 'bg-green-500 rounded-sm border-pink-700 border-2';
  const customTextEqual = 'font-extrabold text-purple-700';

  const [txtNumbers, setTxtNumbers] = useState('0');

  const { calculate, concatenateNumber } = CalculatorService();
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null as string | null);
  const [operation, setOperation] = useState(null as string | null);

  function addNumber(number: string) {
    let result: string;

    if (operation === null) {
      result = concatenateNumber(number1, number);
      setNumber1((state) => (state = result));
    } else {
      result = concatenateNumber(number2, number);
      setNumber2((state) => (state = result));
    }

    setTxtNumbers((state) => (state = result));
  }

  function defineOperation(op: string) {
    // apenas define a operação caso ela não exista
    if (operation === null) {
      setOperation((state) => (state = op));
      return;
    }

    // caso a operaçãp estiver definida e número 2 selecionado, realiza o cálculo da operação
    if (number2 !== null) {
      const result = calculate(
        parseFloat(number1),
        parseFloat(number2),
        operation
      );
      setOperation((state) => (state = op));
      setNumber1((state) => (state = result.toString()));
      setNumber2(null);
      setTxtNumbers((state) => (state = result.toString()));
    }
  }

  function calculateAction() {
    if (number2 === null) {
      return;
    }

    const result = calculate(
      parseFloat(number1),
      parseFloat(number2),
      operation
    );
    setTxtNumbers((state) => (state = result.toString()));
  }

  function clear() {
    setTxtNumbers('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Header />

      <div className="w-[495px] bg-black h-[245px] mt-3 rounded-sm flex items-center justify-center">
        <div className="w-[490px] bg-gradient-rainbow h-[240px] rounded-sm flex items-center justify-center">
          <div className="w-[485px] bg-black h-[235px] rounded-sm grid grid-rows-5 grid-cols-4 gap-1 p-1">
            <Button
              customButton={customButtonClear}
              customText={customTextClear}
              text="AC"
              onClick={clear}
            />
            <form className="col-start-2 col-end-5">
              <input
                name="txtNumbers"
                type="text"
                className="bg-gray-100 w-full h-full rounded-sm border-orange-500 border-2 font-extrabold text-purple-800 text-right pr-2 text-xl"
                readOnly
                value={txtNumbers}
              />
            </form>

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="7"
              onClick={() => {
                addNumber('7');
              }}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="8"
              onClick={() => {
                addNumber('8');
              }}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="9"
              onClick={() => {
                addNumber('9');
              }}
            />
            <Button
              customButton={customButtonOperator}
              customText={customTextOperator}
              text="/"
              onClick={() => {
                defineOperation('/');
              }}
            />

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="4"
              onClick={() => {
                addNumber('4');
              }}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="5"
              onClick={() => {
                addNumber('5');
              }}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="6"
              onClick={() => {
                addNumber('6');
              }}
            />
            <Button
              customButton={customButtonOperator}
              customText={customTextOperator}
              text="*"
              onClick={() => {
                defineOperation('*');
              }}
            />

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="1"
              onClick={() => {
                addNumber('1');
              }}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="2"
              onClick={() => {
                addNumber('2');
              }}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="3"
              onClick={() => {
                addNumber('3');
              }}
            />
            <Button
              customButton={customButtonOperator}
              customText={customTextOperator}
              text="-"
              onClick={() => {
                defineOperation('-');
              }}
            />

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="0"
              onClick={() => {
                addNumber('0');
              }}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="."
              onClick={() => {
                addNumber('.');
              }}
            />
            <Button
              customButton={customButtonEqual}
              customText={customTextEqual}
              text="="
              onClick={calculateAction}
            />
            <Button
              customButton={customButtonOperator}
              customText={customTextOperator}
              text="+"
              onClick={() => {
                defineOperation('+');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
