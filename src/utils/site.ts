export const site = {
  name: "Gabriela Jimenez Psicologia",
  professionalName: "Gabriela Jimenez",
  title: "Psicóloga",
  url: "https://gabrielajimenezpsicologia.com",
  description:
    "Terapia para mujeres que quieren recuperar libertad emocional despues de abuso emocional, manipulacion, relaciones toxicas y codependencia.",
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
  {
    label: "Servicios",
    children: [
      { href: "/emotional-abuse", label: "Abuso emocional" },
      { href: "/codependencia", label: "Dependencia emocional" },
      { href: "/adiccion", label: "Adicciones" },
    ],
  },
  {
    label: "Cuestionarios",
    children: [
      { href: "/cuestionarios/abuso-emocional", label: "Abuso emocional" },
      { href: "/cuestionarios/claridad_emocional", label: "Claridad Emocional" },
      { href: "/cuestionarios/codependencia", label: "Codependencia" },
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
