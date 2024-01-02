function getParam(button) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get(button)
}
$(document).ready(function () {
    var productId = getParam('productId')
    $.ajax({
        url: 'http://localhost:8080/api/products/show.php?productId=' + productId,
        type: 'GET',
        success: function (data) {
            var product = JSON.parse(data)
            renderProductUI(product)
            addEvents()
        },
        error: function (e) {
            console.log(e.message);
        }
    });
})


// show All Detail Products
function renderProductUI(product) {
    
    $('#product-detail').append(
            `
         

        <div class="container1 flex">
        <div class="left">
          <div class="main_image1">
            
            <img src="${product.image}" class="slide-Detail">
          </div>
        </div>
        <div class="right">
          <h3>${product.name}</h3>
          <h4> <small>$</small>${product.price} </h4>
          <p>${product.description}. </p>
          <h5>Number</h5>
          <input type="number" value="1" min="0">
  
          <button class="button-Detail btn btn-hover">Add to Bag</button>
        </div>
      </div>
    

            `
    )
}
 
