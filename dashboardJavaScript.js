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
		document.querySelector('h3').remove();
		menuItemActive.classList.remove('menu__item--active');
	
		const heading = document.createElement('h3');
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

//Function to change layout based on user selection on main menu
function changeLayout() {
	//Create "check" variables to use in if statement
	const isSurveyCheck = document.querySelector('.survey-parent');
	const isSummaryCheck = document.querySelector('.summary-div');
	const isPoliticsCheck = document.querySelector('.politics-div');
	const isEconomyOrSocialCheck = document.querySelector('.economics-or-social-div');
	const isGivingOrDigitalCheck = document.querySelector('.giving-or-digital-div');
	
	//To move TO summary
	if (this.classList.contains('summary') && ((typeof(isSummaryCheck) == 'undefined' || isSummaryCheck == null))) {	
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create not-survey-parent div 
		const notSurveyDiv = document.createElement('div');
		notSurveyDiv.setAttribute('class', 'not-survey-parent');
		notSurveyDiv.classList.add('summary-div');
		document.querySelector('.viz-container').appendChild(notSurveyDiv);
	//To move TO politics
	} else if ((this.classList.contains('politics')) && ((typeof(isPoliticsCheck) == 'undefined' || isPoliticsCheck == null))) {
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create drop down selectors parent div
		const selectDiv = document.createElement('div');
		selectDiv.setAttribute('class', 'select-parent');
		document.querySelector('.viz-container').prepend(selectDiv);
		//create select drop down for cities
		const citySelect = document.createElement('div');
		citySelect.setAttribute('class', 'select-child-city');
		document.querySelector('.select-parent').appendChild(citySelect);
		//create select drop down for variables
		const variableSelect = document.createElement('div');
		variableSelect.setAttribute('class', 'select-child-variable');
		document.querySelector('.select-parent').appendChild(variableSelect);
		//Add dropdown city menu
		document.querySelector('.select-child-city').innerHTML = '<select name="city" id="city" onchange="changeCharts()"><option value="hre">Harare</option><option value="li">Lilongwe</option><option value="nai">Nairobi</option><option value="ya">Yaoundé</option><option value="acc">Accra</option></select>';
		//Add dropdown variable menu
		document.querySelector('.select-child-variable').innerHTML = '<select name="variable" id="variable" onchange="changeCharts()"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="voting">Voting in Elections</option></select>';
		//create not-survey-parent div 
		const notSurveyDiv = document.createElement('div');
		notSurveyDiv.setAttribute('class', 'not-survey-parent');
		notSurveyDiv.classList.add('politics-div');
		document.querySelector('.viz-container').appendChild(notSurveyDiv);
	//To move TO economy or social
	} else if ((this.classList.contains('economy') || this.classList.contains('social')) && ((typeof(isEconomyOrSocialCheck) == 'undefined' || isEconomyOrSocialCheck == null))) {
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create drop down selectors parent div
		const selectDiv = document.createElement('div');
		selectDiv.setAttribute('class', 'select-parent');
		document.querySelector('.viz-container').prepend(selectDiv);
		//create select drop down for cities
		const citySelect = document.createElement('div');
		citySelect.setAttribute('class', 'select-child-city');
		document.querySelector('.select-parent').appendChild(citySelect);
		//create select drop down for variables
		const variableSelect = document.createElement('div');
		variableSelect.setAttribute('class', 'select-child-variable');
		document.querySelector('.select-parent').appendChild(variableSelect);
		//Add dropdown city menu
		document.querySelector('.select-child-city').innerHTML = '<select name="city" id="city" onchange="changeCharts()"><option value="hre">Harare</option><option value="li">Lilongwe</option><option value="nai">Nairobi</option><option value="ya">Yaoundé</option><option value="acc">Accra</option></select>';
		//Add dropdown variable menu 
		document.querySelector('.select-child-variable').innerHTML = '<select name="variable" id="variable" onchange="changeCharts()"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option></select>';	
		//create not-survey-parent div 
		const notSurveyDiv = document.createElement('div');
		notSurveyDiv.setAttribute('class', 'not-survey-parent');
		notSurveyDiv.classList.add('economics-or-social-div');
		document.querySelector('.viz-container').appendChild(notSurveyDiv); 
	//To move TO giving or digital citizenship
	} else if ((this.classList.contains('giving') || this.classList.contains('digital-citizenship')) && ((typeof(isGivingOrDigitalCheck) == 'undefined' || isGivingOrDigitalCheck == null))) {
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create drop down selectors parent div
		const selectDiv = document.createElement('div');
		selectDiv.setAttribute('class', 'select-parent');
		document.querySelector('.viz-container').prepend(selectDiv);
		//create select drop down for cities//
		const citySelect = document.createElement('div');
		citySelect.setAttribute('class', 'select-child-city-only');
		document.querySelector('.select-parent').appendChild(citySelect);
		//Add dropdown city menu
		document.querySelector('.select-child-city-only').innerHTML = '<select name="city" id="city" onchange="changeCharts()"><option value="hre">Harare</option><option value="li">Lilongwe</option><option value="nai">Nairobi</option><option value="ya">Yaoundé</option><option value="acc">Accra</option></select>';
		//create not-survey-parent div 
		const notSurveyDiv = document.createElement('div');
		notSurveyDiv.setAttribute('class', 'not-survey-parent');
		notSurveyDiv.classList.add('giving-or-digital-div');
		document.querySelector('.viz-container').appendChild(notSurveyDiv);
	//To move TO survey
	} else if (this.classList.contains('survey') && ((typeof(isSurveyCheck) == 'undefined' || isSurveyCheck == null))) {
		document.querySelector('.viz-container').innerHTML = '<div class="survey-parent"><div class="survey-child-1-1"><div class="survey-child-2-1"><h1>The Africa Citizenship Survey</h1></div><div class="survey-child-2-2"><div class="survey-child-3-1"><img src="africa_map.png" alt="Africa Map" class="responsive-img" width="324px" height="360px"></div><div class="survey-child-3-2"><p>Citizenship is a multi-faceted concept. It is about more than voting in elections. The African Citizenship Survey aims to understand the way in which citizens interact with each other in economic, social-support focused and political networks. The inaugural survey was conducted by SIVIO Institute in March – April 2021 across 5 African cities. <b>Harare, Zimbabwe</b> and <b>Lilongwe, Malawi</b> in Southern Africa, <b>Nairobi, Kenya</b> in East Africa <b>Yaoundé, Cameroon</b> in Central Africa and <b>Accra, Ghana</b> in West Africa.</p></div></div></div><div class="survey-child-1-arrow"><a class="next" onclick="surveyLayout();">&#10095;</a></div></div>';
	}
};

