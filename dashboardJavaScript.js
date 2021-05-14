/*  
**********
Load initial 'home page' google charts
**********
*/

//Load 'Corechart' library
google.charts.load('current', {packages:['corechart']});

//Load gauge chart library
google.charts.load('current', {'packages':['gauge']});

/*  
**********
Code for the changing colour of the navigation bar 
**********
*/
const menuItems = document.querySelectorAll('.menu__item');
let menuItemActive = document.querySelector('.menu__item--active');

//For loop to loop through menu items
for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', changeMenuActive);
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

/*  
**********
Code for the changing layout based on user selection
**********
*/

//Function to change layout based on user selection on main menu
function changeLayout() {
	//Create "check" variables to use in if statement
	const isSurveyCheck = document.querySelector('.survey-div');
	const isSummaryCheck = document.querySelector('.summary-div');
	const isPoliticsCheck = document.querySelector('.politics-div');
	const isEconomyCheck = document.querySelector('.economy-div');
	const isSocialCheck = document.querySelector('.social-div');
	const isDigitalCheck = document.querySelector('.digital-div');
	
	//To move TO summary
	if (this.classList.contains('summary') && ((typeof(isSummaryCheck) == 'undefined' || isSummaryCheck == null))) {	
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create summary-survey-parent div 
		const summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', 'survey-summary-parent');
		summaryDiv.classList.add('summary-div');
		summaryDiv.classList.add('summaryOne');
		document.querySelector('.viz-container').appendChild(summaryDiv);
		//create summary section content
		document.querySelector('.survey-summary-parent').innerHTML = '<div class="survey-summary-child-1-charts"><div class="summary-child-2-charts-1"><p>Scores for each city are calculated on a 0 – 100 scale where 0 is the lowest possible score (unhealthy level of citizenship) and 100 is the highest possible score (vibrant citizenship).</p></div><div class="summary-child-2-charts-2"></div><div class="summary-child-2-charts-3"></div><div class="summary-child-2-charts-4"></div><div class="summary-child-2-charts-5"></div><div class="summary-child-2-charts-6"></div></div><div class="survey-summary-child-1-arrow"><a class="next" onclick="surveySummaryLayout();">&#10095;</a></div>';
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
		//create others-parent div 
		const politicsDiv = document.createElement('div');
		politicsDiv.setAttribute('class', 'others-parent');
		politicsDiv.classList.add('politics-div');
		document.querySelector('.viz-container').appendChild(politicsDiv);
	//To move TO economy
	} else if ((this.classList.contains('economy')) && ((typeof(isEconomyCheck) == 'undefined' || isEconomyCheck == null))) {
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
		//create others-parent div 
		const economyDiv = document.createElement('div');
		economyDiv.setAttribute('class', 'others-parent');
		economyDiv.classList.add('economy-div');
		document.querySelector('.viz-container').appendChild(economyDiv); 
	//To move TO social
	} else if ((this.classList.contains('social')) && ((typeof(isSocialCheck) == 'undefined' || isSocialCheck == null))) {
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
		document.querySelector('.select-child-variable').innerHTML = '<select name="variable" id="variable" onchange="changeCharts()"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="giving">Giving</option></select>';	
		//create others-parent div 
		const socialDiv = document.createElement('div');
		socialDiv.setAttribute('class', 'others-parent');
		socialDiv.classList.add('social-div');
		document.querySelector('.viz-container').appendChild(socialDiv); 
	//To move TO digital citizenship
	} else if ((this.classList.contains('digital-citizenship')) && ((typeof(isDigitalCheck) == 'undefined' || isDigitalCheck == null))) {
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
		//create others-parent div 
		const digitalDiv = document.createElement('div');
		digitalDiv.setAttribute('class', 'others-parent');
		digitalDiv.classList.add('digital-div');
		document.querySelector('.viz-container').appendChild(digitalDiv);
	//To move TO survey
	} else if (this.classList.contains('survey') && (typeof(isSurveyCheck) == 'undefined' || isSurveyCheck == null)) {
		surveySummaryLayout();
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create summary-survey-parent div 
		const surveyDiv = document.createElement('div');
		surveyDiv.setAttribute('class', 'survey-summary-parent');
		surveyDiv.classList.add('survey-div');
		document.querySelector('.viz-container').appendChild(surveyDiv);
		//create survey section content
		document.querySelector('.survey-summary-parent').innerHTML = '<div class="survey-summary-child-1-1"><div class="survey-child-2-1"><h1>The Africa Citizenship Index</h1></div><div class="survey-child-2-2"><div class="survey-child-3-1"><img src="africa_map.png" alt="Africa Map" class="responsive-img" width="324px" height="360px"></div><div class="survey-child-3-2"><p>Citizenship is a multi-faceted concept that is shaped by the political, economic, and social life within a place. The African Citizenship Index aims to understand the way in which ordinary people interact with each other in economic, social-support focused and political networks across the continent. The inaugural survey was conducted by SIVIO Institute in March – April 2021 across 5 African cities. <b>Harare, Zimbabwe</b> and <b>Lilongwe, Malawi</b> in Southern Africa, <b>Nairobi, Kenya</b> in East Africa <b>Yaoundé, Cameroon</b> in Central Africa and <b>Accra, Ghana</b> in West Africa.</p></div></div></div><div class="survey-summary-child-1-arrow"><a class="next" onclick="surveySummaryLayout();">&#10095;</a></div>';
	}
};

