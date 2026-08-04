import Image from "next/image";
export default function EnviadoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="text-center">

        <div className="flex justify-center mb-8">
  <div className="w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center">
    <span className="text-green-600 text-7xl font-bold">✓</span>
  </div>
</div>

        <h1 className="text-6xl font-light mb-6">
          ¡Enviado!
        </h1>

        <p className="text-gray-600 text-xl max-w-2xl">
          Enhorabuena, nuestros expertos están trabajando en tu caso.
          En breve nos pondremos en contacto contigo para darte el resultado del estudio.
        </p>

      </div>

    </main>
  );
}