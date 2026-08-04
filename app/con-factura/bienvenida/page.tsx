import Image from "next/image";
import Link from "next/link";

export default function BienvenidaConFactura() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
 <Image
  src="/logo.png"
  alt="Logo"
  width={120}
  height={120}
  className="object-contain"
/>
</div>

        {/* Título */}
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          DESCUBRE CUÁNTO
          <br />
          PUEDES AHORRAR EN TU
          <br />
          FACTURA
        </h1>

        {/* Descripción */}
        <p className="mt-8 text-gray-600 text-lg">
          Sube tu factura y contesta las preguntas para poder calcular el
          ahorro que puedes conseguir.
        </p>

        {/* Número de preguntas */}
        <p className="mt-4 text-gray-500">
          6 preguntas
        </p>

        {/* Botón */}
        <Link href="/con-factura/subir-factura">
          <button className="mt-10 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-md text-lg font-semibold transition">
            COMENZAR TEST →
          </button>
        </Link>

      </div>
    </main>
  );
}