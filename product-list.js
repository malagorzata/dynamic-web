const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#productTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector(
    ".subcat"
  ).textContent = `${product.articletype} | ${product.brandname} `;
  clone.querySelector("h3").textContent = product.productdisplayname;
  clone.querySelector("a").href = `product-view.html?id=${product.id}`;

  if (product.soldout) {
    clone.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    clone.querySelector("article").classList.add("onSale");
    clone.querySelector(".price").classList.add("cross");
  }
  clone.querySelector(".price").textContent = `${product.price} DKK`;
  clone.querySelector(".discount p").textContent = `${
    (product.price * (100 - product.discount)) / 100
  } DKK`;

  clone.querySelector(".discount-value").textContent = `-${product.discount}%`;
  clone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
