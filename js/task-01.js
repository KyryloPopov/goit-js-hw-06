const list = document.querySelector("ul#categories");
const items = list.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const name = item.querySelector("h2").textContent;
  const elems = item.querySelectorAll("li");
  console.log(`Category: ${name}\nElements: ${elems.length}\n`);
});
