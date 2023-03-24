class prodact {
  constructor(title, price, img, id, orders) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = id;
    this.orders = orders;
  }
}

let prodactArray = [
  (prodact1 = new prodact(
    "SweatyRocks Women's",
    25.89,
    "./prodact/1/1.jpg",
    0,
    1
  )),
  (prodact2 = new prodact(
    "Men's Powerblend Fleece Hoodie",
    90,
    "./prodact/2/2.png",
    1,
    1
  )),
  (prodact3 = new prodact(
    "Men's Allover Logo T-Shirt, Created for Macy's",
    80,
    "./prodact/3/3.tif",
    2,
    1
  )),
  (prodact4 = new prodact(
    "Men's 3-in-1 Jacket",
    300,
    "./prodact/4/4.tif",
    3,
    1
  )),
];

let BestSellesProdect = document.querySelectorAll(".BestSellesProdect");
let BestSellesProdectImg = document.querySelectorAll(".BestSellesProdectImg");
let BestSellesProdectTitle = document.querySelectorAll(
  ".BestSellesProdectTitle"
);

let BestSellesProdectPrice = document.querySelectorAll(
  ".BestSellesProdectPrice"
);

for (i = 0; i < prodactArray.length; i++) {
  BestSellesProdectImg[i].setAttribute("src", `${prodactArray[i].img}`);
  // Delete the number of extra characters
  let s = prodactArray[i].title;
 
  BestSellesProdectTitle[i].innerHTML = `${ s.substring(0, 50)}`
 
  
  BestSellesProdectPrice[i].innerHTML = prodactArray[i].price;
}

// initial Rating stars
const Rating = {
  0: 4,
  1: 4.3,
  2: 3,
  3: 1,
};

// Length of a JavaScript object Rating
let myObjectL = [];
for (t = 0; t < Object.keys(Rating).length; t++) {
  let addto = Rating[t];
  myObjectL.push(addto);
}

// total stars
const TotalStars = 5;

// Ran get Rating When Dom loads
document.addEventListener("DOMContentLoaded", getRatings);

// get Rating
function getRatings() {
  for (let rat = 0; rat < myObjectL.length; rat++) {
    const StarsPercent = (Rating[rat] / TotalStars) * 100;

    //Round to nearest 10
    const StarsPercentRound = `${Math.round(StarsPercent / 10) * 10}%`;

    // set width star-inner to Percent
    let stars_inner = document.querySelectorAll(".stars-inner");
    stars_inner[rat].style.width = StarsPercentRound;
  }
}

// cart

// let prodactArray = [
//   prodact1 = new prodact("SweatyRocks Women's", 25.89, "./prodact/1/1.jpg", 1),
//   prodact2 = new prodact("Men's Powerblend Fleece Hoodie", 90, "./prodact/2/2.png", 2),
//   prodact3 = new prodact("Men's Allover Logo T-Shirt, Created for Macy's", 80, "./prodact/3/3.tif", 3),
//   prodact4 = new prodact("Men's 3-in-1 Jacket", 300, "./prodact/4/4.tif", 4),
// ];

let addToCart = document.querySelectorAll(".addToCart");

// for add onclick PUSH to cartInclude
for (let c = 0; c < 4; c++) {
  addToCart[c].setAttribute("onclick", `addPUSH(${prodactArray[c].id})`);
}

//  function onclick icon cart
function addPUSH(id) {
  // Array cart Include PUSH to cartInclude
  if (localStorage.getItem(prodactArray[id].id)) {
    // get Retrieves localStorage
    let Retrieves = localStorage.getItem(`${prodactArray[`${id}`].id}`);
    // Retrieves to Object
    let RetrievesObj = JSON.parse(Retrieves);
    // cheak orders one or no
    if (RetrievesObj.orders >= 1) {
      // Object change orders to pluse one
      RetrievesObj.orders += 1;
      console.info("orders++");

      let RetrievesStringify = JSON.stringify(RetrievesObj);
      //    Item update in localStorage
      localStorage.setItem(`${prodactArray[`${id}`].id}`, RetrievesStringify);
    }

    console.info("exis");
  } else {
    // Add the element if it does not exist Array cartInclude
    let tostringifyS = JSON.stringify(prodactArray[id]);

    localStorage.setItem(`${prodactArray[`${id}`].id}`, tostringifyS);
  }

  // call function cart Number Span UPdata
  cartNumberSpanUPdata();
}

