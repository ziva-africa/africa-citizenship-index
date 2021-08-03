/*  
**********
Africa Citizenship Index Dashboard JavaScript Code
**********
*/


/** Code for Google Charts **/

// Load 'Corechart' library
google.charts.load('current', {packages:['corechart']});

// Load gauge chart library
google.charts.load('current', {'packages':['gauge']});


// SURVEY DATA

const overallScores = [
	['City', 'Overall Score'],
	['Harare', 50],
	['Lilongwe', 70],
	['Nairobi', 66],
	['Yaoundé', 67],
	['Accra', 70]
];

const politicsOverallScores = [
	['City', 'Overall Score'],
	['Harare', 51],
	['Lilongwe', 70],
	['Nairobi', 64],
	['Yaoundé', 59],
	['Accra', 75]
];

const economyOverallScores = [
	['City', 'Overall Score'],
	['Harare', 42],
	['Lilongwe', 66],
	['Nairobi', 64],
	['Yaoundé', 69],
	['Accra', 55]
];

const socialOverallScores = [
	['City', 'Overall Score'],
	['Harare', 58],
	['Lilongwe', 75],
	['Nairobi', 69],
	['Yaoundé', 75],
	['Accra', 81]
];	

const politicsScoreSummary = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style' }],
	['Total', 'Total Score - Politics', 51, 70, 64, 59, 75, '#f15c27'],
	['Politics', 'Score - Membership in Political Networks', 33, 73, 47, 38, 16, '#eeb7a4'],
	['Politics', 'Score - Frequency of Interaction in Networks', 40, 56, 19, 37, 88, '#eeb7a4'],
	['Politics', 'Score - Level of Democracy in Networks', 65, 56, 61, 73, 65, '#eeb7a4'],
	['Politics', 'Score - Gender Equality in Networks', 11, 88, 98, 100, 94, '#eeb7a4'],
	['Politics', 'Score - Freedom from Discrimination in Networks', 89, 71, 82, 84, 92, '#eeb7a4'],
	['Politics', 'Score - Participation Elections', 66, 78, 79, 22, 98, '#eeb7a4']	
];

const economyScoreSummary = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style' }],
	['Economy', 'Total Score - Economy', 42, 66, 64, 69, 55, '#f15c27'],
	['Economy', 'Score - Membership in Economic Networks', 40, 87, 65, 57, 5, '#eeb7a4'],
	['Economy', 'Score - Frequency of Interaction in Networks', 55, 48, 29, 48, 64, '#eeb7a4'],
	['Economy', 'Score - Level of Democracy in Networks', 27, 35, 52, 57, 38, '#eeb7a4'],
	['Economy', 'Score - Gender Equality in Networks', 11, 87, 97, 98, 72, '#eeb7a4'],
	['Economy', 'Score - Freedom from Discrimination in Networks', 76, 72, 78, 83, 95, '#eeb7a4']
];

const socialScoreSummary = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style' }],
	['Social', 'Total Score - Social', 58, 75, 69, 75, 81, '#f15c27'],
	['Social', 'Score - Membership in Social Networks', 49, 77, 68, 68, 86, '#eeb7a4'],
	['Social', 'Score - Frequency of Interaction in Networks', 69, 69, 46, 67, 97, '#eeb7a4'],
	['Social', 'Score - Level of Democracy in Networks', 32, 45, 36, 59, 15, '#eeb7a4'],
	['Social', 'Score - Gender Equality in Networks', 27, 96, 95, 82, 93, '#eeb7a4'],
	['Social', 'Score - Freedom from Discrimination in Networks', 91, 90, 91, 87, 94, '#eeb7a4'],
	['Social', 'Score - Giving / Solidarity', 80, 83, 78, 86, 100, '#eeb7a4']
];

const numberOfRespondents = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style'}],
	['Survey Info', 'Total Survey Respondents', 446, 403, 421, 402, 457, '#f15c27'],
	['Survey Info', 'Female Respondents', 180, 213, 193, 187, 231, '#eeb7a4'],
	['Survey Info', 'Male Respondents', 266, 190, 228, 215, 226, '#eeb7a4']
];

