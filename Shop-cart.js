//* thead start
let TtheadPordect = document.querySelector("#TtheadPordect");

// creat th in table
let thAll = `<tr>
    <th>Products</th>
    <th>Color & Size</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Total</th>
    </tr>

    `;

// creat th in table
TtheadPordect.innerHTML += thAll;

// thead end

// Loop LocalStorage IN Prodect
function LoopLocalStorage() {
  let getproducts = localStorage.getItem("products");
  let getproductsTOARRAY = JSON.parse(getproducts);

  for (let product of getproductsTOARRAY) {
    // import localStorage prodect

    let dataProdect = product;

    let tr = document.createElement("tr");

    // td
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.innerHTML = `<img class="imgProdect" src="${dataProdect.img}" alt=""> <p class="Prodecttitle"> ${dataProdect.title}</p>`;
    td2.innerHTML = `<p   class="Color-Size">none</p>`;
    td3.innerHTML = `<span class="Quantity">Quantity</span><input class="inputOrders" onkeyup="UPdataQuantity(${dataProdect.id}, this)" type="number" value="${dataProdect.orders}"> `;
    td4.innerHTML = `$${dataProdect.price}`;

    // set attr table moblie max-width: 954px
    td2.setAttribute("data-label", "Color & Size");
    td4.setAttribute("data-label", "price");
    td5.setAttribute("data-label", "Total");

    // className
    td5.className = "TotalPricePRODUCT";

    // append to tr
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    // tbody
    let TbodyPordect = document.getElementById("TbodyPordect");

    // append tr to tbody
    TbodyPordect.append(tr);

    function TotalUPDATA() {
      // Total price
      td5.innerHTML = `<p data-label="Amount" class="p-bottom">$${(
        product.price * product.orders
      ).toFixed(2)} <button class="delet" onclick="Delete('${
        product.id
      }')"><i class="fa-sharp fa-solid fa-circle-xmark"></i> </button></p>`;
    }

    TotalUPDATA();

    // add btn to bottom
    function addTdend() {
      let tdend = document.createElement("td");
      let trend = document.createElement("tr");
      trend.className = "trend";
      tdend.append(trend);
      trend.innerHTML = `
            <td class="tdend-TEMP"></td>
            <td class="tdend-TEMP"></td>
            <td class="tdend-TEMP"></td>
            <td class="tdend-TEMP">  <bottom  onclick="location.reload" class="UpdateCart">Update Cart</bottom></td>
        
            <div class="btn-table-b">
    
    <bottom onclick="location.href = 'https://mohamed404eg.github.io/ecommerce'" class="ContinueShopping">Continue shopping</bottom>
    </div>`;
      TbodyPordect.append(trend);
    }
  }

  // *UPdata Quantity

  // LoopLocalStorage() end her
  addTdend();
}

window.addEventListener("DOMContentLoaded", LoopLocalStorage);

// UPdata Quantity

function UPdataQuantity(id, indexValue) {
  let InputOrders = document.querySelectorAll(".inputOrders");
  // import localStorage products
  let getproducts = localStorage.getItem("products");
  let getproductsTOARRAY = JSON.parse(getproducts);

  for (let i = 0; i < getproductsTOARRAY.length; i++) {
    if (getproductsTOARRAY[i].id == id) {
      // get value new
      let QuantityNEW = indexValue.value;

      getproductsTOARRAY[i].orders = QuantityNEW;
      // console.log( getproductsTOARRAY[id])
      // to uplod localStorage new QuantityNEW

      let getproductsTOSTRAINFiy = JSON.stringify(getproductsTOARRAY);
      localStorage.setItem("products", getproductsTOSTRAINFiy);

      // call this function in updata totele price
    }

    // call this function in updata Subtotal() price
    Subtotal();
  }

  // Total price updata
  function TotalUPDATA() {
    // import localStorage prodect
    let getproducts = localStorage.getItem("products");
    let getproductsTOARRAY = JSON.parse(getproducts);
    let pbottom = document.querySelectorAll(".TotalPricePRODUCT");
    let i = 0;
    for (let product of getproductsTOARRAY) {
      // Total price
      pbottom[i].innerHTML = `<p data-label="Amount" class="p-bottom">$${(
        product.price * product.orders
      ).toFixed(2)} <button class="delet" onclick="Delete('${
        product.id
      }')"><i class="fa-sharp fa-solid fa-circle-xmark"></i> </button></p>`;
      i++;
    }
  }
  TotalUPDATA();
  // Total price updata \\
}
// \\ UPdata Quantity \\

