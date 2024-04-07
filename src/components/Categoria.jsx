import useQuiosco from "../hooks/useQuiosco";
// recibo de sidebar
export default function Categoria({ categoria }) {
  const { handleClickCategoria, categoriaActual } = useQuiosco();
  // console.log(props.categoria);
  // console.log(categoria);
  //   destruction of categoria
  const { icono, id, nombre } = categoria;

  const resaltarCategoriaActual = () =>
    categoriaActual.id === id ? "bg-amber-400" : "bg-white";
  return (
    <div
      className={`${resaltarCategoriaActual()} flex items-center w-full gap-4 p-3 border cursor-pointer hover:bg-amber-400`}
    >
      <img
        src={`/img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-12"
      />

      <button
        className="text-lg font-bold truncate cursor-pointer"
        type="button"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
}