//Functon to change survey and summary layout when user clicks next or previous buttons 
function surveySummaryLayout() {
	const isSurveyCheck = document.querySelector('.survey-div');
	const isSummaryCheck = document.querySelector('.summary-div');
	const nextCheck = document.querySelector('.next');
	const prevCheck = document.querySelector('.prev');
	
	//Survey 2 layout
	if (typeof(nextCheck) != 'undefined' && nextCheck != null && typeof(isSurveyCheck) != 'undefined' && isSurveyCheck != null) {
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create summary-survey-parent div 
		const surveyDiv = document.createElement('div');
		surveyDiv.setAttribute('class', 'survey-summary-parent');
		surveyDiv.classList.add('survey-div');
		document.querySelector('.viz-container').appendChild(surveyDiv);
		//create survey section content
		document.querySelector('.survey-summary-parent').innerHTML = '<div class="survey-summary-child-1-arrow"><a class="prev" onclick="surveySummaryLayout();">&#10094;</a></div><div class="survey-summary-child-1-charts"><div class="survey-child-2-charts-1"></div><div class="survey-child-2-charts-2"></div><div class="survey-child-2-charts-3"></div><div class="survey-child-2-charts-4"></div></div>';
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
	//Survey 1 layout
	} else if (typeof(prevCheck) != 'undefined' && prevCheck != null && typeof(isSurveyCheck) != 'undefined' && isSurveyCheck != null) {
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create summary-survey-parent div 
		const surveyDiv = document.createElement('div');
		surveyDiv.setAttribute('class', 'survey-summary-parent');
		surveyDiv.classList.add('survey-div');
		document.querySelector('.viz-container').appendChild(surveyDiv);
		//create survey section content
		document.querySelector('.survey-summary-parent').innerHTML = '<div class="survey-summary-child-1-1"><div class="survey-child-2-1"><h1>The Africa Citizenship Index</h1></div><div class="survey-child-2-2"><div class="survey-child-3-1"><img src="africa_map.png" alt="Africa Map" class="responsive-img" width="324px" height="360px"></div><div class="survey-child-3-2"><p>Citizenship is a multi-faceted concept that is shaped by the political, economic, and social life within a place. The African Citizenship Index aims to understand the way in which ordinary people interact with each other in economic, social-support focused and political networks across the continent. The inaugural survey was conducted by SIVIO Institute in March – April 2021 across 5 African cities. <b>Harare, Zimbabwe</b> and <b>Lilongwe, Malawi</b> in Southern Africa, <b>Nairobi, Kenya</b> in East Africa <b>Yaoundé, Cameroon</b> in Central Africa and <b>Accra, Ghana</b> in West Africa.</p></div></div></div><div class="survey-summary-child-1-arrow"><a class="next" onclick="surveySummaryLayout();">&#10095;</a></div>';
	//Summary 2 layout
	} else if (typeof(nextCheck) != 'undefined' && nextCheck != null && typeof(isSummaryCheck) != 'undefined' && isSummaryCheck != null) {
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create summary-survey-parent div 
		const summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', 'survey-summary-parent');
		summaryDiv.classList.add('summary-div');
		summaryDiv.classList.add('summaryTwo');
		document.querySelector('.viz-container').appendChild(summaryDiv);
		//create summary section content
		document.querySelector('.survey-summary-parent').innerHTML = '<div class="survey-summary-child-1-arrow"><a class="prev" onclick="surveySummaryLayout();">&#10094;</a></div><div class="survey-summary-child-1-charts"><div class="summary-child-2-charts-1"></div><div class="summary-child-2-charts-2"></div><div class="summary-child-2-charts-3"></div><div class="summary-child-2-charts-4"></div><div class="summary-child-2-charts-5"></div><div class="summary-child-2-charts-6"></div></div>';	
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
		google.charts.setOnLoadCallback(drawPoliticsEconomySocialGaugeCharts);
		google.charts.setOnLoadCallback(drawPoliticsScoreSummaryBarChart);
		google.charts.setOnLoadCallback(drawEconomyScoreSummaryBarChart);
		google.charts.setOnLoadCallback(drawSocialScoreSummaryBarChart);
	//Summary 1 layout
	} else if (typeof(prevCheck) != 'undefined' && prevCheck != null && typeof(isSummaryCheck) != 'undefined' && isSummaryCheck != null) {
		//clear viz-container
		document.querySelector('.viz-container').innerHTML = '';
		//create summary-survey-parent div 
		const summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', 'survey-summary-parent');
		summaryDiv.classList.add('summary-div');
		summaryDiv.classList.add('summaryOne');
		document.querySelector('.viz-container').appendChild(summaryDiv);
		//create summary section content
		document.querySelector('.survey-summary-parent').innerHTML = '<div class="survey-summary-child-1-charts"><div class="summary-child-2-charts-1"><p>Scores for each city are calculated on a 0 – 100 scale where 0 is the lowest possible score (unhealthy level of citizenship) and 100 is the highest possible score (vibrant citizenship).</p></div><div class="summary-child-2-charts-2"></div><div class="summary-child-2-charts-3"></div><div class="summary-child-2-charts-4"></div><div class="summary-child-2-charts-5"></div><div class="summary-child-2-charts-6"></div></div><div class="survey-summary-child-1-arrow"><a class="next" onclick="surveySummaryLayout();">&#10095;</a></div>';
		google.charts.setOnLoadCallback(drawOverallScoreGaugeCharts);
	}
};

