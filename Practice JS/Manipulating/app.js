const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

document.querySelector('img').src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';

document.querySelector('img').setAttribute('alt','chicken');

///