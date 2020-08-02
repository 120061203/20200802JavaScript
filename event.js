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