//Testing git push...

//Redraw charts when window resizes (to make Google charts responsive)
//window.addEventListener("resize", clearVizContainer, changeLayout, changeCharts);

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

//Create variables for DOM elements
const navMenu = document.querySelector('.menu');
const menuButton = document.querySelectorAll('.menu__button');
const menuItems = document.querySelectorAll('.menu__item');
let menuItemActive = document.querySelector('.menu__item--active');
const exitButton = document.querySelector('.exit');
const vizContainer = document.querySelector('.viz-container');

//Create variables for dashboard content
const citySelect = '<select name="city" id="city" onchange="changeCharts();" autocomplete="off"><option value="hre">Harare</option><option value="li">Lilongwe</option><option value="nai">Nairobi</option><option value="ya">Yaoundé</option><option value="acc">Accra</option></select>'
const scoresSelect = '<select name="score" id="score" onchange="changeCharts(); changeScoreText();" autocomplete="off"><option value="ove">Overall Score</option><option value="pol">Politics Score</option><option value="eco">Economy Score</option><option value="soc">Social Score</option></select>';
const politicsSelect = '<select name="politics-variable" id="politics-variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="voting">Voting in Elections</option></select>';
const economySelect = '<select name="economy-variable" id="economy-variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option></select>';
const socialSelect = '<select name="social-variable" id="social-variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="giving">Giving</option></select>';
const scoresText = '<p>Scores for each city are calculated on a 0 – 100 scale where 0 is the lowest possible score (unhealthy level of citizenship) and 100 is the highest possible score (vibrant citizenship).</p>';
const aboutText = '<h1>The Africa Citizenship Index</h1><p>Citizenship is a multi-faceted concept that is shaped by the political, economic, and social life within a place. The African Citizenship Index aims to understand the ways in which ordinary people interact with each other in economic, social-support focused and political networks across the continent. The inaugural survey was conducted by SIVIO Institute in March – April 2021 across 5 African cities. <b>Harare, Zimbabwe</b> and <b>Lilongwe, Malawi</b> in Southern Africa, <b>Nairobi, Kenya</b> in East Africa <b>Yaoundé, Cameroon</b> in Central Africa and <b>Accra, Ghana</b> in West Africa.</p>';
const politicsText = '<p>The political score measures citizen participation in political life in their city. It includes membership in political parties, campaign groups, social movements etc. It also measures participation in elections, as well as gender equality in political networks, democracy within networks and discrimination faced in joining any type of group / network.</p>';
const economyText = '<p>The economy score measures citizen participation in economic life in their city. It includes membership in networks such as savings and lending groups, labour pooling groups, cooperatives etc. It also measures gender equality in economic networks, democracy within networks and discrimination faced in joining any type of group / network.</p>';
const socialText = '<p>The social score measures citizens participation in social networks such as religious groups, burial societies, sporting associates etc. It also measures giving and solidarity among citizens as well as gender equality in these groups / networks, democracy within networks and discrimination faced in joining any type of group / network.</p>';

