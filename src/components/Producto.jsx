import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
export default function Producto({ producto }) {
  const { handleClickModal, handleSetProducto } = useQuiosco();
  const { nombre, imagen, precio } = producto;

  return (
    <div className="p-3 bg-white border shadow">
      <img
        className="w-full"
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 text-4xl font-black text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-800"
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
