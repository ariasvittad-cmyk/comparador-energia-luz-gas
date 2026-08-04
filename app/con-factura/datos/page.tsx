"use client";

export default function DatosPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl">

        <div className="p-10">

          <div className="text-center text-4xl mb-4">
            👤
          </div>

          <h2 className="text-red-600 text-3xl font-bold text-center">
            ¿Cómo te llamas?
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Escribe tu nombre completo
          </p>

          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full border rounded-lg p-4 text-lg focus:outline-none focus:border-red-500"
          />

          <div className="mt-8 border-t">

            <div className="flex">

              <button
                className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-4 font-semibold border border-black"
              >
                ← ATRÁS
              </button>

              <button
                className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-4 font-semibold border border-black"
              >
                SIGUIENTE →
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}