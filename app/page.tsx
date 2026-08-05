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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-6 pb-10 md:py-20">

        {/* Encabezado */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-2 text-[11px] sm:text-sm font-semibold tracking-wide text-red-600">

            100% GRATIS · SIN COMPROMISO · RESPUESTA EN MENOS DE 24H

          </span>

          <h1 className="mt-5 text-[25px] sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
  ELIGE CÓMO QUIERES
  <br />
  COMPARAR TU FACTURA
</h1>

          <p className="mt-4 text-sm sm:text-base lg:text-xl text-gray-800 max-w-3xl mx-auto leading-snug px-2">

            Deja que nosotros hagamos el trabajo.
            Comparamos tu tarifa actual con más de 30 compañías
            y te decimos cuánto puedes ahorrar cada mes.

          </p>

        </div>

        {/* Tarjetas */}

<div className="mt-12 grid grid-cols-2 gap-4 items-stretch max-w-4xl mx-auto">

  {/* Con factura */}

<div className="relative flex flex-col bg-white rounded-3xl shadow-xl border border-gray-200 p-3 md:p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
    <span className="bg-black text-white px-4 py-1 rounded-full text-[9px] md:text-sm font-bold shadow-lg whitespace-nowrap">
      CÁLCULO EXACTO
    </span>
  </div>

  <div className="w-9 h-9 md:w-20 md:h-20 rounded-3xl bg-red-50 flex items-center justify-center mx-auto text-2xl md:text-5xl">
    📄
  </div>

  <h2 className="mt-0 text-sm md:text-4xl font-bold text-center text-gray-900">
    CON FACTURA
  </h2>

  <p className="mt-1 text-center text-gray-600 text-xs md:text-base leading-relaxed">
    Si subes tu factura el estudio será mucho más exacto.
  </p>

  <ul className="mt-2 space-y-2 text-xs md:text-base text-gray-700 flex-1">
    <li>✅ Análisis preciso</li>
    <li>✅ Mejores ofertas</li>
    <li>✅ Recomendación personalizada</li>
  </ul>

  <Link href="/con-factura/bienvenida">
    <button className="mt-1 w-full rounded-full bg-red-600 py-2 text-[11px] md:py-4 md:text-lg font-semibold text-white transition hover:bg-red-700">
      Subir mi factura →
    </button>
  </Link>

</div>

{/* Sin factura */}

<div className="flex flex-col bg-white rounded-3xl shadow-xl border border-gray-200 p-3 md:p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="w-9 h-9 md:w-20 md:h-20 rounded-3xl bg-red-50 flex items-center justify-center mx-auto text-2xl md:text-5xl">
    📊
  </div>

  <h2 className="mt-0 text-sm md:text-4xl font-bold text-center text-gray-900">
    SIN FACTURA
  </h2>

  <p className="mt-1 text-center text-gray-600 text-xs md:text-base leading-relaxed">
    Responde unas preguntas y calcularemos cuánto puedes ahorrar.
  </p>

  <ul className="mt-2 space-y-2 text-xs md:text-base text-gray-700 flex-1">
    <li>✅ Proceso rápido</li>
    <li>✅ Sin factura</li>
    <li>✅ Estimación personalizada</li>
  </ul>

    <Link href="/sin-factura">
    <button className="mt-1 w-full rounded-full bg-red-600 py-2 text-[11px] md:py-4 md:text-lg font-semibold text-white transition hover:bg-red-700">
      Responder preguntas →
    </button>
  </Link>

</div>

</div>

{/* Beneficios */}

        <div className="mt-8 md:mt-16 grid grid-cols-3 gap-2 md:gap-8">

          <div className="bg-white/70 backdrop-blur rounded-2xl p-2 md:p-6 text-center shadow-md">

            <div className="text-red-600 text-xl md:text-5xl mb-1">
  ✔
</div>

            <h3 className="text-xs md:text-xl font-bold text-gray-900">
              100% Gratuito
            </h3>

            <p className="mt-1 text-[9px] md:text-base text-gray-600 leading-tight">
              Sin coste ni compromiso.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl p-2 md:p-6 text-center shadow-md">

            <div className="text-red-600 text-xl md:text-5xl mb-1">
              ⏰
            </div>

            <h3 className="text-xs md:text-xl font-bold text-gray-900">
              Respuesta en menos de 24h
            </h3>

            <p className="mt-1 text-[9px] md:text-base text-gray-600 leading-tight">
              Nuestro equipo estudiará tu caso y te contactará rápidamente.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl p-2 md:p-6 text-center shadow-md">

            <div className="text-red-600 text-xl md:text-5xl mb-1">
              🛡️
            </div>

            <h3 className="text-xs md:text-xl font-bold text-gray-900">
              Datos protegidos
            </h3>

            <p className="mt-1 text-[9px] md:text-base text-gray-600 leading-tight">
              Cumplimos con el RGPD y tratamos tu información de forma segura.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}