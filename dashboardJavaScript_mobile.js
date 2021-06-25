/*  
**********
Africa Citizenship Index Dashboard JavaScript Code
**********
*/

//Load 'Corechart' library
google.charts.load('current', {packages:['corechart']});

//Load gauge chart library
google.charts.load('current', {'packages':['gauge']});

//Draw overall score summary chart on loading home page
google.charts.setOnLoadCallback(drawOverallScoreGaugeCharts);

//Redraw charts when window resizes (to make Google charts responsive)
//window.addEventListener("resize", clearVizContainer, changeLayout, changeCharts);

//Create variables for DOM elements
const navMenu = document.querySelector('.menu');
const menuButton = document.querySelectorAll('.menu__button');
const menuItems = document.querySelectorAll('.menu__item');
let menuItemActive = document.querySelector('.menu__item--active');
const citySelect = document.getElementById('city');
const exitButton = document.querySelector('.exit');
const vizContainer = document.querySelector('.viz-container');

//Create variables for dashboard content
const aboutText = '<h1>The Africa Citizenship Index</h1><p>Citizenship is a multi-faceted concept that is shaped by the political, economic, and social life within a place. The African Citizenship Index aims to understand the ways in which ordinary people interact with each other in economic, social-support focused and political networks across the continent. The inaugural survey was conducted by SIVIO Institute in March – April 2021 across 5 African cities. <b>Harare, Zimbabwe</b> and <b>Lilongwe, Malawi</b> in Southern Africa, <b>Nairobi, Kenya</b> in East Africa <b>Yaoundé, Cameroon</b> in Central Africa and <b>Accra, Ghana</b> in West Africa.</p>';
const scoresText = '<p>Scores for each city are calculated on a 0 – 100 scale where 0 is the lowest possible score (unhealthy level of citizenship) and 100 is the highest possible score (vibrant citizenship).</p>';
const scoresSelect = '<select name="score" id="score" onchange="changeCharts()"><option value="ove">Overall Score</option><option value="pol">Politics Score</option><option value="eco">Economy Score</option><option value="soc">Social Score</option></select>';
const politicsSelect = '<select name="politics-variable" id="politics-variable" onchange="changeCharts()"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="voting">Voting in Elections</option></select>';
const economySelect = '<select name="economy-variable" id="economy-variable" onchange="changeCharts()"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option></select>';
const socialSelect = '<select name="social-variable" id="social-variable" onchange="changeCharts()"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="giving">Giving</option></select>';

//Open menu for mobile devices
function openMenu() {
	//Make menu button dissapear	
	for (let i = 0; i < menuButton.length; i++) {
		menuButton[i].style.display = 'none';
	}
	
	//Make viz-container and city-select dissapear
	vizContainer.style.display = 'none';
	citySelect.style.display = 'none';
	
	//Change CSS attributes of menu
	navMenu.style.borderBottom = 'none';
	navMenu.style.height = '100vh';
	navMenu.style.flexFlow = 'column nowrap';
	navMenu.style.justifyContent = 'center';
	
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].style.display = 'flex';
	};
	
	//Make exit button visible
	exitButton.style.display = 'flex';
};

//Close menu for mobile devices
function closeMenu() {	
	//Make menu items and exit button dissapear	
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].style.display = 'none';
	}
	
	exitButton.style.display = 'none';
	
	//Change CSS attributes of menu
	navMenu.style.borderBottom = '1px solid #9aa5ac';
	navMenu.style.height = '60px';
	navMenu.style.flexFlow = 'row wrap';
	navMenu.style.justifyContent = 'space-between';
	
	//Make menu button reappear
	for (let i = 0; i < menuButton.length; i++) {
		menuButton[i].style.display = 'flex';
	}
	
	//Make viz-container reappear
	vizContainer.style.display = 'flex';
	//Call function changeLayout() to make city select reappear
	clearVizContainer();
	changeLayout();
	changeCharts();
};

//For loop to loop through menu items and call functions to change charts and layout onclick
for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', changeMenuActive);
	menuItems[i].addEventListener('click', clearVizContainer);
	menuItems[i].addEventListener('click', changeLayout);
	menuItems[i].addEventListener('click', changeCharts);
};

//Function to run on button click to change active menu item
function changeMenuActive() {
	if (!this.classList.contains('menu__item--active')) {
		menuItemActive.classList.remove('menu__item--active');
	
		this.classList.add('menu__item--active');

		menuItemActive = this;
	}
};

