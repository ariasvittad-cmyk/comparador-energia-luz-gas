"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { preguntas } from "../preguntas";

export default function PreguntasSinFactura() {
  const [paso, setPaso] = useState(0);
  const router = useRouter();
  const [respuesta, setRespuesta] = useState("");
  const [respuestas, setRespuestas] = useState<Record<number, string>>({});
  const [enviando, setEnviando] = useState(false);

  const pregunta = preguntas[paso];

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl">

        {/* Logo */}

        <div className="flex justify-center pt-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Título */}

        <h1 className="text-center text-red-500 text-[20px] font-bold leading-tight mt-8">
  {pregunta.titulo}
</h1>

        {/* Subtítulo */}

        {"subtitulo" in pregunta && (
          <p className="text-center text-black text-x2 mt-2">
  {pregunta.subtitulo}
</p>
        )}
        {/* Opciones de compañías */}

{pregunta.tipo === "companias" && (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-10">

    {pregunta.opciones?.map((opcion, index) => (

      <div
  key={index}
  onClick={() => setRespuesta(opcion)}
  className={`relative
aspect-square
w-full
max-w-[170px]
mx-auto
border
rounded-2xl
bg-white
p-3
flex flex-col
items-center
justify-between
cursor-pointer
transition-all
${
  respuesta === opcion
    ? "border-blue-500 border-2 shadow-lg"
    : "border-gray-300 hover:border-red-500 hover:shadow-md"
}`}
>

        <div
  className={`absolute top-3 right-3 w-7 h-7 md:w-10 md:h-10 rounded-full border-[3px] flex items-center justify-center transition-all ${
    respuesta === opcion
      ? "border-blue-400"
      : "border-gray-200"
  }`}
>
  {respuesta === opcion && (
    <div className="w-5 h-5 rounded-full bg-blue-500"></div>
  )}
</div>

        <div className="flex-1 flex items-center justify-center">
  <Image
    src={
      opcion === "Endesa"
        ? "/logo/endesa.png"
        : opcion === "Naturgy"
        ? "/logo/naturgy.png"
        : opcion === "Iberdrola"
        ? "/logo/iberdrola.png"
        : opcion === "Total Energies"
        ? "/logo/totalenergies.png"
        : opcion === "Lucera"
        ? "/logo/lucera.png"
        : opcion === "Repsol"
        ? "/logo/repsol.png"
        : opcion === "Octopus Energy"
        ? "/logo/octopus.png"
        : opcion === "Gana Energía"
        ? "/logo/ganaenergia.png"
        : "/logo/otras.png"
    }
    alt={opcion}
    width={90}
height={90}
className="object-contain w-20 h-20 md:w-24 md:h-24"
/>
</div>

        <p className="text-black text-sm md:text-base font-semibold text-center leading-tight">
          {opcion}
        </p>

      </div>

    ))}

  </div>
)}
{pregunta.tipo === "tarjetas" && (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-10">
    {pregunta.opciones?.map((opcion, index) => (
      <div
        key={index}
        onClick={() => setRespuesta(opcion)}
        className={`border rounded-2xl
h-40
md:h-44
w-full
max-w-[170px]
mx-auto
flex flex-col
items-center
justify-center
cursor-pointer
transition ${
          respuesta === opcion
            ? "border-blue-500 border-2"
            : "hover:border-red-500"
        }`}
      >
        <div
  className={`self-start ml-3 mt-3
w-[38px]
h-[38px]
min-w-[38px]
min-h-[38px]
max-w-[38px]
max-h-[38px]
rounded-full
border-[3px]
flex
items-center
justify-center
flex-none
transition-all
${
  respuesta === opcion
    ? "border-blue-500"
    : "border-gray-300"
}`}
>
  {respuesta === opcion && (
    <div className="w-[18px] h-[18px] rounded-full bg-blue-500"></div>
  )}
</div>

        <div className="flex-1 flex items-center justify-center text-5xl">
  {pregunta.icono === "dinero" && "🪙"}
  {pregunta.icono === "factura" && "💶"}
  {pregunta.icono === "casa" && (
  <>
    {index === 0 && "🏡"}
    {index === 1 && "👫"}
    {index === 2 && "👨‍👩‍👧"}
    {index === 3 && "👨‍👩‍👧‍👦"}
  </>
)}
  {pregunta.icono === "reloj" && (
  <Image
    src="/iconos/reloj.png"
    alt="Reloj"
    width={60}
    height={50}
  />
)}
</div>

        <p className="mb-4 text-lg text-center px-2 text-black font-medium leading-tight">
  {opcion}
</p>
      </div>
    ))}
  </div>
)}
{pregunta.tipo === "si-no" && (
  <div className="grid grid-cols-2 gap-3 p-4 md:gap-8 md:p-10">
    {pregunta.opciones?.map((opcion, index) => (
      <div
        key={index}
        onClick={() => setRespuesta(opcion)}
        className={`border rounded-lg h-52 flex flex-col items-center justify-center cursor-pointer transition ${
          respuesta === opcion
            ? "border-blue-500 border-2"
            : "hover:border-red-500"
        }`}
      >
        <div
  className={`w-10 h-10 aspect-square rounded-full self-start ml-4 mt-4 border-[3px] flex items-center justify-center flex-shrink-0 transition-all ${
    respuesta === opcion
      ? "border-blue-500"
      : "border-gray-300"
  }`}
>
  {respuesta === opcion && (
    <div className="w-4 h-4 aspect-square rounded-full bg-blue-500"></div>
  )}
</div>

<div className="mb-6">
  <Image
    src={opcion === "SI" ? "/iconos/gas-si.png" : "/iconos/gas-no.png"}
    alt={opcion}
    width={80}
    height={110}
  />
</div>

        <p className="text-2xl md:text-4xl text-black font-semibold">
  {opcion}
</p>
      </div>
    ))}
  </div>
)}
{pregunta.tipo === "texto" && (
  <div className="p-10">
    <input
      type="text"
      placeholder={pregunta.placeholder}
      value={respuesta}
      onChange={(e) => setRespuesta(e.target.value)}
      className="w-full border-2 border-blue-300 rounded-lg p-5 text-2xl text-black placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
    />

    <p className="text-black mt-3">
  Pulsa "→" para continuar
</p>
  </div>
)}
{pregunta.tipo === "contacto" && (
  <div className="grid grid-cols-2 gap-8 p-10">
    {pregunta.opciones?.map((opcion, index) => (
      <div
        key={index}
        onClick={() => setRespuesta(opcion)}
        className={`border rounded-2xl h-28 md:h-36 flex items-center justify-center cursor-pointer transition ${
          respuesta === opcion
            ? "border-blue-500 border-2"
            : "hover:border-red-500"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-3">

  <div className="text-5xl">
    {opcion === "WhatsApp" ? "💬" : "☎️"}
  </div>

  <p className="text-xl font-semibold text-black">
    {opcion}
  </p>

</div>
      </div>
    ))}
  </div>
)}
{pregunta.tipo === "telefono" && (
  <div className="p-10">
    <input
      type="tel"
      placeholder={pregunta.placeholder}
      value={respuesta}
      onChange={(e) => setRespuesta(e.target.value)}
      className="w-full border-2 border-blue-300 rounded-lg p-5 text-2xl text-black placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
    />

    <p className="text-black mt-3">
  Pulsa "→" para continuar
</p>
  </div>
)}
{pregunta.tipo === "checkbox" && (
  <div className="p-10">

    <h2 className="text-4xl text-center mb-8">
      Políticas de privacidad
    </h2>

    <label className="flex items-start gap-4 text-xl cursor-pointer">

      <input
        type="checkbox"
        checked={respuesta === "aceptado"}
        onChange={(e) =>
          setRespuesta(e.target.checked ? "aceptado" : "")
        }
        className="w-6 h-6 mt-1"
      />

      <span className="text-black">
        Al marcar esta casilla acepto la{" "}
        <a
          href="#"
          className="text-blue-600 underline"
        >
          política de privacidad
        </a>{" "}
        y acepto que me contacten para ofrecerme más información.
      </span>

    </label>

  </div>
)}
{/* Botones */}

<div className="border-2 border-black mt-6">

  <div className="flex">

    <button
  onClick={() => {
    if (paso > 0) {
      setPaso(paso - 1);
      setRespuesta("");
    }
  }}
  className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-5 text-lg font-semibold"
>
  ← ATRÁS
</button>

    <button
  disabled={enviando}
  onClick={async () => {

    // 1. Comprobar que haya una respuesta
    if (!respuesta) {
      alert("Debes seleccionar una opción");
      return;
    }

    // 2. Guardar la respuesta actual
    const respuestasActualizadas = {
      ...respuestas,
      [paso]: respuesta,
    };

    setRespuestas(respuestasActualizadas);

    // 3. Si todavía quedan preguntas,
    // simplemente pasar a la siguiente
    if (paso < preguntas.length - 1) {
      setPaso(paso + 1);
      setRespuesta("");
      return;
    }

    // 4. AQUÍ ya estamos en la última pregunta.
    // Bloqueamos el botón para evitar doble envío.
    setEnviando(true);

    // 5. Enviar todos los datos
    try {
      const response = await fetch("/api/enviar-cliente", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tipo: "sin-factura",

          respuestas: preguntas.map((pregunta, index) => ({
            pregunta: pregunta.titulo,
            respuesta: respuestasActualizadas[index] || "",
          })),
        }),
      });

      const resultado = await response.json();

      // 6. Comprobar que el servidor respondió correctamente
      if (!response.ok || !resultado.ok) {
        throw new Error(
          resultado.error || "No se pudieron enviar los datos"
        );
      }

      // 7. Envío correcto
      router.push("/sin-factura/enviado");

    } catch (error) {

      console.error("Error enviando datos:", error);

      // Si hubo error, permitimos volver a intentar
      setEnviando(false);

      alert(
        "No se pudieron enviar tus datos. Por favor, inténtalo nuevamente."
      );
    }
  }}

  className={`w-1/2 text-white py-5 text-lg font-semibold border-l-2 border-black ${
    enviando
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-red-600 hover:bg-red-700"
  }`}
>
  {paso === preguntas.length - 1
  ? enviando
    ? "ENVIANDO..."
    : "ENVIAR"
  : "SEGUIR →"}
</button>

  </div>

</div>
      </div>

    </main>
  );
}