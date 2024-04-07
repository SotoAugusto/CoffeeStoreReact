import { Link } from "react-router-dom";
export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p className=""> Crea tu cuenta llenando el formulario</p>

      <div className="px-5 py-10 mt-10 bg-white shadow-md roundend-md">
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block font-bold text-gray-700 uppercase"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nombre de registro"
              className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block font-bold text-gray-700 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email de registro"
              className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block font-bold text-gray-700 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password de registro"
              className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password_confirmation"
              className="block font-bold text-gray-700 uppercase"
            >
              Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              placeholder="Repetir Password"
              className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            />
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="w-full p-3 font-bold text-white uppercase transition-colors bg-indigo-600 cursor-pointer hover:bg-indigo-700"
          />
        </form>
      </div>
      <nav className="lg:flex lg:justify-between">
        <Link className="block my-5 text-center text-gray-500" to="/auth/login">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block my-5 text-center text-gray-500"
          to="/auth/registro"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
}