//Function to clear viz-container div to avoid repetition within layout/chart functions
function clearVizContainer() {
	document.querySelector('.viz-container').innerHTML = '';
};

//Function to change layout based on user selection on main menu
function changeLayout() {
	//To move TO scores
	if (menuItemActive.classList.contains('scores')) {
		//Make city-select reappear
		citySelect.style.display = 'flex';		
		//Create child divs 
		for (let i = 0; i < 3; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
		//Create section content
		document.getElementById('viz-con-child-0').innerHTML = scoresSelect;
		document.getElementById('viz-con-child-2').innerHTML = scoresText;
	//To move TO survey
	} else if (menuItemActive.classList.contains('survey')) {
		//Make city-select reappear
		citySelect.style.display = 'flex';	
		//Create child divs 
		for (let i = 0; i < 4; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
	//To move TO politics
	} else if (menuItemActive.classList.contains('politics')) {
		//Make city-select reappear
		citySelect.style.display = 'flex';
		//Create child divs 
		for (let i = 0; i < 1; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
		//Create section content
		document.getElementById('viz-con-child-0').innerHTML = politicsSelect;
	//To move TO economy
	} else if (menuItemActive.classList.contains('economy')) {
		//Make city-select reappear
		citySelect.style.display = 'flex';	
		//Create child divs 
		for (let i = 0; i < 1; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
		//Create section content
		document.getElementById('viz-con-child-0').innerHTML = economySelect;
	//To move TO social
	} else if (menuItemActive.classList.contains('social')) {
		//Make city-select reappear
		citySelect.style.display = 'flex';			
		//Create child divs 
		for (let i = 0; i < 1; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
		//Create section content
		document.getElementById('viz-con-child-0').innerHTML = socialSelect;
	//To move TO digital citizenship
	} else if (menuItemActive.classList.contains('digital-citizenship')) {
		//Make city-select reappear
		citySelect.style.display = 'flex';
		//Create child divs 
		for (let i = 0; i < 1; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
	//To move TO about
	} else if (menuItemActive.classList.contains('about')) {
		//Make city-select dissapear
		citySelect.style.display = 'none';
		//Create child divs 
		for (let i = 0; i < 1; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
		//Create section content
		document.getElementById('viz-con-child-0').innerHTML = aboutText;
	}
};

function changeCharts() {
	if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'ove') {
		google.charts.setOnLoadCallback(drawOverallScoreGaugeCharts);
	} else if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'pol') {
		google.charts.setOnLoadCallback(drawPoliticsGaugeCharts);
	} else if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'eco') {
		google.charts.setOnLoadCallback(drawEconomyGaugeCharts);
	} else if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'soc') {
		google.charts.setOnLoadCallback(drawSocialGaugeCharts);
	}
};

/*  
**********
Code for Google Charts
**********
*/

//SCORE SUMMARY CHARTS

//Gauge charts
function drawOverallScoreGaugeCharts() {
	const data = google.visualization.arrayToDataTable([
		['City', 'Overall Score'],
		['Harare', 50],
		['Lilongwe', 70],
		['Nairobi', 66],
		['Yaoundé', 67],
		['Accra', 70]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (document.getElementById('city').value == 'hre') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Harare'}]));
	} else if (document.getElementById('city').value == 'li') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Lilongwe'}]));
	} else if (document.getElementById('city').value == 'nai') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Nairobi'}]));
	} else if (document.getElementById('city').value == 'ya') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Yaoundé'}]));
	} else if (document.getElementById('city').value == 'acc') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Accra'}]));
	}

	const options = {
		width: '100%', height: 250,
		redFrom: 85, redTo: 100,
		yellowFrom:70, yellowTo: 85,
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-1'));
	chart.draw(view, options);
};

function drawPoliticsGaugeCharts() {
	const data = google.visualization.arrayToDataTable([
		['City', 'Overall Score'],
		['Harare', 51],
		['Lilongwe', 70],
		['Nairobi', 64],
		['Yaoundé', 59],
		['Accra', 75]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (document.getElementById('city').value == 'hre') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Harare'}]));
	} else if (document.getElementById('city').value == 'li') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Lilongwe'}]));
	} else if (document.getElementById('city').value == 'nai') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Nairobi'}]));
	} else if (document.getElementById('city').value == 'ya') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Yaoundé'}]));
	} else if (document.getElementById('city').value == 'acc') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Accra'}]));
	}
	
	const options = {
		width: '100%', height: 250,
		redFrom: 85, redTo: 100,
		yellowFrom:70, yellowTo: 85,
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-1'));
	chart.draw(view, options);
};

