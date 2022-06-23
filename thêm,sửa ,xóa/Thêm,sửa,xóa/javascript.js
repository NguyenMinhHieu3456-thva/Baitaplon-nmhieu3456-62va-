// ------------------------Add card--------------
const btn = document.querySelectorAll("button");
btn.forEach(function(button,index){
  // console.log(button,index)
    button.addEventListener("click",function(event){
var btnItem = event.target;
var product =btnItem.parentElement // parentElemnent ??

// console.log(product)
var productImg = product.querySelector("img").src
// console.log(productImg);
var productName = product.querySelector("h1").innerText
// console.log(productName)
var productPrice = product.querySelector("span").innerText
// console.log(productPrice)
console.log(productName,productImg,productPrice)
addcard(productName,productImg,productPrice)
    })
})
function addcard(productName,productImg,productPrice){
 var addtr = document.createElement("tr")
 var cardItem = document.querySelectorAll("tbody tr")
 for(var i = 0;i<cardItem.length;i++){
var productT =document.querySelectorAll(".title")
if(productT[i].innerHTML == productName)
{
  alert("Sản phẩm đã có trong giỏ hàng")
  return
}
 }
 // tạo một đối tượng mới vào table
  var trcontent = '<tr><td style="display: flex; align-items:center;"><img src="'+productImg+'" style="width:70px" alt=""><span class="title">'+productName+'</span></td><td> <span class="price">'+productPrice+'</span></td><td ><input style="width:40px;outline :none;"  type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="Card-delete">Xóa</span></td></tr><tr>';
addtr.innerHTML = trcontent;

  var cardtable = document.querySelector("tbody")
cardtable.append(addtr);
cardTotal()
Deletecard()
}
// ----------------------------totalPrice------------------------
function cardTotal(){
var cardItem = document.querySelectorAll("tbody tr")
var totalC = 0;
//  console.log(cardItem.length)
for(var i =0;i<cardItem.length;i++){
var inputValue = cardItem[i].querySelector("input").value
console.log(inputValue)
var productPrice = cardItem[i].querySelector(".price").innerHTML
// console.log(productPrice) 
    totalA = inputValue * productPrice* 1000
// console.log(totalA)
totalC = totalC + totalA
totalD = totalC.toLocaleString('de-DE')
console.log(totalD)
}
var cardTotalA =document.querySelector(".price-total span")
var cardPrice = document.querySelector(".card-iconZ span")
// console.log(cardTotalA)
cardTotalA.innerHTML = totalD
cardPrice.innerHTML = totalD
inputChange()
}

// --------------------------------Delete Card------------------------------
function Deletecard(){
var cardItem = document.querySelectorAll("tbody tr")
for(var i = 0;i<cardItem.length;i++){
 var productT = document.querySelectorAll(".Card-delete")
productT[i].addEventListener("click",function(event)
{
  var CardDlt = event.target
  var cardItemZ = CardDlt.parentElement.parentElement  
  // console.log(productT)
  cardItemZ.remove()
  cardTotal()
console.log(cardItemZ)
})

}
}
// ------------------------------------inputChange--------------------------
function inputChange(){
  var cardItem = document.querySelectorAll("tbody tr")
  for(var i = 0;i<cardItem.length;i++){
   var inputValue = cardItem[i].querySelector("input")
  inputValue.addEventListener("change",function(){
  cardTotal()
    console.log(cardItemZ)

})
  }
}

const cardSeconde = document.querySelector(".exit")
const cardShow = document.querySelector(".cardSecond")
cardShow.addEventListener("click",function(){
document.querySelector(".card").style.right = "0"
console.log(cardShow)
})

cardSeconde.addEventListener("click",function(){
  document.querySelector(".card").style.right = "-100%"
})
