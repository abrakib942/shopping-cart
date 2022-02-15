function updateProductNumber(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total balance
let productTotal = document.getElementById(product + '-total');
productTotal.innerText = productNumber * price;

total();
}

// handle phone increase and deacrese
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false);

})


// handle case increase and deacrese
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);
})

// update subtotal
function calculateTotal(product) {
   const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function total() {
    const phoneTotal = calculateTotal('phone') * 1219;
const casetotal = calculateTotal('case') * 59;
const subtotal = phoneTotal + casetotal;
const tax = subtotal / 10;
const totalPrice = subtotal + tax;
console.log(totalPrice);
// update on the html
document.getElementById('sub-total').innerText = subtotal;
document.getElementById('tax-amount').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;
}