let container = document.querySelector('[ourStore]')
let searchProduct =document.querySelector('[searchProduct]')
let sortingAmount = document.querySelector('[sorting]')
let products = JSON.parse(
    localStorage.getItem('products')
)

//item/products
let checkoutItems = JSON.parse(localStorage.getItem('checkout')) ? JSON.parse(localStorage.getItem('checkout')) :