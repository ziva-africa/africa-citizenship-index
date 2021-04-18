/*  
**********
Load initial 'home page' google charts
**********
*/

//Load bar chart library
google.charts.load('current', {packages: ['corechart', 'bar']});

//Load gauge chart library
google.charts.load('current', {'packages':['gauge']});

//Load donut chart library
google.charts.load('current', {packages:['corechart']});

//Draw stacked bar score summary
//google.charts.setOnLoadCallback(drawScoreSummaryStackedBar);


/*  
**********
Code for the changing colour of the navigation bar 
**********
*/
const menuItems = document.querySelectorAll('.menu__item');
let menuItemActive = document.querySelector('.menu__item--active');

//For loop to loop through menu items
for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', changeColour);
	menuItems[i].addEventListener('click', changeLayout);
	menuItems[i].addEventListener('click', changeCharts);
};

//Function to run on button click to change active menu item, background colour and heading text
function changeColour() {
	if (!this.classList.contains('menu__item--active')) {
		document.querySelector('.dashboard-container').style.backgroundColor = `#${this.getAttribute('data-background')}`;
		document.querySelector('h1').remove();
		menuItemActive.classList.remove('menu__item--active');
	
		const heading = document.createElement('h1');
		if (this.classList.contains('survey')) {
			heading.innerHTML = 'Survey';
		} else if (this.classList.contains('summary')) {
			heading.innerHTML = 'Summary';
		} else if (this.classList.contains('politics')) {
			heading.innerHTML = 'Politics';
		} else if (this.classList.contains('economy')) {
			heading.innerHTML = 'Economy';
		} else if (this.classList.contains('social')) {
			heading.innerHTML = 'Social';
		} else if (this.classList.contains('giving')) {
			heading.innerHTML = 'Giving';
		} else if (this.classList.contains('digital-citizenship')) {
			heading.innerHTML = 'Digital Citizenship';
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
Code for the changing layout based on user selection
**********
*/

//Function to change layout based on user selection
function changeLayout() {
	//Check if selector-div exists
	
	if (!this.classList.contains('menu__item--grey') && !document.querySelector('.selector-div')) {
		//If selector-div does not exist - create it when clicking on non-grey menu items
		const selectDiv = document.createElement('div');
		selectDiv.setAttribute('class', 'selector-div');
		document.querySelector('.viz-container').prepend(selectDiv);
		
		//create select drop down for variables//
		const variableSelect = document.createElement('div');
		variableSelect.setAttribute('id', 'D2');
		document.querySelector('.selector-div').appendChild(variableSelect);
		
		//create select drop down for cities//
		const citySelect = document.createElement('div');
		citySelect.setAttribute('id', 'D3');
		document.querySelector('.selector-div').appendChild(citySelect);
		
		//Add dropdown city menu
		document.getElementById('D2').innerHTML = '<select name="city" id="city" onchange="changeCharts()"><option value="hre">Harare</option><option value="byo">Bulawayo</option><option value="gwe">Gweru</option><option value="mut">Mutare</option></select>'
		
		//Add dropdown variable menu 
		document.getElementById('D3').innerHTML = '<select name="variable" id="variable" onchange="changeCharts()"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="methods">Methods of Interaction</option><option value="discrimination">Discrimination</option></select>'
		
	} else if (this.classList.contains('menu__item--grey')) {
		document.querySelector('.selector-div').remove();
	}
};

/*  
**********
Code for the changing google charts based on user selection
**********
*/

function changeCharts() {
	if (menuItemActive.classList.contains('survey')) {
		//google.charts.setOnLoadCallback(drawScoreSummaryStackedBar);
		document.getElementById('D1').innerHTML = ''
		alert('Survey!');
	} else if (menuItemActive.classList.contains('summary')) {
		document.getElementById('D1').innerHTML = ''
		alert('Summary!');
	} else if (menuItemActive.classList.contains('menu__item--red') && document.getElementById('variable').value == 'membership') { 
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('menu__item--red') && document.getElementById('variable').value == 'frequency') { 
		document.getElementById('D1').innerHTML = ''
	} else if (menuItemActive.classList.contains('menu__item--red') && document.getElementById('variable').value == 'democracy') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('menu__item--red') && document.getElementById('variable').value == 'gender') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('menu__item--red') && document.getElementById('variable').value == 'methods') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawMethodsChart);
	} else if (menuItemActive.classList.contains('menu__item--red') && document.getElementById('variable').value == 'discrimination') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('menu__item--green') && document.getElementById('variable').value == 'membership') { 
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('menu__item--green') && document.getElementById('variable').value == 'frequency') { 
		document.getElementById('D1').innerHTML = ''
	} else if (menuItemActive.classList.contains('menu__item--green') && document.getElementById('variable').value == 'democracy') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('menu__item--green') && document.getElementById('variable').value == 'gender') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('menu__item--green') && document.getElementById('variable').value == 'methods') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawMethodsChart);
	} else if (menuItemActive.classList.contains('menu__item--green') && document.getElementById('variable').value == 'discrimination') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('menu__item--yellow') && document.getElementById('variable').value == 'membership') { 
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('menu__item--yellow') && document.getElementById('variable').value == 'frequency') { 
		document.getElementById('D1').innerHTML = ''
	} else if (menuItemActive.classList.contains('menu__item--yellow') && document.getElementById('variable').value == 'democracy') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('menu__item--yellow') && document.getElementById('variable').value == 'gender') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('menu__item--yellow') && document.getElementById('variable').value == 'methods') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawMethodsChart);
	} else if (menuItemActive.classList.contains('menu__item--yellow') && document.getElementById('variable').value == 'discrimination') {
		document.getElementById('D1').innerHTML = ''
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('menu__item--purple')) { 
		document.getElementById('D1').innerHTML = ''
	}
};