// cart Number span
let cartNumberSpan = document.getElementsByClassName("cart-Number");
let cartNumber = `${localStorage.length ?? "0"} `;
function cartNumberSpanUPdata() {
  cartNumberSpan[0].innerHTML = `${cartNumber}`;
}
window.addEventListener("DOMContentLoaded", cartNumberSpanUPdata());
// add to localStorage

// Featured Products Array

let FeaturedProducts = [
  (prodact0 = new prodact(
    "SweatyRocks Women's",
    25.89,
    "./prodact/1/1.jpg",
    0,
    1
  )),
  (prodact1 = new prodact(
    "Men's Powerblend Fleece Hoodie",
    90,
    "./prodact/2/2.png",
    1,
    1
  )),
  (prodact2 = new prodact(
    "Men's Allover Logo T-Shirt, Created for Macy's",
    80,
    "./prodact/3/3.tif",
    2,
    1
  )),
  (prodact3 = new prodact(
    "Men's 3-in-1 Jacket",
    300,
    "./prodact/4/4.tif",
    3,
    1
  )),
  (prodact4 = new prodact(
    "CHEREEKI Wireless Controller for Nintendo Switch",
    16,
    "./prodact/5/5.jpg",
    4,
    1
  )),
  (prodact5 = new prodact(
    "Roblox Gift Card - 800 Robux [Includes Exclusive Virtual Item] [Online Game Code]",
    10,
    "./prodact/6/6.jpg",
    5,
    1
  )),
  (prodact6 = new prodact(
    "Dell SE2422HX 24 Inch Full HD (1920 x 1080) Monitor",
    110,
    "./prodact/7/7.jpg",
    6,
    1
  )),
  (prodact7 = new prodact(
    "Nintendo eShop Card | 15 GBP voucher | Download Code | UK only | Switch",
    15,
    "./prodact/8/8.jpg",
    7,
    1
  )),
  (prodact8 = new prodact(
    "A Way Out [PC Code - Origin]",
    4.99,
    "./prodact/9/9.jpg",
    8,
    1
  )),
  (prodact9 = new prodact(
    "Minecraft (Nintendo Switch)",
    19.99,
    "./prodact/10/10.jpg",
    9,
    1
  )),
  (prodact10 = new prodact(
    "Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life, for PC, Laptop, QWERTY UK English Layout - Black",
    17.99,
    "./prodact/11/11.jpg",
    10,
    1
  )),
  (prodact11 = new prodact(
    "Google Play gift code - give the gift of games, apps and more (Email Delivery - UK Customers Only) ",
    100,
    "./prodact/12/12.jpg",
    11,
    1
  )),
  (prodact12 = new prodact(
    "Did I Ever Tell You This? Hardcover – 23 Mar. 2023",
    20,
    "./prodact/13/13.jpg",
    12,
    1
  )),
  (prodact13 = new prodact(
    "Pipishell TV Wall Bracket Mount for Most 37-90 Inch TVs, Swivels Tilts TV Bracket with 73.8cm Long Extension Arm, TV Wall Mount Fits 16-24 Inch Studs Max VESA 800x400mm Load Capacity 60kg",
    95.99,
    "./prodact/14/14.jpg",
    13,
    1
  )),
  (prodact14 = new prodact(
    "ASUS Vivobook 15 X515JA 15.6 Full HD Laptop (Intel Core i3, 8GB RAM, 256GB PCIe SSD, Windows 11), Silver (X515JA-EJ2133W)    ",
    301.99,
    "./prodact/15/15.jpg",
    14,
    1
  )),
  (prodact15 = new prodact(
    "Roll over image to zoom in SanDisk 128GB Extreme PRO SDXC card + RescuePRO Deluxe, up to 200MB/s, UHS-I, Class 10, U3, V30 ",
    31.99,
    "./prodact/16/16.jpg",
    15,
    1
  )),
  (prodact16 = new prodact(
    "OHO 4K Ultra HD Water Resistance Video Sunglasses, Sports Action Camera with Built-in Memory and Polarized UV400 Protection Safety Lenses,Unisex Sport Design    ",
    244.99,
    "./prodact/17/17.jpg",
    16,
    1
  )),
  (prodact17 = new prodact(
    "Native 1080P 5G WiFi Projector, YOOYAA Bluetooth 5.1 Video Projector, 4K Supports 8500L, Compatible with HDMI USB VGA AV TF, Smartphones, Laptops, TV Stick/Box, Portable Home Cinema Projector",
    109.99,
    "./prodact/18/18.jpg",
    17,
    1
  )),
  (prodact18 = new prodact(
    'Kindle Paperwhite | 8 GB, now with a 6.8" display and adjustable warm light | With ads | Black',
    109.99,
    "./prodact/19/19.jpg",
    18,
    1
  )),
];

