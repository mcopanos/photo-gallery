let navLinks = ['home', 'about', 'photos', 'contact'];
let navBar = document. querySelector('#navBar');

// nav links 
const links = navLinks.map((navLink) => {
   let link = document.createElement('a');
   link.href = `#${navLink}`
   link.innerText = navLink;
   navBar.appendChild(link);
});


/* This is the About Section. */

let icons = ['editing', 'discovery', 'camera']
let headings = ['Working Hard', 'Searching', 'Our View']
let pgafs = [
      'Come see what we have been serving up! we have been working har to bring you quality constent.',
      'Searching all around the world for high quality photos. We want you to feel like you\'re there',
      'See the world through our view. We find the most beautify landscaps to capture.'
]
let aboutCards = document.querySelector('#about');


for (let i = 0; i < icons.length; i++) {
      let li = document.createElement('li');
      li.classList.add('card');
      li.innerHTML = `
            <img src="photos/${icons[i]}.png">
            <h1>${headings[i]}</h1>
            <p>${pgafs[i]}</p>`;
      aboutCards.appendChild(li);
}
// let aboutItem = aboutItems.map(item => {
//    let li = document.createElement('li').classList.add('card');
//    li.innerText = item;
//    aboutCards.appendChild(li);
//    console.log(item)
// })