// import { categorias } from "../data/categorias";

import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

// () en react le dice que tiene que mostrar informacion
// { } ejecuta código de javascript

export default function Sidebar() {
  const { categorias } = useQuiosco();
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="Logo" className="w-40" />
      </div>
      <div className="mt-10">
        {categorias.map((categoria) => (
          <Categoria
            key={categoria.id}
            // prop - valor
            // le mando como valor un objeto de js
            categoria={categoria}
          />
        ))}
      </div>

      <div className="px-5 my-5">
        <button
          type="button"
          className="w-full p-3 font-bold text-center text-white truncate bg-red-500"
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
}