const respondentsIncome = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
	['Survey Info', '> $$5,000', 9, 8, 0, 3, 4],
	['Survey Info', '$3,001 - $5,000', 3, 6, 1, 6, 24],
	['Survey Info', '$1,001 - $3,000', 21, 32, 15, 9, 151],
	['Survey Info', '$501 - $1,000', 33, 57, 44, 51, 205],
	['Survey Info', '$251 - $500', 84, 139, 125, 130, 18],
	['Survey Info', '< $250', 296, 161, 236, 203, 11]
];

const respondentsEducation = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
	['Survey Info', 'Tertiary', 212, 227, 193, 296, 139],
	['Survey Info', 'Secondary', 215, 155, 181, 78, 236],
	['Survey Info', 'Primary', 14, 15, 40, 23, 27],
	['Survey Info', 'None', 5, 6, 7, 5, 11]
];

const respondentsAge = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style'}],
	['Survey Info', '18 - 25', 141, 78, 90, 154, 3, '#f15c27'],
	['Survey Info', '26 - 35', 125, 138, 98, 128, 66, '#f15c27'],
	['Survey Info', '36 - 45', 108, 111, 109, 81, 210, '#f15c27'],
	['Survey Info', '46 - 55', 49, 56, 80, 34, 79, '#f15c27'],
	['Survey Info', '56 - 65', 13, 16, 30, 5, 27, '#f15c27'],
	['Survey Info', '65+', 10, 4, 14, 0, 28, '#f15c27']
];

const membershipData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style'}],
	['Politics', 'Total Survey Respondents', 446, 403, 421, 402, 413, '#f15c27'],
	['Politics', 'Total in Political Networks', 145, 293, 196, 152, 64, '#f15c27'],
	['Politics', 'Youth Group', 32, 56, 55, 77, 24, '#f15c27'],
	['Politics', 'Women’s’ Group', 36, 89, 47, 37, 11, '#f15c27'],
	['Politics', 'Political Party', 85, 181, 86, 40, 27, '#f15c27'],
	['Politics', 'Joint Public Petition', 4, 13, 5, 5, 1, '#f15c27'],
	['Politics', 'Online Based Civic Coalition', 3, 9, 9, 1, 4, '#f15c27'],
	['Politics', 'Campaign Group', 11, 117, 31, 13, 3, '#f15c27'],
	['Politics', 'Residents Associations', 22, 20, 31, 10, 9, '#f15c27'],
	['Politics', 'Local Peace Committees', 4, 24, 11, 5, 1, '#f15c27'],
	['Politics', 'Social Movements', 13, 48, 23, 23, 1, '#f15c27'],
	['Economy', 'Total Survey Respondents', 446, 403, 421, 402, 413, '#f15c27'],
	['Economy', 'Total in Economic Networks', 177, 352, 272, 230, 21, '#f15c27'],
	['Economy', 'Multi-Level Marketing Schemes', 36, 12, 5, 6, 2, '#f15c27'],
	['Economy', 'Housing Cooperative/Group', 50, 21, 4, 4, 0, '#f15c27'],
	['Economy', 'Labour Pooling Group', 11, 29, 11, 23, 0, '#f15c27'],
	['Economy', 'Production Cooperative/Group', 21, 55, 2, 12, 1, '#f15c27'],
	['Economy', 'Business Promotion Council', 8, 28, 6, 6, 0, '#f15c27'],
	['Economy', 'Asset Pooling Group', 8, 27, 8, 5, 0, '#f15c27'],
	['Economy', 'Common Property Group', 8, 26, 6, 6, 0, '#f15c27'],
	['Economy', 'Buying Clubs', 38, 170, 12, 9, 0, '#f15c27'],
	['Economy', 'Market Group/Platform', 63, 65, 6, 64, 1, '#f15c27'],
	['Economy', 'Business Mentoring/Training Group', 9, 56, 21, 14, 3, '#f15c27'],
	['Economy', 'Marketing Cooperative/Group', 12, 69, 10, 14, 0, '#f15c27'],
	['Economy', 'Savings and Lending Group', 47, 167, 107, 168, 12, '#f15c27'],
	['Social', 'Total Survey Respondents', 446, 403, 421, 402, 413, '#f15c27'],
	['Social', 'Total in Social Networks', 220, 311, 288, 274, 356, '#f15c27'],
	['Social', 'Alumni Association', 22, 16, 8, 39, 26, '#f15c27'],
	['Social', 'Entertainment Group', 24, 63, 8, 41, 3, '#f15c27'],
	['Social', 'Sporting Association', 26, 39, 9, 50, 3, '#f15c27'],
	['Social', 'Fellowship Group/Religious Group', 161, 230, 67, 188, 353, '#f15c27'],
	['Social', 'Burial Societies', 23, 9, 22, 2, 2, '#f15c27'],
	['Social', 'Parent/Teacher Group', 26, 34, 9, 49, 29, '#f15c27'],
	['Social', 'Book/Reading Club', 12, 16, 1, 8, 0, '#f15c27'],
	['Social', 'Community Development Association', 7, 20, 2, 32, 1, '#f15c27'],
	['Social', 'Service Organisation or Club', 8, 15, 1, 1, 0, '#f15c27'],
	['Social', 'Neighbourhood Watch Security', 15, 22, 2, 4, 0, '#f15c27'],
	['Social', 'Communal Granary', 5, 2, 3, 1, 0, '#f15c27'],
	['Social', 'Community Feeding Group', 10, 8, 1, 1, 0, '#f15c27'],
	['Social', 'Community Foundation', 4, 4, 3, 5, 1, '#f15c27']
];

