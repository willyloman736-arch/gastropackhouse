// Gastro Pack House - Product Catalog
// Gastro Pack House product catalog on 2026-05-07.
// Product galleries refreshed from detail pages on 2026-05-07.

const CATEGORIES = [
  {
    "id": "lows",
    "name": "Lows",
    "count": 38
  },
  {
    "id": "zaa",
    "name": "Zaa",
    "count": 18
  },
  {
    "id": "indoors",
    "name": "Indoors",
    "count": 25
  },
  {
    "id": "exotics-indoors",
    "name": "Exotics Indoors",
    "count": 15
  },
  {
    "id": "snow-cap",
    "name": "Snow Cap",
    "count": 2
  },
  {
    "id": "moon-rocks",
    "name": "Moon Rocks",
    "count": 1
  },
  {
    "id": "shrooms",
    "name": "Shrooms",
    "count": 1
  },
  {
    "id": "concentrates",
    "name": "Concentrates",
    "count": 1
  }
];

const PRODUCTS = [
  {
    "id": 1,
    "slug": "black-runtz-lows",
    "cat": "lows",
    "name": "Black Runtz | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/bbbf23464b-WhatsApp-Image-2026-03-27-at-01.37.52.jpeg",
    "images": [
      "assets/products/bbbf23464b-WhatsApp-Image-2026-03-27-at-01.37.52.jpeg",
      "assets/products/ba7ff6b2eb-WhatsApp-Image-2026-03-27-at-01.37.53-1.jpeg"
    ]
  },
  {
    "id": 2,
    "slug": "lcg-nu-lows",
    "cat": "lows",
    "name": "LCG Nu | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/f76a28514b-WhatsApp-Image-2026-03-27-at-01.38.38.jpeg",
    "images": [
      "assets/products/f76a28514b-WhatsApp-Image-2026-03-27-at-01.38.38.jpeg",
      "assets/products/52afab436b-WhatsApp-Image-2026-03-27-at-01.38.38-1.jpeg"
    ]
  },
  {
    "id": 3,
    "slug": "rainbow-cherry-lows",
    "cat": "lows",
    "name": "Rainbow Cherry | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/e5d46d7981-WhatsApp-Image-2026-03-27-at-01.39.40.jpeg",
    "images": [
      "assets/products/e5d46d7981-WhatsApp-Image-2026-03-27-at-01.39.40.jpeg",
      "assets/products/9835512e8f-WhatsApp-Image-2026-03-27-at-01.39.40-1.jpeg"
    ]
  },
  {
    "id": 4,
    "slug": "uncle-snoop-lows",
    "cat": "lows",
    "name": "Uncle Snoop | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/2754a55070-WhatsApp-Image-2026-03-27-at-01.40.24.jpeg",
    "images": [
      "assets/products/2754a55070-WhatsApp-Image-2026-03-27-at-01.40.24.jpeg",
      "assets/products/f3f3835c44-WhatsApp-Image-2026-03-27-at-01.40.24-1.jpeg"
    ]
  },
  {
    "id": 5,
    "slug": "hichew-lows",
    "cat": "lows",
    "name": "Hichew | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/d90c484e0d-WhatsApp-Image-2026-03-27-at-01.42.25.jpeg",
    "images": [
      "assets/products/d90c484e0d-WhatsApp-Image-2026-03-27-at-01.42.25.jpeg",
      "assets/products/843ec34cb5-WhatsApp-Image-2026-03-27-at-01.42.26.jpeg"
    ]
  },
  {
    "id": 6,
    "slug": "sour-diesel-lows",
    "cat": "lows",
    "name": "Sour Diesel | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/30312e99a5-WhatsApp-Image-2026-03-27-at-03.05.04.jpeg",
    "images": [
      "assets/products/30312e99a5-WhatsApp-Image-2026-03-27-at-03.05.04.jpeg"
    ]
  },
  {
    "id": 7,
    "slug": "da-funk-lows",
    "cat": "lows",
    "name": "Da Funk | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/8f05f9b53e-WhatsApp-Image-2026-03-29-at-16.37.57.jpeg",
    "images": [
      "assets/products/8f05f9b53e-WhatsApp-Image-2026-03-29-at-16.37.57.jpeg",
      "assets/products/436bf6fd08-WhatsApp-Image-2026-03-29-at-16.37.57-1.jpeg"
    ]
  },
  {
    "id": 8,
    "slug": "gusher-gelato-mixed-light",
    "cat": "lows",
    "name": "Gusher Gelato | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/5684af58c4-WhatsApp-Image-2026-03-27-at-01.23.40-1.jpeg",
    "images": [
      "assets/products/5684af58c4-WhatsApp-Image-2026-03-27-at-01.23.40-1.jpeg",
      "assets/products/3319df03ea-WhatsApp-Image-2026-03-27-at-01.23.40.jpeg"
    ]
  },
  {
    "id": 9,
    "slug": "key-lime-pie-mixed-light",
    "cat": "lows",
    "name": "Key Lime Pie | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/ce3bb651bc-WhatsApp-Image-2026-03-27-at-01.17.01-1.jpeg",
    "images": [
      "assets/products/ce3bb651bc-WhatsApp-Image-2026-03-27-at-01.17.01-1.jpeg",
      "assets/products/8686ccfd25-WhatsApp-Image-2026-03-27-at-01.17.01-1-1.jpeg"
    ]
  },
  {
    "id": 10,
    "slug": "rs-1000-mixed-light",
    "cat": "lows",
    "name": "RS-1000 | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/2d28431ddd-WhatsApp-Image-2026-03-27-at-01.29.40.jpeg",
    "images": [
      "assets/products/2d28431ddd-WhatsApp-Image-2026-03-27-at-01.29.40.jpeg"
    ]
  },
  {
    "id": 11,
    "slug": "fire-og-mixed-light",
    "cat": "lows",
    "name": "Fire OG | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/3a4aac8499-WhatsApp-Image-2026-03-22-at-21.35.11-1.jpeg",
    "images": [
      "assets/products/3a4aac8499-WhatsApp-Image-2026-03-22-at-21.35.11-1.jpeg"
    ]
  },
  {
    "id": 12,
    "slug": "stardawg-mixed-light",
    "cat": "lows",
    "name": "Stardawg | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/f713769701-WhatsApp-Image-2026-03-22-at-21.37.51.jpeg",
    "images": [
      "assets/products/f713769701-WhatsApp-Image-2026-03-22-at-21.37.51.jpeg",
      "assets/products/5d467fd4b5-WhatsApp-Image-2026-03-22-at-21.37.51-1.jpeg"
    ]
  },
  {
    "id": 13,
    "slug": "butterface-mixed-light",
    "cat": "lows",
    "name": "Butterface | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/5f6dd3b951-WhatsApp-Image-2026-03-30-at-03.26.28-1.jpeg",
    "images": [
      "assets/products/5f6dd3b951-WhatsApp-Image-2026-03-30-at-03.26.28-1.jpeg",
      "assets/products/5bc28bf165-WhatsApp-Image-2026-03-30-at-03.26.28.jpeg"
    ]
  },
  {
    "id": 14,
    "slug": "purple-voodoo-mixed-light",
    "cat": "lows",
    "name": "Purple Voodoo | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a6b11c7af8-WhatsApp-Image-2026-03-30-at-03.29.57-2.jpeg",
    "images": [
      "assets/products/a6b11c7af8-WhatsApp-Image-2026-03-30-at-03.29.57-2.jpeg",
      "assets/products/63235c10d0-WhatsApp-Image-2026-03-30-at-03.29.57.jpeg"
    ]
  },
  {
    "id": 15,
    "slug": "fruit-punch-mixed-light",
    "cat": "lows",
    "name": "Fruit Punch | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/370b4b5256-WhatsApp-Image-2026-03-30-at-03.40.15-1.jpeg",
    "images": [
      "assets/products/370b4b5256-WhatsApp-Image-2026-03-30-at-03.40.15-1.jpeg",
      "assets/products/44991bea46-WhatsApp-Image-2026-03-30-at-03.40.15.jpeg"
    ]
  },
  {
    "id": 16,
    "slug": "bigfoot-mixed-light",
    "cat": "lows",
    "name": "Bigfoot | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/bf872f7fc6-WhatsApp-Image-2026-03-29-at-17.38.10-1.jpeg",
    "images": [
      "assets/products/bf872f7fc6-WhatsApp-Image-2026-03-29-at-17.38.10-1.jpeg"
    ]
  },
  {
    "id": 17,
    "slug": "blue-gushers-mixed-light",
    "cat": "lows",
    "name": "Blue Gushers | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/30a9c82c03-WhatsApp-Image-2026-03-22-at-22.18.52-1.jpeg",
    "images": [
      "assets/products/30a9c82c03-WhatsApp-Image-2026-03-22-at-22.18.52-1.jpeg"
    ]
  },
  {
    "id": 18,
    "slug": "gods-glue-indoor",
    "cat": "lows",
    "name": "Gods Glue | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/767dafcc33-WhatsApp-Image-2026-03-30-at-01.35.15-1.jpeg",
    "images": [
      "assets/products/767dafcc33-WhatsApp-Image-2026-03-30-at-01.35.15-1.jpeg",
      "assets/products/499a6b339c-WhatsApp-Image-2026-03-30-at-01.35.15.jpeg"
    ]
  },
  {
    "id": 19,
    "slug": "tropical-jealousy-indoor",
    "cat": "lows",
    "name": "Tropical Jealousy | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/32e104759d-WhatsApp-Image-2026-03-30-at-01.46.19-1.jpeg",
    "images": [
      "assets/products/32e104759d-WhatsApp-Image-2026-03-30-at-01.46.19-1.jpeg",
      "assets/products/14eccfdbb9-WhatsApp-Image-2026-03-30-at-01.46.19.jpeg"
    ]
  },
  {
    "id": 20,
    "slug": "blue-nerds-indoor",
    "cat": "lows",
    "name": "Blue Nerds | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a903ae87b7-WhatsApp-Image-2026-03-27-at-01.14.15-1.jpeg",
    "images": [
      "assets/products/a903ae87b7-WhatsApp-Image-2026-03-27-at-01.14.15-1.jpeg",
      "assets/products/3ecbe1f699-WhatsApp-Image-2026-03-27-at-01.14.14-2.jpeg"
    ]
  },
  {
    "id": 21,
    "slug": "cotton-candy-indoor",
    "cat": "lows",
    "name": "Cotton Candy | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/442cc00f0a-WhatsApp-Image-2026-03-30-at-01.55.47.jpeg",
    "images": [
      "assets/products/442cc00f0a-WhatsApp-Image-2026-03-30-at-01.55.47.jpeg",
      "assets/products/1af001e188-WhatsApp-Image-2026-03-30-at-01.55.47-1.jpeg"
    ]
  },
  {
    "id": 22,
    "slug": "lcg-85-indoor",
    "cat": "lows",
    "name": "LCG #85 | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/9b5065c83c-WhatsApp-Image-2026-03-30-at-01.58.29.jpeg",
    "images": [
      "assets/products/9b5065c83c-WhatsApp-Image-2026-03-30-at-01.58.29.jpeg",
      "assets/products/16e98f3b69-WhatsApp-Image-2026-03-30-at-01.58.30.jpeg"
    ]
  },
  {
    "id": 23,
    "slug": "monster-lcg-indoor",
    "cat": "lows",
    "name": "Monster LCG | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/440a8d0303-WhatsApp-Image-2026-03-30-at-02.03.25.jpeg",
    "images": [
      "assets/products/440a8d0303-WhatsApp-Image-2026-03-30-at-02.03.25.jpeg",
      "assets/products/39b9bd9519-WhatsApp-Image-2026-03-30-at-02.03.26.jpeg"
    ]
  },
  {
    "id": 24,
    "slug": "pink-runtz-indoor",
    "cat": "lows",
    "name": "Pink Runtz | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/0adb69649b-WhatsApp-Image-2026-03-27-at-01.30.18-1.jpeg",
    "images": [
      "assets/products/0adb69649b-WhatsApp-Image-2026-03-27-at-01.30.18-1.jpeg",
      "assets/products/1aa280de98-WhatsApp-Image-2026-03-27-at-01.30.19-1.jpeg"
    ]
  },
  {
    "id": 25,
    "slug": "cherry-poppers-indoor",
    "cat": "lows",
    "name": "Cherry Poppers | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/69927c28a3-WhatsApp-Image-2026-03-30-at-02.10.49.jpeg",
    "images": [
      "assets/products/69927c28a3-WhatsApp-Image-2026-03-30-at-02.10.49.jpeg",
      "assets/products/40aae1ea41-WhatsApp-Image-2026-03-30-at-02.10.49-1.jpeg"
    ]
  },
  {
    "id": 26,
    "slug": "sushi-indoor",
    "cat": "lows",
    "name": "Sushi | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/e01663e1fd-WhatsApp-Image-2026-03-30-at-02.13.40.jpeg",
    "images": [
      "assets/products/e01663e1fd-WhatsApp-Image-2026-03-30-at-02.13.40.jpeg",
      "assets/products/c99902a5fd-WhatsApp-Image-2026-03-30-at-02.13.40-1.jpeg"
    ]
  },
  {
    "id": 27,
    "slug": "deleted-scenes-indoor",
    "cat": "lows",
    "name": "Deleted Scenes | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/c596bc23be-WhatsApp-Image-2026-03-30-at-00.33.51.jpeg",
    "images": [
      "assets/products/c596bc23be-WhatsApp-Image-2026-03-30-at-00.33.51.jpeg",
      "assets/products/4fc99559dd-WhatsApp-Image-2026-03-30-at-00.33.52.jpeg"
    ]
  },
  {
    "id": 28,
    "slug": "gumbo-cherries-indoor",
    "cat": "lows",
    "name": "Gumbo Cherries | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/d7a6150ac3-WhatsApp-Image-2026-03-30-at-02.16.52.jpeg",
    "images": [
      "assets/products/d7a6150ac3-WhatsApp-Image-2026-03-30-at-02.16.52.jpeg",
      "assets/products/fd2b4f4fd3-WhatsApp-Image-2026-03-30-at-02.16.53.jpeg"
    ]
  },
  {
    "id": 29,
    "slug": "rainbow-zangria-indoor",
    "cat": "lows",
    "name": "Rainbow Zangria | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/c5ae824c9b-WhatsApp-Image-2026-03-29-at-23.32.26-2.jpeg",
    "images": [
      "assets/products/c5ae824c9b-WhatsApp-Image-2026-03-29-at-23.32.26-2.jpeg",
      "assets/products/b414f3a21d-WhatsApp-Image-2026-03-29-at-23.32.26-1.jpeg"
    ]
  },
  {
    "id": 30,
    "slug": "trap-fuel-indoor",
    "cat": "lows",
    "name": "Trap Fuel | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/b414701aaf-WhatsApp-Image-2026-03-29-at-23.29.22-1.jpeg",
    "images": [
      "assets/products/b414701aaf-WhatsApp-Image-2026-03-29-at-23.29.22-1.jpeg",
      "assets/products/888bf40b1b-WhatsApp-Image-2026-03-29-at-23.29.22.jpeg"
    ]
  },
  {
    "id": 31,
    "slug": "atomic-belts-indoor",
    "cat": "lows",
    "name": "Atomic Belts | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/c7a51eb655-WhatsApp-Image-2026-03-29-at-23.37.42-1-1.jpeg",
    "images": [
      "assets/products/c7a51eb655-WhatsApp-Image-2026-03-29-at-23.37.42-1-1.jpeg"
    ]
  },
  {
    "id": 32,
    "slug": "scented-marker-indoor",
    "cat": "lows",
    "name": "Scented Marker | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/56ba84522d-WhatsApp-Image-2026-03-29-at-22.43.21.jpeg",
    "images": [
      "assets/products/56ba84522d-WhatsApp-Image-2026-03-29-at-22.43.21.jpeg",
      "assets/products/42f667999c-WhatsApp-Image-2026-03-29-at-22.43.21-1.jpeg"
    ]
  },
  {
    "id": 33,
    "slug": "pineapple-fruz-x-permanent-marker-indoor",
    "cat": "lows",
    "name": "Pineapple Fruz x Permanent Marker | Lows",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/d96fd2eea6-WhatsApp-Image-2026-03-27-at-03.04.18.jpeg",
    "images": [
      "assets/products/d96fd2eea6-WhatsApp-Image-2026-03-27-at-03.04.18.jpeg"
    ]
  },
  {
    "id": 34,
    "slug": "candy-ethos-exotic-indoor",
    "cat": "lows",
    "name": "Candy Ethos | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/4a1659b162-WhatsApp-Image-2026-03-30-at-02.23.13.jpeg",
    "images": [
      "assets/products/4a1659b162-WhatsApp-Image-2026-03-30-at-02.23.13.jpeg",
      "assets/products/fa36b6dacc-WhatsApp-Image-2026-03-30-at-02.23.13-1-1.jpeg"
    ]
  },
  {
    "id": 35,
    "slug": "permanent-marker",
    "cat": "lows",
    "name": "Permanent Marker | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/f9ba8a80c6-WhatsApp-Image-2026-03-31-at-05.38.10.jpeg",
    "images": [
      "assets/products/f9ba8a80c6-WhatsApp-Image-2026-03-31-at-05.38.10.jpeg",
      "assets/products/3fecf261ef-WhatsApp-Image-2026-03-31-at-05.38.11.jpeg"
    ]
  },
  {
    "id": 36,
    "slug": "og-kush",
    "cat": "lows",
    "name": "OG Kush | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/3cd6e85c8f-WhatsApp-Image-2026-03-31-at-05.34.17-1.jpeg",
    "images": [
      "assets/products/3cd6e85c8f-WhatsApp-Image-2026-03-31-at-05.34.17-1.jpeg",
      "assets/products/2026bd77b4-WhatsApp-Image-2026-03-31-at-05.34.17.jpeg"
    ]
  },
  {
    "id": 37,
    "slug": "ice-cream-cake",
    "cat": "lows",
    "name": "Ice Cream Cake | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a2e77389b5-WhatsApp-Image-2026-03-31-at-05.28.53-1.jpeg",
    "images": [
      "assets/products/a2e77389b5-WhatsApp-Image-2026-03-31-at-05.28.53-1.jpeg",
      "assets/products/e64835d655-WhatsApp-Image-2026-03-31-at-05.28.53.jpeg"
    ]
  },
  {
    "id": 38,
    "slug": "super-boof",
    "cat": "lows",
    "name": "Super Boof | Lows",
    "price": 550,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/75353d7431-WhatsApp-Image-2026-03-31-at-05.05.44.jpeg",
    "images": [
      "assets/products/75353d7431-WhatsApp-Image-2026-03-31-at-05.05.44.jpeg",
      "assets/products/4c7d54876d-WhatsApp-Image-2026-03-31-at-05.05.45.jpeg"
    ]
  },
  {
    "id": 39,
    "slug": "ice-chain-gelato-mixed-light",
    "cat": "zaa",
    "name": "Ice Chain Gelato | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/60d480f690-WhatsApp-Image-2026-03-27-at-03.05.29.jpeg",
    "images": [
      "assets/products/60d480f690-WhatsApp-Image-2026-03-27-at-03.05.29.jpeg",
      "assets/products/718cecb1e7-WhatsApp-Image-2026-03-27-at-03.05.29-1.jpeg"
    ]
  },
  {
    "id": 40,
    "slug": "sour-skittlez-mixed-light",
    "cat": "zaa",
    "name": "Sour Skittlez | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/d08bcc83eb-WhatsApp-Image-2026-03-29-at-18.10.34.jpeg",
    "images": [
      "assets/products/d08bcc83eb-WhatsApp-Image-2026-03-29-at-18.10.34.jpeg",
      "assets/products/a50814d65f-WhatsApp-Image-2026-03-29-at-17.38.10.jpeg"
    ]
  },
  {
    "id": 41,
    "slug": "bubba-kush-mixed-light",
    "cat": "zaa",
    "name": "Bubba Kush | Zaa",
    "price": 600,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/24c2578ddf-WhatsApp-Image-2026-03-30-at-03.22.11-1.jpeg",
    "images": [
      "assets/products/24c2578ddf-WhatsApp-Image-2026-03-30-at-03.22.11-1.jpeg",
      "assets/products/bebfe5aeba-WhatsApp-Image-2026-03-30-at-03.22.11.jpeg"
    ]
  },
  {
    "id": 42,
    "slug": "ultra-violet-mixed-light",
    "cat": "zaa",
    "name": "Ultra Violet | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/56b301119b-WhatsApp-Image-2026-03-30-at-03.17.45-1.jpeg",
    "images": [
      "assets/products/56b301119b-WhatsApp-Image-2026-03-30-at-03.17.45-1.jpeg",
      "assets/products/87f4dca060-WhatsApp-Image-2026-03-30-at-03.17.45.jpeg"
    ]
  },
  {
    "id": 43,
    "slug": "modified-grapez-mixed-light",
    "cat": "zaa",
    "name": "Modified Grapez | Zaa",
    "price": 650,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/aba772a0ae-WhatsApp-Image-2026-03-22-at-21.29.45.jpeg",
    "images": [
      "assets/products/aba772a0ae-WhatsApp-Image-2026-03-22-at-21.29.45.jpeg",
      "assets/products/727d39dfad-WhatsApp-Image-2026-03-22-at-21.29.45-1.jpeg"
    ]
  },
  {
    "id": 44,
    "slug": "animal-mintz-mixed-light",
    "cat": "zaa",
    "name": "Animal Mintz | Zaa",
    "price": 660,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/dc87016c2a-WhatsApp-Image-2026-03-30-at-03.34.18.jpeg",
    "images": [
      "assets/products/dc87016c2a-WhatsApp-Image-2026-03-30-at-03.34.18.jpeg",
      "assets/products/a83a0fa15d-WhatsApp-Image-2026-03-30-at-03.34.17.jpeg"
    ]
  },
  {
    "id": 45,
    "slug": "zoonami-indoor",
    "cat": "zaa",
    "name": "Zoonami | Zaa",
    "price": 600,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/b858e9b529-WhatsApp-Image-2026-03-29-at-23.22.37.jpeg",
    "images": [
      "assets/products/b858e9b529-WhatsApp-Image-2026-03-29-at-23.22.37.jpeg",
      "assets/products/6ff66d3045-WhatsApp-Image-2026-03-29-at-23.22.36.jpeg"
    ]
  },
  {
    "id": 46,
    "slug": "blue-ritz-indoor",
    "cat": "zaa",
    "name": "Blue Ritz | Zaa",
    "price": 600,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/b78389ba42-WhatsApp-Image-2026-03-29-at-23.26.54.jpeg",
    "images": [
      "assets/products/b78389ba42-WhatsApp-Image-2026-03-29-at-23.26.54.jpeg",
      "assets/products/c04079da96-WhatsApp-Image-2026-03-29-at-23.26.54-1.jpeg"
    ]
  },
  {
    "id": 47,
    "slug": "berry-latto-pop-indoor",
    "cat": "zaa",
    "name": "Berry Latto Pop | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/cbf50355e0-WhatsApp-Image-2026-03-22-at-22.28.46.jpeg",
    "images": [
      "assets/products/cbf50355e0-WhatsApp-Image-2026-03-22-at-22.28.46.jpeg"
    ]
  },
  {
    "id": 48,
    "slug": "italian-candy-indoor",
    "cat": "zaa",
    "name": "Italian Candy | Zaa",
    "price": 600,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/9ed0f2d923-WhatsApp-Image-2026-03-27-at-02.54.06-1.jpeg",
    "images": [
      "assets/products/9ed0f2d923-WhatsApp-Image-2026-03-27-at-02.54.06-1.jpeg"
    ]
  },
  {
    "id": 49,
    "slug": "pink-guava-runtz-indoor",
    "cat": "zaa",
    "name": "Pink Guava Runtz | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/56d2080407-WhatsApp-Image-2026-03-22-at-22.31.12.jpeg",
    "images": [
      "assets/products/56d2080407-WhatsApp-Image-2026-03-22-at-22.31.12.jpeg",
      "assets/products/a290897b09-WhatsApp-Image-2026-03-22-at-22.31.12-1.jpeg"
    ]
  },
  {
    "id": 50,
    "slug": "rainbow-candy-za-indoor",
    "cat": "zaa",
    "name": "Rainbow Candy Za | Zaa",
    "price": 650,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/bf0674671e-WhatsApp-Image-2026-03-22-at-22.35.46.jpeg",
    "images": [
      "assets/products/bf0674671e-WhatsApp-Image-2026-03-22-at-22.35.46.jpeg"
    ]
  },
  {
    "id": 51,
    "slug": "last-spooky-box-indoor",
    "cat": "zaa",
    "name": "Last Spooky Box | Zaa",
    "price": 600,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/7fcda6332a-WhatsApp-Image-2026-03-27-at-03.02.08.jpeg",
    "images": [
      "assets/products/7fcda6332a-WhatsApp-Image-2026-03-27-at-03.02.08.jpeg"
    ]
  },
  {
    "id": 52,
    "slug": "wedding-cake-indoor",
    "cat": "zaa",
    "name": "Wedding Cake | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/e35860e95c-WhatsApp-Image-2026-03-29-at-23.14.16.jpeg",
    "images": [
      "assets/products/e35860e95c-WhatsApp-Image-2026-03-29-at-23.14.16.jpeg",
      "assets/products/0b925f2dbf-WhatsApp-Image-2026-03-29-at-23.14.17.jpeg"
    ]
  },
  {
    "id": 53,
    "slug": "pineapple-express-indoor",
    "cat": "zaa",
    "name": "Pineapple Express | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/243fec0ac2-WhatsApp-Image-2026-03-27-at-03.06.17.jpeg",
    "images": [
      "assets/products/243fec0ac2-WhatsApp-Image-2026-03-27-at-03.06.17.jpeg"
    ]
  },
  {
    "id": 54,
    "slug": "purple-smalls-exotic-indoor",
    "cat": "zaa",
    "name": "Purple Smalls | Zaa",
    "price": 700,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/cb25f13f7d-WhatsApp-Image-2026-03-30-at-02.56.32-1.jpeg",
    "images": [
      "assets/products/cb25f13f7d-WhatsApp-Image-2026-03-30-at-02.56.32-1.jpeg",
      "assets/products/47c6f8c1b8-WhatsApp-Image-2026-03-30-at-02.56.32.jpeg"
    ]
  },
  {
    "id": 55,
    "slug": "cures-exotic-indoor",
    "cat": "zaa",
    "name": "Cures | Zaa",
    "price": 600,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/e2da9ddac0-WhatsApp-Image-2026-03-30-at-02.59.00.jpeg",
    "images": [
      "assets/products/e2da9ddac0-WhatsApp-Image-2026-03-30-at-02.59.00.jpeg",
      "assets/products/da1354bef0-WhatsApp-Image-2026-03-30-at-02.59.00-1.jpeg"
    ]
  },
  {
    "id": 56,
    "slug": "gelato-41",
    "cat": "zaa",
    "name": "Gelato #41 | Zaa",
    "price": 650,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/cbe2cacbf0-WhatsApp-Image-2026-03-31-at-05.45.48.jpeg",
    "images": [
      "assets/products/cbe2cacbf0-WhatsApp-Image-2026-03-31-at-05.45.48.jpeg",
      "assets/products/7eb0019157-WhatsApp-Image-2026-03-31-at-05.45.47.jpeg"
    ]
  },
  {
    "id": 57,
    "slug": "promethzine-mixed-light",
    "cat": "indoors",
    "name": "Promethzine | Indoors",
    "price": 750,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a4e2dcc55e-WhatsApp-Image-2026-03-27-at-01.17.35.jpeg",
    "images": [
      "assets/products/a4e2dcc55e-WhatsApp-Image-2026-03-27-at-01.17.35.jpeg",
      "assets/products/2dc2114090-WhatsApp-Image-2026-03-27-at-01.17.35-1.jpeg"
    ]
  },
  {
    "id": 58,
    "slug": "gorilla-glue-4-indoor",
    "cat": "indoors",
    "name": "Gorilla Glue #4 | Indoors",
    "price": 950,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/0481c1f673-WhatsApp-Image-2026-03-31-at-05.03.07-2.jpeg",
    "images": [
      "assets/products/0481c1f673-WhatsApp-Image-2026-03-31-at-05.03.07-2.jpeg"
    ]
  },
  {
    "id": 59,
    "slug": "blue-cookies-indoor",
    "cat": "indoors",
    "name": "Blue Cookies | Indoors",
    "price": 750,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/814b770d61-WhatsApp-Image-2026-03-30-at-02.20.16.jpeg",
    "images": [
      "assets/products/814b770d61-WhatsApp-Image-2026-03-30-at-02.20.16.jpeg",
      "assets/products/3eda8d0b5c-WhatsApp-Image-2026-03-30-at-02.20.16-1.jpeg"
    ]
  },
  {
    "id": 60,
    "slug": "gelonade-indoor",
    "cat": "indoors",
    "name": "Gelonade | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/857fe39f80-WhatsApp-Image-2026-03-27-at-02.08.06-1.jpeg",
    "images": [
      "assets/products/857fe39f80-WhatsApp-Image-2026-03-27-at-02.08.06-1.jpeg",
      "assets/products/cf34f67441-WhatsApp-Image-2026-03-27-at-02.08.07.jpeg"
    ]
  },
  {
    "id": 61,
    "slug": "novelty-candy-indoor",
    "cat": "indoors",
    "name": "Novelty Candy | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/b9d9330c61-WhatsApp-Image-2026-03-22-at-22.26.10-1.jpeg",
    "images": [
      "assets/products/b9d9330c61-WhatsApp-Image-2026-03-22-at-22.26.10-1.jpeg"
    ]
  },
  {
    "id": 62,
    "slug": "blueberry-glaze-zonuts-indoor",
    "cat": "indoors",
    "name": "Blueberry Glaze Zonuts | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/12d55f530f-WhatsApp-Image-2026-03-22-at-22.27.53.jpeg",
    "images": [
      "assets/products/12d55f530f-WhatsApp-Image-2026-03-22-at-22.27.53.jpeg"
    ]
  },
  {
    "id": 63,
    "slug": "truffle-candy-runtz-indoor",
    "cat": "indoors",
    "name": "Truffle Candy Runtz | Indoors",
    "price": 750,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/0276921257-WhatsApp-Image-2026-03-27-at-02.56.48.jpeg",
    "images": [
      "assets/products/0276921257-WhatsApp-Image-2026-03-27-at-02.56.48.jpeg"
    ]
  },
  {
    "id": 64,
    "slug": "snow-storm-indoor",
    "cat": "indoors",
    "name": "Snow Storm | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/0c5e0219f0-WhatsApp-Image-2026-03-22-at-22.45.05.jpeg",
    "images": [
      "assets/products/0c5e0219f0-WhatsApp-Image-2026-03-22-at-22.45.05.jpeg"
    ]
  },
  {
    "id": 65,
    "slug": "blue-dream-indoor",
    "cat": "indoors",
    "name": "Blue Dream | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/8858fe955c-WhatsApp-Image-2026-03-22-at-22.50.10.jpeg",
    "images": [
      "assets/products/8858fe955c-WhatsApp-Image-2026-03-22-at-22.50.10.jpeg"
    ]
  },
  {
    "id": 66,
    "slug": "platinum-cherriez-exotic-indoor",
    "cat": "indoors",
    "name": "Platinum Cherriez | Indoors",
    "price": 750,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/4f060c7e3e-WhatsApp-Image-2026-03-22-at-22.27.20.jpeg",
    "images": [
      "assets/products/4f060c7e3e-WhatsApp-Image-2026-03-22-at-22.27.20.jpeg"
    ]
  },
  {
    "id": 67,
    "slug": "blue-nerds-exotic-indoor",
    "cat": "indoors",
    "name": "Blue Nerds | Indoors",
    "price": 900,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/88ca1276c0-WhatsApp-Image-2026-03-27-at-01.14.14.jpeg",
    "images": [
      "assets/products/88ca1276c0-WhatsApp-Image-2026-03-27-at-01.14.14.jpeg",
      "assets/products/93d3150321-WhatsApp-Image-2026-03-27-at-01.14.15.jpeg"
    ]
  },
  {
    "id": 68,
    "slug": "bolo-runtz-green-exotic-indoor",
    "cat": "indoors",
    "name": "Bolo Runtz Green | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/bb2c97d0f6-WhatsApp-Image-2026-03-27-at-01.12.59.jpeg",
    "images": [
      "assets/products/bb2c97d0f6-WhatsApp-Image-2026-03-27-at-01.12.59.jpeg",
      "assets/products/3e8b27763e-WhatsApp-Image-2026-03-27-at-01.12.59-1.jpeg"
    ]
  },
  {
    "id": 69,
    "slug": "larry-bird-exotic-indoor",
    "cat": "indoors",
    "name": "Larry Bird | Indoors",
    "price": 900,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/33a83bd654-WhatsApp-Image-2026-03-27-at-01.27.32.jpeg",
    "images": [
      "assets/products/33a83bd654-WhatsApp-Image-2026-03-27-at-01.27.32.jpeg",
      "assets/products/b9b594ab2b-WhatsApp-Image-2026-03-27-at-01.27.33.jpeg"
    ]
  },
  {
    "id": 70,
    "slug": "zamosa-green-exotic-indoor",
    "cat": "indoors",
    "name": "Zamosa Green | Indoors",
    "price": 850,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/f297a3a70f-WhatsApp-Image-2026-03-27-at-01.13.37.jpeg",
    "images": [
      "assets/products/f297a3a70f-WhatsApp-Image-2026-03-27-at-01.13.37.jpeg"
    ]
  },
  {
    "id": 71,
    "slug": "runtz",
    "cat": "indoors",
    "name": "Runtz | Indoors",
    "price": 750,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/58fae7f7e7-WhatsApp-Image-2026-03-31-at-05.49.46-1.jpeg",
    "images": [
      "assets/products/58fae7f7e7-WhatsApp-Image-2026-03-31-at-05.49.46-1.jpeg",
      "assets/products/09db64b51b-WhatsApp-Image-2026-03-31-at-05.49.46.jpeg"
    ]
  },
  {
    "id": 72,
    "slug": "wedding-cake",
    "cat": "indoors",
    "name": "Wedding Cake | Indoors",
    "price": 750,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/0d22c19e07-WhatsApp-Image-2026-03-31-at-05.48.14-1.jpeg",
    "images": [
      "assets/products/0d22c19e07-WhatsApp-Image-2026-03-31-at-05.48.14-1.jpeg",
      "assets/products/c99ba76d32-WhatsApp-Image-2026-03-31-at-05.48.14.jpeg"
    ]
  },
  {
    "id": 73,
    "slug": "lemon-cherry-gelato",
    "cat": "indoors",
    "name": "Lemon Cherry Gelato | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/d0a5726987-WhatsApp-Image-2026-03-31-at-05.44.08-1.jpeg",
    "images": [
      "assets/products/d0a5726987-WhatsApp-Image-2026-03-31-at-05.44.08-1.jpeg",
      "assets/products/3088ab3db2-WhatsApp-Image-2026-03-31-at-05.44.08.jpeg"
    ]
  },
  {
    "id": 74,
    "slug": "apples-and-bananas",
    "cat": "indoors",
    "name": "Apples and Bananas | Indoors",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a1cdd6be0f-WhatsApp-Image-2026-03-31-at-05.35.53.jpeg",
    "images": [
      "assets/products/a1cdd6be0f-WhatsApp-Image-2026-03-31-at-05.35.53.jpeg",
      "assets/products/68f890f86b-WhatsApp-Image-2026-03-31-at-05.35.53-1.jpeg"
    ]
  },
  {
    "id": 75,
    "slug": "girl-scout-cookies",
    "cat": "indoors",
    "name": "Girl Scout Cookies | Indoors",
    "price": 850,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/798c80083f-WhatsApp-Image-2026-03-31-at-05.32.24-1.jpeg",
    "images": [
      "assets/products/798c80083f-WhatsApp-Image-2026-03-31-at-05.32.24-1.jpeg",
      "assets/products/c069ccaf18-WhatsApp-Image-2026-03-31-at-05.32.24.jpeg"
    ]
  },
  {
    "id": 76,
    "slug": "sour-diesel",
    "cat": "indoors",
    "name": "Sour Diesel | Indoors",
    "price": 950,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/ff15c7959c-WhatsApp-Image-2026-03-31-at-05.26.09-1.jpeg",
    "images": [
      "assets/products/ff15c7959c-WhatsApp-Image-2026-03-31-at-05.26.09-1.jpeg",
      "assets/products/e474d0f42f-WhatsApp-Image-2026-03-31-at-05.26.09.jpeg"
    ]
  },
  {
    "id": 77,
    "slug": "mimosa",
    "cat": "indoors",
    "name": "Mimosa | Indoors",
    "price": 850,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/28aa2233f7-WhatsApp-Image-2026-03-31-at-05.20.30-1.jpeg",
    "images": [
      "assets/products/28aa2233f7-WhatsApp-Image-2026-03-31-at-05.20.30-1.jpeg",
      "assets/products/80af8e947e-WhatsApp-Image-2026-03-31-at-05.20.30.jpeg"
    ]
  },
  {
    "id": 78,
    "slug": "gorilla-glue-4",
    "cat": "indoors",
    "name": "Gorilla Glue #4 | Indoors",
    "price": 950,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/eedb6c33bf-WhatsApp-Image-2026-03-31-at-05.17.37.jpeg",
    "images": [
      "assets/products/eedb6c33bf-WhatsApp-Image-2026-03-31-at-05.17.37.jpeg",
      "assets/products/d04c00aa59-WhatsApp-Image-2026-03-31-at-05.17.38.jpeg"
    ]
  },
  {
    "id": 79,
    "slug": "cereal-milk",
    "cat": "indoors",
    "name": "Cereal Milk | Indoors",
    "price": 850,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/279799ef30-WhatsApp-Image-2026-03-31-at-05.10.29.jpeg",
    "images": [
      "assets/products/279799ef30-WhatsApp-Image-2026-03-31-at-05.10.29.jpeg",
      "assets/products/93cc8b8f9c-WhatsApp-Image-2026-03-31-at-05.10.30.jpeg"
    ]
  },
  {
    "id": 80,
    "slug": "slurricane",
    "cat": "indoors",
    "name": "Slurricane | Indoors",
    "price": 950,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/0481c1f673-WhatsApp-Image-2026-03-31-at-05.03.07-2.jpeg",
    "images": [
      "assets/products/0481c1f673-WhatsApp-Image-2026-03-31-at-05.03.07-2.jpeg",
      "assets/products/0cc28e13a1-WhatsApp-Image-2026-03-31-at-05.03.07-2-1.jpeg"
    ]
  },
  {
    "id": 81,
    "slug": "last-badder-box-concentrate",
    "cat": "indoors",
    "name": "Last Badder Box -- Concentrate | Indoors",
    "price": 750,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/c85d8fd3fa-WhatsApp-Image-2026-03-27-at-02.59.35-1.jpeg",
    "images": [
      "assets/products/c85d8fd3fa-WhatsApp-Image-2026-03-27-at-02.59.35-1.jpeg",
      "assets/products/a812bd104c-WhatsApp-Image-2026-03-27-at-02.59.35.jpeg"
    ]
  },
  {
    "id": 82,
    "slug": "sunset-sherbert-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "Sunset Sherbert | Exotics Indoors",
    "price": 1500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a848c73428-WhatsApp-Image-2026-03-27-at-01.52.37.jpeg",
    "images": [
      "assets/products/a848c73428-WhatsApp-Image-2026-03-27-at-01.52.37.jpeg",
      "assets/products/bbf569a11b-WhatsApp-Image-2026-03-27-at-01.51.57.jpeg"
    ]
  },
  {
    "id": 83,
    "slug": "white-himalaya-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "White Himalaya | Exotics Indoors",
    "price": 1500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/cf401b8070-WhatsApp-Image-2026-03-31-at-05.08.34-1.jpeg",
    "images": [
      "assets/products/cf401b8070-WhatsApp-Image-2026-03-31-at-05.08.34-1.jpeg"
    ]
  },
  {
    "id": 84,
    "slug": "purple-mochi-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "Purple Mochi | Exotics Indoors",
    "price": 1450,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/2546dbf783-WhatsApp-Image-2026-03-27-at-01.57.44-1.jpeg",
    "images": [
      "assets/products/2546dbf783-WhatsApp-Image-2026-03-27-at-01.57.44-1.jpeg",
      "assets/products/11900fc783-WhatsApp-Image-2026-03-27-at-01.57.44-2.jpeg"
    ]
  },
  {
    "id": 85,
    "slug": "oreoz-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "Oreoz | Exotics Indoors",
    "price": 1400,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/cf401b8070-WhatsApp-Image-2026-03-31-at-05.08.34-1.jpeg",
    "images": [
      "assets/products/cf401b8070-WhatsApp-Image-2026-03-31-at-05.08.34-1.jpeg"
    ]
  },
  {
    "id": 86,
    "slug": "mac-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "MAC | Exotics Indoors",
    "price": 1400,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/1eaf1b28de-WhatsApp-Image-2026-03-27-at-02.05.17.jpeg",
    "images": [
      "assets/products/1eaf1b28de-WhatsApp-Image-2026-03-27-at-02.05.17.jpeg",
      "assets/products/a12fed6abb-WhatsApp-Image-2026-03-27-at-02.05.17-1.jpeg"
    ]
  },
  {
    "id": 87,
    "slug": "uncle-snoop-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "Uncle Snoop | Exotics Indoors",
    "price": 1500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/6fc208efb6-WhatsApp-Image-2026-03-27-at-02.06.04.jpeg",
    "images": [
      "assets/products/6fc208efb6-WhatsApp-Image-2026-03-27-at-02.06.04.jpeg",
      "assets/products/9af31289b0-WhatsApp-Image-2026-03-27-at-02.06.04-1.jpeg"
    ]
  },
  {
    "id": 88,
    "slug": "blackberry-kush-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "Blackberry Kush | Exotics Indoors",
    "price": 1500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/2adaaab41a-WhatsApp-Image-2026-03-22-at-21.57.46.jpeg",
    "images": [
      "assets/products/2adaaab41a-WhatsApp-Image-2026-03-22-at-21.57.46.jpeg"
    ]
  },
  {
    "id": 89,
    "slug": "silverback-gorilla-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "Silverback Gorilla | Exotics Indoors",
    "price": 1400,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/04ab9438f8-WhatsApp-Image-2026-03-30-at-02.52.44-1.jpeg",
    "images": [
      "assets/products/04ab9438f8-WhatsApp-Image-2026-03-30-at-02.52.44-1.jpeg",
      "assets/products/4136a586a0-WhatsApp-Image-2026-03-30-at-02.52.44-2.jpeg"
    ]
  },
  {
    "id": 90,
    "slug": "berry-blast-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "Berry Blast | Exotics Indoors",
    "price": 1000,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/679315d4d8-WhatsApp-Image-2026-03-27-at-01.15.43.jpeg",
    "images": [
      "assets/products/679315d4d8-WhatsApp-Image-2026-03-27-at-01.15.43.jpeg",
      "assets/products/fcc1d884dc-WhatsApp-Image-2026-03-27-at-01.15.43-1.jpeg"
    ]
  },
  {
    "id": 91,
    "slug": "bx-1-exotic-indoor",
    "cat": "exotics-indoors",
    "name": "BX-1 | Exotics Indoors",
    "price": 1000,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/13494b70dd-WhatsApp-Image-2026-03-27-at-01.16.20.jpeg",
    "images": [
      "assets/products/13494b70dd-WhatsApp-Image-2026-03-27-at-01.16.20.jpeg"
    ]
  },
  {
    "id": 92,
    "slug": "blue-dream",
    "cat": "exotics-indoors",
    "name": "Blue Dream | Exotics Indoors",
    "price": 1000,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/e360c83123-WhatsApp-Image-2026-03-31-at-05.42.04.jpeg",
    "images": [
      "assets/products/e360c83123-WhatsApp-Image-2026-03-31-at-05.42.04.jpeg",
      "assets/products/b2635bd3bf-WhatsApp-Image-2026-03-31-at-05.42.04-1.jpeg"
    ]
  },
  {
    "id": 93,
    "slug": "granddaddy-purple",
    "cat": "exotics-indoors",
    "name": "Granddaddy Purple | Exotics Indoors",
    "price": 1500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/86986682b5-WhatsApp-Image-2026-03-31-at-05.24.08-1.jpeg",
    "images": [
      "assets/products/86986682b5-WhatsApp-Image-2026-03-31-at-05.24.08-1.jpeg",
      "assets/products/36bd48ce5d-WhatsApp-Image-2026-03-31-at-05.24.08.jpeg"
    ]
  },
  {
    "id": 94,
    "slug": "pineapple-express",
    "cat": "exotics-indoors",
    "name": "Pineapple Express | Exotics Indoors",
    "price": 1200,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/bc9c92d886-WhatsApp-Image-2026-03-31-at-05.16.00.jpeg",
    "images": [
      "assets/products/bc9c92d886-WhatsApp-Image-2026-03-31-at-05.16.00.jpeg",
      "assets/products/d246737147-WhatsApp-Image-2026-03-31-at-05.16.00-1.jpeg"
    ]
  },
  {
    "id": 95,
    "slug": "biscotti",
    "cat": "exotics-indoors",
    "name": "Biscotti | Exotics Indoors",
    "price": 1200,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a2ddfd7a6a-WhatsApp-Image-2026-03-31-at-05.13.06.jpeg",
    "images": [
      "assets/products/a2ddfd7a6a-WhatsApp-Image-2026-03-31-at-05.13.06.jpeg",
      "assets/products/976aa9769c-WhatsApp-Image-2026-03-31-at-05.13.07.jpeg"
    ]
  },
  {
    "id": 96,
    "slug": "white-widow",
    "cat": "exotics-indoors",
    "name": "White Widow | Exotics Indoors",
    "price": 1200,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/cf401b8070-WhatsApp-Image-2026-03-31-at-05.08.34-1.jpeg",
    "images": [
      "assets/products/cf401b8070-WhatsApp-Image-2026-03-31-at-05.08.34-1.jpeg",
      "assets/products/3c1fc674ac-WhatsApp-Image-2026-03-31-at-05.08.34.jpeg"
    ]
  },
  {
    "id": 97,
    "slug": "new-bounty-box-snow-caps-exotic-indoor",
    "cat": "snow-cap",
    "name": "New Bounty Box Snow Caps | Snow Cap",
    "price": 900,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/62c892297b-WhatsApp-Image-2026-03-22-at-22.36.07.jpeg",
    "images": [
      "assets/products/62c892297b-WhatsApp-Image-2026-03-22-at-22.36.07.jpeg",
      "assets/products/a19a34cd1e-WhatsApp-Image-2026-03-22-at-22.36.06.jpeg"
    ]
  },
  {
    "id": 98,
    "slug": "candy-runtz-snow-caps-exotic-indoor",
    "cat": "snow-cap",
    "name": "Candy Runtz Snow Caps | Snow Cap",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/62c892297b-WhatsApp-Image-2026-03-22-at-22.36.07.jpeg",
    "images": [
      "assets/products/62c892297b-WhatsApp-Image-2026-03-22-at-22.36.07.jpeg",
      "assets/products/a19a34cd1e-WhatsApp-Image-2026-03-22-at-22.36.06.jpeg"
    ]
  },
  {
    "id": 99,
    "slug": "muun-moonrocks",
    "cat": "moon-rocks",
    "name": "Muun Moonrocks | Moon Rocks",
    "price": 800,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/46a2d5413b-WhatsApp-Image-2026-03-27-at-01.21.43.jpeg",
    "images": [
      "assets/products/46a2d5413b-WhatsApp-Image-2026-03-27-at-01.21.43.jpeg",
      "assets/products/ff15d7f4aa-WhatsApp-Image-2026-03-27-at-01.21.43-1.jpeg"
    ]
  },
  {
    "id": 100,
    "slug": "shrooms",
    "cat": "shrooms",
    "name": "Shrooms",
    "price": 500,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/99e8b70e4d-WhatsApp-Image-2026-03-27-at-01.28.34-1.jpeg",
    "images": [
      "assets/products/99e8b70e4d-WhatsApp-Image-2026-03-27-at-01.28.34-1.jpeg",
      "assets/products/85aab6a312-WhatsApp-Image-2026-03-27-at-01.28.34.jpeg"
    ]
  },
  {
    "id": 101,
    "slug": "premium-liquid-concentrate",
    "cat": "concentrates",
    "name": "Premium Liquid -- Concentrate | Lows",
    "price": 540,
    "unit": "/lb",
    "stock": "In Stock",
    "moq": "1 lb",
    "image": "assets/products/a92350075f-WhatsApp-Image-2026-03-30-at-03.42.29.jpeg",
    "images": [
      "assets/products/a92350075f-WhatsApp-Image-2026-03-30-at-03.42.29.jpeg"
    ]
  }
];