function drawEconomyGaugeCharts() {
	const data = google.visualization.arrayToDataTable([
		['City', 'Overall Score'],
		['Harare', 42],
		['Lilongwe', 66],
		['Nairobi', 64],
		['Yaoundé', 69],
		['Accra', 55]
	]);
		
	const view = new google.visualization.DataView(data);
	
	if (document.getElementById('city').value == 'hre') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Harare'}]));
	} else if (document.getElementById('city').value == 'li') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Lilongwe'}]));
	} else if (document.getElementById('city').value == 'nai') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Nairobi'}]));
	} else if (document.getElementById('city').value == 'ya') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Yaoundé'}]));
	} else if (document.getElementById('city').value == 'acc') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Accra'}]));
	}
	
	const options = {
		width: '100%', height: 250,
		redFrom: 85, redTo: 100,
		yellowFrom:70, yellowTo: 85,
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-1'));
	chart.draw(view, options);
};

function drawSocialGaugeCharts() {
	const data = google.visualization.arrayToDataTable([
		['City', 'Overall Score'],
		['Harare', 58],
		['Lilongwe', 75],
		['Nairobi', 69],
		['Yaoundé', 75],
		['Accra', 81]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (document.getElementById('city').value == 'hre') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Harare'}]));
	} else if (document.getElementById('city').value == 'li') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Lilongwe'}]));
	} else if (document.getElementById('city').value == 'nai') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Nairobi'}]));
	} else if (document.getElementById('city').value == 'ya') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Yaoundé'}]));
	} else if (document.getElementById('city').value == 'acc') {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Accra'}]));
	}
	
	const options = {
		width: '100%', height: 250,
		redFrom: 85, redTo: 100,
		yellowFrom:70, yellowTo: 85,
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-1'));
	chart.draw(view, options);
};







//Sub score summary bar charts
function drawPoliticsScoreSummaryBarChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Total', 'Total Score', 51, 70, 64, 59, 75],
		['Politics', 'Membership', 33, 73, 47, 38, 16],
		['Politics', 'Frequency', 40, 56, 19, 37, 88],
		['Politics', 'Democracy', 65, 56, 61, 73, 65],
		['Politics', 'Gender', 11, 88, 98, 100, 94],
		['Politics', 'Discrimination', 89, 71, 82, 84, 92],
		['Politics', 'Elections', 66, 78, 79, 22, 98]		
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]); 
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Politics Score Summary',
		chartArea: {
			width: '90%',
			height: '75%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Score',
			minValue: 0,
			maxValue: 6, 
			gridlines: {count: 12}
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 14,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.querySelector('.summary-child-2-charts-4'));

	chart.draw(view, options);
};

function drawEconomyScoreSummaryBarChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Economy', 'Total Score', 42, 66, 64, 69, 55],
		['Economy', 'Membership', 40, 87, 65, 57, 5],
		['Economy', 'Frequency', 55, 48, 29, 48, 64],
		['Economy', 'Democracy', 27, 35, 52, 57, 38],
		['Economy', 'Gender', 11, 87, 97, 98, 72],
		['Economy', 'Discrimination', 76, 72, 78, 83, 95]
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]); 
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Economy Score Summary',
		chartArea: {
			width: '90%',
			height: '75%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Score',
			minValue: 0,
			maxValue: 6, 
			gridlines: {count: 12}
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 14,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.querySelector('.summary-child-2-charts-5'));

	chart.draw(view, options);
};

function drawSocialScoreSummaryBarChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Social', 'Total Score', 58, 75, 69, 75, 81],
		['Social', 'Membership', 49, 77, 68, 68, 86],
		['Social', 'Frequency', 69, 69, 46, 67, 97],
		['Social', 'Democracy', 32, 45, 36, 59, 15],
		['Social', 'Gender', 27, 96, 95, 82, 93],
		['Social', 'Discrimination', 91, 90, 91, 87, 94],
		['Social', 'Giving', 80, 83, 78, 86, 100]
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]); 
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Social Score Summary',
		chartArea: {
			width: '90%',
			height: '75%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Score',
			minValue: 0,
			maxValue: 6, 
			gridlines: {count: 12}
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 14,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.querySelector('.summary-child-2-charts-6'));

	chart.draw(view, options);
};

//END OF SUMMARY CHARTS//