const frequencyData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style'}],
	['Politics', 'Daily', 36, 48, 5, 15, 33, '#f15c27'],
	['Politics', 'Weekly', 47, 264, 48, 63, 37, '#f15c27'],
	['Politics', 'Monthly', 78, 224, 144, 101, 7, '#f15c27'],
	['Politics', 'Annually', 47, 19, 81, 30, 3, '#f15c27'],
	['Economy', 'Daily', 79, 85, 14, 69, 8, '#f15c27'],
	['Economy', 'Weekly', 83, 272, 98, 91, 6, '#f15c27'],
	['Economy', 'Monthly', 131, 372, 199, 144, 6, '#f15c27'],
	['Economy', 'Annually', 10, 15, 73, 28, 2, '#f15c27'],
	['Social', 'Daily', 31, 43, 9, 51, 85, '#f15c27'],
	['Social', 'Weekly', 202, 286, 178, 229, 318, '#f15c27'],
	['Social', 'Monthly', 98, 137, 121, 94, 11, '#f15c27'],
	['Social', 'Annually', 61, 8, 75, 42, 3, '#f15c27']
];

const democracyData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
	['Politics', 'Elections', 138, 311, 156, 152, 52],
	['Politics', 'Appointed', 41, 124, 69, 23, 23],
	['Politics', 'Hereditary', 5, 7, 3, 3, 0],
	['Politics', 'Voluntary', 20, 99, 25, 20, 3],
	['Politics', 'I don\'t know', 6, 14, 25, 10, 1],	
	['Politics', 'Other', 1, 0, 0, 0, 1],
	['Economy', 'Elections', 83, 260, 209, 188, 8],
	['Economy', 'Appointed', 88, 164, 122, 54, 10],
	['Economy', 'Hereditary', 8, 8, 9, 7, 1],
	['Economy', 'Voluntary', 70, 267, 25, 39, 1],
	['Economy', 'I don\'t know', 47, 44, 12, 27, 1],
	['Economy', 'Other', 16, 0, 2, 17, 0],
	['Social', 'Elections', 106, 204, 139, 243, 63],
	['Social', 'Appointed', 130, 88, 182, 95, 315],
	['Social', 'Hereditary', 10, 3, 4, 3, 0],
	['Social', 'Voluntary', 45, 122, 28, 25, 8],
	['Social', 'I don\'t know', 31, 44, 28, 42, 32],
	['Social', 'Other', 8, 1, 2, 5, 0]
];

