
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
  {name:'Cheeze Burger' , price:450 , pic:'../images/item1.png', categorie:'offers'  , tags:'burger' ,tags:'offers'},
  {name:'Cheeze Pizza' , price:1300 , pic:'../images/item2.png', categorie:'luanch'  , tags:'pizza , luanch' },
  {name:'Zinger Burger' , price:600 , pic:'../images/item3.png', categorie:'fullMeal', tags:'burger'},
  {name:'French Frice' , price:190 , pic:'../images/item4.png ', categorie:'under200', tags:''},
  {name:'Cheeze Burger' , price:450 , pic:'../images/item1.png', categorie:'offers'  , tags:'burger'},
  {name:'Cheeze Pizza' , price:1300 , pic:'../images/item2.png', categorie:'luanch'  , tags:'pizza'},
  {name:'Zinger Burger' , price:600 , pic:'../images/item3.png', categorie:'fullMeal', tags:'burger'},
  {name:'French Frice' , price:190 , pic:'../images/item4.png' , categorie:'under200', tags:''},
  {name:'Cheeze Burger' , price:450 , pic:'../images/item1.png', categorie:'offers'  , tags:'burger'},
  {name:'Cheeze Pizza' , price:1300 , pic:'../images/item2.png', categorie:'luanch'  , tags:'pizza'},
  {name:'Zinger Burger' , price:600 , pic:'../images/item3.png', categorie:'fullMeal', tags:'burger'},
  {name:'French Frice' , price:190 , pic:'../images/item4.png' , categorie:'under200', tags:'pizza'},

]

function render(update){
  itemsCnt.innerHTML= '';

  update.forEach(items=>{
    let itemCtn = document.createElement('div');
    itemCtn.classList.add('items')

    itemCtn.innerHTML =
    `<div id="item"><img src="${items.pic}"></div>
    <span id="itemName"> ${items.name}</span>
    <span id="itemPrice">Price: ${items.price}.00</span>
    <button id="itemButton">Order Now</button>`

    itemsCnt.append(itemCtn)
  })
}


render(items)


//search item by name
const searchBar = document.getElementById("searchBar")

searchBar.addEventListener('input', (e)=>{
 const searchTerms = e.target.value.toLowerCase();
 const filterdItems = items.filter(f=> f.name.toLowerCase().includes(searchTerms))
 
 render(filterdItems)
 if(filterdItems.length == 0){
  
 }
 
})

//filterd by the categories
//FULL MEAL CATEGORIE
const fullMeal = document.getElementById("fullMeal").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.categorie == 'fullMeal')
  render(sort)
  console.log(sort);
  
})

//OFFFERS CATEGORIE
const offers = document.getElementById("offers").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.categorie == 'offers')
  render(sort)
  
})
//Luanch CATEGORIE
const luanch = document.getElementById("luanch").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.categorie == 'luanch')
  render(sort)
  
})
//Under 200 items CATEGORIE
const under200 = document.getElementById("under200").addEventListener("click", ()=>{
  let sort = items.filter(f=> f.categorie == 'under200')
  render(sort)
  
})



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

