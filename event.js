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
// const button = document.querySelector('button');
// button.addEventListener('click', onClickFunction);
/////////////////////////////////////////////////////
//open present
function openPresent(event) {
    // const image = event.currentTarget;
    // image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';

    // const title = document.querySelector('h1');
    // title.textContent = 'Hooray!';

    // image.removeEventListener('click', openPresent);
    ///////////////////////////////////////////////////////////////////////////////
    // const newHeader = document.createElement('h1');
    // newHeader.textContent = 'Hooray!';
    // const newImage = document.createElement('img');
    // newImage.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';

    // const container = document.querySelector('#container');
    // container.innerHTML = '';
    // container.appendChild(newHeader);
    // container.appendChild(newImage);

    const image = event.currentTarget;
    image.removeEventListener('click', openPresent);

    const giftOutside = document.querySelector('#gift-outside');
    const giftInside = document.querySelector('#gift-inside');
    giftOutside.classList.add('hidden');
    giftInside.classList.remove('hidden');
}

const image = document.querySelector('#gift-outside img');
image.addEventListener('click', openPresent);


// const image = document.querySelector('img');
// image.addEventListener('click', openPresent);