/*  
**********
Code for the changing google charts based on user selection
**********
*/

function changeCharts() {
	const surveyChartsCheck = document.querySelector('.survey-summary-child-1-charts');
	const summaryOneCheck = document.querySelector('.summaryOne');
	const summaryTwoCheck = document.querySelector('.summaryTwo');
	
	if (menuItemActive.classList.contains('summary') && (typeof(summaryOneCheck) != 'undefined' && summaryOneCheck != null)) {
		document.querySelector('.summary-child-2-charts-2').innerHTML = '';
		document.querySelector('.summary-child-2-charts-3').innerHTML = '';
		document.querySelector('.summary-child-2-charts-4').innerHTML = '';
		document.querySelector('.summary-child-2-charts-5').innerHTML = '';
		document.querySelector('.summary-child-2-charts-6').innerHTML = '';
		google.charts.setOnLoadCallback(drawOverallScoreGaugeCharts);
	} else if (menuItemActive.classList.contains('summary') && (typeof(summaryTwoCheck) != 'undefined' && summaryTwoCheck != null)) {
		document.querySelector('.summary-child-2-charts-1').innerHTML = '';
		document.querySelector('.summary-child-2-charts-2').innerHTML = '';
		document.querySelector('.summary-child-2-charts-3').innerHTML = '';
		document.querySelector('.summary-child-2-charts-4').innerHTML = '';
		document.querySelector('.summary-child-2-charts-5').innerHTML = '';
		document.querySelector('.summary-child-2-charts-6').innerHTML = '';
		google.charts.setOnLoadCallback(drawPoliticsEconomySocialGaugeCharts);
		google.charts.setOnLoadCallback(drawPoliticsScoreSummaryBarChart);
		google.charts.setOnLoadCallback(drawEconomyScoreSummaryBarChart);
		google.charts.setOnLoadCallback(drawSocialScoreSummaryBarChart);
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
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'frequency') { 
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawFrequencyChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'democracy') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'gender') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'discrimination') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'voting') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawVotingChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'membership') { 
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'frequency') { 
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawFrequencyChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'democracy') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'gender') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('economy') && document.getElementById('variable').value == 'discrimination') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'membership') { 
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'frequency') { 
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawFrequencyChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'democracy') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'gender') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawGenderChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'discrimination') {
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if (menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'giving') { 
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawGivingChart);
	} else if (menuItemActive.classList.contains('digital-citizenship')) { 
		document.querySelector('.others-parent').innerHTML = '';
		google.charts.setOnLoadCallback(drawMethodsChart);
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
			width: '70%',
			height: '70%'
		},
		bar: {groupWidth: '80%'},
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
		['> $$5,000', 9, 8, 0, 3, 8],
		['$3,001 - $5,000', 3, 6, 1, 6, 25],
		['$1,001 - $3,000', 21, 32, 15, 9, 134],
		['$501 - $1,000', 33, 57, 44, 51, 219],
		['$251 - $500', 84, 139, 125, 130, 46],
		['< $250', 296, 161, 236, 203, 25]
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.survey-child-2-charts-2'));
	chart.draw(view, options);
};

