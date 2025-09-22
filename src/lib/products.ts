export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  series?: string;
};

export const products: Product[] = [
  {
    id: "75",
    name: "Kylith 75",
    price: 18800,
    image: "/75.webp",
    images: ["/75.webp", "/75-white.webp"],
    series: "basic",
  },
  {
    id: "75-compact",
    name: "Kylith 75 Compact",
    price: 18800,
    image: "/75-compact.webp",
    images: ["/75-compact.webp"],
    series: "compact",
  },
  {
    id: "75-HE",
    name: "Kylith 75 HE",
    price: 18800,
    image: "/75-HE.webp",
    images: ["/75-HE.webp", "/75-HE-white.webp"],
  },
  {
    id: "96",
    name: "Kylith 96",
    price: 18800,
    image: "/96.webp",
    images: ["/96.webp", "/96-white.webp"],
    series: "basic",
  },
  {
    id: "96-compact",
    name: "Kylith 96 Compact",
    price: 18800,
    image: "/96-compact.webp",
    images: ["/96-compact.webp"],
    series: "compact",
  },
  {
    id: "96-HE",
    name: "Kylith 96 HE",
    price: 18800,
    image: "/96-HE.webp",
    images: ["/96-HE.webp", "/96-HE-white.webp"],
  },
  {
    id: "100",
    name: "Kylith 100",
    price: 18800,
    image: "/100.webp",
    images: ["/100.webp", "/100-white.webp"],
    series: "basic",
  },
  {
    id: "100-compact",
    name: "Kylith 100 Compact",
    price: 18800,
    image: "/100-compact.webp",
    images: ["/100-compact.webp"],
    series: "compact",
  },
  {
    id: "100-HE",
    name: "Kylith 100 HE",
    price: 18800,
    image: "/100-HE.webp",
    images: ["/100-HE.webp", "/100-HE-white.webp"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