//Functon to change survey layout when user clicks next or previous buttons 
function surveyLayout() {
	const nextCheck = document.querySelector('.next');
	const prevCheck = document.querySelector('.prev');
	if (typeof(nextCheck) != 'undefined' && nextCheck != null) {
		document.querySelector('.survey-parent').remove();
		document.querySelector('.viz-container').innerHTML = '<div class="survey-parent"><div class="survey-child-1-arrow"><a class="prev" onclick="surveyLayout();">&#10094;</a></div><div class="survey-child-1-charts"><div class="survey-child-2-charts-1"></div><div class="survey-child-2-charts-2"></div><div class="survey-child-2-charts-3"></div><div class="survey-child-2-charts-4"></div></div></div>';
		//create drop down selector for cities
		const selectDiv = document.createElement('div');
		selectDiv.setAttribute('class', 'select-parent');
		document.querySelector('.viz-container').prepend(selectDiv);
		//create select drop down for cities//
		const citySelect = document.createElement('div');
		citySelect.setAttribute('class', 'select-child-city-only');
		document.querySelector('.select-parent').appendChild(citySelect);
		//Add dropdown city menu
		document.querySelector('.select-child-city-only').innerHTML = '<select name="city" id="city" onchange="changeCharts()"><option value="hre">Harare</option><option value="li">Lilongwe</option><option value="nai">Nairobi</option><option value="ya">Yaoundé</option><option value="acc">Accra</option></select>';
		google.charts.setOnLoadCallback(drawNumberOfRespondentsChart);
		google.charts.setOnLoadCallback(drawIncomeSummaryChart);
		google.charts.setOnLoadCallback(drawEducationSummaryChart);
		google.charts.setOnLoadCallback(drawAgeSummaryChart);
	} else if (typeof(prevCheck) != 'undefined' && prevCheck != null) {
		document.querySelector('.survey-parent').remove();
		document.querySelector('.viz-container').innerHTML = '<div class="survey-parent"><div class="survey-child-1-1"><div class="survey-child-2-1"><h1>The Africa Citizenship Survey</h1></div><div class="survey-child-2-2"><div class="survey-child-3-1"><img src="africa_map.png" alt="Africa Map" class="responsive-img" width="324px" height="360px"></div><div class="survey-child-3-2"><p>Citizenship is a multi-faceted concept. It is about more than voting in elections. The African Citizenship Survey aims to understand the way in which citizens interact with each other in economic, social-support focused and political networks. The inaugural survey was conducted by SIVIO Institute in March – April 2021 across 5 African cities. <b>Harare, Zimbabwe</b> and <b>Lilongwe, Malawi</b> in Southern Africa, <b>Nairobi, Kenya</b> in East Africa <b>Yaoundé, Cameroon</b> in Central Africa and <b>Accra, Ghana</b> in West Africa.</p></div></div></div><div class="survey-child-1-arrow"><a class="next" onclick="surveyLayout();">&#10095;</a></div></div>';
	}
};

