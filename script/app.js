// Memory Size
const memory8 = document.getElementById('memory-8gb');
const memory16 = document.getElementById('memory-16gb');
const extraMemory = document.getElementById('memory-cost');
// Update Total Price
function updateTotal() {
    const productPrice = parseFloat(originalPrice.innerText);
    const memoryTotal = parseFloat(extraMemory.innerText);
    const storageTotal = parseFloat(extraStorage.innerText);
    const deliveryCharge = parseFloat(shippingCharge.innerText);
    const grandTotal = productPrice + memoryTotal + storageTotal + deliveryCharge;
    totalPrice.innerText = grandTotal;
}
//Button hover
function isContain(elem) {
    return elem.classList.contains('selected');
}

//Changing Memory Size
memory8.addEventListener('click', function () {
    if (!isContain(memory8)) {
        memory8.classList.add('selected');
        memory16.classList.remove('selected');
    }
    extraMemory.innerText = "0";
    updateTotal()
})
memory16.addEventListener('click', function () {
    if (!isContain(memory16)) {
        memory8.classList.remove('selected');
        memory16.classList.add('selected');
    }
    extraMemory.innerText = "180";
    updateTotal()
})

// Storage
const storage256 = document.getElementById('storage-256');
const storage512 = document.getElementById('storage-512');
const storage1tb = document.getElementById('storage-1tb');
const extraStorage = document.getElementById('extra-storage');

//Changing Price
storage256.addEventListener('click', function () {
    if (!isContain(storage256)) {
        storage256.classList.add('selected');
        storage512.classList.remove('selected');
        storage1tb.classList.remove('selected');
    }
    extraStorage.innerText = "0";
    updateTotal()
})
storage512.addEventListener('click', function () {
    if (!isContain(storage512)) {
        storage256.classList.remove('selected');
        storage512.classList.add('selected');
        storage1tb.classList.remove('selected');
    }
    extraStorage.innerText = "100";
    updateTotal()
})
storage1tb.addEventListener('click', function () {
    if (!isContain(storage1tb)) {
        storage256.classList.remove('selected');
        storage512.classList.remove('selected');
        storage1tb.classList.add('selected');
    }
    extraStorage.innerText = "180";
    updateTotal()
})

//Shipping Cost
const freeShipping = document.getElementById('free-shipping');
const expressShipping = document.getElementById('express-shipping');
const shippingCharge = document.getElementById('shipping-charge');

//Changing Shipping Cost
freeShipping.addEventListener('click', function () {
    if (!isContain(freeShipping)) {
        freeShipping.classList.add('selected');
        expressShipping.classList.remove('selected');
    }
    shippingCharge.innerText = '0';
    updateTotal()
})
expressShipping.addEventListener('click', function () {
    if (!isContain(expressShipping)) {
        freeShipping.classList.remove('selected');
        expressShipping.classList.add('selected');
    }
    shippingCharge.innerText = '20';
    updateTotal()
})

//Total Price
const totalPrice = document.getElementById('total-price');
totalPrice.innerText = '1299';
const originalPrice = document.getElementById('original-price');
//Discount Coupon
let footerPrice = document.getElementById('footer-price');
const couponbtn = document.getElementById('coupon-button');
couponbtn.addEventListener('click', function () {
    let couponCode = document.getElementById('coupon').value;
    if (couponCode == 'stevekaku') {
        footerPrice.innerText = totalPrice.innerText - (totalPrice.innerText * 0.20);
    }
    else {
        alert('This Promo Code Is Not A Valid Code');
    }
})