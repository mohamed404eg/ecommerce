
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
  

    td1.innerHTML = `<img class="imgProdect" src="${dataProdect.img}" alt=""> ${ dataProdect.title}`;
    td2.innerHTML = `none`;
    td3.innerHTML = `<input class="inputOrders" index="${dataProdect.id}" type="number" value="${dataProdect.orders}"> ` ;
    td4.innerHTML = `$${dataProdect.price}`;

 
    
    
    // append to tr 
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    
    
    // tbody 
    let TbodyPordect = document.getElementById("TbodyPordect")

    // append tr to tbody
        TbodyPordect.append(tr);
   
    
    let InputOrders = document.querySelectorAll(".inputOrders")



 // Total price
    function addAndUpdata() {

        td5.innerHTML = `$${(dataProdect.price * InputOrders[i].value).toFixed(2), dataProdect.price * InputOrders[i].value} <button class="delet" onclick="delet('${dataProdect.id}')">Delete </button>`;
    }
    // call this function in updata totele price
    addAndUpdata() 
    


    // *UPdata Quantity
    InputOrders[i].addEventListener("focusout", () => {
        


        let indexN = InputOrders[i].getAttribute('index');


        for (let i = 0; i < localStorage.length; i++) {
            // import localStorage prodect
            let dataProdect = JSON.parse(localStorage.getItem(localStorage.key(i)));
    
            if (dataProdect.id == indexN) {
               
                // get value new
                let QuantityNEW = InputOrders[i].value;

                dataProdect.orders = QuantityNEW;
                console.log(dataProdect.orders)
                

                // to uplod localStorage new QuantityNEW
                let ToStraing = JSON.stringify(dataProdect);
                localStorage.setItem(`${dataProdect.id}`, ToStraing)
                
                 // call this function in updata totele price
                 addAndUpdata() 
              
            }
    

    
        }






    });

   
   

}
}

window.addEventListener("DOMContentLoaded",LoopLocalStorage)
    

// *delete prodect
function delet(index){
    for (let i = 0; i < localStorage.length; i++) {
        // import localStorage prodect
        let dataProdect = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (dataProdect.id == index) {
            localStorage.removeItem(index);

            // Loop LocalStorage prodect after delet
            
            let TbodyPordect = document.getElementById("TbodyPordect")
            TbodyPordect.innerText = " ";
            LoopLocalStorage();
        }


    }
    
}
    




