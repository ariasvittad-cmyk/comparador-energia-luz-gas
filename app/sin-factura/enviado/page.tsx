import Link from "next/link";

export default function EnviadoSinFactura() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="text-center max-w-2xl">

        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center text-7xl text-green-500">
            ✓
          </div>
        </div>

        <h1 className="text-6xl font-light mb-6">
          ¡Enviado!
        </h1>

        <p className="text-2xl text-gray-600 leading-relaxed">
          Enhorabuena, nuestros expertos están trabajando en tu caso.
          En breve nos pondremos en contacto contigo para darte el
          resultado del estudio.
        </p>

      </div>

    </main>
  );
}