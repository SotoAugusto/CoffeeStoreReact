import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function ModalProducto() {
  //   const { handleClickModal } = useQuiosco();

  const { producto, handleClickModal } = useQuiosco();
  console.log(producto);
  return (
    <div className="gap-10 md:flex">
      <div className="md:w-1/3">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`Imagen ${producto.nombre}`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        <h1 className="mt-5 text-3xl font-bold"> {producto.nombre}</h1>
        <p className="mt-5 text-5xl font-black text-amber-500">
          {formatearDinero(producto.precio)}
        </p>

        <button
          type="button"
          className="px-5 py-2 mt-5 font-bold text-white uppercase bg-indigo-600 rounded hover:bg-indigo-800"
        >
          Añadir al pedido
        </button>
      </div>
    </div>
  );
}