// Respondent Education Summary Pie Chart //
function drawEducationSummaryChart() {
	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Tertiary', 212, 227, 193, 296, 337],
		['Secondary', 215, 155, 181, 78, 109],
		['Primary', 14, 15, 40, 23, 9],
		['None', 5, 6, 7, 5, 2]
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
		['18 - 25', 141, 78, 90, 154, 37],
		['26 - 35', 125, 138, 98, 128, 104],
		['36 - 45', 108, 111, 109, 81, 124],
		['46 - 55', 49, 56, 80, 34, 123],
		['56 - 65', 13, 16, 30, 5, 56],
		['65+', 10, 4, 14, 0, 13]
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

	const chart = new google.visualization.ColumnChart(document.querySelector('.survey-child-2-charts-4'));

	chart.draw(view, options);
};
//END OF SURVEY CHARTS//

//SCORE SUMMARY CHARTS//
// Gauge Charts //
function drawOverallScoreGaugeCharts() {
	const data = google.visualization.arrayToDataTable([
		['City', 'Overall Score'],
		['Harare', 50],
		['Lilongwe', 70],
		['Nairobi', 66],
		['Yaoundé', 67],
		['Accra', 59]
	]);
	
	const viewOne = new google.visualization.DataView(data);
	const viewTwo = new google.visualization.DataView(data);
	const viewThree = new google.visualization.DataView(data);
	const viewFour = new google.visualization.DataView(data);
	const viewFive = new google.visualization.DataView(data);
	
	viewOne.setRows(viewOne.getFilteredRows([{column: 0, value: 'Harare'}]));
	viewTwo.setRows(viewTwo.getFilteredRows([{column: 0, value: 'Lilongwe'}]));
	viewThree.setRows(viewThree.getFilteredRows([{column: 0, value: 'Nairobi'}]));
	viewFour.setRows(viewFour.getFilteredRows([{column: 0, value: 'Yaoundé'}]));
	viewFive.setRows(viewFive.getFilteredRows([{column: 0, value: 'Accra'}]));

	const options = {
		width: '100%', height: '100%',
		redFrom: 85, redTo: 100,
		yellowFrom:70, yellowTo: 85,
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chartHre = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-2'));
	chartHre.draw(viewOne, options);
	
	const chartLi = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-3'));
	chartLi.draw(viewTwo, options);
	
	const chartNai = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-4'));
	chartNai.draw(viewThree, options);
	
	const chartYa = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-5'));
	chartYa.draw(viewFour, options);
	
	const chartAcc = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-6'));
	chartAcc.draw(viewFive, options);
};

function drawPoliticsEconomySocialGaugeCharts() {
	const dataPolitics = google.visualization.arrayToDataTable([
		['Area', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 51, 70, 64, 59, 63]
	]);
	
	const dataEconomy = google.visualization.arrayToDataTable([
		['Area', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Economy', 42, 66, 64, 69, 48]
	]);
	
	const dataSocial = google.visualization.arrayToDataTable([
		['Area', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Social', 58, 75, 69, 75, 67]
	]);
	
	const viewPolitics = new google.visualization.DataView(dataPolitics);
	const viewEconomy = new google.visualization.DataView(dataEconomy);
	const viewSocial = new google.visualization.DataView(dataSocial);
	
	if (document.getElementById('city').value == 'hre') {
		viewPolitics.setColumns([0, 1]);
		viewEconomy.setColumns([0, 1]);
		viewSocial.setColumns([0, 1]);
	} else if (document.getElementById('city').value == 'li') {
		viewPolitics.setColumns([0, 2]);
		viewEconomy.setColumns([0, 2]);
		viewSocial.setColumns([0, 2]);
	} else if (document.getElementById('city').value == 'nai') {
		viewPolitics.setColumns([0, 3]);
		viewEconomy.setColumns([0, 3]);
		viewSocial.setColumns([0, 3]);
	} else if (document.getElementById('city').value == 'ya') {
		viewPolitics.setColumns([0, 4]);
		viewEconomy.setColumns([0, 4]);
		viewSocial.setColumns([0, 4]);
	} else if (document.getElementById('city').value == 'acc') {
		viewPolitics.setColumns([0, 5]);
		viewEconomy.setColumns([0, 5]);
		viewSocial.setColumns([0, 5]);
	}
	
	const options = {
		width: '100%', height: '100%',
		redFrom: 85, redTo: 100,
		yellowFrom:70, yellowTo: 85,
		greenFrom: 55, greenTo: 70,
		max: 100,
		min: 0
	};
	
	const chartPolitics = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-1'));
	chartPolitics.draw(viewPolitics, options);
	
	const chartEconomy = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-2'));
	chartEconomy.draw(viewEconomy, options);
	
	const chartSocial = new google.visualization.Gauge(document.querySelector('.summary-child-2-charts-3'));
	chartSocial.draw(viewSocial, options);
};

//Score Summary Bar Charts//
function drawPoliticsScoreSummaryBarChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Total', 'Total Score', 51, 70, 64, 59, 63],
		['Politics', 'Membership', 33, 73, 47, 38, 3],
		['Politics', 'Frequency', 40, 56, 19, 37, 39],
		['Politics', 'Democracy', 65, 56, 61, 73, 74],
		['Politics', 'Gender', 11, 88, 98, 100, 79],
		['Politics', 'Discrimination', 89, 71, 82, 84, 85],
		['Politics', 'Elections', 66, 78, 79, 22, 96]		
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
		['Economy', 'Total Score', 42, 66, 64, 69, 48],
		['Economy', 'Membership', 40, 87, 65, 57, 2],
		['Economy', 'Frequency', 55, 48, 29, 48, 67],
		['Economy', 'Democracy', 27, 35, 52, 57, 19],
		['Economy', 'Gender', 11, 87, 97, 98, 80],
		['Economy', 'Discrimination', 76, 72, 78, 83, 70]
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
		['Social', 'Total Score', 58, 75, 69, 75, 67],
		['Social', 'Membership', 49, 77, 68, 68, 7],
		['Social', 'Frequency', 69, 69, 46, 67, 56],
		['Social', 'Democracy', 32, 45, 36, 59, 61],
		['Social', 'Gender', 27, 96, 95, 82, 88],
		['Social', 'Discrimination', 91, 90, 91, 87, 94],
		['Social', 'Giving', 80, 83, 78, 86, 95]
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

//POLITICS, ECONOMY & SOCIAL CHARTS//

// Membership Bar Charts //
function drawMembershipChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Total Survey Respondents', 446, 403, 421, 402, 457],
		['Politics', 'Total in Political Networks', 145, 293, 196, 152, 13],
		['Politics', 'Youth Group', 32, 56, 55, 77, 6],
		['Politics', 'Women’s’ Group', 36, 89, 47, 37, 4],
		['Politics', 'Political Party', 85, 181, 86, 40, 4],
		['Politics', 'Joint Public Petition', 4, 13, 5, 5, 1],
		['Politics', 'Online Based Civic Coalition', 3, 9, 9, 1, 0],
		['Politics', 'Campaign Group', 11, 117, 31, 13, 2],
		['Politics', 'Residents Associations', 22, 20, 31, 10, 4],
		['Politics', 'Local Peace Committees', 4, 24, 11, 5, 0],
		['Politics', 'Social Movements', 13, 48, 23, 23, 3],
		['Economy', 'Total Survey Respondents', 446, 403, 421, 402, 457],
		['Economy', 'Total in Economic Networks', 177, 352, 272, 230, 10],
		['Economy', 'Multi-Level Marketing Schemes', 36, 12, 5, 6, 1],
		['Economy', 'Housing Cooperative/Group', 50, 21, 4, 4, 0],
		['Economy', 'Labour Pooling Group', 11, 29, 11, 23, 2],
		['Economy', 'Production Cooperative/Group', 21, 55, 2, 12, 1],
		['Economy', 'Business Promotion Council', 8, 28, 6, 6, 1],
		['Economy', 'Asset Pooling Group', 8, 27, 8, 5, 0],
		['Economy', 'Common Property Group', 8, 26, 6, 6, 0],
		['Economy', 'Buying Clubs', 38, 170, 12, 9, 0],
		['Economy', 'Market Group/Platform', 63, 65, 6, 64, 9],
		['Economy', 'Business Mentoring/Training Group', 9, 56, 21, 14, 3],
		['Economy', 'Marketing Cooperative/Group', 12, 69, 10, 14, 1],
		['Economy', 'Savings and Lending Group', 47, 167, 107, 168, 4],
		['Social', 'Total Survey Respondents', 446, 403, 421, 402, 457],
		['Social', 'Total in Social Networks', 220, 311, 288, 274, 34],
		['Social', 'Alumni Association', 22, 16, 8, 39, 13],
		['Social', 'Entertainment Group', 24, 63, 8, 41, 5],
		['Social', 'Sporting Association', 26, 39, 9, 50, 9],
		['Social', 'Fellowship Group/Religious Group', 161, 230, 67, 188, 37],
		['Social', 'Burial Societies', 23, 9, 22, 2, 0],
		['Social', 'Parent/Teacher Group', 26, 34, 9, 49, 9],
		['Social', 'Book/Reading Club', 12, 16, 1, 8, 3],
		['Social', 'Community Development Association', 7, 20, 2, 32, 4],
		['Social', 'Service Organisation or Club', 8, 15, 1, 1, 3],
		['Social', 'Neighbourhood Watch Security', 15, 22, 2, 4, 2],
		['Social', 'Communal Granary', 5, 2, 3, 1, 0],
		['Social', 'Community Feeding Group', 10, 8, 1, 1, 0],
		['Social', 'Community Foundation', 4, 4, 3, 5, 5]
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
			height: '80%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Total # of Respondents',
			minValue: 0,
			maxValue: 460, 
			gridlines: {count: 25}
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

	const chart = new google.visualization.BarChart(document.querySelector('.others-parent'));

	chart.draw(view, options);
};
// Frequency Charts //
function drawFrequencyChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Daily', 50, 50, 50, 50, 50],
		['Politics', 'Weekly', 50, 50, 50, 50, 50],
		['Politics', 'Monthly', 50, 50, 50, 50, 50],
		['Politics', 'Annually', 50, 50, 50, 50, 50],
		['Economy', 'Daily', 50, 50, 50, 50, 50],
		['Economy', 'Weekly', 50, 50, 50, 50, 50],
		['Economy', 'Monthly', 50, 50, 50, 50, 50],
		['Economy', 'Annually', 50, 50, 50, 50, 50],
		['Social', 'Daily', 50, 50, 50, 50, 50],
		['Social', 'Weekly', 50, 50, 50, 50, 50],
		['Social', 'Monthly', 50, 50, 50, 50, 50],
		['Social', 'Annually', 50, 50, 50, 50, 50]
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
		title: 'Frequency of Interactions in Networks',
		chartArea: {
			width: '75%',
			height: '75%'
		},
		bar: {groupWidth: '80%'},
        legend: { position: 'none' },
		hAxis: {
			title: 'Frequency of Interactions in Networks',
		},
		vAxis: {
			title: '# of Networks',
			minValue: 0,
			maxValue: 100,
			gridlines: {count: 10}
		},
		titleTextStyle: {
			fontSize: 18,
			bold: false,
			align: 'center'
		}
	};

	const chart = new google.visualization.ColumnChart(document.querySelector('.others-parent'));

	chart.draw(view, options);
};

