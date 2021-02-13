fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(gotCategories);

function gotCategories(data) {
  data.forEach(showCategories);
}

function showCategories(cat) {
  console.log(cat);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = cat.category;
  copy.querySelector("a").href = `products-new.html?category=${cat.category}`;
  copy.querySelector("img").src = cat.category + ".png";
  const parent = document.querySelector("#type-1");
  parent.appendChild(copy);
}