const genderData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
	['Politics', 'Female', 45, 2833, 1109, 818, 323],
	['Politics', 'Male', 769, 2235, 1070, 818, 287],
	['Economy', 'Female', 39, 2913, 1183, 910, 78],
	['Economy', 'Male', 696, 2236, 1259, 874, 44],
	['Social', 'Female', 183, 1824, 1401, 1116, 1911],
	['Social', 'Male', 1185, 1981, 1662, 1618, 1674]
];

// RE-USABLE FUNCTIONS

// City Pickers
const filterCityRow = (view) => {
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
};

const filterCityColumn = (view) => {
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
};

const filterCityColumnSimple = (view) => {
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
};		

// Thematic Area Pickers
const filterAreaRow = (view) => {
	if (menuItemActive.classList.contains('politics')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('economy')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('social')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Social'}]));
	}
};

// Gauge Chart Options
const gaugeOptions = {
	width: '90%', 
	height: '90%',
	redColor: '#f15c27',
	redFrom: 85, 
	redTo: 100,
	yellowColor: '#f08660',
	yellowFrom:70, 
	yellowTo: 85,
	greenColor: '#eeb7a4',
	greenFrom: 55, 
	greenTo: 70,
	max: 100,
	min: 0
};

// Bar Chart Options
const barOptions = {
	title: '',
	chartArea: { },
	bar: {groupWidth: '80%'},
	legend: {position: 'none'},
	hAxis: { },
	vAxis: { },
	titleTextStyle: {
		fontSize: 16,
		fontName: 'Arial',
		bold: false,
		italic: true
	}
};

//Pie Chart Options
const pieOptions = { 
	chartArea: {
		width: '80%',
		height: '80%',
	},
	title: '',
	pieHole: 0.3,
	slices: { },
	legend: {
		position: 'right',
		textStyle: {
			fontSize: 10
		},
		alignment: 'center'
	},
	pieSliceTextStyle: {
		color: 'black',
		fontSize: 10
	},
	titleTextStyle: {
		fontSize: 16,
		fontName: 'Arial',
		bold: false,
		italic: true
	}
};

// SCORE SUMMARY CHARTS

const drawOverallScoreGaugeCharts = () => {
	const data = google.visualization.arrayToDataTable(overallScores);
	const view = new google.visualization.DataView(data);
	filterCityRow(view);
	let options = gaugeOptions;
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
};

const drawPoliticsGaugeCharts = () => {
	const data = google.visualization.arrayToDataTable(politicsOverallScores);
	const view = new google.visualization.DataView(data);
	filterCityRow(view);
	let options = gaugeOptions;
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
};

const drawEconomyGaugeCharts = () => {
	const data = google.visualization.arrayToDataTable(economyOverallScores);
	const view = new google.visualization.DataView(data);
	filterCityRow(view);
	let options = gaugeOptions;
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
};