//  Delete
function Delete(id) {
  // import localStorage products
  let getproducts = localStorage.getItem("products");
  let getproductsTOARRAY = JSON.parse(getproducts);
 
  for (let i = 0; i < getproductsTOARRAY.length; i++) {
    if (getproductsTOARRAY[i].id == id) {
      // delet element
      getproductsTOARRAY.splice(i, 1);
      // to uplod localStorage new QuantityNEW

      let getproductsTOSTRAINFiy = JSON.stringify(getproductsTOARRAY);
      localStorage.setItem("products", getproductsTOSTRAINFiy);

    
    }
  }
  // حذف العناصر من الصفحة
  let TbodyPordect = document.querySelector("#TbodyPordect");
  TbodyPordect.innerHTML = " ";
  // عادة تحميل العناصر عن طريقة استدعاء الدالة من جديد

LoopLocalStorage()
}

// \\ Delete \\



// Subtotal
function Subtotal() {
  let total = 0; // تعيين قيمة افتراضية للمتغير total
  // import localStorage prodect
  let getproducts = localStorage.getItem("products");
  let getproductsTOARRAY = JSON.parse(getproducts);
  // Loop LocalStorage IN Prodect
  for (let product of getproductsTOARRAY) {
    // حساب إجمالي المبلغ لكل منتج
    total += product.price * product.orders;
  }

  let SubtotalNUM = document.querySelector(".SubtotalNUM");
  SubtotalNUM.innerHTML = `$${total}`; // إخراج الإجمالي إلى  في المتصفح

  // coupon discount
  let couponValue = document.querySelector(".coupon-value");

  let FREE100 = 100;

  if ((couponValue.value === "FREE100") | (couponValue.value === "free100") | localStorage.getItem("discount") == "FREE100") {

    // updata value coupon span
    let CouponNUM = document.querySelector(".CouponNUM");
    CouponNUM.innerHTML = -FREE100;
    // تطبيق الخصم على المتغير total
    total -= FREE100;

    // to active coupon to save localStorage
    let saveCoupon = localStorage.setItem("discount", "FREE100");

    // check if in localStorage 
    if (localStorage.getItem("discount") == "FREE100") {
      couponValue.value = "FREE100";
    }

    couponValue.addEventListener("keyup", () => {
      if (couponValue.value.toUpperCase() !== "FREE100") {
        couponValue.value = "";
        localStorage.removeItem("discount");
      
      }
    // call function  updata SHOPPING CART CALCUATION
      Subtotal()
    });

 
  }


  // Shipping fee driver
  let Country = document.querySelector("#Country");
  // Determine the fee price
  let feeShipping = 10;
  if (Country.value === "Egypt") {
    feeShipping = 30;
  }
  // Put the price of the fee in the browser
  let ShippingNUM = document.querySelector(".ShippingNUM");
  ShippingNUM.innerHTML = feeShipping;

  // set calcuation Total + Shipping fee driver + coupon discount
  let calcuationTotal = document.querySelector(".calcuationTotal");
  calcuationTotal.innerHTML = `$${total + feeShipping} `;

  // set to localStorage
  localStorage.setItem("feeShipping",feeShipping)
}

window.addEventListener("DOMContentLoaded", Subtotal);



// cart Number span
function cartNumberSpanUPdata() {
  // get products
  let getproducts = localStorage.getItem("products");
  let getproductsTOARRAY = JSON.parse(getproducts);

  let cartNumber = `${getproductsTOARRAY.length ?? "0"} `;

  let cartNumberSpan = document.querySelector(".cart-Number");
  cartNumberSpan.innerHTML = `${cartNumber}`;
}

window.addEventListener("DOMContentLoaded" , cartNumberSpanUPdata)