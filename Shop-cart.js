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
  for (let i = 0; i < localStorage.length; i++) {
    // import localStorage prodect

    let dataProdect = JSON.parse(localStorage.getItem(localStorage.key(i)));

    let tr = document.createElement("tr");

    // td
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.innerHTML = `<img class="imgProdect" src="${dataProdect.img}" alt=""> <p class="Prodecttitle"> ${dataProdect.title}</p>`;
    td2.innerHTML = `<p   class="Color-Size">none</p>`;
    td3.innerHTML = `<span class="Quantity">Quantity</span><input class="inputOrders" index="${dataProdect.id}" type="number" value="${dataProdect.orders}"> `;
    td4.innerHTML = `$${dataProdect.price}`;

    // set attr table moblie max-width: 954px
    td2.setAttribute("data-label", "Color & Size");
    td4.setAttribute("data-label", "price");
    td5.setAttribute("data-label", "Total");

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

    let InputOrders = document.querySelectorAll(".inputOrders");

    // Total price
    function addAndUpdata() {
      td5.innerHTML = `<p data-label="Amount" class="p-bottom">$${
        ((dataProdect.price * InputOrders[i].value).toFixed(2),
        dataProdect.price * InputOrders[i].value)
      } <button class="delet" onclick="delet('${
        dataProdect.id
      }')"><i class="fa-sharp fa-solid fa-circle-xmark"></i> </button></p>`;
    }
    // call this function in updata totele price
    addAndUpdata();

    // *UPdata Quantity
    InputOrders[i].addEventListener("keyup", () => {
      let indexN = InputOrders[i].getAttribute("index");

      for (let i = 0; i < localStorage.length; i++) {
        // import localStorage prodect
        let dataProdect = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (dataProdect.id == indexN) {
          // get value new
          let QuantityNEW = InputOrders[i].value;

          dataProdect.orders = QuantityNEW;
          console.log(dataProdect.orders);

          // to uplod localStorage new QuantityNEW
          let ToStraing = JSON.stringify(dataProdect);
          localStorage.setItem(`${dataProdect.id}`, ToStraing);

          // call this function in updata totele price
          addAndUpdata();
        }
      }
      // call this function in updata Subtotal() price
      Subtotal();
    });

    // add btn to bottom
    if (i + 1 >= localStorage.length) {
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

  // LoopLocalStorage() end her
}

window.addEventListener("DOMContentLoaded", LoopLocalStorage);

// *delete prodect
function delet(index) {
  for (let i = 0; i < localStorage.length; i++) {
    // import localStorage prodect
    let dataProdect = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (dataProdect.id == index) {
      localStorage.removeItem(index);

      // Loop LocalStorage prodect after delet

      let TbodyPordect = document.getElementById("TbodyPordect");
      TbodyPordect.innerText = " ";
      LoopLocalStorage();
    }
  }
}

// Subtotal
function Subtotal() {
  let total = 0; // تعيين قيمة افتراضية للمتغير total

  // Loop LocalStorage IN Prodect
  for (let i = 0; i < localStorage.length; i++) {
    // import localStorage prodect
    let dataProdect = JSON.parse(localStorage.getItem(localStorage.key(i)));

    // حساب إجمالي المبلغ لكل منتج
    total += dataProdect.price * dataProdect.orders;
  }

  let SubtotalNUM = document.querySelector(".SubtotalNUM");
  SubtotalNUM.innerHTML = `$${total}`; // إخراج الإجمالي إلى  في المتصفح

  // coupon discount
  let couponValue = document.querySelector(".coupon-border input");

  let FREE100 = 100;

  if ((couponValue.value === "FREE100") | (couponValue.value === "free100")) {
    // updata value coupon span
    let CouponNUM = document.querySelector(".CouponNUM");
    CouponNUM.innerHTML = -FREE100;
    // تطبيق الخصم على المتغير total
    total -= FREE100;
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
 
}

window.addEventListener("DOMContentLoaded", Subtotal);
