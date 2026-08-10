export const preguntas = [
  {
    id: 1,
    titulo: "¿Con qué compañía de luz estás actualmente?",
    subtitulo: "Elige una de las opciones",
    tipo: "companias",
    opciones: [
      "Endesa",
      "Naturgy",
      "Iberdrola",
      "Total Energies",
      "Lucera",
      "Repsol",
      "Octopus Energy",
      "Gana Energía",
      "Otras",
    ],
  },

  {
    id: 2,
    titulo: "Indica qué precio pagas por el Kwh",
    subtitulo: "Elige una de las opciones",
    tipo: "tarjetas",
    icono: "dinero",
    opciones: [
      "Menos de 0,12 €/kWh",
      "Menos de 0,20 €/kWh",
      "Más de 0,20 €/kWh",
      "No lo sé",
    ],
  },

  {
    id: 3,
    titulo: "¿Cuánto sueles pagar al mes de media en tu factura de luz?",
    subtitulo: "Elige una de las opciones",
    tipo: "tarjetas",
    icono: "factura",
    opciones: [
      "Menos de 50€",
      "Entre 50€ y 100€",
      "Más de 100€",
      "No lo sé con exactitud",
    ],
  },

  {
    id: 4,
    titulo: "¿Cuántas personas viven en tu domicilio?",
    subtitulo: "Elige una de las opciones",
    tipo: "tarjetas",
    icono: "casa",
    opciones: [
      "Vivo solo",
      "Somos 2 personas",
      "Somos 3 personas",
      "Somos 4 o más personas",
    ],
  },

  {
    id: 5,
    titulo: "¿Dispones de gas natural en tu vivienda?",
    subtitulo: "Elige una de las opciones",
    tipo: "si-no",
    opciones: ["SI", "NO"],
  },

  {
    id: 6,
    titulo: "¿Desde cuándo no revisas tu contrato?",
    subtitulo: "Elige una de las opciones",
    tipo: "tarjetas",
    icono: "reloj",
    opciones: [
      "Menos de un año",
      "Más de un año",
      "Nunca lo he revisado",
      "No lo recuerdo",
    ],
  },

  {
    id: 7,
    titulo: "👤 ¿Cómo te llamas?",

    tipo: "texto",
    placeholder: "Escribe tu nombre",
  },

  {
    id: 8,
    titulo: "¿Cómo prefieres recibir el estudio?",
    subtitulo: "Solo te lo enviaremos por la vía que solicites",
    tipo: "contacto",
    opciones: ["WhatsApp", "Llamada"],
  },

  {
    id: 9,
    titulo: "📞 Déjanos tu teléfono",
    subtitulo:
      "Escribe tu teléfono real para poder hacerte llegar el estudio. Se te enviará por la vía solicitada.",
    tipo: "telefono",
    placeholder: "Teléfono",
  },

  {
    id: 10,
    titulo: "",
    tipo: "checkbox",
  },
];