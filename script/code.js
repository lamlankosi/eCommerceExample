//  create product and storage on the local storage

let wrapper = document.querySelector('[recentProducts]')
let products =
          JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
            [
                {
                id: 1,
                productName: "Campus 00s Shoes",
                category: "shoes",
                description: "adidas comfort shoes grey and white for male and female",
                amount: 1999.99,
                img_url: "https://lamlankosi.github.io/project_images/Images/2f5965aa97244175a3acfbafdc5f4389.webp"
              },
              {
                id: 2,
                productName: "LN_logo",
                category: "Logo",
                description: "logo of LN meaning Lamlankosi Nomnganga",
                amount: 500.00,
                img_url: "https://lamlankosi.github.io/project_images/Images/LN_logo.png"
              },
              {
                id: 3,
                productName: "Off White T-shirt",
                category: "T-shirt",
                description: "Comfort black best quality in the world ",
                amount: 6687.00,
                img_url: "https://lamlankosi.github.io/project_images/Images/off-white-black-s-s-t-shirt_14712838_25616319_1000.png"
              },
              {
                id: 4,
                productName: "Off White T-shirt x Nike",
                category: "T-shirt",
                description: "Comfort navy tshirt best quality",
                amount: 5900.00,
                img_url: "https://lamlankosi.github.io/project_images/Images/off-white-x-nike-x.png"
              },
              {
                id: 5,
                productName: "Piesse Essentials Tshirt",
                category: "T-shirt",
                description: "Comfort blue tshirt duplicate of jayz limited edition",
                amount: 3010.00,
                img_url: "https://lamlankosi.github.io/project_images/Images/unisex-staple-t-shirt-heather-true-royal-front-64cd08153c025_1445x.png"
                }
            ]
          ))

function recentProducts() {

    try{
        let arrSize = products.length
        let latestProducts = products.reverse().slice(0, arrSize >> 1)
        latestProducts.forEach(products => {
            wrapper.innerHTML += 
                    `<div class="card"">
                    <img src="${products.img_url}" class="card-img-top" alt="..." loading="lazy">
                    <div class="card-body">
                    <h5 class="card-title">${products.productName}</h5>
                    <p class="card-text">${products.description}</p>
                    
                    </div>
                </div>`
        });
    
    }catch (e){
        wrapper.textContent = "Please contact our administrator"
    }
}

recentProducts()