const drawSocialGaugeCharts = () => {
	const data = google.visualization.arrayToDataTable(socialOverallScores);
	const view = new google.visualization.DataView(data);
	filterCityRow(view);
	let options = gaugeOptions;
	const chart = new google.visualization.Gauge(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
};

const drawPoliticsScoreSummaryBarChart = () => {
	const data = google.visualization.arrayToDataTable(politicsScoreSummary);
	const view = new google.visualization.DataView(data);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Politics Score Summary';
	barOptions['chartArea']['width'] = '90%';
	barOptions['chartArea']['height'] = '70%';
	barOptions['hAxis']['title'] = 'Score';
	barOptions['hAxis']['minValue'] = 0;
	barOptions['hAxis']['maxValue'] = 100;
	barOptions['hAxis']['gridlines'] = {count: 5};
	barOptions['vAxis']['textPosition'] = 'none';
	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-2'));
	chart.draw(view, options);
};

const drawEconomyScoreSummaryBarChart = () => {
	const data = google.visualization.arrayToDataTable(economyScoreSummary);
	const view = new google.visualization.DataView(data);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Economy Score Summary';
	barOptions['chartArea']['width'] = '90%';
	barOptions['chartArea']['height'] = '70%';
	barOptions['hAxis']['title'] = 'Score';
	barOptions['hAxis']['minValue'] = 0;
	barOptions['hAxis']['maxValue'] = 100;
	barOptions['hAxis']['gridlines'] = {count: 5};
	barOptions['vAxis']['textPosition'] = 'none';
	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-2'));
	chart.draw(view, options);
};

const drawSocialScoreSummaryBarChart = () => {
	const data = google.visualization.arrayToDataTable(socialScoreSummary);
	const view = new google.visualization.DataView(data);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Social Score Summary';
	barOptions['chartArea']['width'] = '90%';
	barOptions['chartArea']['height'] = '70%';
	barOptions['hAxis']['title'] = 'Score';
	barOptions['hAxis']['minValue'] = 0;
	barOptions['hAxis']['maxValue'] = 100;
	barOptions['hAxis']['gridlines'] = {count: 5};
	barOptions['vAxis']['textPosition'] = 'none';
	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-2'));
	chart.draw(view, options);
};

// END OF SCORE SUMMARY CHARTS

// SURVEY CHARTS

const drawNumberOfRespondentsChart = () => {
	const data = google.visualization.arrayToDataTable(numberOfRespondents);
	const view = new google.visualization.DataView(data);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Number of Survey Respondents';
	barOptions['chartArea']['width'] = '90%';
	barOptions['chartArea']['height'] = '70%';
	barOptions['hAxis']['title'] = 'Total # of Respondents';
	barOptions['hAxis']['minValue'] = 0;
	barOptions['hAxis']['maxValue'] = 500;
	barOptions['hAxis']['gridlines'] = {count: 5};
	barOptions['vAxis']['textPosition'] = 'none';
	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
};

const drawIncomeSummaryChart = () => {
	const data = google.visualization.arrayToDataTable(respondentsIncome);
	const view = new google.visualization.DataView(data);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Respondents Monthly Income';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#a4d17a' }, 2: { color: '#cbe5b3' }, 3: { color: '#abb9c4' }, 4: { color: '#667d8f' }, 5: { color: '#333f48' } };
	const chart = new google.visualization.PieChart(document.getElementById('viz-con-child-1'));
	chart.draw(view, options);
};

const drawEducationSummaryChart = () => {
	const data = google.visualization.arrayToDataTable(respondentsEducation);
	const view = new google.visualization.DataView(data);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Respondents Monthly Income';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#a4d17a' }, 2: { color: '#cbe5b3' }, 3: { color: '#abb9c4' } };
	const chart = new google.visualization.PieChart(document.getElementById('viz-con-child-2'));
	chart.draw(view, options);
};

const drawAgeSummaryChart = () => {
	const data = google.visualization.arrayToDataTable(respondentsAge);
	const view = new google.visualization.DataView(data);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Age of Respondents';
	barOptions['hAxis']['title'] = 'Age of Respondents';
	barOptions['vAxis']['textPosition'] = 'out';
	barOptions['vAxis']['title'] = '# of Respondents';
	barOptions['vAxis']['minValue'] = 0;
	barOptions['vAxis']['maxValue'] = 250;
	barOptions['vAxis']['gridlines'] = {count: 5};
	barOptions['chartArea']['width'] = '75%';
	barOptions['chartArea']['height'] = '60%';
	const chart = new google.visualization.ColumnChart(document.getElementById('viz-con-child-3'));
	chart.draw(view, options);
}
	
// END OF SURVEY CHARTS//
	
// POLITICS, ECONOMY & SOCIAL CHARTS

