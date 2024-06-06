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
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];
