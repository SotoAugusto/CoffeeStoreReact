import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p className="">Para hacer un pedido debes iniciar sesión</p>

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
              placeholder="Ingresa tu Nombre"
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
              placeholder="Ingresa tu Email"
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
              placeholder="Ingresa tu Password"
              className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
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
