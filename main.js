const url = "https://kea-alt-del.dk/t7/api/products/1525";
fetch(url)
.then(res=>res.json())
.then(data=>showProduct(data));

function showProduct(product){
    console.log(product);
    document.querySelector(".purchase .productName").textContent = product.productdisplayname;
    document.querySelector(".product-page").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
    document.querySelector(".product-page").alt = product.productdisplayname;

}

