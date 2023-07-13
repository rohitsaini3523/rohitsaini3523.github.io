const quote = document.getElementById("quote");
const author = document.getElementById("author_name");
function random() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quote.innerText = result.content;
      author.innerText = result.author;
    });
}
random();


