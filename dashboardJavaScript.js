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

/*  
**********
Code for Google Charts
**********
*/

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
	var data = google.visualization.arrayToDataTable([
		['City', 'Politics', 'Economy', 'Social'],
		['Harare', 3.2, 4.1, 4.7],
		['Bulawayo', 3.7, 3.6, 4.9],
		['Gweru', 2.7, 2.8, 3.9],
		['Mutare', 2.1, 1.9, 3.5]
	]);

	var options = {
		chartArea: {width: '70%'},
		isStacked: true,
		hAxis: {
			title: 'Citizenship Index Score',
			viewWindow: {
				max:15,
				min:0
			},
			minorGridlines: {
				minSpacing: 10,
			}
		},
		legend: {
			position: 'top', 
			alignment: 'center',
			maxLines: 3,
			//fontSize: 12
		}
	};
    
	var chart = new google.visualization.BarChart(document.querySelector('.main-viz'));
	chart.draw(data, options);
};