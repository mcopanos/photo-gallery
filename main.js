let navLinks = ['home', 'about', 'photos', 'contact'];
let navBar = document. querySelector('#navBar');

const links = navLinks.map((navLink) => {
   let link = document.createElement('a');
   link.href = `#${navLink}`
   link.innerText = navLink;
   navBar.appendChild(link);
})