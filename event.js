// Returns the DOM object for the HTML element
// with id="button", or null if none exists.
let element = document.querySelector('#button');


// Returns a list of DOM objects containing all 
// elements that have a "quote" class AND all
// elements that have a "comment" class.
let elementList =
    document.querySelectorAll('.quote, .comment');

function onClickFunction() {
    console.log('clicked');
}
const button = document.querySelector('button');
button.addEventListener('click', onClickFunction);
/////////////////////////////////////////////////////
//open present
function openPresent(event) {
    const image = event.currentTarget;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';

    const title = document.querySelector('h1');
    title.textContent = 'Hooray!';

    image.removeEventListener('click', openPresent);
}

const image = document.querySelector('img');
image.addEventListener('click', openPresent);