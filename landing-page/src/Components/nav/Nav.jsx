import { useState } from "react";
import { FiMenu, FiX, FiHome, FiBox, FiInfo, FiPhone } from "react-icons/fi";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <button
        onClick={() => setSidebar(true)}
        className="md:hidden fixed top-5 left-5 z-50 bg-red-600 text-white p-2 rounded-lg"
      >
        <FiMenu size={24} />
      </button>

      {sidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebar(false)}
        ></div>
      )}

      <nav
        onMouseEnter={() => setSidebar(true)}
        onMouseLeave={() => setSidebar(false)}
        className={`
          fixed top-0 left-0
          h-screen
          bg-amber-200
          text-gray-800
          shadow-xl
          p-5
          transition-all duration-300
          ${sidebar ? "w-60" : "w-24"}
          ${sidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex justify-center mb-10">
          <div onClick={() => setSidebar(!sidebar)} className="cursor-pointer">
            {sidebar ? (
              <h2 className="text-3xl font-extrabold">
                Lubri<span className="text-red-500">Max</span>
              </h2>
            ) : (
              <h2
                className="text-2xl font-extrabold text-red-500"
                style={{ writingMode: "vertical-rl" }}
              >
                <span className="text-black">Lubri</span>
                <span className="text-red-500">Max</span>{" "}
              </h2>
            )}
          </div>

          {sidebar && (
            <button
              className="absolute right-4 md:hidden"
              onClick={() => setSidebar(false)}
            >
              <FiX size={24} />
            </button>
          )}
        </div>

        <ul className="space-y-3">
          <li>
            <a
              href="#home"
              className={`flex items-center rounded-lg py-3 transition hover:bg-red-600 hover:text-white ${
                sidebar ? "gap-3 px-4 justify-start" : "justify-center"
              }`}
            >
              <FiHome size={22} />
              {sidebar && <span>Home</span>}
            </a>
          </li>

          <li>
            <a
              href="#products"
              className={`flex items-center rounded-lg py-3 transition hover:bg-red-600 hover:text-white ${
                sidebar ? "gap-3 px-4 justify-start" : "justify-center"
              }`}
            >
              <FiBox size={22} />
              {sidebar && <span>Products</span>}
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`flex items-center rounded-lg py-3 transition hover:bg-red-600 hover:text-white ${
                sidebar ? "gap-3 px-4 justify-start" : "justify-center"
              }`}
            >
              <FiInfo size={22} />
              {sidebar && <span>About</span>}
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`flex items-center rounded-lg py-3 transition hover:bg-red-600 hover:text-white ${
                sidebar ? "gap-3 px-4 justify-start" : "justify-center"
              }`}
            >
              <FiPhone size={22} />
              {sidebar && <span>Contact</span>}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
