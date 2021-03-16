let productsAPI = [
    {image: "./assets/images/robot01.jpg", id:183401, title: "robot01", brand: "BDynamics", price: "1200", availability: "Aviable", status: "New"},
    {image: "./assets/images/robot02.jpg", id:183402, title: "robot02", brand: "iRobot", price: "2100", availability: "Not aviable", status: null},
    {image: "./assets/images/robot03.jpg", id:183403, title: "robot03", brand: "Ecovacs", price: "3300", availability: "Aviable", status: "Bestseller"},
    {image: "./assets/images/robot04.jpg", id:183404, title: "robot04", brand: "Neato", price: "4000", availability: "Not aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183405, title: "robot05", brand: "Yujin", price: "4700", availability: "Aviable", status: "Discount"},
    {image: "./assets/images/robot06.jpg", id:183406, title: "robot06", brand: "BDynamics", price: "4900", availability: "Not aviable", status: null},

    {image: "./assets/images/robot01.jpg", id:183407, title: "robot07", brand: "BDynamics", price: "1200", availability: "Aviable", status: "New"},
    {image: "./assets/images/robot02.jpg", id:183408, title: "robot08", brand: "iRobot", price: "2100", availability: "Aviable", status: null},
    {image: "./assets/images/robot03.jpg", id:183409, title: "robot09", brand: "Ecovacs", price: "3300", availability: "Aviable", status: "Bestseller"},
    {image: "./assets/images/robot04.jpg", id:183410, title: "robot10", brand: "Neato", price: "4000", availability: "Aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183411, title: "robot11", brand: "Yujin", price: "4700", availability: "Aviable", status: "Discount"},
    {image: "./assets/images/robot06.jpg", id:183412, title: "robot12", brand: "BDynamics", price: "4900", availability: "Aviable", status: null},

    {image: "./assets/images/robot01.jpg", id:183413, title: "robot13", brand: "BDynamics", price: "1200", availability: "Aviable", status: null},
    {image: "./assets/images/robot02.jpg", id:183414, title: "robot014", brand: "iRobot", price: "2100", availability: "Not aviable", status: null},
    {image: "./assets/images/robot03.jpg", id:183415, title: "robot15", brand: "Ecovacs", price: "3300", availability: "Aviable", status: null},
    {image: "./assets/images/robot04.jpg", id:183416, title: "robot16", brand: "Neato", price: "4000", availability: "Not aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183417, title: "robot16", brand: "Yujin", price: "4700", availability: "Aviable", status: null},
    {image: "./assets/images/robot06.jpg", id:183418, title: "robot18", brand: "BDynamics", price: "4900", availability: "Not aviable", status: null},

    {image: "./assets/images/robot01.jpg", id:183419, title: "robot19", brand: "BDynamics", price: "1200", availability: "Not aviable", status: "New"},
    {image: "./assets/images/robot02.jpg", id:183420, title: "robot20", brand: "iRobot", price: "2100", availability: "Not aviable", status: null},
    {image: "./assets/images/robot03.jpg", id:183421, title: "robot21", brand: "Ecovacs", price: "3300", availability: "Aviable", status: "Bestseller"},
    {image: "./assets/images/robot04.jpg", id:183422, title: "robot22", brand: "Neato", price: "4000", availability: "Not aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183423, title: "robot23", brand: "Yujin", price: "4700", availability: "Aviable", status: "Discount"},
    {image: "./assets/images/robot06.jpg", id:183424, title: "robot24", brand: "BDynamics", price: "4900", availability: "Not aviable", status: null},

    {image: "./assets/images/robot01.jpg", id:183425, title: "robot24", brand: "BDynamics", price: "1200", availability: "Aviable", status: null},
    {image: "./assets/images/robot02.jpg", id:183426, title: "robot26", brand: "iRobot", price: "2100", availability: "Not aviable", status: null},
    {image: "./assets/images/robot03.jpg", id:183427, title: "robot27", brand: "Ecovacs", price: "3300", availability: "Aviable", status: null},
    {image: "./assets/images/robot04.jpg", id:183428, title: "robot28", brand: "Neato", price: "4000", availability: "Not aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183429, title: "robot29", brand: "Yujin", price: "4700", availability: "Not aviable", status: null},
    {image: "./assets/images/robot06.jpg", id:183430, title: "robot30", brand: "BDynamics", price: "4900", availability: "Not aviable", status: null},

    {image: "./assets/images/robot01.jpg", id:183431, title: "robot31", brand: "BDynamics", price: "1200", availability: "Aviable", status: "New"},
    {image: "./assets/images/robot02.jpg", id:183432, title: "robot32", brand: "iRobot", price: "2100", availability: "Not aviable", status: null},
    {image: "./assets/images/robot03.jpg", id:183433, title: "robot33", brand: "Ecovacs", price: "3300", availability: "Aviable", status: "Bestseller"},
    {image: "./assets/images/robot04.jpg", id:183434, title: "robot34", brand: "Neato", price: "4000", availability: "Aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183435, title: "robot35", brand: "Yujin", price: "4700", availability: "Aviable", status: "Discount"},
    {image: "./assets/images/robot06.jpg", id:183436, title: "robot36", brand: "BDynamics", price: "4900", availability: "Not aviable", status: null},

    {image: "./assets/images/robot01.jpg", id:183437, title: "robot37", brand: "BDynamics", price: "1200", availability: "Aviable", status: null},
    {image: "./assets/images/robot02.jpg", id:183438, title: "robot38", brand: "iRobot", price: "2100", availability: "Not aviable", status: null},
    {image: "./assets/images/robot03.jpg", id:183439, title: "robot39", brand: "Ecovacs", price: "3300", availability: "Aviable", status: null},
    {image: "./assets/images/robot04.jpg", id:183440, title: "robot40", brand: "Neato", price: "4000", availability: "Aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183441, title: "robot41", brand: "Yujin", price: "4700", availability: "Aviable", status: null},
    {image: "./assets/images/robot06.jpg", id:183442, title: "robot42", brand: "BDynamics", price: "4900", availability: "Not aviable", status: null},

    {image: "./assets/images/robot01.jpg", id:183443, title: "robot43", brand: "BDynamics", price: "1200", availability: "Aviable", status: "New"},
    {image: "./assets/images/robot02.jpg", id:183444, title: "robot44", brand: "iRobot", price: "2100", availability: "Aviable", status: "New"},
    {image: "./assets/images/robot03.jpg", id:183445, title: "robot45", brand: "Ecovacs", price: "3300", availability: "Aviable", status: "Bestseller"},
    {image: "./assets/images/robot04.jpg", id:183446, title: "robot46", brand: "Neato", price: "4000", availability: "Not aviable", status: null},
    {image: "./assets/images/robot05.jpg", id:183447, title: "robot47", brand: "Yujin", price: "4700", availability: "Aviable", status: "Discount"},
    {image: "./assets/images/robot06.jpg", id:183448, title: "robot48", brand: "BDynamics", price: "4900", availability: "Not aviable", status: null}   
    
]; 
let products = [];

//Filter ----------------------------------------------------------------------------------------------------

products = productsAPI;

document.querySelector(".filter__reset").addEventListener("click",resetFilterForm);


let arrFilterEdit = document.querySelectorAll(".filter__edit");
for (let i=0; i<arrFilterEdit.length; i++){
    arrFilterEdit[i].addEventListener("click",filterCatalog);
}





function resetFilterForm(){
    document.querySelector(".filter__form").reset();
    products = productsAPI;

    //пагинация
    startPage = 1;
    lastPage = 0;
    createPaginationBlock(startPage);
    createProduct();

    //установка маркера пагинации в начальную позицию
    markerPag();
    arrowsPag();
    lastPage = startPage;

    

}

document.querySelector('.filter__price-slide').addEventListener("input",choosePrice);
document.querySelector('.filter__price-slide').addEventListener("input",filterCatalog);


function choosePrice() {    
    let priceSlide=document.querySelector('.filter__price-slide'); 
    let priceEdit=document.querySelector('.filter__price-edit'); 
   priceEdit.value=priceSlide.value;

   
 }


function filterCatalog(){
    
    //filter by vendor
    let tempArr = productsAPI;
    
    //filter by vendor
    let arrVendorInput = document.querySelectorAll(".filter__vendor input");
    let arrVendorLabel = document.querySelectorAll(".filter__vendor label");
    if (arrVendorInput){
    tempArr = runFilter(tempArr, arrVendorInput, arrVendorLabel, "brand");
    }
    

    //filter by price
    let arrPriceValue = document.querySelector(".filter__price-edit").value;
    if (arrPriceValue){
        tempArr = runFilter2(tempArr, arrPriceValue, "price");    
    }
    

    //filter by availability
    let arrAvilabilityInput = document.querySelectorAll(".filter__availability input");
    let arrAvilabilityLabel = document.querySelectorAll(".filter__availability label");
    if (arrAvilabilityInput){
    tempArr = runFilter(tempArr, arrAvilabilityInput, arrAvilabilityLabel, "availability");
    }
    

    //filter by status
    let arrStatusInput = document.querySelectorAll(".filter__status input");
    let arrStatusLabel = document.querySelectorAll(".filter__status label");
    if (arrStatusInput){
    tempArr = runFilter(tempArr, arrStatusInput, arrStatusLabel, "status");
    }
    
    
    products = tempArr;


    // if (products.length == 0){
    //     products = productsAPI;
    // }


    //пагинация
    startPage = 1;
    lastPage = 0;
    createPaginationBlock(startPage);
    createProduct();

    //установка маркера пагинации в начальную позицию
    markerPag();
    arrowsPag();
    lastPage = startPage;
    
    
    
}

function runFilter(tempArr,arrInput,arrLabel, filterField){
    let arrFilterName = [];
    let tempArr2 = [];
     //создать массив из выбранных чекбоксов
     for (let i=0; i<arrInput.length; i++){
        if (arrInput[i].checked == true){
            arrFilterName.push(arrLabel[i].innerHTML);
        }
    }
    
    for (let i=0; i<arrFilterName.length; i++){
        let tempProducts = tempArr.filter(function(arr1){
            return arr1[filterField] == arrFilterName[i];   
        }); 

        tempArr2 = tempArr2.concat(tempProducts);
    }
    if (tempArr2 != 0){
        return tempArr2;
    } 
    else {
        return tempArr;
    }
    
}

function runFilter2(tempArr,priceValue, filterField){
    let tempArr2 = [];
        let tempProducts = tempArr.filter(function(arr1){
            return arr1[filterField] < priceValue;   
        }); 

        tempArr2 = tempArr2.concat(tempProducts);   
        
        if (tempArr2 != 0){
            return tempArr2;
        } 
        else {
            return [];
        }
        
}






//Catalog -----------------------------------------------------------------------------------------------------------


let productOnPage = 8; //Products on the page
let catalogBlock = document.querySelector(".catalog__block");
let paginationBlock = document.querySelector(".pagination__block");
let startPage = 1;
let lastPage = 0;

createPaginationBlock(startPage);
createProduct();

//установка маркера пагинации в начальную позицию
markerPag();
arrowsPag();
lastPage = startPage;





//Вывод товаров

function createProduct(){        
    
    let startElArr = (startPage - 1) * 8;     
        
    catalogBlock.innerHTML="";

    for (let i=startElArr; i<startElArr + productOnPage; i++){
        if (i < products.length){
            let div = document.createElement("div");
            div.classList.add("product");
            div = productFields(div,products[i]);
            catalogBlock.appendChild(div);
        }        
    }        
     
}

function productFields(el,obj){
    
    for (key in obj){
        if (key == "image"){
            let img = document.createElement("img");
            img.setAttribute("src",obj[key]);
            el.appendChild(img);
        }else{
        let div = document.createElement("div");
        div.innerHTML = obj[key];
        el.appendChild(div);
        }
    }
    el.children[4].innerHTML += "$";

    

    let buttonAddGoods = document.createElement("button");    
    buttonAddGoods.innerHTML = "ADD TO CHART";
    el.addEventListener("click", addToCart);
    
    //если товара нет в наличии
    if (obj.availability == "Not aviable"){
        buttonAddGoods.setAttribute("disabled","disabled");  
        el.style.cssText = "color: grey";
    }
      
    el.appendChild(buttonAddGoods); 
    
    

     return el;
}





//Pagination ---------------------------------------------------------------------------------------------------------------------
//Проставление цифр для пагинации



function createPaginationBlock(firstPage){

    paginationBlock.innerHTML = "";       
    let divLeft = document.createElement("div");
    divLeft.addEventListener("click", moveLeftPag);
    divLeft.innerHTML="<<";
    divLeft.classList.add("pagination__arrows");
    paginationBlock.appendChild(divLeft);
    for (let i=firstPage; i<products.length/8+1; i++){
        if(i<firstPage+5){
        let div = document.createElement("div");
        div.addEventListener("click", chooseNumberPag);
        div.addEventListener("click", ifFirstLastPage);               
        div.innerHTML=i;
        div.classList.add("pagination__btns");
        paginationBlock.appendChild(div);
        }                
    }
    let divRight = document.createElement("div");
    divRight.addEventListener("click", moveRightPag);
    divRight.innerHTML=">>";
    divRight.classList.add("pagination__arrows");
    paginationBlock.appendChild(divRight);   
    
    
            
}



//Обработка событий по клику
function chooseNumberPag(){
    startElArr = (+this.innerHTML-1)*5;
    lastPage = startPage;
    startPage = +this.innerHTML;  
    createProduct();

    //установка маркера пагинации
    markerPag();
    arrowsPag();
    lastPage = startPage;
   
    
}
function moveLeftPag(){      
    if (startPage>1){
        startPage=startPage-1;
        createProduct(); 
        if (startPage + 1 ==  +paginationBlock.children[1].innerHTML){
            if(startPage +1  > 4){
                createPaginationBlock(startPage-3)  
            }
        }  

        //установка маркера пагинации
        markerPag();
        arrowsPag();
        lastPage = startPage;                
    }   
   
}
    
function moveRightPag(){
  
    
        if(startPage < Math.ceil(products.length/8)){    
        startPage=startPage+1;
        createProduct();
        
       if ((startPage == paginationBlock.children[paginationBlock.children.length-2].innerHTML) &&
       (startPage != Math.ceil(products.length/8))){
        createPaginationBlock(startPage)   
       }
        
       //установка маркера пагинации
        markerPag();
        arrowsPag();
        lastPage = startPage;    
    }   
    
    
    
}
  
function ifFirstLastPage(){
   
    if (+this.innerHTML ==  paginationBlock.children[1].innerHTML){
        if(+this.innerHTML>4){
        createPaginationBlock(startPage-4)   
        
        
        markerPag();
        arrowsPag();
        lastPage = startPage;
        
        }
        
    }else if (+this.innerHTML ==  paginationBlock.children[paginationBlock.children.length-2].innerHTML){
        if(+this.innerHTML<products.length/8){
        createPaginationBlock(startPage)
        
        markerPag();
        arrowsPag();
        lastPage = startPage;

        }
    }
    

}


//Отрисовка маркера для пагинации

function markerPag(){  

    arr = document.querySelectorAll(".pagination__block div");
    
    for (let i = 0; i<arr.length; i++){
        if (+arr[i].innerHTML == lastPage){
            arr[i].style.cssText = "background-color: ''";
        }

        if (+arr[i].innerHTML == startPage){
            arr[i].style.cssText = "background-color: #b0ded9"; 
        }
    }
    
    
}

function arrowsPag(){

    if (startPage == 1){        
        paginationBlock.firstChild.style.cssText ="visibility: hidden"
    } else{        
        paginationBlock.firstChild.style.cssText ="visibility: visible"
    }


    if (startPage == Math.ceil(products.length/8)){
        paginationBlock.lastChild.style.cssText ="visibility: hidden";
    } else {
        paginationBlock.lastChild.style.cssText ="visibility: visible";
    }
    // Убрать отображение >> когда в пагинации отсутствуют цифры
    if (document.querySelectorAll(".pagination__block div").length == 2){
        paginationBlock.lastChild.style.cssText ="visibility: hidden";
    }
}


//shoping-cart---------------------------------------------------------------------------------------------------------------

let shopingCardBlock=document.querySelector(".shoping-cart__block");
let shopingCartWindow=document.querySelector(".shoping-cart__window");
let shopingCartContent=document.querySelector(".shoping-cart__content");
let amountGoods = document.querySelector(".shoping-cart__amount-goods");

shopingCardBlock.addEventListener("mouseover",()=>{shopingCartWindow.style.cssText ="visibility: visible"});
shopingCardBlock.addEventListener("mouseout",()=>{shopingCartWindow.style.cssText ="visibility: hidden"});



//shoping-chart works with local storage

if (!localStorage.getItem("storageCounterGoods")){
    localStorage.setItem("storageCounterGoods", "0");
    let divShoping = document.createElement("div")
    divShoping.innerHTML = "0$";
    shopingCartContent.appendChild(divShoping);
}else{
    addToCartWindow()

}



function addToCart(){
    
    //Increment goods amount counter in local storage and insert into tag on the view
    localStorage.setItem("storageCounterGoods", `${+localStorage.getItem("storageCounterGoods") + 1}`);
    

    let anotherGood = 0;

    if (!localStorage.getItem("storageChart")){                     //первый запуск 
            let firstArrChart = [];
            let id = this.children[1].innerHTML;
            let amount = 1;
            let price = (this.children[4].innerHTML).split("$")[0];
            firstArrChart.push({id:id,amount:amount,price:price});
            storToStorage("storageChart",firstArrChart);

            sumAmountGoods();
            
        }else{
            let arrChart = retrievFromStorage("storageChart");       //если уже содержится в корзине
            
            for (let i=0; i<arrChart.length; i++){                
                if (arrChart[i].id == this.children[1].innerHTML){
                    arrChart[i].amount++;
                    anotherGood++;
                    storToStorage("storageChart", arrChart);            
                    
                }

            }
            
            if (anotherGood == 0){                                  //если не содержится в корзние
                let id = this.children[1].innerHTML;
                let amount = 1;
                let price = (this.children[4].innerHTML).split("$")[0];
                arrChart.push({id:id,amount:amount,price:price});
                storToStorage("storageChart", arrChart);
                
            }
            sumAmountGoods();
        }  
        addToCartWindow();
}

function sumAmountGoods(){
    let arrChart = retrievFromStorage("storageChart");
    let sumChart = 0;
    for (let i=0; i<arrChart.length; i++){             
        sumChart += arrChart[i].amount * arrChart[i].price;              
        }        
    localStorage.setItem("storageSum", sumChart);
}





function storToStorage(storageKey, storageValue){
    json = JSON.stringify(storageValue)
    localStorage.setItem(storageKey,json);
}

function retrievFromStorage(storageKey){
    let text = localStorage.getItem(storageKey);
    let obj = JSON.parse(text);
    return obj;
}

function addToCartWindow(){
    let storageChart = retrievFromStorage("storageChart");
    let storageSum = localStorage.getItem("storageSum")
    shopingCartContent.innerHTML = "";

    amountGoods.innerHTML = localStorage.getItem("storageCounterGoods");
    let title = 0;
    let amount = 0;

    for (let i=0; i<storageChart.length; i++){
        
      amount =  storageChart[i].amount;

        for (let j=0; j<products.length; j++){
            if (storageChart[i].id == products[j].id){
              title =  products[j].title;
            }
        }
    
        let div = document.createElement("div");
        div.setAttribute("id", storageChart[i].id);
        div.addEventListener("click", removeFromCartWindow); 
        let span = document.createElement("span"); 
        
        span.innerHTML = `${amount} X ${title}`;        
        div.appendChild(span);
        
        let btnClose = document.createElement("button");       
        btnClose.classList.add("shoping-cart__closeButton");
        btnClose.innerHTML = "x";
        div.appendChild(btnClose); 
        shopingCartContent.appendChild(div); 

        
    
    }
    let div = document.createElement("div");  
    div.classList.add("shoping_cart_sum"); 
    div.innerHTML = storageSum + "$";
    shopingCartContent.appendChild(div);  

    
}


function removeFromCartWindow(){
        
             
    
        if (((this.children[0].innerHTML).split("X")[0]) > 1){
            this.children[0].innerHTML = (+(this.children[0].innerHTML).split("X")[0] - 1) + " X" + (this.children[0].innerHTML).split("X")[1];

            //Decrement goods amount counter in local storage and insert into tag on the view
            localStorage.setItem("storageCounterGoods", `${+localStorage.getItem("storageCounterGoods") - 1}`);
            amountGoods.innerHTML = localStorage.getItem("storageCounterGoods");



        } else if (((this.children[0].innerHTML).split("X")[0]) == 1){
            this.innerHTML = "";
            //Decrement goods amount counter in local storage and insert into tag on the view
            localStorage.setItem("storageCounterGoods", `${+localStorage.getItem("storageCounterGoods") - 1}`);
            amountGoods.innerHTML = localStorage.getItem("storageCounterGoods");

        } 
        removeFromCart(this);
    

}


function removeFromCart(el){

    let arrChart = retrievFromStorage("storageChart");  
    let storageSum = localStorage.getItem("storageSum");
    let id = el.getAttribute("id"); 
    let div = document.querySelector(".shoping_cart_sum");
            
    for (let i=0; i<arrChart.length; i++){   
                     
        if ((arrChart[i].id == id)&&(arrChart[i].amount>1)){
            arrChart[i].amount--;
            storToStorage("storageChart", arrChart);  
            localStorage.setItem("storageSum",storageSum - arrChart[i].price);   
            div.innerHTML = (storageSum - arrChart[i].price) + "$"
            
        }else if ((arrChart[i].id == id)&&(arrChart[i].amount==1)){
            localStorage.setItem("storageSum",storageSum - arrChart[i].price);
            div.innerHTML = (storageSum - arrChart[i].price) + "$"
            arrChart.splice(i,1);
            storToStorage("storageChart", arrChart);
            
        }

    }



}