const drawMembershipChart = () => {
	const data = google.visualization.arrayToDataTable(membershipData);
	const view = new google.visualization.DataView(data);
	filterAreaRow(view);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Membership in Networks';
	barOptions['hAxis']['title'] = 'Total # of Respondents';
	barOptions['hAxis']['minValue'] = 0;
	barOptions['hAxis']['maxValue'] = 500;
	barOptions['hAxis']['gridlines'] = {count: 5};
	barOptions['vAxis']['textPosition'] = 'none';
	barOptions['chartArea']['width'] = '70%';
	barOptions['chartArea']['height'] = '70%';
	const chart = new google.visualization.BarChart(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
}

const drawFrequencyChart = () => {
	const data = google.visualization.arrayToDataTable(frequencyData);
	const view = new google.visualization.DataView(data);
	filterAreaRow(view);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Frequency of Interactions in Networks';
	barOptions['chartArea']['width'] = '75%';
	barOptions['chartArea']['height'] = '75%';
	barOptions['hAxis']['title'] = 'Frequency of Interactions in Networks';
	barOptions['vAxis']['textPosition'] = 'out';
	barOptions['vAxis']['title'] = '# of Networks';
	barOptions['vAxis']['minValue'] = 0;
	barOptions['vAxis']['maxValue'] = 100;
	barOptions['vAxis']['gridlines'] = {count: 5};
	const chart = new google.visualization.ColumnChart(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
}

const drawDemocracyChart = () => {
	const data = google.visualization.arrayToDataTable(democracyData);
	const view = new google.visualization.DataView(data);
	filterAreaRow(view);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'How Citizens Choose Office Holders';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#a4d17a' }, 2: { color: '#cbe5b3' }, 3: { color: '#abb9c4' }, 4: { color: '#667d8f' }, 5: { color: '#333f48' } };
	const chart = new google.visualization.PieChart(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
}

const drawGenderChart = () => {
	const data = google.visualization.arrayToDataTable(genderData);
	const view = new google.visualization.DataView(data);
	filterAreaRow(view);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Gender of Office Holders in Networks';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#667d8f' } };
	const chart = new google.visualization.PieChart(document.getElementById('viz-con-child-0'));
	chart.draw(view, options);
}





















// Discrimination Bar Charts //
function drawDiscriminationChart() {

	const data = google.visualization.arrayToDataTable([
		['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
		['Politics', 'Total Survey Respondents', 446, 403, 421, 402, 413],
		['Politics', 'Total in Political Networks', 145, 293, 196, 152, 64],
		['Politics', 'Language Barriers', 4, 4, 4, 4, 2],
		['Politics', 'Prohibitive Membership Fees', 6, 6, 6, 6, 1],
		['Politics', 'Defined Geographical Boundaries', 4, 4, 4, 4, 0],
		['Politics', 'Gender', 1, 1, 1, 1, 0],
		['Politics', 'Defined Religious Boundaries', 3, 3, 3, 3, 0],
		['Politics', 'Defined Tribal Boundaries', 15, 15, 15, 15, 2],
		['Politics', 'Age (too young or too old)', 15, 15, 15, 15, 0],
		['Politics', 'Disability', 0, 0, 0, 0, 0],
		['Politics', 'Legal', 3, 3, 3, 3, 0],
		['Politics', 'Other', 4, 4, 4, 4, 0],
		['Economy', 'Total Survey Respondents', 446, 403, 421, 402, 413],
		['Economy', 'Total in Economic Networks', 177, 352, 272, 230, 21],
		['Economy', 'Language Barriers', 10, 10, 10, 10, 0],
		['Economy', 'Prohibitive Membership Fees', 20, 20, 20, 20, 0],
		['Economy', 'Defined Geographical Boundaries', 8, 8, 8, 8, 0],
		['Economy', 'Gender', 6, 6, 6, 6, 0],
		['Economy', 'Defined Religious Boundaries', 7, 7, 7, 7, 0],
		['Economy', 'Defined Tribal Boundaries', 16, 16, 16, 16, 0],
		['Economy', 'Age (too young or too old)', 25, 25, 25, 25, 0],
		['Economy', 'Disability', 1, 1, 1, 1, 0],
		['Economy', 'Legal', 10, 10, 10, 10, 0],
		['Economy', 'Other', 6, 6, 6, 6, 1],
		['Social', 'Total Survey Respondents', 446, 403, 421, 402, 413],
		['Social', 'Total in Social Networks', 220, 311, 288, 274, 356],
		['Social', 'Language Barriers', 10, 10, 10, 10, 3],
		['Social', 'Prohibitive Membership Fees', 2, 2, 2, 2, 1],
		['Social', 'Defined Geographical Boundaries', 1, 1, 1, 1, 0],
		['Social', 'Gender', 2, 2, 2, 2, 0],
		['Social', 'Defined Religious Boundaries', 3, 3, 3, 3, 0],
		['Social', 'Defined Tribal Boundaries', 4, 4, 4, 4, 0],
		['Social', 'Age (too young or too old)', 8, 8, 8, 8, 15],
		['Social', 'Disability', 1, 1, 1, 1, 3],
		['Social', 'Legal', 1, 1, 1, 1, 0],
		['Social', 'Other', 5, 5, 5, 5, 3]
	]);

	data.sort([{column: 2, desc: true}]);

	const view = new google.visualization.DataView(data);
	
	if (menuItemActive.classList.contains('politics')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('economy')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('social')) {
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
		['Politics', 'Yes (I was registered, and I voted)', 294, 315, 334, 87, 406],
		['Politics', 'No (I was registered but did not vote)', 23, 13, 20, 34, 3],
		['Politics', 'No (I did not register)', 49, 43, 27, 251, 0],
		['Politics', 'No (I could not find the polling station)', 5, 0, 1, 4, 0],
		['Politics', 'No (My name did not appear on the voter\'s roll)', 4, 3, 4, 1, 0],
		['Politics', 'No (I was prevented from voting)', 1, 7, 1, 2, 0],
		['Politics', 'I was too young to vote', 38, 14, 19, 13, 0],
		['Politics', 'N/A', 32, 8, 15, 10, 4]
	]);
	
	const view = new google.visualization.DataView(data);
	
	if (menuItemActive.classList.contains('politics')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Politics'}]));
	} else if (menuItemActive.classList.contains('economy')) {
		view.setRows(view.getFilteredRows([{column: 0, value: 'Economy'}]));
	} else if (menuItemActive.classList.contains('social')) {
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
		['Yes, I did give', 359, 334, 327, 344, 411],
		['No, did not give', 87, 69, 94, 58, 2]
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
// Draw overall score summary chart on loading home page
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
const politicsSelect = '<select name="politics-variable" id="variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="voting">Voting in Elections</option></select>';
const economySelect = '<select name="economy-variable" id="variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option></select>';
const socialSelect = '<select name="social-variable" id="variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="giving">Giving</option></select>';
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
		google.charts.setOnLoadCallback(drawIncomeSummaryChart);
		google.charts.setOnLoadCallback(drawEducationSummaryChart);
		google.charts.setOnLoadCallback(drawAgeSummaryChart);
	} else if ((menuItemActive.classList.contains('politics') || menuItemActive.classList.contains('economy') || menuItemActive.classList.contains('social'))&& document.getElementById('variable').value == 'membership') {
		google.charts.setOnLoadCallback(drawMembershipChart);
	} else if ((menuItemActive.classList.contains('politics') || menuItemActive.classList.contains('economy') || menuItemActive.classList.contains('social'))&& document.getElementById('variable').value == 'frequency') {
		google.charts.setOnLoadCallback(drawFrequencyChart);
	} else if ((menuItemActive.classList.contains('politics') || menuItemActive.classList.contains('economy') || menuItemActive.classList.contains('social'))&& document.getElementById('variable').value == 'democracy') {
		google.charts.setOnLoadCallback(drawDemocracyChart);
	} else if ((menuItemActive.classList.contains('politics') || menuItemActive.classList.contains('economy') || menuItemActive.classList.contains('social'))&& document.getElementById('variable').value == 'gender') {
		google.charts.setOnLoadCallback(drawGenderChart);
	}

};
