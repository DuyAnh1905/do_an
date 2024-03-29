/**
 * Home Page
 */
// ready
$(document).ready(function () {
    getAllProducts();
    getHotProducts();
    getNewProducts();
})

// get all products
function getAllProducts() {
    $.ajax({
        url: 'http://localhost:8080/api/products/index.php',
        type: 'GET',
        success: function (data) {
            var productList = JSON.parse(data)
            renderProductListUI(productList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}

// showAllProducts
function renderProductListUI(productList) {
    productList.forEach(product => {
        $('#product-list').append(
            `
            <li>
            <div class="food-menu-card">

                <div class="card-banner">
                    <img src="${product.image}" height="300" width="300"
                        alt="Fried Chicken Unlimited" class="w-100">

                    <div class="badge">-15%</div>

                    <button  class="btn food-menu-btn"><a href="Detail1.html?productId=${product.id}">Order Now</a></button>
                </div>

                <div class="wrapper">
                    <p class="category">Chicken</p>

                    <div class="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                </div>

                <h3 class="card-title">${product.name}</h3>

                <div class="price-wrapper">
                    <p class="price-text">Price:</p>

                    <data class="price" value="49.00">$${product.price}</data>

                </div>

            </div>
        </li>
            `
        )
    });
}

// get hot Products
function getHotProducts() {
    $.ajax({
        url: 'http://localhost/api/products/hot.php',
        type: 'GET',
        success: function(data) {
            var productList = JSON.parse(data)
            renderHotProducts(productList)
        },
        error: function(e) {
            console.log(e.message);
        }
    });
}
addEventListener
// show hot products
function renderHotProducts(productList) {
    productList.forEach(product => {
        $('#product-hot').append(
            `
            <div class="col-md-3 py-2">
                <a class="card" style="text-decoration: none" href="detail.html?productId=${product.id}">
                 <img src= "${product.image}" alt="">
                    <div class="card-body">
                        <h3 class="text-center">${product.name}</h3>
                        <p class="text-center">Sản phẩm bán chạy nhất.</p>
                        <div class="star text-center">
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        </div>
                        <h2>$${product.price} <span>
                            <li class="fa-solid fa-cart-shopping"></li>
                        </span></h2>
                    </div>
                </a>
            </div> 
            `
        )
    });
}