/*  
**********
Code for the changing google charts based on user selection
**********
*/

function changeCharts() {
	const surveyChartsCheck = document.querySelector('.survey-child-1-charts');
	
	if (menuItemActive.classList.contains('summary')) {
		document.querySelector('.not-survey-parent').innerHTML = '';
	} else if (menuItemActive.classList.contains('survey') && (typeof(surveyChartsCheck) != 'undefined' && surveyChartsCheck != null)) {  
		document.querySelector('.survey-child-2-charts-1').innerHTML = '';
		document.querySelector('.survey-child-2-charts-2').innerHTML = '';
		document.querySelector('.survey-child-2-charts-3').innerHTML = '';
		document.querySelector('.survey-child-2-charts-4').innerHTML = '';
		google.charts.setOnLoadCallback(drawNumberOfRespondentsChart);
		google.charts.setOnLoadCallback(drawIncomeSummaryChart);
		google.charts.setOnLoadCallback(drawEducationSummaryChart);
		google.charts.setOnLoadCallback(drawAgeSummaryChart);
	}else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'membership') { 
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'frequency') { 
		document.querySelector('.not-survey-parent').innerHTML = '';
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'democracy') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'gender') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'discrimination') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'voting') {
		document.querySelector('.not-survey-parent').innerHTML = '';
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'membership') { 
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'frequency') { 
		document.querySelector('.not-survey-parent').innerHTML = '';
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'democracy') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'gender') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'discrimination') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'membership') { 
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'frequency') { 
		document.querySelector('.not-survey-parent').innerHTML = '';
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'democracy') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'gender') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'discrimination') {
		document.querySelector('.not-survey-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('giving')) { 
		document.querySelector('.not-survey-parent').innerHTML = '';
	} else if (menuItemActive.classList.contains('digital-citizenship')) { 
		document.querySelector('.not-survey-parent').innerHTML = '';
	}
};

/*  
**********
Code for Google Charts
**********
*/

