import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const datos = await request.json();

    const url = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!url) {
      return NextResponse.json(
        {
          ok: false,
          error: "No existe GOOGLE_APPS_SCRIPT_URL",
        },
        { status: 500 }
      );
    }

    console.log("========== ENVIANDO A APPS SCRIPT ==========");
    console.log("Tipo:", datos.tipo);

    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const texto = await respuesta.text();

console.log("====================================");
console.log("RESPUESTA DE APPS SCRIPT");
console.log("STATUS:", respuesta.status);
console.log("OK:", respuesta.ok);
console.log("TIPO:", respuesta.headers.get("content-type"));
console.log("TEXTO:", texto);
console.log("====================================");

let resultado;

try {
  resultado = JSON.parse(texto);
} catch {
  return NextResponse.json(
    {
      ok: false,
      error: "Apps Script no devolvió un JSON válido.",
      status: respuesta.status,
      tipo: respuesta.headers.get("content-type"),
      respuesta: texto,
    },
    { status: 500 }
  );
}

    // Si Apps Script informó un error
    if (resultado.ok === false) {
      console.error("ERROR APPS SCRIPT:", resultado.error);

      return NextResponse.json(
        {
          ok: false,
          error: resultado.error || "Error desconocido en Apps Script",
        },
        { status: 500 }
      );
    }

    // Todo correcto
    return NextResponse.json({
      ok: true,
      resultado,
    });

  } catch (error) {
    console.error("ERROR EN /api/enviar-cliente:", error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error
          ? error.message
          : "No se pudieron enviar los datos",
      },
      { status: 500 }
    );
  }
}