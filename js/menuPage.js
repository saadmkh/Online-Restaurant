
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
      if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "flex";
      }



});


//all the item that shows in menu page
let itemsCnt = document.getElementById("itemsCnt")

let items = [
  {id:1 , name:'Cheeze Burger' , price:450 , pic:'../images/item1.png', categorie:'offers'  , tags:'burger' ,tags:'offers',
    description:'thsi is the best burger you ever eat'
  },
  {id:2 , name:'Cheeze Pizza' , price:1300 , pic:'../images/item2.png', categorie:'luanch'  , tags:'pizza , luanch' },
  {id:3 , name:'Zinger Burger' , price:600 , pic:'../images/item3.png', categorie:'fullMeal', tags:'burger'},
  {id:4 , name:'French Frice' , price:190 , pic:'../images/item4.png ', categorie:'under200', tags:''},
  {id:5 , name:'Cheeze Burger' , price:450 , pic:'../images/item1.png', categorie:'offers'  , tags:'burger'},
  {id:6 , name:'Cheeze Pizza' , price:1300 , pic:'../images/item2.png', categorie:'luanch'  , tags:'pizza'},
  {id:7 , name:'Zinger Burger' , price:600 , pic:'../images/item3.png', categorie:'fullMeal', tags:'burger'},
  {id:8 , name:'French Frice' , price:190 , pic:'../images/item4.png' , categorie:'under200', tags:''},
  {id:9 , name:'Cheeze Burger' , price:450 , pic:'../images/item1.png', categorie:'offers'  , tags:'burger'},
  {id:10, name:'Cheeze Pizza' , price:1300 , pic:'../images/item2.png', categorie:'luanch'  , tags:'pizza'},
  {id:11, name:'Zinger Burger' , price:600 , pic:'../images/item3.png', categorie:'fullMeal', tags:'burger'},
  {id:12, name:'French Frice' , price:190 , pic:'../images/item4.png' , categorie:'under200', tags:'pizza'},

]
//hide whole background when user click any item

let mobileSection = document.getElementById("mobileSection")

let wholePageBackground = document.getElementById("background")
function render(update){
  itemsCnt.innerHTML= '';

  update.forEach(items=>{
    let itemCtn = document.createElement('div');
    itemCtn.classList.add('items')

    
    itemCtn.innerHTML =
    `<div id="item"><img src="${items.pic}" id="menuPic"></div>
    <span id="itemName"> ${items.name}</span>
    <span id="itemPrice">Price: ${items.price}.00</span>
    <button id="itemButton">Get Now</button>`

    itemCtn.addEventListener("click", ()=>{
      mobileSection.style.display='none'
      wholePageBackground.style.display='none'
      showItemDetailes(items)

    })
    
    itemsCnt.append(itemCtn)
  })
}


render(items)



let detailsContainer = document.getElementById("itemDetails");
let itemPath = document.getElementById("itemPath")





let quantity = 1

let footer = document.querySelector('footer')
let pagesPath = document.getElementById("pagesPath")
function showItemDetailes(item){

  footer.style.display='none'
  pagesPath.style.display='flex'
  let deatilsCnt = document.createElement("section")
  deatilsCnt.classList.add("deatilsCnt")
  
  deatilsCnt.innerHTML=`
 <div id="detailsPic"> <img src="${item.pic}"></div>

 <main id="itemDetailsCnt">
  <h1 id="detailesName">${item.name}</h1>
  <span id="itemDes">${item.description}</span>
  <h3 id="detailesPrice">Price: ${item.price}</h3>
  <section id="ButtonsCnt">
  <button id="decreaseQuantityBnt">-</button>
  <span id="quantity">${quantity}</span>
  <button id="increaseQuantityBnt">+</button>
  </section>

  <div>total price: <span id="totalPrice">${item.price}</span></div>
  <section id="itemDetailsBtnSection">
  <button class="itemDetailsBtns" >Buy Now</button>
  <button class="itemDetailsBtns" id="cartBtn" >Add To Bukect</button>
  </section>
  
  </main>
  
  `
 


  itemPath.innerHTML=item.name
  
  detailsContainer.appendChild(deatilsCnt)

  // selectors
  const decreaseBtn = document.getElementById("decreaseQuantityBnt");
  const increaseBtn = document.getElementById("increaseQuantityBnt");
  const quantityText = document.getElementById("quantity");
  const totalPriceText = document.getElementById("totalPrice");

    function updateUI() {

          quantityText.textContent = quantity;
    totalPriceText.textContent = item.price * quantity;

    
  }

  increaseBtn.addEventListener("click", () => {
    quantity++;
    updateUI();
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateUI();
    }
  });

    
}








//search item by name
const searchBar = document.getElementById("searchBar");
const searchBarForMobile = document.getElementById("searchBarForMobile");

function searchItem(e) {
  const searchTerms = e.target.value.toLowerCase();
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerms)
  );

  render(filteredItems);
}

[searchBar, searchBarForMobile].forEach(input => {
  input.addEventListener("input", searchItem);
});


const mobileCategoriesOption = document.querySelectorAll(".mobileCategoriesOption")
const CategoriesOption = document.querySelectorAll(".CategoriesOption")



//filterd by the categories
//FULL MEAL CATEGORIE
CategoriesOption[0].addEventListener("click", ()=>{
  sortFullMeal()

})
mobileCategoriesOption[0].addEventListener("click", ()=>{
  sortFullMeal()

})
function sortFullMeal(){
  let sort = items.filter(f=> f.categorie == 'fullMeal')
  render(sort)
}

//OFFFERS CATEGORIE
CategoriesOption[1].addEventListener("click", ()=>{
   sortOffers()
})
mobileCategoriesOption[1].addEventListener("click", ()=>{
  sortOffers()

})
function sortOffers(){

  let sort = items.filter(f=> f.categorie == 'offers')
  render(sort)
  
}

//Luanch CATEGORIE
CategoriesOption[3].addEventListener("click", ()=>{
   sortLuanch()
})
mobileCategoriesOption[3].addEventListener("click", ()=>{
  sortLuanch()

})

function sortLuanch(){
  let sort = items.filter(f=> f.categorie == 'luanch')
  render(sort)
}
  
//Under 200 items
CategoriesOption[4].addEventListener("click", ()=>{
   sortBYPrice()
})
mobileCategoriesOption[4].addEventListener("click", ()=>{
  sortBYPrice()

})

function sortBYPrice(){

  let sort = items.filter(f=> f.categorie == 'under200')
  render(sort)
}
  

//items filterd by tags
const burger = document.getElementById("burger").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.tags == 'burger')
  render(sort)
  
})
const pizza = document.getElementById("pizza").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.tags == 'pizza' )
  render(sort)
  
})

const tagOffers = document.getElementById("tagOffers").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.tags ==  f.tags=='offers' )
  render(sort)
  
})

const tagLuanch = document.getElementById("tagLuanch").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.tags ==  f.tags=='luanch' )
  render(sort)
  
})