//SURVEY CHARTS//
// Number of Respondents Bar Chart //
function drawNumberOfRespondentsChart() {

	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Total Survey Respondents', 350, 461, 609, 380, 297],
		['Female Respondents', 190, 224, 346, 185, 143],
		['Male Respondents', 160, 237, 263, 195, 154]
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
			width: '90%',
			height: '75%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Total # of Respondents',
			minValue: 0,
			maxValue: 700,
			gridlines: {count: 14}
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

	const chart = new google.visualization.BarChart(document.querySelector('.survey-child-2-charts-1'));

	chart.draw(view, options);
};

// Respondent Income Summary Pie Chart //
function drawIncomeSummaryChart() {
	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['$3,001 - $5,000', 236, 125, 44, 15, 1],
		['$1,001 - $3,000', 125, 44, 15, 1, 236],
		['$501 - $1,000', 44, 15, 1, 236, 125],
		['$251 - $500', 15, 1, 236, 125, 44],
		['< $250', 1, 236, 125, 44, 15]
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
			4: { color: '#374c5b' }
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.survey-child-2-charts-2'));
	chart.draw(view, options);
};

// Respondent Education Summary Pie Chart //
function drawEducationSummaryChart() {
	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Tertiary', 193, 181, 40, 7, 193],
		['Secondary', 181, 40, 7, 193, 181],
		['Primary', 40, 7, 193, 181, 40],
		['None', 7, 193, 181, 40, 7]
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.survey-child-2-charts-3'));
	chart.draw(view, options);
};

function drawAgeSummaryChart() {

	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['18 - 25', 350, 461, 609, 380, 297],
		['26 - 35', 190, 224, 346, 185, 143],
		['36 - 45', 160, 237, 263, 195, 154],
		['46 - 55', 350, 461, 609, 380, 297],
		['55 - 65', 190, 224, 346, 185, 143],
		['65+', 160, 237, 263, 195, 154]
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
			width: '75%',
			height: '75%'
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

	const chart = new google.visualization.ColumnChart(document.querySelector('.survey-child-2-charts-4'));

	chart.draw(view, options);
};
//END OF SURVEY CHARTS//

//SUMMARY CHARTS//
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
	const politicsGaugeChart = new google.visualization.Gauge(document.querySelector('.not-survey-parent'));
	politicsGaugeChart.draw(data, options);
};

//END OF SUMMARY CHARTS//

//POLITICS, ECONOMY & SOCIAL CHARTS//

