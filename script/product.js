try{
    let products = JSON.parse(localStorage.getItem('products'))
    let container = document.querySelector('[ourStore]')
    products.forEach(products => {
        container.innerHTML += 
                `<div class="card"">
                        <img src="${products.img_url}" class="card-img-top" alt="..." loading="lazy">
                        <div class="card-body">
                        <h5 class="card-title">${products.productName}</h5>
                        <p class="card-text">${products.description}</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                        
                </div>
            </div>`
        
    });
} catch (e) {
    console.log();
}