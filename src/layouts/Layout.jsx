//type rfc on keyboard for snippet
// Outlet used to render child routes defined within the parent route component.
// dependencies
import { Outlet } from "react-router-dom";
import Modal from "react-modal";
// components
import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
// hooks
import useQuiosco from "../hooks/useQuiosco";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Layout() {
  const { modal, handleClickModal } = useQuiosco();
  console.log(modal);
  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1 h-screen p-3 overflow-y-scroll bg-gray-100">
          <Outlet />
        </main>
        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <p>Desde modal</p>
        <button onClick={handleClickModal}>Cerrar</button>
      </Modal>
    </>
  );
}
