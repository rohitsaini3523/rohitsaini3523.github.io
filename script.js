const quote = document.getElementById("value");
const author = document.getElementById("author-name");
function random() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      // console.log(result);
      quote.innerText = result.content;
      author.innerText = result.author;
    });
}
random();
