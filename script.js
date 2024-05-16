function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const quote = document.getElementById("value");
const author = document.getElementById("author-name");

async function random() {
    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((result) => {
            // console.log(result);
            quote.innerText = result.content;
            author.innerText = result.author;
        });
}
random();