// Membership Bar Charts //
function drawMembershipChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Total Survey Respondents', 74, 72, 96, 60, 120],
		['Politics', 'Total in Political Networks', 53, 44, 73, 41, 82],
		['Politics', 'Youth Group', 20, 17, 51, 26, 52],
		['Politics', 'Women’s’ Group', 17, 13, 30, 22, 44],
		['Politics', 'Political Party', 14, 8, 19, 15, 30],
		['Politics', 'Joint Public Petition', 8, 3, 15, 10, 20],
		['Politics', 'Neighbourhood Watch Security', 9, 9, 10, 8, 16],
		['Politics', 'Online Based Civic Coalition', 12, 5, 19, 11, 22],
		['Politics', 'Campaign Group', 12, 5, 19, 11, 22],
		['Politics', 'Residents Associations', 25, 25, 32, 17, 34],
		['Politics', 'Local Peace Committees', 11, 8, 12, 11, 22],
		['Politics', 'Social Movements', 18, 8, 26, 15, 30],
		['Economy', 'Total Survey Respondents', 74, 72, 96, 60, 120],
		['Economy', 'Total in Economic Networks', 62, 49, 75, 50, 100],
		['Economy', 'Multi-Level Marketing Schemes', 27, 28, 48, 23, 46],
		['Economy', 'Housing Cooperative/Group', 17, 3, 13, 17, 34],
		['Economy', 'Nhimbe/Humwe/Ilima (labour pooling group)', 8, 3, 10, 8, 16],
		['Economy', 'Production Cooperative/Group', 14, 4, 18, 11, 22],
		['Economy', 'Business Promotion Council', 8, 0, 12, 9, 18],
		['Economy', 'Asset Pooling Group', 8, 3, 7, 8, 16],
		['Economy', 'Common Property Group (natural resources)', 7, 3, 6, 7, 14],
		['Economy', 'Buying Clubs', 17, 16, 14, 15, 30],
		['Economy', 'Market Group/Platform (sell goods/services to each other)', 34, 16, 40, 28, 56],
		['Economy', 'Business Mentoring/Training Group', 18, 5, 22, 15, 30],
		['Economy', 'Marketing Cooperative/Group (jointly selling commodities)', 18, 7, 19, 16, 32],
		['Economy', 'Savings and Lending Group', 18, 7, 19, 16, 32],
		['Social', 'Total Survey Respondents', 74, 72, 96, 60, 120],
		['Social', 'Total in Social Networks', 63, 45, 82, 50, 100],
		['Social', 'Alumni Association', 16, 11, 16, 12, 24],
		['Social', 'Entertainment Group (dance, choir etc)', 17, 10, 27, 12, 24],
		['Social', 'Sporting Association', 18, 8, 15, 19, 38],
		['Social', 'Religious Group (temples, churches, mosques etc)', 48, 37, 68, 42, 84],
		['Social', 'Fellowship Group', 31, 25, 34, 23, 46],
		['Social', 'Burial Societies', 9, 19, 15, 12, 24],
		['Social', 'Parent/Teacher Group', 22, 17, 23, 20, 40]
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
			maxValue: 140
		},
		vAxis: {
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.querySelector('.not-survey-parent'));

	chart.draw(view, options);
};
// Frequency Charts //

// Democracy Donut Charts //
function drawDemocracyChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Elections', 31, 31, 49, 27, 54],
		['Politics', 'Appointed', 19, 14, 16, 14, 28],
		['Politics', 'Hereditary', 0, 0, 2, 0, 0],
		['Politics', 'Other', 2, 2, 2, 0, 0],
		['Economy', 'Elections', 34, 15, 25, 9, 18],
		['Economy', 'Appointed', 15, 11, 21, 11, 22],
		['Economy', 'Hereditary', 0, 1, 0, 0, 0],
		['Economy', 'I don\'t know', 9, 13, 12, 6, 12],
		['Economy', 'Other', 1, 2, 7, 0, 0],
		['Social', 'Elections', 35, 25, 39, 30, 60],
		['Social', 'Appointed', 21, 15, 29, 10, 20],
		['Social', 'Hereditary', 3, 1, 1, 1, 2],
		['Social', 'Other', 1, 0, 3, 1, 2]
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
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4]);
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6]);
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.not-survey-parent'));
	chart.draw(view, options);
};

// Gender Donut Charts //
function drawGenderChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Female', 19, 19, 22, 16, 32],
		['Politics', 'Male', 9, 9, 44, 13, 26],
		['Economy', 'Female', 25, 34, 34, 23, 46],
		['Economy', 'Male', 15, 31, 36, 14, 28],
		['Social', 'Female', 18, 18, 24, 13, 26],
		['Social', 'Male', 12, 12, 14, 17, 34]
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
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4]);
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6]);
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.not-survey-parent'));
	chart.draw(view, options);
};

