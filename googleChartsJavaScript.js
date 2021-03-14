/*  
**********
Code for Google Charts
**********
*/

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
	var data = google.visualization.arrayToDataTable([
		['City', 'Political Score', 'Economic Score', 'Social Score'],
		['Harare', 3.2, 4.1, 4.7],
		['Bulawayo', 3.7, 3.6, 4.9],
		['Gweru', 2.7, 2.8, 3.9],
		['Mutare', 2.1, 1.9, 3.5]
	]);

	var options = {
		// title: '',
		chartArea: {width: '50%'},
		isStacked: true,
		hAxis: {
			title: 'Citizenship Index Score',
			minValue: 0,
		},
		vAxis: {
			title: 'City'
        }
	};
    
	var chart = new google.visualization.BarChart(document.getElementById('main-viz'));
	chart.draw(data, options);
};