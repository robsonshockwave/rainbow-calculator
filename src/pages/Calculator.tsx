import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

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

  function addNumber(number: string) {
    setTxtNumbers((state) => (state = txtNumbers + number));
  }

  function defineOperation(op: string) {
    setTxtNumbers((state) => (state = txtNumbers + op));
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
              onClick={() => {}}
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
              onClick={() => {}}
            />
            <Button
              customButton={customButtonEqual}
              customText={customTextEqual}
              text="="
              onClick={() => {}}
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
