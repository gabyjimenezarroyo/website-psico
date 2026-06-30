export const site = {
  name: "Gaby Jiménez Psicología",
  professionalName: "Gaby Jiménez",
  title: "Psicóloga",
  url: "https://gabrielajimenezpsicologia.com",
  description:
    "Terapia para mujeres que quieren recuperar libertad emocional después de abuso emocional, manipulación, relaciones tóxicas y codependencia.",
  phone: "+506 8871 9995",
  whatsapp: "https://wa.me/50688719995",
  instagram: "https://www.instagram.com/psicologa_gaby_jimenez/",
  address: "San Jose, Costa Rica",
};

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  label: string;
  children: NavLink[];
};

export const navItems: Array<NavLink | NavGroup> = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  {
    label: "Adicciones",
    children: [
      { href: "/cuestionarios/adiccion-de-otros-me-afecta", label: "¿Me afecta la adicción de otros?" },
      { href: "/cuestionarios/adicciones", label: "¿Mi relación con esta conducta se está volviendo problemática?" },
      { href: "/cuestionarios/ayudo-o-facilito-la-adiccion", label: "¿Ayudo o facilito la adicción?" },

    ],
  },
  {
    label: "Cuestionarios",
    children: [
      { href: "/cuestionarios/abuso-emocional", label: "Abuso emocional" },
      
      { href: "/cuestionarios/autoestima", label: "Autoestima" },
      { href: "/cuestionarios/claridad_emocional", label: "Claridad emocional" },
      { href: "/cuestionarios/codependencia", label: "Codependencia" },
      { href: "/cuestionarios/conectada-emociones", label: "Conectada con tus emociones" },
      { href: "/cuestionarios/dependencia-afectiva", label: "Dependencia afectiva" },
      { href: "/cuestionarios/estilo-apego", label: "Estilo de apego" },
      { href: "/cuestionarios/limites-personales", label: "Límites personales" },
      { href: "/cuestionarios/manipulacion-psicologica", label: "Manipulación psicológica" },
      {
        href: "/cuestionarios/que-area-bienestar-emocional-merece-atencion-hoy",
        label: "Mapa de bienestar emocional",
      },
      { href: "/cuestionarios/rasgos-narcicistas", label: "Rasgos narcisistas" },
    ],
  },
  { href: "/gaby", label: "Sobre Gaby" },
  { href: "/contact", label: "Contacto" },
];

export function canonical(pathname = "/") {
  return new URL(pathname, site.url).toString();
}

export function readingTime(body = "") {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
