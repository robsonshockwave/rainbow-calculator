import './styles/main.css';

export function App() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block">
        <h1 className="relative text-transparent bg-gradient-rainbow bg-clip-text font-extrabold">
          Calculadora
        </h1>
      </div>
      <div className="bg-yellow-400 -mt-1 -ml-[72px] hover:ml-1 cursor-pointer">
        <h1 className="font-extrabold pt-1 pb-1 pr-2 pl-[5px] bg-gradient-rainbow border-2 border-black">
          Rainbow
        </h1>
      </div>
    </div>
  );
}
