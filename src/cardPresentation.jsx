// CardPresentation.js
import "./App.css"; // Asegúrate de importar el archivo CSS si necesitas estilos adicionales

const CardPresentation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-[768px] flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6">
        {/* Aplicar la forma redonda al contenedor de la imagen */}
        <div className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-4">
          <img
            src="https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg"
            alt="a selfie"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">@GrodoNV</h2>
          <p className="text-gray-600 mb-4">
            Soy un desarrollador de software apasionado por la tecnología y el
            aprendizaje continuo.
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => window.open("https://linkedin.com", "_blank")}
              className="px-4 py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-900 transition duration-300"
            >
              LinkedIn
            </button>
            <button
              onClick={() => window.open("https://github.com", "_blank")}
              className="px-4 py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300"
            >
              GitHub
            </button>
            <button
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-md hover:opacity-80 transition duration-300"
            >
              Instagram
            </button>

            <button
              onClick={() => window.open("https://reddit.com", "_blank")}
              className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-800 transition duration-300"
            >
              Reddit
            </button>
            <button
              onClick={() => window.open("https://twitter.com", "_blank")}
              className="px-4 py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300"
            >
              Twitter/X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPresentation;
