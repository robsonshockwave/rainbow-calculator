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

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Header />

      <div className="w-[500px] bg-black h-[250px] mt-3 rounded-sm flex items-center justify-center">
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
                className="bg-gray-100 w-full h-full rounded-sm border-orange-500 border-2"
                readOnly
              />
            </form>

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="7"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="8"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="9"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonOperator}
              customText={customTextOperator}
              text="/"
              onClick={() => {}}
            />

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="4"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="5"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="6"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonOperator}
              customText={customTextOperator}
              text="*"
              onClick={() => {}}
            />

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="1"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="2"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="3"
              onClick={() => {}}
            />
            <Button
              customButton={customButtonOperator}
              customText={customTextOperator}
              text="-"
              onClick={() => {}}
            />

            <Button
              customButton={customButtonNumber}
              customText={customTextNumber}
              text="0"
              onClick={() => {}}
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
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