/*  
**********
Code for Google Charts
**********
*/

//Main bar graph in summary section 
function drawScoreSummaryStackedBar() {
	const data = google.visualization.arrayToDataTable([
		['City', 'Politics', 'Economy', 'Social',],
		['Harare', 3.2, 4.1, 4.7,],
		['Bulawayo', 3.7, 3.6, 4.9],
		['Gweru', 2.7, 2.8, 3.9],
		['Mutare', 2.1, 1.9, 3.5]
	]);

	const options = {
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
			maxLines: 3
		},
		//colors: ['#f15b28', '#7ebe42', '#9aa5ac']
	};
    
	const scoreSummaryStackedBar = new google.visualization.BarChart(document.getElementById('D1'));
	scoreSummaryStackedBar.draw(data, options);
};

// Gauge Charts //

function drawPoliticsGaugeHre() {
	const data = google.visualization.arrayToDataTable([
		['City', 'Political Score'],
		['Harare', 3.2]
		['Bulawayo', 3.7],
		['Gweru', 2.7]
		['Mutare', 2.1]
	]);

	const options = {
		width: 260, height: 260,
		redFrom: 4.5, redTo: 5,
		yellowFrom:4, yellowTo: 4.5,
		greenFrom: 3.5, greenTo: 4,
		max: 5,
		min: 0
	};
	
	const scoreDiv = document.createElement('div');
	document.getElementById('D3').appendChild(scoreDiv);
	scoreDiv.innerHTML = '<p class="score-label" style="font-size:22px; margin-bottom:0;">Score:</p><p style="font-size:60px; margin:0;">3.2</p>'
		
	const gaugeDiv = document.createElement('div');
	gaugeDiv.setAttribute('id', 'gauge-div');
	gaugeDiv.setAttribute('width', '270px');
	gaugeDiv.setAttribute('style', 'display:inline-block; margin:0 auto;');
	document.getElementById('D3').appendChild(gaugeDiv);
	const politicsGaugeChart = new google.visualization.Gauge(document.getElementById('gauge-div'));
	politicsGaugeChart.draw(data, options);
};

