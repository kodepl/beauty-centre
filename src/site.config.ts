const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 1.25)}&q=80`;

const site = {
  name: "Beauty Centre",
  domain: "beautycentre.pl",
  tagline: "Redakcja modowa — garderoba, uroda i klimat, który da się nosić na co dzień",
  city: "Warszawa",
  address: "ul. Mokotowska 12/4, 00-640 Warszawa",
  author: "Klara Nowicka",
  authorBio: "Redaktorka modowa. Łączy trend z szafą, która nie krzyczy.",
  authorRole: "Redakcja",
  authorAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1483985988355-763728fa137b", 1600),
  season: "jesień / zima 2026",
  ticker: ["oversize", "bordo", "wełna", "minimal", "lakier", "monochrom", "warstwy", "satyna"],
  covers: {
    Garderoba: u("photo-1490481651871-ab68de25d43d"),
    Uroda: u("photo-1522335789203-aabd1fc54bc9"),
    Trendy: u("photo-1445205170230-053b83016050"),
    "Styl uliczny": u("photo-1515886657613-9f3515b0c78f"),
    Dodatki: u("photo-1617038220319-276d3cfab638"),
    default: u("photo-1469334031218-e382a71b716b"),
  } as Record<string, string>,
  dzialy: [
    { name: "Garderoba", blurb: "Szafa bez chaosu — co zostaje na lata, a co to chwilowy impuls." },
    { name: "Uroda", blurb: "Pielęgnacja i makijaż w tempie miasta, nie sali prób." },
    { name: "Trendy", blurb: "Sezonowe sygnały bez kopiowania całego lookbooka z Instagrama." },
    { name: "Styl uliczny", blurb: "Warstwy, proporcje i detale widoczne w biegu po Mokotowskiej." },
    { name: "Dodatki", blurb: "Torebki, biżuteria, buty — małe rzeczy, które ustawiają cały strój." },
  ],
};

export function dzialSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
