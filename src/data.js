const assetBase = import.meta.env.BASE_URL;

export const brand = {
  name: "Mercedetalles",
  city: "Lima, Peru",
  phone: "51966396805",
  displayPhone: "966 396 805",
  email: "merce110378@gmail.com",
  instagram: "https://www.instagram.com/mercedetalles/",
  whatsappMessage:
    "Hola Mercedetalles, quisiera cotizar una decoracion para mi evento."
};

export const categories = [
  "Todos",
  "Fiestas infantiles",
  "Cumpleanos",
  "Baby shower",
  "Bautizos",
  "Quinceaneros"
];

export const gallery = [
  {
    title: "Kichi Kids para Zoe Ailen",
    category: "Fiestas infantiles",
    image: `${assetBase}assets/img/gallery/kichi-kids-web.jpg`,
    description: "Arco pastel, mesa protagonista y detalles florales para fotos dulces."
  },
  {
    title: "Sirena Zoe Ailen",
    category: "Cumpleanos",
    image: `${assetBase}assets/img/gallery/sirena-zoe-01-web.jpg`,
    description: "Fondo marino con luces, globos suaves y mesa tematica."
  },
  {
    title: "Aloha en piscina",
    category: "Cumpleanos",
    image: `${assetBase}assets/img/gallery/aloha-piscina-web.jpg`,
    description: "Celebracion tropical con color, globos y letras grandes."
  },
  {
    title: "Dulceria de cumpleanos",
    category: "Fiestas infantiles",
    image: `${assetBase}assets/img/gallery/dulceria-zoe-01-web.jpg`,
    description: "Mesa dulce con helados, donuts y tonos pastel."
  },
  {
    title: "Momento de torta",
    category: "Fiestas infantiles",
    image: `${assetBase}assets/img/gallery/dulceria-zoe-02-web.jpg`,
    description: "Escenario cercano para fotos familiares y torta tematica."
  }
];

export const services = [
  {
    title: "Decoracion tematica",
    text: "Fondos, globos, mesas y detalles pensados para el estilo de tu celebracion.",
    image: `${assetBase}assets/img/gallery/kichi-kids-web.jpg`
  },
  {
    title: "Tortas personalizadas",
    text: "Tortas decoradas segun la tematica, colores y personaje principal.",
    image: `${assetBase}assets/img/gallery/dulceria-zoe-02-web.jpg`
  },
  {
    title: "Bocaditos",
    text: "Dulces y salados para completar la mesa y recibir a tus invitados.",
    image: `${assetBase}assets/img/gallery/dulceria-zoe-01-web.jpg`
  },
  {
    title: "Invitaciones",
    text: "Disenos digitales o impresos con la misma identidad de la fiesta.",
    image: `${assetBase}assets/img/gallery/sirena-zoe-01-web.jpg`
  },
  {
    title: "Fotos impresas",
    text: "Impresion de recuerdos de la fiesta para entregar al momento.",
    image: `${assetBase}assets/img/gallery/aloha-piscina-web.jpg`
  },
  {
    title: "Mobiliario y recuerdos",
    text: "Piezas decorativas, alquiler y detalles para tus invitados.",
    image: `${assetBase}assets/img/gallery/kichi-kids-web.jpg`
  }
];

export const packages = [
  {
    name: "Decoracion Esencial",
    size: "Pequena",
    priceLabel: "Desde S/ ___",
    price: null,
    description: "Para celebraciones intimas en casa o espacios pequenos.",
    features: ["Fondo tematico sencillo", "Arreglo de globos", "Mesa principal decorada"]
  },
  {
    name: "Decoracion Encanto",
    size: "Mediana",
    priceLabel: "Desde S/ ___",
    price: null,
    featured: true,
    description: "La opcion equilibrada para una fiesta completa y fotogenica.",
    features: ["Fondo con mayor presencia", "Arco de globos", "Mesas auxiliares"]
  },
  {
    name: "Decoracion Ilusion",
    size: "Grande",
    priceLabel: "Desde S/ ___",
    price: null,
    description: "Para eventos con mas impacto visual y varios puntos decorativos.",
    features: ["Escenario completo", "Piezas especiales", "Zona adicional para fotos"]
  }
];

export const addOns = [
  { name: "Torta personalizada", priceLabel: "+ S/ ___", price: null },
  { name: "Bocaditos", priceLabel: "+ S/ ___", price: null },
  { name: "Impresion de fotos", priceLabel: "+ S/ ___", price: null },
  { name: "Invitaciones", priceLabel: "+ S/ ___", price: null },
  { name: "Recuerdos para invitados", priceLabel: "+ S/ ___", price: null }
];

export const addonDiscounts = [
  { minItems: 2, discount: 0.05, label: "5% de descuento en adicionales" },
  { minItems: 3, discount: 0.1, label: "10% de descuento en adicionales" }
];