// Membership Bar Charts //
function drawMembershipChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Bulawayo', 'Gweru', 'Mutare'],
		['Politics', 'Total Survey Respondents', 74, 72, 96, 60],
		['Politics', 'Total in Political Networks', 53, 44, 73, 41],
		['Politics', 'Youth Group', 20, 17, 51, 26],
		['Politics', 'Women’s’ Group', 17, 13, 30, 22],
		['Politics', 'Political Party', 14, 8, 19, 15],
		['Politics', 'Joint Public Petition', 8, 3, 15, 10],
		['Politics', 'Neighbourhood Watch Security', 9, 9, 10, 8],
		['Politics', 'Online Based Civic Coalition', 12, 5, 19, 11],
		['Politics', 'Campaign Group', 12, 5, 19, 11],
		['Politics', 'Residents Associations', 25, 25, 32, 17],
		['Politics', 'Local Peace Committees', 11, 8, 12, 11],
		['Politics', 'Social Movements', 18, 8, 26, 15],
		['Economy', 'Total Survey Respondents', 74, 72, 96, 60],
		['Economy', 'Total in Economic Networks', 62, 49, 75, 50],
		['Economy', 'Multi-Level Marketing Schemes', 27, 28, 48, 23],
		['Economy', 'Housing Cooperative/Group', 17, 3, 13, 17],
		['Economy', 'Nhimbe/Humwe/Ilima (labour pooling group)', 8, 3, 10, 8],
		['Economy', 'Production Cooperative/Group', 14, 4, 18, 11],
		['Economy', 'Business Promotion Council', 8, 0, 12, 9],
		['Economy', 'Asset Pooling Group', 8, 3, 7, 8],
		['Economy', 'Common Property Group (natural resources)', 7, 3, 6, 7],
		['Economy', 'Buying Clubs', 17, 16, 14, 15],
		['Economy', 'Market Group/Platform (sell goods/services to each other)', 34, 16, 40, 28],
		['Economy', 'Business Mentoring/Training Group', 18, 5, 22, 15],
		['Economy', 'Marketing Cooperative/Group (jointly selling commodities)', 18, 7, 19, 16],
		['Economy', 'Savings and Lending Group', 18, 7, 19, 16],
		['Social', 'Total Survey Respondents', 74, 72, 96, 60],
		['Social', 'Total in Social Networks', 63, 45, 82, 50],
		['Social', 'Alumni Association', 16, 11, 16, 12],
		['Social', 'Entertainment Group (dance, choir etc)', 17, 10, 27, 12],
		['Social', 'Sporting Association', 18, 8, 15, 19],
		['Social', 'Religious Group (temples, churches, mosques etc)', 48, 37, 68, 42],
		['Social', 'Fellowship Group', 31, 25, 34, 23],
		['Social', 'Burial Societies', 9, 19, 15, 12],
		['Social', 'Parent/Teacher Group', 22, 17, 23, 20]
	]);

	data.sort([{column: 2, desc: true}]);
	
	const view = new google.visualization.DataView(data);
	
	if (menuItemActive.classList.contains('menu__item--red')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('menu__item--green')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('menu__item--yellow')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Social'}]));
	}	
	
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'byo') {
		view.setColumns([1, 3,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'gwe') {
		view.setColumns([1, 4,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'mut') {
		view.setColumns([1, 5,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Membership in Networks ',
		chartArea: {
			width: '90%',
			height: '75%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Total # of Respondents',
			minValue: 0,
			maxValue: 100
		},
		vAxis: {
			//title: '',
			textPosition: 'none'
		},
		annotations: {
			textStyle: {
				//fontName: 'Times-Roman',
				//fontSize: 11,
				//bold: true,
				//italic: true,
				// The color of the text.
				color: 'black',
				// The color of the text outline.
				//auraColor: '#d799ae',
				// The transparency of the text.
				//opacity: 0.8
			}
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.getElementById('D1'));

	chart.draw(view, options);
};
// Frequency Charts //

// Democracy Donut Charts //
function drawDemocracyChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Bulawayo', 'Gweru', 'Mutare'],
		['Politics', 'Elections', 31, 31, 49, 27],
		['Politics', 'Appointed', 19, 14, 16, 14],
		['Politics', 'Hereditary', 0, 0, 2, 0],
		['Politics', 'Other', 2, 2, 2, 0],
		['Economy', 'Elections', 34, 15, 25, 9],
		['Economy', 'Appointed', 15, 11, 21, 11],
		['Economy', 'Hereditary', 0, 1, 0, 0],
		['Economy', 'I don\'t know', 9, 13, 12, 6],
		['Economy', 'Other', 1, 2, 7, 0],
		['Social', 'Elections', 35, 25, 39, 30],
		['Social', 'Appointed', 21, 15, 29, 10],
		['Social', 'Hereditary', 3, 1, 1, 1],
		['Social', 'Other', 1, 0, 3, 1]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (menuItemActive.classList.contains('menu__item--red')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('menu__item--green')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('menu__item--yellow')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Social'}]));
	}	
	
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2]);
	} else if (document.getElementById('city').value == 'byo') {
		view.setColumns([1, 3]);
	} else if (document.getElementById('city').value == 'gwe') {
		view.setColumns([1, 4]);
	} else if (document.getElementById('city').value == 'mut') {
		view.setColumns([1, 5]);
	}		
	
	const options = { 
		chartArea: {
			width: '70%',
			height: '70%',
		},
		title: 'How Citizens Choose Office Holders',
		pieHole: 0.4,
		slices: {
			0: { color: '#f15b28' },
			1: { color: '#7ebe42' },
			2: { color: '#fabe2b' },
			3: { color: '#9aa5ac' },
			4: { color: '#374c5b' }
		},
		legend: {
			position: 'bottom',
			textStyle: {
				fontSize: 16
			}
		},
		pieSliceTextStyle: {
			color: 'black',
			fontSize: 14
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false,
			align: 'center'
		}
	};
	
	const chart = new google.visualization.PieChart(document.getElementById('D1'));
	chart.draw(view, options);
};

// Gender Donut Charts //
function drawGenderChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Bulawayo', 'Gweru', 'Mutare'],
		['Politics', 'Female', 19, 19, 22, 16],
		['Politics', 'Male', 9, 9, 44, 13],
		['Economy', 'Female', 25, 34, 34, 23],
		['Economy', 'Male', 15, 31, 36, 14],
		['Social', 'Female', 18, 18, 24, 13],
		['Social', 'Male', 12, 12, 14, 17]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (menuItemActive.classList.contains('menu__item--red')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('menu__item--green')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('menu__item--yellow')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Social'}]));
	}	
	
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2]);
	} else if (document.getElementById('city').value == 'byo') {
		view.setColumns([1, 3]);
	} else if (document.getElementById('city').value == 'gwe') {
		view.setColumns([1, 4]);
	} else if (document.getElementById('city').value == 'mut') {
		view.setColumns([1, 5]);
	}	
	
	const options = { 
		chartArea: {
			width: '70%',
			height: '70%',
		},
		title: 'Gender of Office Holders in Networks',
		pieHole: 0.4,
		slices: {
			0: { color: '#f15b28' },
			1: { color: '#7ebe42' }
		},
		legend: {
			position: 'bottom',
			textStyle: {
				fontSize: 16
			}
		},
		pieSliceTextStyle: {
			color: 'black',
			fontSize: 14
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false
		}
	};
	
	const chart = new google.visualization.PieChart(document.getElementById('D1'));
	chart.draw(view, options);
};

