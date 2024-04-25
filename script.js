let blockquote = document.querySelector('blockquote');
let author = document.querySelector('.quote-box span');
const btnTweet = document.querySelector('#tweet');
const api_url = 'https://api.quotable.io/random';

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data)
    blockquote.textContent = data.content;
    author.textContent = data.author;
}


const btn = document.querySelector('#newBtn');
btn.addEventListener('click', () => {
    getQuote(api_url);
})

function tweet() {
    window.open('https://twitter.com/intent/tweet?text= ' + blockquote.textContent + '---- by ' + author.textContent, 'Tweet Window', 'width=600, height=300');
}

btnTweet.addEventListener('click', function() {
    tweet();
})