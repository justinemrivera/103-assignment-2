var ProductsName=prompt("enter the name of the product:");
var quantity=prompt("How many products would you like to purchase");

let _Taxespercent=(".16");
let price=("$45");

function MULTIPLY(quantity, price){
    return quantity*price;
    }
    var _productsprice=MULTIPLY(quantity, 45);

function MULTIPLY(_productsprice, _Taxespercent) {
     //Return the sum
    return _productsprice*_Taxespercent;
    }
    //Call MULTIPLY to multiply the two numbers
    var productTaxes=MULTIPLY(_productsprice, _Taxespercent);

function sum(productTaxes, _productsprice){
    return productTaxes+_productsprice;
    }
    var Total=sum(productTaxes, _productsprice);


document.write(`
<p>Confirmation: You purchased ${quantity} ${ProductsName} which cost ${price} each, bringing the total to ${Total}.`)

document.write(`
<p> <b> Product: </b> ${ProductsName}</p>
<p> <b> Quantity: </b> ${quantity}</p>
<p> <b> Price: </b> ${price}</p>
<p> <b> taxes: </b> ${productTaxes}</p>
<p> <b> Total: </b> ${Total}</p>
`);

console.log(ProductsName)
console.log(quantity)
console.log(price)  
console.log(_productsprice)
console.log(productTaxes)
console.log(Total)
