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
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <Aurora />
      <Particulas />
      <h1 className="text-white text-5xl font-cinzel tracking-wide">Icosahedron</h1>

      <div onClick={rolarDado}>
        <Dado rolando={rolando} />
      </div>

      <p className="text-purple-300 text-lg">
        {rolando ? "Rolando..." : "Clique no dado para rolar"}
      </p>

      {resultado && (
        <div className="text-white text-center">
          <p className="text-8xl font-bold">{resultado}</p>
          <p className="text-purple-300 text-xl mt-2">resultado</p>
        </div>
      )}
    </div>
  );
};

export default App;
