const products = [
    {
      name: "FIXAČNÍ LANKO 0,8 MM (SILON)",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/100_v2.jpg",
      sku:900343,
      price: 3.89,
      countInStock: 15,
    },
    {
      name: "FIXAČNÍ KOLÍK 2,6 MM UNIVERSAL",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/101.jpg",
      sku:900340,
      price: 3.87,
      countInStock: 10,
    },
    {
      name: "ÁSKA VYTAHOVACÍ UNIVERSAL 5 X 0,14 MM",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/102.jpg",
      sku:900360,
      price: 14.86,
      countInStock: 10,
    },
    {
      name: "DRŽÁK ŘETÍZKU",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/103.jpg",
      sku:900339,
      price: 9.39,
      countInStock: 5,
    },
    {
      name: "FIXAČNÍ KOLÍK 3,2 MM",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/104.jpg",
      sku:900341,
      price: 	3.98,
      countInStock: 0,
    },
    {
      name: "SPOJKA ŘETÍZKU KLASICKÁ",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/105.jpg",
      sku:900363,
      price: 	4.65,
      countInStock: 4,
    },
    {
      name: "OVLÁDACÍ ŘETÍZEK 3,2 MM UNIVERSAL",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/106.jpg",
      sku:900357,
      price: 9.54,
      countInStock: 4,
    },
    {
      name: "RAMÍNKO STANDARD 127 MM",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/107.jpg",
      sku:900314,
      price: 	5.50,
      countInStock: 10,
    },
    {
      name: "KRYTKA ISOLINE PRAVÁ",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/108.jpg",
      sku:900354,
      price: 12.23,
      countInStock: 10,
    },
    {
      name: "KRYTKA ISOLINE LEVÁ",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/109.jpg",
      sku:900353,
      price: 12.23,
      countInStock: 10,
    },
    {
      name: "ZÁVAŽÍ LÁTKY 127 MM",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/110.jpg",
      sku:900327,
      price: 	11.80,
      countInStock: 10,
    },
    {
      name: "DRŽÁK TEXTILNÍ PÁSKY V DOLNÍM PROFILU",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/111.jpg",
      sku:900338,
      price: 8.26,
      countInStock: 10,
    },
    {
      name: "BOČNÍ KRYT DOLNÍHO PROFILU UNIVERSAL",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/112.jpg",
      sku:900330,
      price: 	6.26,
      countInStock: 10,
    },
    {
      name: "SPOJKA ŘETÍZKU KLEC",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/113.jpg",
      sku:900364,
      price: 4.96,
      countInStock: 10,
    },
    {
      name: "PRŮCHODKA FIXACE V HORNÍM PROFILU",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/114.jpg",
      sku:900361,
      price: 	2.63,
      countInStock: 10,
    },
    {
      name: "ŘETÍZEK SPODNÍ SPOJOVACÍ 127 MM",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/115.jpg",
      sku:900318,
      price: 	10.00,
      countInStock: 10,
    },
    {
      name: "SPOJKA ŘETÍZKU",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/116.jpg",
      sku:900321,
      price: 4.88,
      countInStock: 10,
    },
    {
      name: "ŽEBŘÍČEK, NOSIČ LAMEL UNIVERSAL",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/117.jpg",
      sku:900367,
      price: 11.36,
      countInStock: 10,
    },
    {
      name: "DRŽÁK PŘEVODOVKY ISOLINE PRAVÁ",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/118.jpg",
      sku:900426,
      price: 18.48,
      countInStock: 10,
    },
    {
      name: "DRŽÁK PŘEVODOVKY ISOLINE LEVÝ",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/119.jpg",
      sku:900428,
      price: 18.48,
      countInStock: 10,
    },
    {
      name: "RAMÍNKO STANDARD 89 MM",
      imageUrl:
      "https://infinite-headland-77957.herokuapp.com/images/nahradni/120.jpg",
      sku:900313,
      price: 5.00,
      countInStock: 10,
    },
    {
      name: "OZUBENÉ KOLEČKO PŘEVODOVKY ISOLINE",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/121.jpg",
      sku:900359,
      price: 	11.68,
      countInStock: 10,
    },
    {
      name: "ZÁVAŽÍ LÁTKY 89 MM",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/122.jpg",
      sku:900326,
      price: 10.00,
      countInStock: 10,
    },
    {
      name: "SPOJKA ŽEBŘÍČKU",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/123.jpg",
      sku:900365,
      price: 	5.85,
      countInStock: 10,
    },
    {
      name: "DISTANČNÍ PODLOŽKA ISOLINE",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/124.jpg",
      sku:900331,
      price: 8.47,
      countInStock: 10,
    },
    {
      name: "PROVÁZEK OVLÁDACÍ BÍLÝ",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/125.jpg",
      sku:900301,
      price: 9.68,
      countInStock: 10,
    },
    {
      name: "KLEC ŘETÍZKU ISOLINE",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/126.jpg",
      sku:900352,
      price: 10.68,
      countInStock: 10,
    },
    {
      name: "ŘETÍZEK SPODNÍ SPOJOVACÍ 89 MM",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/127.jpg",
      sku:900317,
      price: 	9.68,
      countInStock: 10,
    },
    {
      name: "FIXAČNÍ KROUŽEK POHYBU TŘÍBOKÉHO DRÁTU",
      imageUrl:
        "https://infinite-headland-77957.herokuapp.com/images/nahradni/128.jpg",
      sku:900342,
      price: 4.84,
      countInStock: 10,
    },
    
  ];
  
  module.exports = products;