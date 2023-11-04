const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.children.length}`);
[...categoriesList.children].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