// Discrimination Bar Charts //
function drawDiscriminationChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Total Survey Respondents', 74, 72, 96, 60, 120],
		['Politics', 'Total in Political Networks', 53, 44, 73, 41, 82],
		['Politics', 'Language Barriers', 5, 2, 2, 4, 8],
		['Politics', 'Prohibitive Membership Fees', 1, 2, 6, 6, 12],
		['Politics', 'Defined Geographical Boundaries', 2, 0, 3, 1, 2],
		['Politics', 'Gender', 5, 2, 6, 3, 6],
		['Politics', 'Defined Religious Boundaries', 2, 1, 2, 0, 0],
		['Politics', 'Defined Tribal Boundaries', 1, 0, 0, 2, 4],
		['Politics', 'Age (too young or too old)', 7, 2, 10, 6, 12],
		['Politics', 'Disability', 1, 0, 1, 4, 8],
		['Politics', 'Other', 2, 0, 5, 2, 4],
		['Economy', 'Total Survey Respondents', 74, 72, 96, 60, 120],
		['Economy', 'Total in Economic Networks', 62, 49, 75, 50, 100],
		['Economy', 'Language Barriers', 2, 5, 5, 3, 6],
		['Economy', 'Prohibitive Membership Fees', 4, 1, 12, 10, 20],
		['Economy', 'Defined Geographical Boundaries', 4, 1, 4, 5, 10],
		['Economy', 'Gender', 1, 1, 3, 8, 16],
		['Economy', 'Defined Religious Boundaries', 1, 1, 2, 4, 8],
		['Economy', 'Defined Tribal Boundaries', 2, 0, 0, 6, 12],
		['Economy', 'Age (too young or too old)', 6, 1, 11, 5, 10],
		['Economy', 'Other', 2, 3, 3, 4, 8],
		['Social', 'Total Survey Respondents', 74, 72, 96, 60, 120],
		['Social', 'Total in Social Networks', 63, 45, 82, 50, 100],
		['Social', 'Language Barriers', 6, 1, 2, 1, 2],
		['Social', 'Prohibitive Membership Fees', 1, 0, 5, 6, 12],
		['Social', 'Defined Geographical Boundaries', 1, 0, 3, 1, 2],
		['Social', 'Gender', 1, 0, 3, 1, 2],
		['Social', 'Defined Religious Boundaries', 0, 1, 1, 1, 2],
		['Social', 'Defined Tribal Boundaries', 0, 0, 1, 0, 0],
		['Social', 'Age (too young or too old)', 3, 1, 4, 0, 0],
		['Social', 'Disability', 1, 0, 1, 1, 2],
		['Social', 'Class', 5, 0, 1, 2, 4]
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
			maxValue: 140
		},
		vAxis: {
			//title: '',
			textPosition: 'none'
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.BarChart(document.querySelector('.not-survey-parent'));

	chart.draw(view, options);
};

// Voting Charts //

//END OF POLITICS, ECONOMY & SOCIAL CHARTS//

//GIVING CHARTS//
//END OF GIVING CHARTS//

//DIGITAL CITIZENSHIP CHARTS//
// Methods of Interaction Donut Charts //
function drawMethodsChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Face to Face', 11, 8, 6, 10, 20],
		['Politics', 'Social Media', 23, 14, 26, 17, 34],
		['Politics', 'Both', 20, 23, 41, 14, 28],
		['Economy', 'Face to Face', 12, 7, 10, 8, 16],
		['Economy', 'Social Media', 27, 20, 35, 27, 54],
		['Economy', 'Both', 26, 15, 36, 11, 22],
		['Social', 'Face to Face', 10, 9, 14, 10, 20],
		['Social', 'Social Media', 20, 9, 24, 12, 24],
		['Social', 'Both', 23, 20, 35, 19, 38]
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
	} else if (document.getElementById('city').value == 'li') {
		view.setColumns([1, 3]);
	} else if (document.getElementById('city').value == 'nai') {
		view.setColumns([1, 4]);
	} else if (document.getElementById('city').value == 'ya') {
		view.setColumns([1, 5]);
	} else if (document.getElementById('city').value == 'acc') {
		view.setColumns([1, 6]);
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.not-survey-parent'));
	chart.draw(view, options);
};

//END OF DIGITAL CITIZENSHIP CHARTS//