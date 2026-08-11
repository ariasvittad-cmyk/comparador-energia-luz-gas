"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ProgressBar from "@/components/ProgressBar";

export default function SubirFactura() {
  const [archivos, setArchivos] = useState<File[]>([]);
  const [procesando, setProcesando] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // ======================================================
  // CONVERTIR IMAGEN A JPG COMPRIMIDO
  // ======================================================

  const comprimirImagen = (archivo: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        try {
          const MAX_WIDTH = 1800;
          const MAX_HEIGHT = 1800;
          const CALIDAD = 0.75;

          let width = img.width;
          let height = img.height;

          // Reducir tamaño manteniendo proporción
          if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            const ratio = Math.min(
              MAX_WIDTH / width,
              MAX_HEIGHT / height
            );

            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }

          const canvas = document.createElement("canvas");

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");

          if (!ctx) {
            reject(new Error("No se pudo preparar la imagen."));
            return;
          }

          // Fondo blanco para evitar problemas con PNG transparente
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, width, height);

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(
                  new Error("No se pudo comprimir la imagen.")
                );
                return;
              }

              const nombreOriginal =
                archivo.name.replace(/\.[^/.]+$/, "");

              const nuevoArchivo = new File(
                [blob],
                `${nombreOriginal}.jpg`,
                {
                  type: "image/jpeg",
                }
              );

              resolve(nuevoArchivo);
            },
            "image/jpeg",
            CALIDAD
          );
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => {
        reject(
          new Error("No se pudo leer la imagen.")
        );
      };

      img.src = URL.createObjectURL(archivo);
    });
  };

  // ======================================================
  // CONVERTIR ARCHIVO A BASE64
  // ======================================================

  const convertirArchivoABase64 = (
    archivo: File
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const resultado = reader.result;

          if (typeof resultado !== "string") {
            reject(
              new Error("No se pudo convertir el archivo.")
            );
            return;
          }

          const partes = resultado.split(",");

          if (partes.length < 2) {
            reject(
              new Error("Formato de archivo inválido.")
            );
            return;
          }

          resolve(partes[1]);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => {
        reject(
          new Error("No se pudo leer el archivo.")
        );
      };

      reader.readAsDataURL(archivo);
    });
  };

  // ======================================================
  // SELECCIONAR ARCHIVO
  // ======================================================

  const seleccionarArchivo = () => {
    inputRef.current?.click();
  };

  // ======================================================
  // CAMBIAR ARCHIVO
  // ======================================================

  const cambiarArchivo = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);

    if (files.length > 0) {
      setArchivos(files);
    }
  };

  // ======================================================
  // CONTINUAR
  // ======================================================

  const continuar = async () => {
    if (archivos.length === 0) {
      alert(
        "Debes subir una factura (PDF, JPG o PNG) para continuar."
      );
      return;
    }

    if (procesando) {
      return;
    }

    setProcesando(true);

    try {
      const archivoOriginal = archivos[0];

      console.log(
        "Archivo original:",
        archivoOriginal.name
      );

      console.log(
        "Tamaño original:",
        archivoOriginal.size
      );

      console.log(
        "Tipo original:",
        archivoOriginal.type
      );

      let archivoFinal = archivoOriginal;

      // ==================================================
      // COMPRIMIR IMÁGENES
      // ==================================================

      if (
        archivoOriginal.type === "image/jpeg" ||
        archivoOriginal.type === "image/jpg" ||
        archivoOriginal.type === "image/png"
      ) {
        console.log("Comprimiendo imagen...");

        archivoFinal =
          await comprimirImagen(archivoOriginal);

        console.log(
          "Tamaño después de comprimir:",
          archivoFinal.size
        );
      }

      // ==================================================
      // CONTROL DE TAMAÑO
      // ==================================================

      const MAX_SIZE = 4 * 1024 * 1024;

      if (archivoFinal.size > MAX_SIZE) {
        throw new Error(
          "El archivo sigue siendo demasiado grande. Intenta utilizar una factura de menor tamaño."
        );
      }

      // ==================================================
      // BASE64
      // ==================================================

      console.log("Convirtiendo archivo a Base64...");

      const base64 =
        await convertirArchivoABase64(
          archivoFinal
        );

      console.log(
        "Base64 generado correctamente."
      );

      // ==================================================
      // DATOS DE LA FACTURA
      // ==================================================

      const factura = {
        nombreArchivo: archivoFinal.name,
        tipoArchivo: archivoFinal.type,
        archivoBase64: base64,
      };

      // ==================================================
      // GUARDAR EN SESSION STORAGE
      // ==================================================

      try {
        sessionStorage.removeItem("facturaCRSL");

        sessionStorage.setItem(
          "facturaCRSL",
          JSON.stringify(factura)
        );

        console.log(
          "Factura guardada correctamente en sessionStorage."
        );
      } catch (storageError) {
        console.error(
          "ERROR SESSION STORAGE:",
          storageError
        );

        throw new Error(
          "El teléfono no tiene suficiente espacio temporal para preparar la factura. Intenta con una factura más pequeña."
        );
      }

      // ==================================================
      // CONTINUAR
      // ==================================================

      router.push("/con-factura/preguntas");

    } catch (error) {
      console.error(
        "ERROR PREPARANDO FACTURA:",
        error
      );

      const mensaje =
        error instanceof Error
          ? error.message
          : "No se pudo preparar la factura.";

      alert(mensaje);

      setProcesando(false);
    }
  };

  // ======================================================
  // INTERFAZ
  // ======================================================

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">

        {/* Logo */}

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

          <div className="text-6xl mb-4">
            📄
          </div>

          <p className="text-lg font-semibold">
            Arrastra aquí tu(s) factura(s)
          </p>

          <p className="text-gray-500 my-3">
            o
          </p>

          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            multiple
            className="hidden"
            onChange={cambiarArchivo}
          />

          <button
            type="button"
            onClick={seleccionarArchivo}
            disabled={procesando}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition disabled:opacity-50"
          >
            Seleccionar archivo
          </button>

          {archivos.length > 0 && (
            <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4">

              <p className="font-semibold text-green-700 mb-2">
                ✅ Archivos seleccionados
              </p>

              {archivos.map((archivo, index) => (
                <p
                  key={index}
                  className="text-gray-700"
                >
                  📄 {archivo.name}
                </p>
              ))}

            </div>
          )}

          <p className="text-sm text-gray-500 mt-6">
            Formatos permitidos: PDF, JPG y PNG
          </p>

        </div>

        {/* Protección */}

        <p className="text-center text-gray-500 text-sm mt-8">
          🔒 Tus datos están protegidos y solo se utilizarán para realizar el estudio energético.
        </p>

        {/* Botón */}

        <button
          type="button"
          onClick={continuar}
          disabled={procesando}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50"
        >
          {procesando
            ? "PREPARANDO FACTURA..."
            : "CONTINUAR →"}
        </button>

      </div>

    </main>
  );
}