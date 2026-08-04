"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ProgressBar from "@/components/ProgressBar";

export default function SubirFactura() {
    const [archivos, setArchivos] = useState<File[]>([]);
const inputRef = useRef<HTMLInputElement>(null);
const router = useRouter();

const seleccionarArchivo = () => {
  inputRef.current?.click();
};

const cambiarArchivo = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = Array.from(e.target.files || []);

  if (files.length > 0) {
    setArchivos(files);
  }
};
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">

        {/* Logo temporal */}
        <div className="flex justify-center mb-8">
  <Image
    src="/logo.png"
    alt="Logo"
    width={150}
    height={150}
    className="object-contain"
  />
</div>

        {/* Título */}
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Sube tu factura
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Analizaremos gratuitamente tu contrato para encontrar la mejor oferta.
        </p>

        {/* Zona de subida */}
        <div className="mt-10 border-2 border-dashed border-red-300 rounded-2xl p-12 text-center hover:border-red-500 transition">

          <div className="text-6xl mb-4">📄</div>

          <p className="text-lg font-semibold">
            Arrastra aquí tu(s) factura(s)
          </p>

          <p className="text-gray-500 my-3">o</p>

          <input
  ref={inputRef}
  type="file"
  accept=".pdf,.jpg,.jpeg,.png"
  multiple
  className="hidden"
  onChange={cambiarArchivo}
/>

<button
  onClick={seleccionarArchivo}
  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
>
  Seleccionar archivo
</button>

{archivos.length > 0 && (
  <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4">
    <p className="font-semibold text-green-700 mb-2">
      ✅ Archivos seleccionados
    </p>

    {archivos.map((archivo, index) => (
      <p key={index} className="text-gray-700">
        📄 {archivo.name}
      </p>
    ))}
  </div>
)}

          <p className="text-sm text-gray-500 mt-6">
            Formatos permitidos: PDF, JPG y PNG
          </p>

        </div>

        {/* Protección de datos */}
        <p className="text-center text-gray-500 text-sm mt-8">
          🔒 Tus datos están protegidos y solo se utilizarán para realizar el estudio energético.
        </p>

        {/* Botón */}
        <button
  onClick={() => {
    if (archivos.length === 0) {
      alert("Debes subir una factura (PDF, JPG o PNG) para continuar.");
      return;
    }

    router.push("/con-factura/preguntas");
  }}
  className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-lg"
>
  CONTINUAR →
</button>

      </div>
    </main>
  );
}