//SURVEY CHARTS//
// Number of Respondents Bar Chart //
function drawNumberOfRespondentsChart() {

	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Total Survey Respondents', 446, 403, 421, 402, 457],
		['Female Respondents', 180, 213, 193, 187, 231],
		['Male Respondents', 266, 190, 228, 215, 226]
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([0, 1,
			{ sourceColumn: 0,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([0, 2,
			{ sourceColumn: 0,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([0, 3,
			{ sourceColumn: 0,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([0, 4,
			{ sourceColumn: 0,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([0, 5,
			{ sourceColumn: 0,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Number of Survey Respondents',
		chartArea: {
			width: '50%',
			height: '50%'
		},
		bar: {groupWidth: '60%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Total # of Respondents',
			minValue: 0,
			maxValue: 500,
			gridlines: {count: 25}
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 12,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.getElementById('chart1'));

	chart.draw(view, options);
};

// Respondent Income Summary Pie Chart //
function drawIncomeSummaryChart() {
	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['> $$5,000', 9, 8, 0, 3, 4],
		['$3,001 - $5,000', 3, 6, 1, 6, 24],
		['$1,001 - $3,000', 21, 32, 15, 9, 151],
		['$501 - $1,000', 33, 57, 44, 51, 205],
		['$251 - $500', 84, 139, 125, 130, 18],
		['< $250', 296, 161, 236, 203, 11]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([0, 1]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([0, 2]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([0, 3]);
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([0, 4]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([0, 5]);
	}
	
	const options = { 
		chartArea: {
			width: '70%',
			height: '70%',
		},
		title: 'Respondents Monthly Income',
		pieHole: 0.4,
		slices: {
			0: { color: '#f15b28' },
			1: { color: '#7ebe42' },
			2: { color: '#fabe2b' },
			3: { color: '#9aa5ac' },
			4: { color: '#374c5b' },
			5: { color: '#9f32b8' }
		},
		legend: {
			position: 'right',
			textStyle: {
				fontSize: 10
			}
		},
		pieSliceTextStyle: {
			color: 'black',
			fontSize: 10
		},
		titleTextStyle: {
			fontSize: 14,
			bold: false,
			align: 'center'
		}
	};
	
	const chart = new google.visualization.PieChart(document.getElementById('chart2'));
	chart.draw(view, options);
};

// Respondent Education Summary Pie Chart //
function drawEducationSummaryChart() {
	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Tertiary', 212, 227, 193, 296, 139],
		['Secondary', 215, 155, 181, 78, 236],
		['Primary', 14, 15, 40, 23, 27],
		['None', 5, 6, 7, 5, 11]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([0, 1]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([0, 2]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([0, 3]);
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([0, 4]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([0, 5]);
	}
	
	const options = { 
		chartArea: {
			width: '70%',
			height: '70%',
		},
		title: 'Respondents Level of Education',
		pieHole: 0.4,
		slices: {
			0: { color: '#f15b28' },
			1: { color: '#7ebe42' },
			2: { color: '#fabe2b' },
			3: { color: '#9aa5ac' }
		},
		legend: {
			position: 'right',
			textStyle: {
				fontSize: 10
			}
		},
		pieSliceTextStyle: {
			color: 'black',
			fontSize: 10
		},
		titleTextStyle: {
			fontSize: 14,
			bold: false,
			align: 'center'
		}
	};
	
	const chart = new google.visualization.PieChart(document.getElementById('chart3'));
	chart.draw(view, options);
};

function drawAgeSummaryChart() {

	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['18 - 25', 141, 78, 90, 154, 3],
		['26 - 35', 125, 138, 98, 128, 66],
		['36 - 45', 108, 111, 109, 81, 210],
		['46 - 55', 49, 56, 80, 34, 79],
		['56 - 65', 13, 16, 30, 5, 27],
		['65+', 10, 4, 14, 0, 28]
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([0, 1]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([0, 2]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([0, 3]);
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([0, 4]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([0, 5]);
	}		
	
	const options = {
		title: 'Age of Respondents',
		chartArea: {
			width: '70%',
			height: '70%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Age of Respondents',
		},
		vAxis: {
			title: '# of Respondents',
			minValue: 0,
			maxValue: 700,
			gridlines: {count: 14}
		},
		titleTextStyle: {
			fontSize: 14,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.ColumnChart(document.getElementById('chart4'));

	chart.draw(view, options);
};
//END OF SURVEY CHARTS//