// Democracy Donut Charts //
function drawDemocracyChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Elections', 100, 100, 100, 100, 100],
		['Politics', 'Appointed', 100, 100, 100, 100, 100],
		['Politics', 'Hereditary', 100, 100, 100, 100, 100],
		['Politics', 'Other', 100, 100, 100, 100, 100],
		['Economy', 'Elections', 100, 100, 100, 100, 100],
		['Economy', 'Appointed', 100, 100, 100, 100, 100],
		['Economy', 'Hereditary', 100, 100, 100, 100, 100],
		['Economy', 'I don\'t know', 100, 100, 100, 100, 100],
		['Economy', 'Other', 100, 100, 100, 100, 100],
		['Social', 'Elections', 100, 100, 100, 100, 100],
		['Social', 'Appointed', 100, 100, 100, 100, 100],
		['Social', 'Hereditary', 100, 100, 100, 100, 100],
		['Social', 'Other', 100, 100, 100, 100, 100]
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.others-parent'));
	chart.draw(view, options);
};

// Gender Donut Charts //
function drawGenderChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Female', 45, 2833, 1109, 818, 45],
		['Politics', 'Male', 769, 2235, 1070, 818, 69],
		['Economy', 'Female', 39, 2913, 1183, 910, 39],
		['Economy', 'Male', 696, 2236, 1259, 874, 58],
		['Social', 'Female', 183, 1824, 1401, 1116, 183],
		['Social', 'Male', 1185, 1981, 1662, 1618, 231]
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.others-parent'));
	chart.draw(view, options);
};

