let orderFORLOOP = document.querySelector(".orderFORLOOP");

function orderLoop() {
  // get localStorage products
  let getproducts = localStorage.getItem("products");
  // getproducts to array
  let productsArray = JSON.parse(getproducts);

    for (product of productsArray) {

        orderFORLOOP.innerHTML += `

        <!-- order Prodect Price -->
        <div class="order-Prodect-Price">
          <span class="order_title">${product.title} x  <span class="orders">${product.orders}</span> </span> 
          
          <span class="order_Price">${product.price}$</span>

        </div>
        <!--\\ order Prodect Price \\-->
        `
        console.log(product);
        
  }
}

orderLoop();











// Subtotal
function Subtotal() {
    let total = 0; // تعيين قيمة افتراضية للمتغير total
  
    let getproducts = localStorage.getItem("products");
  // getproducts to array
    let productsArray = JSON.parse(getproducts);
    

    // Loop LocalStorage IN Prodect
    for (product of productsArray) {
      // import localStorage prodect
  
      // حساب إجمالي المبلغ لكل منتج
      total += product.price * product.orders;
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
  