// Methods of Interaction Donut Charts //
function drawMethodsChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Bulawayo', 'Gweru', 'Mutare'],
		['Politics', 'Face to Face', 11, 8, 6, 10],
		['Politics', 'Social Media', 23, 14, 26, 17],
		['Politics', 'Both', 20, 23, 41, 14],
		['Economy', 'Face to Face', 12, 7, 10, 8],
		['Economy', 'Social Media', 27, 20, 35, 27],
		['Economy', 'Both', 26, 15, 36, 11],
		['Social', 'Face to Face', 10, 9, 14, 10],
		['Social', 'Social Media', 20, 9, 24, 12],
		['Social', 'Both', 23, 20, 35, 19]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (menuItemActive.classList.contains('menu__item--red')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('menu__item--green')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('menu__item--yellow')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Social'}]));
	}	
	
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2]);
	} else if (document.getElementById('city').value == 'byo') {
		view.setColumns([1, 3]);
	} else if (document.getElementById('city').value == 'gwe') {
		view.setColumns([1, 4]);
	} else if (document.getElementById('city').value == 'mut') {
		view.setColumns([1, 5]);
	}		

	const options = { 
		chartArea: {
			width: '70%',
			height: '70%',
		},
		title: 'Methods of Interaction in Networks',
		pieHole: 0.4,
		slices: {
			0: { color: '#f15b28' },
			1: { color: '#7ebe42' },
			2: { color: '#fabe2b' },
			3: { color: '#9aa5ac' },
			4: { color: '#374c5b' }
		},
		legend: {
			position: 'bottom',
			textStyle: {
				fontSize: 16
			}
		},
		pieSliceTextStyle: {
			color: 'black',
			fontSize: 14
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false,
			align: 'center'
		}
	};
	
	const chart = new google.visualization.PieChart(document.getElementById('D1'));
	chart.draw(view, options);
};