// Discrimination Bar Charts //
function drawDiscriminationChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Total Survey Respondents', 446, 403, 421, 402, 457],
		['Politics', 'Total in Political Networks', 145, 293, 196, 152, 13],
		['Politics', 'Language Barriers', 4, 4, 4, 4, 4],
		['Politics', 'Prohibitive Membership Fees', 6, 6, 6, 6, 6],
		['Politics', 'Defined Geographical Boundaries', 4, 4, 4, 4, 4],
		['Politics', 'Gender', 1, 1, 1, 1, 1],
		['Politics', 'Defined Religious Boundaries', 3, 3, 3, 3, 3],
		['Politics', 'Defined Tribal Boundaries', 15, 15, 15, 15, 15],
		['Politics', 'Age (too young or too old)', 15, 15, 15, 15, 15],
		['Politics', 'Disability', 0, 0, 0, 0, 0],
		['Politics', 'Legal', 3, 3, 3, 3, 3],
		['Politics', 'Other', 4, 4, 4, 4, 4],
		['Economy', 'Total Survey Respondents', 446, 403, 421, 402, 457],
		['Economy', 'Total in Economic Networks', 177, 352, 272, 230, 10],
		['Economy', 'Language Barriers', 10, 10, 10, 10, 10],
		['Economy', 'Prohibitive Membership Fees', 20, 20, 20, 20, 20],
		['Economy', 'Defined Geographical Boundaries', 8, 8, 8, 8, 8],
		['Economy', 'Gender', 6, 6, 6, 6, 6],
		['Economy', 'Defined Religious Boundaries', 7, 7, 7, 7, 7],
		['Economy', 'Defined Tribal Boundaries', 16, 16, 16, 16, 16],
		['Economy', 'Age (too young or too old)', 25, 25, 25, 25, 25],
		['Economy', 'Disability', 1, 1, 1, 1, 1],
		['Economy', 'Legal', 10, 10, 10, 10, 10],
		['Economy', 'Other', 6, 6, 6, 6, 6],
		['Social', 'Total Survey Respondents', 446, 403, 421, 402, 457],
		['Social', 'Total in Social Networks', 220, 311, 288, 274, 34],
		['Social', 'Language Barriers', 10, 10, 10, 10, 10],
		['Social', 'Prohibitive Membership Fees', 2, 2, 2, 2, 2],
		['Social', 'Defined Geographical Boundaries', 1, 1, 1, 1, 1],
		['Social', 'Gender', 2, 2, 2, 2, 2],
		['Social', 'Defined Religious Boundaries', 3, 3, 3, 3, 3],
		['Social', 'Defined Tribal Boundaries', 4, 4, 4, 4, 4],
		['Social', 'Age (too young or too old)', 8, 8, 8, 8, 8],
		['Social', 'Disability', 1, 1, 1, 1, 1],
		['Social', 'Legal', 1, 1, 1, 1, 1],
		['Social', 'Other', 5, 5, 5, 5, 5]
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

	const chart = new google.visualization.BarChart(document.querySelector('.others-parent'));

	chart.draw(view, options);
};