//Open menu for mobile devices
function openMenu() {
	//Make menu button dissapear	
	for (let i = 0; i < menuButton.length; i++) {
		menuButton[i].style.display = 'none';
	}
	
	//Make viz-container and city-select dissapear
	vizContainer.style.display = 'none';
	
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
	navMenu.style.justifyContent = 'left';
	
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
	//Create div to hold select drop downs
	let selectDiv = document.createElement('div');
	selectDiv.setAttribute('class', 'options-choose-div');
	selectDiv.style.margin = '10px';
	
	//To move TO scores
	if (menuItemActive.classList.contains('scores')) {
		//Create drop down select menus
		document.querySelector('.viz-container').appendChild(selectDiv);
		document.querySelector('.options-choose-div').innerHTML = citySelect + scoresSelect;
		//Create divs to hold charts and text 
		for (let i = 0; i < 3; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
		//Add text below gauge chart
		document.getElementById('viz-con-child-1').innerHTML = scoresText;
	//To move TO survey
	} else if (menuItemActive.classList.contains('survey')) {
		//Create drop down select menus
		document.querySelector('.viz-container').appendChild(selectDiv);
		document.querySelector('.options-choose-div').innerHTML = citySelect;
		//Create child divs 
		for (let i = 0; i < 4; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
	//To move TO politics
	} else if (menuItemActive.classList.contains('politics')) {
		//Create drop down select menus
		document.querySelector('.viz-container').appendChild(selectDiv);
		document.querySelector('.options-choose-div').innerHTML = citySelect + politicsSelect;
		//Create child divs 
		for (let i = 0; i < 3; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
	//To move TO economy
	} else if (menuItemActive.classList.contains('economy')) {
		//Create drop down select menus
		document.querySelector('.viz-container').appendChild(selectDiv);
		document.querySelector('.options-choose-div').innerHTML = citySelect + economySelect;
		//Create child divs 
		for (let i = 0; i < 3; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
	//To move TO social
	} else if (menuItemActive.classList.contains('social')) {
		//Create drop down select menus
		document.querySelector('.viz-container').appendChild(selectDiv);
		document.querySelector('.options-choose-div').innerHTML = citySelect + socialSelect;
		//Create child divs 
		for (let i = 0; i < 3; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
	//To move TO digital citizenship
	} else if (menuItemActive.classList.contains('digital-citizenship')) {
		//Create drop down select menus
		document.querySelector('.viz-container').appendChild(selectDiv);
		document.querySelector('.options-choose-div').innerHTML = citySelect;
		//Create child divs 
		for (let i = 0; i < 4; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
	//To move TO about	
	} else if (menuItemActive.classList.contains('about')) {
		//Create child divs 
		for (let i = 0; i < 1; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'viz-con-child-' + i;
			document.querySelector('.viz-container').appendChild(vizConChild);
			vizConChild.style.margin = '10px';
		}
		//Create section content
		document.getElementById('viz-con-child-0').innerHTML = aboutText;
	}
};

function changeScoreText() {
	if (document.getElementById('score').value == 'ove') {
		document.getElementById('viz-con-child-1').innerHTML = scoresText;
	} else if (document.getElementById('score').value == 'pol') {
		document.getElementById('viz-con-child-1').innerHTML = scoresText + politicsText;
	} else if (document.getElementById('score').value == 'eco') {
		document.getElementById('viz-con-child-1').innerHTML = scoresText + economyText;
	} else if (document.getElementById('score').value == 'soc') {
		document.getElementById('viz-con-child-1').innerHTML = scoresText + socialText;
	} 
};

function changeCharts() {
	if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'ove') {
		google.charts.setOnLoadCallback(drawOverallScoreGaugeCharts);
		document.getElementById('viz-con-child-2').innerHTML = '';
	} else if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'pol') {
		google.charts.setOnLoadCallback(drawPoliticsGaugeCharts);
		google.charts.setOnLoadCallback(drawPoliticsScoreSummaryBarChart);
	} else if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'eco') {
		google.charts.setOnLoadCallback(drawEconomyGaugeCharts);
		google.charts.setOnLoadCallback(drawEconomyScoreSummaryBarChart);
	} else if (menuItemActive.classList.contains('scores') && document.getElementById('score').value == 'soc') {
		google.charts.setOnLoadCallback(drawSocialGaugeCharts);
		google.charts.setOnLoadCallback(drawSocialScoreSummaryBarChart);
	} else if (menuItemActive.classList.contains('survey')) {
		google.charts.setOnLoadCallback(drawNumberOfRespondentsChart);
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
		redColor: '#f15c27',
		redFrom: 85, redTo: 100,
		yellowColor: '#f08660',
		yellowFrom:70, yellowTo: 85,
		greenColor: '#eeb7a4',
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
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
		redColor: '#f15c27',
		redFrom: 85, redTo: 100,
		yellowColor: '#f08660',
		yellowFrom:70, yellowTo: 85,
		greenColor: '#eeb7a4',
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
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
		redColor: '#f15c27',
		redFrom: 85, redTo: 100,
		yellowColor: '#f08660',
		yellowFrom:70, yellowTo: 85,
		greenColor: '#eeb7a4',
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
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
		redColor: '#f15c27',
		redFrom: 85, redTo: 100,
		yellowColor: '#f08660',
		yellowFrom:70, yellowTo: 85,
		greenColor: '#eeb7a4',
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
};

//Sub score summary bar charts
function drawPoliticsScoreSummaryBarChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style' }, {type: 'string', role: 'tooltip'}],
		['Total', 'Total Score', 51, 70, 64, 59, 75, '#f15c27', '1'],
		['Politics', 'Membership', 33, 73, 47, 38, 16, '#eeb7a4', '2'],
		['Politics', 'Frequency', 40, 56, 19, 37, 88, '#eeb7a4', '3'],
		['Politics', 'Democracy', 65, 56, 61, 73, 65, '#eeb7a4', '4'],
		['Politics', 'Gender', 11, 88, 98, 100, 94, '#eeb7a4', '5'],
		['Politics', 'Discrimination', 89, 71, 82, 84, 92, '#eeb7a4', '6'],
		['Politics', 'Elections', 66, 78, 79, 22, 98, '#eeb7a4', '7']		
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2, 7, 8, 
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3, 7, 8,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4, 7, 8,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]); 
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5, 7, 8,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6, 7, 8,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Politics Score Summary',
		height: 250,
		width: '100%',
		chartArea: {
			width: '90%',
			height: '70%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Score',
			minValue: 0,
			maxValue: 100, 
			gridlines: {count: 12}
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 16,
			fontName: 'Arial',
			bold: false,
			italic: true
		}
	};

	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-2'));

	chart.draw(view, options);
};

function drawEconomyScoreSummaryBarChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style' }],
		['Economy', 'Total Score', 42, 66, 64, 69, 55, '#f15c27'],
		['Economy', 'Membership', 40, 87, 65, 57, 5, '#eeb7a4'],
		['Economy', 'Frequency', 55, 48, 29, 48, 64, '#eeb7a4'],
		['Economy', 'Democracy', 27, 35, 52, 57, 38, '#eeb7a4'],
		['Economy', 'Gender', 11, 87, 97, 98, 72, '#eeb7a4'],
		['Economy', 'Discrimination', 76, 72, 78, 83, 95, '#eeb7a4']
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]); 
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Economy Score Summary',
		height: 250,
		width: '100%',
		chartArea: {
			width: '90%',
			height: '70%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Score',
			minValue: 0,
			maxValue: 100, 
			gridlines: {count: 12}
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 16,
			fontName: 'Arial',
			bold: false,
			italic: true
		}
	};

	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-2'));

	chart.draw(view, options);
};

function drawSocialScoreSummaryBarChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style' }],
		['Social', 'Total Score', 58, 75, 69, 75, 81, '#f15c27'],
		['Social', 'Membership', 49, 77, 68, 68, 86, '#eeb7a4'],
		['Social', 'Frequency', 69, 69, 46, 67, 97, '#eeb7a4'],
		['Social', 'Democracy', 32, 45, 36, 59, 15, '#eeb7a4'],
		['Social', 'Gender', 27, 96, 95, 82, 93, '#eeb7a4'],
		['Social', 'Discrimination', 91, 90, 91, 87, 94, '#eeb7a4'],
		['Social', 'Giving', 80, 83, 78, 86, 100, '#eeb7a4']
	]);

	const view = new google.visualization.DataView(data);
		
	if (document.getElementById('city').value == 'hre') {
		view.setColumns([1, 2, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]); 
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6, 7,
			{ sourceColumn: 1,
			type: 'string',
			role: 'annotation' },
		]);
	}		
	
	const options = {
		title: 'Social Score Summary',
		height: 250,
		width: '100%',
		chartArea: {
			width: '90%',
			height: '70%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Score',
			minValue: 0,
			maxValue: 100, 
			gridlines: {count: 12}
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 16,
			fontName: 'Arial',
			bold: false,
			italic: true
		}
	};

	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-2'));

	chart.draw(view, options)
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

	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-0'));

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