// Featured Products
let FeaturedProductsImg = document.querySelectorAll(".FeaturedProductsImg");
let FeaturedProductsTitle = document.querySelectorAll(".FeaturedProductsTitle");
let FeaturedProductsPrice = document.querySelectorAll(".FeaturedProductsPrice");

for (i = 0; i < 10; i++) {
  FeaturedProductsImg[i].setAttribute("src", `${FeaturedProducts[i].img}`);
  let FeaturedProductsTitleSubstring = FeaturedProducts[i].title;
  FeaturedProductsTitle[i].innerHTML = `${FeaturedProductsTitleSubstring.substring(0,50)}`;
  FeaturedProductsPrice[i].innerHTML = `${FeaturedProducts[i].price}`;
}

// initial RatingFeatured stars
const RatingFeatured = {
  0: 4,
  1: 4.3,
  2: 3,
  3: 1,
  4: 4,
  5: 4,
  6: 2,
  7: 1,
  8: 5,
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 2,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 2,
};

let addToCart2 = document.querySelectorAll(".FeaturedProductsaddToCart");

// for add onclick PUSH to cartInclude
for (let c = 0; c < 10; c++) {
  addToCart2[c].setAttribute("onclick", `addPUSH2(${FeaturedProducts[c].id})`);
}

//  function onclick icon cart
function addPUSH2(id) {
  // Array cart Include PUSH to cartInclude
  if (localStorage.getItem(FeaturedProducts[id].id)) {
    // get Retrieves localStorage
    let Retrieves = localStorage.getItem(`${FeaturedProducts[`${id}`].id}`);
    // Retrieves to Object
    let RetrievesObj = JSON.parse(Retrieves);
    // cheak orders one or no
    if (RetrievesObj.orders >= 1) {
      // Object change orders to pluse one
      RetrievesObj.orders += 1;
      console.info("orders++");

      let RetrievesStringify = JSON.stringify(RetrievesObj);
      //    Item update in localStorage
      localStorage.setItem(
        `${FeaturedProducts[`${id}`].id}`,
        RetrievesStringify
      );
    }

    console.info("exis");
  } else {
    // Add the element if it does not exist Array cartInclude
    let tostringifyS = JSON.stringify(FeaturedProducts[id]);

    localStorage.setItem(`${FeaturedProducts[`${id}`].id}`, tostringifyS);
  }

  // call function cart Number Span UPdata
  cartNumberSpanUPdata();
}

// total stars
const TotalStarsFeatured = 5;

// Ran get Rating When Dom loads
document.addEventListener("DOMContentLoaded", getRatingsFeatured);

// get Rating
function getRatingsFeatured() {
  for (let rat = 0; rat < 10; rat++) {
    const StarsPercent = (RatingFeatured[rat] / TotalStarsFeatured) * 100;

    //Round to nearest 10
    const StarsPercentRound = `${Math.round(StarsPercent / 10) * 10}%`;

    // set width star-inner to Percent
    let stars_inner = document.querySelectorAll(".stars-inner2");
    stars_inner[rat].style.width = StarsPercentRound;
  }
}





