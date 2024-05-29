const categoriesList = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesList.children.length}`);

[...categoriesList.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

function getExtremeScores(scores) {
  console.log({ worst: Math.min(...scores) });
}

getExtremeScores([89, 64, 42, 17, 93, 51, 26]);

const getUserWithEmail = (users, email) => {
  users.find((user) => user.email === email);
  return users.name;
};
