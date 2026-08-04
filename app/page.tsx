import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, #C27B7B 0%, #C27B7B 48%, #E8C7A8 50%, #F7EFCB 52%, #F7EFCB 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8 md:py-20">

        {/* Encabezado */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-2 text-[11px] sm:text-sm font-semibold tracking-wide text-red-600">

            100% GRATIS · SIN COMPROMISO · RESPUESTA EN MENOS DE 24H

          </span>

          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
  ELIGE CÓMO QUIERES
  <br />
  COMPARAR TU FACTURA
</h1>

          <p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed px-2">

            Deja que nosotros hagamos el trabajo.
            Comparamos tu tarifa actual con más de 30 compañías
            y te decimos cuánto puedes ahorrar cada mes.

          </p>

        </div>

        {/* Tarjetas */}

<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">

  {/* Con factura */}

<div className="relative flex flex-col h-full bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
    <span className="bg-black text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
      CÁLCULO EXACTO
    </span>
  </div>

  <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-red-50 flex items-center justify-center mx-auto text-3xl md:text-5xl">
    📄
  </div>

  <h2 className="mt-6 text-2xl md:text-4xl font-bold text-center text-gray-900">
    CON FACTURA
  </h2>

  <p className="mt-4 text-center text-gray-600 text-base md:text-lg leading-relaxed">
    Si subes tu factura el estudio será mucho más exacto.
  </p>

  <ul className="mt-6 space-y-3 text-gray-700 flex-1">
    <li>✅ Análisis preciso</li>
    <li>✅ Mejores ofertas</li>
    <li>✅ Recomendación personalizada</li>
  </ul>

  <Link href="/con-factura/bienvenida">
    <button className="mt-8 w-full rounded-full bg-red-600 py-3 md:py-4 text-base md:text-lg font-semibold text-white transition hover:bg-red-700">
      Subir mi factura →
    </button>
  </Link>

</div>

{/* Sin factura */}

<div className="flex flex-col h-full bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-red-50 flex items-center justify-center mx-auto text-3xl md:text-5xl">
    📊
  </div>

  <h2 className="mt-6 text-3xl md:text-4xl font-bold text-center text-gray-900">
    SIN FACTURA
  </h2>

  <p className="mt-4 text-center text-gray-600 text-base md:text-lg leading-relaxed">
    Responde unas preguntas y calcularemos cuánto puedes ahorrar.
  </p>

  <ul className="mt-6 space-y-3 text-gray-700 flex-1">
    <li>✅ Proceso rápido</li>
    <li>✅ Sin necesidad de factura</li>
    <li>✅ Estimación personalizada</li>
  </ul>

    <Link href="/sin-factura">
    <button className="mt-8 w-full rounded-full bg-red-600 py-3 md:py-4 text-base md:text-lg font-semibold text-white transition hover:bg-red-700">
      Responder preguntas →
    </button>
  </Link>

</div>

</div>

{/* Beneficios */}

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 text-center shadow-md">

            <div className="text-red-600 text-4xl md:text-5xl mb-4">
  ✔
</div>

            <h3 className="text-xl font-bold text-gray-900">
              100% Gratuito
            </h3>

            <p className="mt-2 text-gray-600">
              Sin coste ni compromiso.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 text-center shadow-md">

            <div className="text-red-600 text-4xl md:text-5xl mb-4">
              ⏰
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Respuesta en menos de 24h
            </h3>

            <p className="mt-2 text-gray-600">
              Nuestro equipo estudiará tu caso y te contactará rápidamente.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 text-center shadow-md">

            <div className="text-red-600 text-4xl md:text-5xl mb-4">
              🛡️
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Datos protegidos
            </h3>

            <p className="mt-2 text-gray-600">
              Cumplimos con el RGPD y tratamos tu información de forma segura.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}