const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    showProduct(data);
  });

function showProduct(product) {
  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector(".subtitle").textContent = product.productdisplayname;
  document.querySelector(
    ".subcat"
  ).textContent = `${product.articletype} | ${product.brandname} `;
  document.querySelector(".id").textContent = product.id;
  document.querySelector(".price-product").textContent = `${product.price}DKK`;
  if (product.soldout) {
    document.querySelector(".purchase").classList.add("soldOut");
  }

  if (product.discount) {
    document.querySelector(".purchase").classList.add("onSale");
    document.querySelector(".price-product").classList.add("cross");
    document.querySelector(".discount p").textContent = `${
      (product.price * (100 - product.discount)) / 100
    } DKK`;
    document.querySelector(
      ".discount-value"
    ).textContent = `-${product.discount}%`;
    document.querySelector(".discount").classList.remove("hide");
  } else {
    document.querySelector(".discount").classList.add("hide");
  }

  document.querySelector(".price-product").textContent = `${product.price} DKK`;

  document.querySelector(
    "img.product-page"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