// Voting Donut Charts //
function drawVotingChart() {
	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Yes (I was registered, and I voted)', 294, 315, 334, 87, 440],
		['Politics', 'No (I was registered but did not vote)', 23, 13, 20, 34, 9],
		['Politics', 'No (I did not register)', 49, 43, 27, 251, 4],
		['Politics', 'No (I could not find the polling station)', 5, 0, 1, 4, 1],
		['Politics', 'No (My name did not appear on the voter\'s roll)', 4, 3, 4, 1, 0],
		['Politics', 'No (I was prevented from voting)', 1, 7, 1, 2, 0],
		['Politics', 'I was too young to vote', 38, 14, 19, 13, 1],
		['Politics', 'N/A', 32, 8, 15, 10, 2]
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
		title: 'Participation in Presidential Elections',
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
				fontSize: 14
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.others-parent'));
	chart.draw(view, options);
};

// Giving Donut Charts //
function drawGivingChart() {
	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Yes, I did give', 359, 334, 327, 344, 434],
		['No, did not give', 87, 69, 94, 58, 23]
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
		title: 'Citizens that Gave to Charitable Causes in Last 6 Months',
		pieHole: 0.4,
		slices: {
			0: { color: '#7ebe42' },
			1: { color: '#f15b28' }
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.others-parent'));
	chart.draw(view, options);
};

//END OF POLITICS, ECONOMY & SOCIAL CHARTS//

//DIGITAL CITIZENSHIP CHARTS//

// Methods of Interaction Donut Charts //
function drawMethodsChart() {
	const data = google.visualization.arrayToDataTable([
		['Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Face to Face', 100, 100, 100, 100, 100],
		['Social Media', 100, 100, 100, 100, 100],
		['Both', 100, 100, 100, 100, 100]
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
	
	const chart = new google.visualization.PieChart(document.querySelector('.others-parent'));
	chart.draw(view, options);
};
//END OF DIGITAL CITIZENSHIP CHARTS//