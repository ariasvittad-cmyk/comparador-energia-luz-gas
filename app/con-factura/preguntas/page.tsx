"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { preguntas } from "./preguntas";

export default function PreguntasPage() {
  const [paso, setPaso] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const router = useRouter();

  const pregunta = preguntas[paso];

  return (
    <main className="relative min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl">
        <div className="flex justify-center -mt-0 mb-6">
    <Image
      src="/logo.png"
      alt="Logo"
      width={150}
      height={150}
      className="object-contain"
    />
  </div>


        <div className="p-10 text-black">

         <h2 className="text-red-600 text-[20px] font-bold text-center leading-tight">
  {pregunta.titulo}
</h2>

{"subtitulo" in pregunta && pregunta.subtitulo && (
  <p className="text-center text-black text-lg mt-3">
  {pregunta.subtitulo}
</p>
)}

<p className="text-center text-black mt-3 mb-8">
  Paso {paso + 1} de {preguntas.length}
</p>

          {/* Preguntas tipo RADIO */}
{pregunta.tipo === "radio" && (
  <>
    {pregunta.opciones?.map((opcion, index) => (
      <label
  key={index}
  className="flex items-center border rounded-lg p-4 mb-4 cursor-pointer hover:border-red-500 text-black"
>
        <input
          type="radio"
          name="respuesta"
          value={opcion}
          checked={respuesta === opcion}
          onChange={() => setRespuesta(opcion)}
          className="mr-4"
        />

        {opcion}
      </label>
    ))}
  </>
)}

{/* Nombre */}
{pregunta.tipo === "texto" && (
  <input
    type="text"
    placeholder="Escribe tu nombre"
    value={respuesta}
    onChange={(e) => setRespuesta(e.target.value)}
    className="w-full border rounded-lg p-4 text-lg text-black placeholder:text-gray-500"
  />
)}

{/* Teléfono */}
{pregunta.tipo === "telefono" && (
  <input
    type="tel"
    placeholder="Por ejemplo: 612345678"
    value={respuesta}
    onChange={(e) => setRespuesta(e.target.value)}
    className="w-full border rounded-lg p-4 text-lg text-black placeholder:text-gray-500"
  />
)}

{/* Observaciones */}
{pregunta.tipo === "textarea" && (
  <textarea
    placeholder="Escribe aquí cualquier observación..."
    value={respuesta}
    onChange={(e) => setRespuesta(e.target.value)}
    className="w-full border rounded-lg p-4 h-40 resize-none text-black placeholder:text-black"
  />
)}

{/* Política */}
{pregunta.tipo === "checkbox" && (
  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      checked={respuesta === "aceptado"}
      onChange={(e) =>
        setRespuesta(e.target.checked ? "aceptado" : "")
      }
      className="mt-1 w-8 h-8"
    />

    <span className="text-black">
      Al marcar acepto la política de privacidad y acepto que me contacten para ofrecerme más información.
    </span>
  </label>
)}

          <div className="mt-8 border-1 border-black">

            <div className="flex">

              <button
                onClick={() => {
  if (paso > 0) {
    setPaso(paso - 1);
  } else {
    router.push("/con-factura/subir-factura");
  }
}}
                className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-4 font-semibold border border-black"
              >
                ← ATRÁS
              </button>

              <button
                onClick={() => {

                  if (!respuesta && pregunta.tipo !== "textarea") {
  alert("Debes seleccionar una opción.");
  return;
}

                  if (paso < preguntas.length - 1) {
  setPaso(paso + 1);
  setRespuesta("");
} else {
  router.replace("/con-factura/enviado");
}

                }}
                className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-4 font-semibold border border-black"
              >
                {paso === preguntas.length - 1 ? "ENVIAR" : "SIGUIENTE →"}
              </button>

            </div>

          </div>

        </div>

        <div className="mt-10 px-8 pb-8">

          <div className="relative">

            <div className="absolute top-2 left-0 right-0 h-[2px] bg-gray-300"></div>

            <div className="relative flex justify-between">

              {preguntas.map((_, index) => (

                <div
                  key={index}
                  className={`rounded-full border-2 border-white ${
                    index < paso
                      ? "w-4 h-4 bg-green-500"
                      : index === paso
                      ? "w-4 h-4 bg-blue-500"
                      : "w-3 h-3 mt-0.5 bg-gray-400"
                  }`}
                />

              ))}

            </div>

          </div>

          <div className="flex justify-center">

            <div className="bg-gray-200 text-black text-xs rounded px-5 py-2 mt-6">

              {paso + 1} de {preguntas.length}

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}