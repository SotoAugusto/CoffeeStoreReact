import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
const QuioscoContext = createContext();
const QuioscoProvider = ({ children }) => {
  // declara una variable de estado para guardar categorias = useState(valor por defecto)
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
    console.log("categoria:", categoria.nombre);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
