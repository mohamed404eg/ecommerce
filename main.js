class prodact {
  constructor(title, price, img, id) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = id;
  }
}




let prodactArray = [
    prodact1 = new prodact("SweatyRocks Women's Elegant Mesh Contrast Long Sleeve A Line Mini Short Dress", 25.89, "./prodact/1/1.jpg", 1),
    prodact2 = new prodact(2, 3, 3, 3),
    prodact3 = new prodact(3, 3, 3, 3),
    prodact4 = new prodact(4, 3, 3, 3),
];


let BestSellesProdect = document.querySelectorAll(".BestSellesProdect");
let BestSellesProdectImg = document.querySelectorAll(".BestSellesProdectImg");
let BestSellesProdectTitle = document.querySelectorAll(".BestSellesProdectTitle");
let BestSellesProdectPrice = document.querySelectorAll(".BestSellesProdectPrice");
for (i = 0; i < 4; i++){
    BestSellesProdectImg[i].setAttribute('src',`${prodactArray[i].img}`);
    BestSellesProdectTitle[i].innerHTML = prodactArray[i].title;
    BestSellesProdectPrice[i].innerHTML = prodactArray[i].price;
}