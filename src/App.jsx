import { useState } from "react";
import Dado from "./components/Dado";
import Aurora from "./components/Aurora";
import Particulas from "./components/Particulas";

const App = () => {
  const [rolando, setRolando] = useState(false);
  const [resultado, setResultado] = useState(null);

  const rolarDado = () => {
    if (rolando) return;

    setRolando(true);
    setResultado(null);

    setTimeout(() => {
      const numero = Math.floor(Math.random() * 20) + 1;
      setResultado(numero);
      setRolando(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 lg:gap-8">
      <Aurora />
      <Particulas />
      <h1 className="text-purple-600 text-3xl lg:text-5xl font-pixelify tracking-wide">Sort-a-Dice</h1>

      <div onClick={rolarDado}>
        <Dado rolando={rolando} />
      </div>

      <p className="text-purple-400 text-lg font-bold font-pixelify">
        {rolando ? "Rolando..." : "Clique no dado para rolar"}
      </p>

      {resultado && (
        <div className="text-white text-center">
          <p className="text-5xl lg:text-8xl font-bold font-pixelify" style={{ color: resultado === 20 ? "#ffd700" : resultado === 1 ? "#ff4444" : "#80ff80", textShadow: resultado === 20 ? "0 0 15px #ffd700" : resultado === 1 ? "0 0 15px #ff4444" : "0 0 15px #80ff80"}}>{resultado}</p>
          <p className="text-purple-300 text-xl mt-2 font-pixelify">Resultado</p>
        </div>
      )}
    </div>
  );
};

export default App;
