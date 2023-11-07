let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
let quoteContainer = document.querySelector('.quote-container'); // Get the quote container

btn.addEventListener('click', handleClick);

function handleClick() {
  fetch('https://dummyjson.com/quotes/random')
    .then(data => data.json())
    .then(output => {
      quote.innerHTML = output.quote;
      author.innerHTML = output.author;
      quoteContainer.style.display = 'block'; // Show the quote container
    });
}

