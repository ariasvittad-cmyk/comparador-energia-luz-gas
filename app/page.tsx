import Link from "next/link";
export default function Home() {
  return (
  <main
  className="min-h-screen flex items-center justify-center px-6 py-16"
  style={{
    background:
      "linear-gradient(to bottom, #C27B7B 0%, #C27B7B 48%, #E8C7A8 50%, #F7EFCB 52%, #F7EFCB 100%)",
  }}
>
      <div className="max-w-6xl w-full">

        {/* Encabezado */}
        <div className="text-center mb-14">

          <span className="bg-white/60 text-red-600 px-5 py-2 rounded-full text-sm font-semibold">
            100% GRATIS · SIN COMPROMISO · RESPUESTA EN MENOS DE 24H
          </span>

          <h1 className="text-5xl font-extrabold text-gray-900 mt-6 mb-8">
            ELIGE CÓMO QUIERES
            <br />
            COMPARAR TU FACTURA
          </h1>

          <p className="/60 text-black text-xl max-w-3xl mx-auto">
            Deja que nosotros hagamos el trabajo. Comparamos tu tarifa actual con más de 30 compañías y te decimos cuánto puedes ahorrar cada mes.
          </p>

        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Con factura */}

          <div className="relative bg-white rounded-3xl shadow-xl p-10 border hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
  <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold">
    CÁLCULO EXACTO
  </span>
</div>
            

            <div className="w-24 h-24 rounded-3xl bg-red-50 flex items-center justify-center mx-auto text-5xl">
                📄
            </div>

            <h2 className="text-4xl font-bold text-center mt-8">
              CON FACTURA
            </h2>

            <p className="text-center text-gray-600 mt-5 text-lg">
              Si subes tu factura el estudio será mucho más exacto.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">

              <li>✅ Análisis preciso</li>
              <li>✅ Mejores ofertas</li>
              <li>✅ Recomendación personalizada</li>

            </ul>

            <Link href="/con-factura/bienvenida">
  <button
    className="w-full mt-10 bg-red-600 hover:bg-red-700 text-white py-4 rounded-full text-lg font-semibold transition"
  >
    Subir mi factura →
  </button>
</Link>

          </div>

          {/* Sin factura */}

          <div className="bg-white rounded-3xl shadow-xl p-10 border hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="w-24 h-24 rounded-3xl bg-red-50 flex items-center justify-center mx-auto text-5xl">
                📊
            </div>

            <h2 className="text-4xl font-bold text-center mt-8">
              SIN FACTURA
            </h2>

            <p className="text-center text-gray-600 mt-5 text-lg">
              Responde unas preguntas y calcularemos cuánto puedes ahorrar.
            </p>

            <ul className="mt-2 space-y-3 text-gray-700">

              <li>✅ Proceso rápido</li>
              <li>✅ Sin necesidad de factura</li>
              <li>✅ Estimación personalizada</li>

            </ul>

            <Link href="/sin-factura">
  <button
    className="w-full mt-10 bg-red-600 hover:bg-red-700 text-white py-4 rounded-full text-lg font-semibold transition"
  >
    Responder preguntas →
  </button>
</Link>

          </div>

        </div>

        {/* Beneficios */}

        <div className="grid grid-cols-3 gap-10 mt-16 text-center">

          <div>
            <div className="text-red-600 text-4xl">✔</div>
            <h3 className="font-bold text-xl mt-2">100% Gratuito</h3>
            <p className="text-gray-500">Sin coste ni compromiso</p>
          </div>

          <div>
            <div className="text-red-600 text-4xl">⏰</div>
            <h3 className="font-bold text-xl mt-2">Respuesta en menos de 24h</h3>
            <p className="text-gray-500">Nuestro equipo te contactará</p>
          </div>

          <div>
            <div className="text-red-600 text-4xl">🛡️</div>
            <h3 className="font-bold text-xl mt-2">Datos protegidos</h3>
            <p className="text-gray-500">Cumplimos con el RGPD</p>
          </div>

        </div>

      </div>
    </main>
  );
}