// Discrimination Bar Charts //
function drawDiscriminationChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Bulawayo', 'Gweru', 'Mutare'],
		['Politics', 'Total Survey Respondents', 74, 72, 96, 60],
		['Politics', 'Total in Political Networks', 53, 44, 73, 41],
		['Politics', 'Language Barriers', 5, 2, 2, 4],
		['Politics', 'Prohibitive Membership Fees', 1, 2, 6, 6],
		['Politics', 'Defined Geographical Boundaries', 2, 0, 3, 1],
		['Politics', 'Gender', 5, 2, 6, 3],
		['Politics', 'Defined Religious Boundaries', 2, 1, 2, 0],
		['Politics', 'Defined Tribal Boundaries', 1, 0, 0, 2],
		['Politics', 'Age (too young or too old)', 7, 2, 10, 6],
		['Politics', 'Disability', 1, 0, 1, 4],
		['Politics', 'Other', 2, 0, 5, 2],
		['Economy', 'Total Survey Respondents', 74, 72, 96, 60],
		['Economy', 'Total in Economic Networks', 62, 49, 75, 50],
		['Economy', 'Language Barriers', 2, 5, 5, 3],
		['Economy', 'Prohibitive Membership Fees', 4, 1, 12, 10],
		['Economy', 'Defined Geographical Boundaries', 4, 1, 4, 5],
		['Economy', 'Gender', 1, 1, 3, 8],
		['Economy', 'Defined Religious Boundaries', 1, 1, 2, 4],
		['Economy', 'Defined Tribal Boundaries', 2, 0, 0, 6],
		['Economy', 'Age (too young or too old)', 6, 1, 11, 5],
		['Economy', 'Other', 2, 3, 3, 4],
		['Social', 'Total Survey Respondents', 74, 72, 96, 60],
		['Social', 'Total in Social Networks', 63, 45, 82, 50],
		['Social', 'Language Barriers', 6, 1, 2, 1],
		['Social', 'Prohibitive Membership Fees', 1, 0, 5, 6],
		['Social', 'Defined Geographical Boundaries', 1, 0, 3, 1],
		['Social', 'Gender', 1, 0, 3, 1],
		['Social', 'Defined Religious Boundaries', 0, 1, 1, 1],
		['Social', 'Defined Tribal Boundaries', 0, 0, 1, 0],
		['Social', 'Age (too young or too old)', 3, 1, 4, 0],
		['Social', 'Disability', 1, 0, 1, 1],
		['Social', 'Class', 5, 0, 1, 2]
	]);

	data.sort([{column: 2, desc: true}]);

	const view = new google.visualization.DataView(data);
	
	if (menuItemActive.classList.contains('menu__item--red')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('menu__item--green')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('menu__item--yellow')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Social'}]));
	}	
	
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'byo') {
		view.setColumns([1, 3,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'gwe') {
		view.setColumns([1, 4,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'mut') {
		view.setColumns([1, 5,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Discrimination Faced in Networks ',
		chartArea: {
			width: '90%',
			height: '75%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Total # of Respondents',
			minValue: 0,
			maxValue: 100
		},
		vAxis: {
			//title: '',
			textPosition: 'none'
		},
		annotations: {
			textStyle: {
				//fontName: 'Times-Roman',
				//fontSize: 11,
				//bold: true,
				//italic: true,
				// The color of the text.
				color: 'black',
				// The color of the text outline.
				//auraColor: '#d799ae',
				// The transparency of the text.
				//opacity: 0.8
			}
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.getElementById('D1'));

	chart.draw(view, options);
};