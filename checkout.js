let orderFORLOOP = document.querySelector(".orderFORLOOP");

function orderLoop() {
  // get localStorage products
  let getproducts = localStorage.getItem("products");
  // getproducts to array
  let productsArray = JSON.parse(getproducts);

  for (product of productsArray) {
    // title cut
    let TitleSubstring = `${product.title.substring(1, 30)}....`;

    // check width if >= 500 veiw all title
    if (window.screen.width >= 800) {
      TitleSubstring = `${product.title}`;
    }
    if (window.screen.width <= 360) {
      TitleSubstring = `${product.title.substring(1, 20)}....`;
    }

    orderFORLOOP.innerHTML += `

        <!-- order Prodect Price -->
        <div class="order-Prodect-Price">
          <span class="order_title">${TitleSubstring} x  <span class="orders">${product.orders}</span> </span> 
          
          <span class="order_Price">${product.price}$</span>

        </div>
        <!--\\ order Prodect Price \\-->
        `;
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

  console.log(total);

  // coupon discount
  let Discount = document.querySelector(".discount");
  // Determine the fee price
  if (localStorage.getItem("discount")) {
    // GET Number
    let DiscountNUM = localStorage.getItem("discount");
    if (DiscountNUM == "FREE100") Discount.innerHTML = `$${DiscountNUM}`;

    total -= 100;
  } // / coupon discount \\

  console.log(total);

  // Shipping fee driver
  let FeeShipping = document.querySelector(".feeShipping");
  // GET Number
  let FeeShippingNUM = localStorage.getItem("feeShipping");
  // Determine the fee price
  if (localStorage.getItem("feeShipping")) {
    FeeShipping.innerHTML = `$${FeeShippingNUM}`;
  }

  console.log(total);

  // set calcuation Total + Shipping fee driver + coupon discount
  let calcuationTotal = document.querySelector(".calcuationTotal");
  calcuationTotal.innerHTML = `$${total + +FeeShippingNUM} `;
}

window.addEventListener("DOMContentLoaded", Subtotal);

// finale

let finale = document.querySelector(".finale");
let DivForm = document.querySelector(".DivForm");
finale.addEventListener("click", () => {

  DivForm.innerHTML =
    "<p>Thank you for browsing my design. 💖</p> <p> I cannot continue your experience with designing my website because at this stage, we will require an API interface, and currently, I am unable to create a custom API interface for my website.I hope you understand.  </p> ";

    // flex-direction column
  DivForm.style.flexDirection = "column";
});
// finale\\
