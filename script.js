/*  
**********
Code for the changing colour of the navigation bar 
**********
*/
const menuItems = document.querySelectorAll('.menu__item');
let menuItemActive = document.querySelector('.menu__item--active');

// For loop to loop through menu items
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', buttonClick);
};

//Function to run on button click to change active menu item and heading text
function buttonClick() {
  if (!this.classList.contains('menu__item--active')) {
    document.body.style.backgroundColor = `#${this.getAttribute('data-background')}`;
	
	document.querySelector('h1').remove();
	menuItemActive.classList.remove('menu__item--active');
	
	const heading = document.createElement('h1');
	if (this.classList.contains('menu__item--yellow')) {
		heading.innerHTML = 'Summary';
	} else if (this.classList.contains('menu__item--red')) {
		heading.innerHTML = 'Politics';
	} else if (this.classList.contains('menu__item--green')) {
		heading.innerHTML = 'Economy';
	} else if (this.classList.contains('menu__item--purple')) {
		heading.innerHTML = 'Social';
	}
	this.appendChild(heading);
	this.classList.add('menu__item--active');

    menuItemActive.classList.add('menu__item--animate');
    this.classList.add('menu__item--animate');

    menuItemActive = this;
  }
};