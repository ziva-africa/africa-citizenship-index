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

const discriminationData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra', { role: 'style'}],
	['Politics', 'Total Survey Respondents', 446, 403, 421, 402, 413, '#f15c27'],
	['Politics', 'Total in Political Networks', 145, 293, 196, 152, 64, '#f15c27'],
	['Politics', 'Language Barriers', 4, 4, 4, 4, 2, '#f15c27'],
	['Politics', 'Prohibitive Membership Fees', 6, 6, 6, 6, 1, '#f15c27'],
	['Politics', 'Defined Geographical Boundaries', 4, 4, 4, 4, 0, '#f15c27'],
	['Politics', 'Gender', 1, 1, 1, 1, 0, '#f15c27'],
	['Politics', 'Defined Religious Boundaries', 3, 3, 3, 3, 0, '#f15c27'],
	['Politics', 'Defined Tribal Boundaries', 15, 15, 15, 15, 2, '#f15c27'],
	['Politics', 'Age (too young or too old)', 15, 15, 15, 15, 0, '#f15c27'],
	['Politics', 'Disability', 0, 0, 0, 0, 0, '#f15c27'],
	['Politics', 'Legal', 3, 3, 3, 3, 0, '#f15c27'],
	['Politics', 'Other', 4, 4, 4, 4, 0, '#f15c27'],
	['Economy', 'Total Survey Respondents', 446, 403, 421, 402, 413, '#f15c27'],
	['Economy', 'Total in Economic Networks', 177, 352, 272, 230, 21, '#f15c27'],
	['Economy', 'Language Barriers', 10, 10, 10, 10, 0, '#f15c27'],
	['Economy', 'Prohibitive Membership Fees', 20, 20, 20, 20, 0, '#f15c27'],
	['Economy', 'Defined Geographical Boundaries', 8, 8, 8, 8, 0, '#f15c27'],
	['Economy', 'Gender', 6, 6, 6, 6, 0, '#f15c27'],
	['Economy', 'Defined Religious Boundaries', 7, 7, 7, 7, 0, '#f15c27'],
	['Economy', 'Defined Tribal Boundaries', 16, 16, 16, 16, 0, '#f15c27'],
	['Economy', 'Age (too young or too old)', 25, 25, 25, 25, 0, '#f15c27'],
	['Economy', 'Disability', 1, 1, 1, 1, 0, '#f15c27'],
	['Economy', 'Legal', 10, 10, 10, 10, 0, '#f15c27'],
	['Economy', 'Other', 6, 6, 6, 6, 1, '#f15c27'],
	['Social', 'Total Survey Respondents', 446, 403, 421, 402, 413, '#f15c27'],
	['Social', 'Total in Social Networks', 220, 311, 288, 274, 356, '#f15c27'],
	['Social', 'Language Barriers', 10, 10, 10, 10, 3, '#f15c27'],
	['Social', 'Prohibitive Membership Fees', 2, 2, 2, 2, 1, '#f15c27'],
	['Social', 'Defined Geographical Boundaries', 1, 1, 1, 1, 0, '#f15c27'],
	['Social', 'Gender', 2, 2, 2, 2, 0, '#f15c27'],
	['Social', 'Defined Religious Boundaries', 3, 3, 3, 3, 0, '#f15c27'],
	['Social', 'Defined Tribal Boundaries', 4, 4, 4, 4, 0, '#f15c27'],
	['Social', 'Age (too young or too old)', 8, 8, 8, 8, 15, '#f15c27'],
	['Social', 'Disability', 1, 1, 1, 1, 3, '#f15c27'],
	['Social', 'Legal', 1, 1, 1, 1, 0, '#f15c27'],
	['Social', 'Other', 5, 5, 5, 5, 3, '#f15c27']
];

const votingData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
	['Politics', 'Yes (I was registered, and I voted)', 294, 315, 334, 87, 406],
	['Politics', 'No (I was registered but did not vote)', 23, 13, 20, 34, 3],
	['Politics', 'No (I did not register)', 49, 43, 27, 251, 0],
	['Politics', 'No (I could not find the polling station)', 5, 0, 1, 4, 0],
	['Politics', 'No (My name did not appear on the voter\'s roll)', 4, 3, 4, 1, 0],
	['Politics', 'No (I was prevented from voting)', 1, 7, 1, 2, 0],
	['Politics', 'I was too young to vote', 38, 14, 19, 13, 0],
	['Politics', 'N/A', 32, 8, 15, 10, 4]
];

const givingData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
	['Social', 'Yes, I did give', 359, 334, 327, 344, 411],
	['Social', 'No, did not give', 87, 69, 94, 58, 2]
];

const digitalCitizenshipData = [
	['Area', 'Variable', 'Harare', 'Lilongwe', 'Nairobi', 'Yaoundé', 'Accra'],
	['Digital Citizenship', 'Face to Face', 110, 145, 164, 83, 24],
	['Digital Citizenship', 'Social Media', 97, 95, 134, 121, 65],
	['Digital Citizenship', 'Both', 121, 133, 120, 100, 44]
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
	bar: {groupWidth: '75%'},
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
	const chart = new google.visualization.Gauge(document.getElementById('charts-and-text-child-1'));
	chart.draw(view, options);
};

const drawPoliticsGaugeCharts = () => {
	const data = google.visualization.arrayToDataTable(politicsOverallScores);
	const view = new google.visualization.DataView(data);
	filterCityRow(view);
	let options = gaugeOptions;
	const chart = new google.visualization.Gauge(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
};

const drawEconomyGaugeCharts = () => {
	const data = google.visualization.arrayToDataTable(economyOverallScores);
	const view = new google.visualization.DataView(data);
	filterCityRow(view);
	let options = gaugeOptions;
	const chart = new google.visualization.Gauge(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
};

const drawSocialGaugeCharts = () => {
	const data = google.visualization.arrayToDataTable(socialOverallScores);
	const view = new google.visualization.DataView(data);
	filterCityRow(view);
	let options = gaugeOptions;
	const chart = new google.visualization.Gauge(document.getElementById('charts-and-text-child-0'));
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
	const chart = new google.visualization.BarChart(document.getElementById('charts-and-text-child-1'));
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
	const chart = new google.visualization.BarChart(document.getElementById('charts-and-text-child-1'));
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
	const chart = new google.visualization.BarChart(document.getElementById('charts-and-text-child-1'));
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
	const chart = new google.visualization.BarChart(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
};

const drawIncomeSummaryChart = () => {
	const data = google.visualization.arrayToDataTable(respondentsIncome);
	const view = new google.visualization.DataView(data);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Respondents Monthly Income';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#a4d17a' }, 2: { color: '#cbe5b3' }, 3: { color: '#abb9c4' }, 4: { color: '#667d8f' }, 5: { color: '#333f48' } };
	const chart = new google.visualization.PieChart(document.getElementById('charts-and-text-child-1'));
	chart.draw(view, options);
};

const drawEducationSummaryChart = () => {
	const data = google.visualization.arrayToDataTable(respondentsEducation);
	const view = new google.visualization.DataView(data);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Respondents Monthly Income';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#a4d17a' }, 2: { color: '#cbe5b3' }, 3: { color: '#abb9c4' } };
	const chart = new google.visualization.PieChart(document.getElementById('charts-and-text-child-2'));
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
	const chart = new google.visualization.ColumnChart(document.getElementById('charts-and-text-child-3'));
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
	barOptions['bar']['groupWidth'] = '80%';
	barOptions['chartArea']['width'] = '90%';
	barOptions['chartArea']['height'] = '70%';
	const chart = new google.visualization.BarChart(document.getElementById('charts-and-text-child-0'));
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
	const chart = new google.visualization.ColumnChart(document.getElementById('charts-and-text-child-0'));
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
	const chart = new google.visualization.PieChart(document.getElementById('charts-and-text-child-0'));
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
	const chart = new google.visualization.PieChart(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
}

const drawDiscriminationChart = () => {
	const data = google.visualization.arrayToDataTable(discriminationData);
	const view = new google.visualization.DataView(data);
	filterAreaRow(view);
	filterCityColumn(view);
	let options = barOptions;
	barOptions['title'] = 'Discrimination Faced in Networks';
	barOptions['bar']['groupWidth'] = '80%';
	barOptions['chartArea']['width'] = '90%';
	barOptions['chartArea']['height'] = '75%';
	barOptions['hAxis']['title'] = 'Total # of Respondents';
	barOptions['hAxis']['minValue'] = 0;
	barOptions['hAxis']['maxValue'] = 500;
	barOptions['hAxis']['gridlines'] = {count: 5};
	barOptions['vAxis']['textPosition'] = 'none';
	const chart = new google.visualization.BarChart(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
}

const drawVotingChart = () => {
	const data = google.visualization.arrayToDataTable(votingData);
	const view = new google.visualization.DataView(data);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Participation in Presidential Elections';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#f15c27' }, 2: { color: '#eeb7a4'}, 3: { color: '#ffeae3'}, 4: { color: '#fff6f2'}, 5: { color: '#abb9c4' }, 6: { color: '#667d8f' }, 7: { color: '#333f48' } };
	const chart = new google.visualization.PieChart(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
}

const drawGivingChart = () => {
	const data = google.visualization.arrayToDataTable(givingData);
	const view = new google.visualization.DataView(data);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Citizens that Gave to Charitable Causes in Last 6 Months';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#667d8f' } };
	const chart = new google.visualization.PieChart(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
}

const drawDigitalCitizenshipChart = () => {
	const data = google.visualization.arrayToDataTable(digitalCitizenshipData);
	const view = new google.visualization.DataView(data);
	filterCityColumnSimple(view);
	let options = pieOptions;
	pieOptions['title'] = 'Methods of Interaction in Networks';
	pieOptions['slices'] = { 0: { color: '#7ebe42' }, 1: { color: '#667d8f' }, 2: { color: '#333f48' }  };
	const chart = new google.visualization.PieChart(document.getElementById('charts-and-text-child-0'));
	chart.draw(view, options);
}

/** Code for changing layout based on user input **/

// Draw gauge chart on loading "home page"
google.charts.setOnLoadCallback(drawOverallScoreGaugeCharts);

// Create variables for DOM elements
const navbar = document.getElementById('navbar');
const navbarToggle = navbar.querySelector('.navbar-toggle');
const navbarMenu = navbar.querySelector('#navbar-menu');
const navbarLinksContainer = navbar.querySelector('.navbar-links');
const navbarLinks = navbar.querySelectorAll('.navbar-link');
let menuItemActive = document.querySelector('.active');
const vizContainer = document.querySelector('.viz-container');

//Create variables for dashboard content
const citySelect = '<select name="city" id="city" onchange="changeCharts();" autocomplete="off"><option value="hre">Harare</option><option value="li">Lilongwe</option><option value="nai">Nairobi</option><option value="ya">Yaoundé</option><option value="acc">Accra</option></select>'
const scoresSelect = '<select name="score" id="score" onchange="changeCharts();" autocomplete="off"><option value="ove">Overall Score</option><option value="pol">Politics Score</option><option value="eco">Economy Score</option><option value="soc">Social Score</option></select>';
const politicsSelect = '<select name="politics-variable" id="variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="voting">Voting in Elections</option></select>';
const economySelect = '<select name="economy-variable" id="variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option></select>';
const socialSelect = '<select name="social-variable" id="variable" onchange="changeCharts();" autocomplete="off"><option value="membership">Membership in Networks</option><option value="frequency">Frequency of Meetings</option><option value="democracy">Democracy in Networks</option><option value="gender">Gender Diversity</option><option value="discrimination">Discrimination</option><option value="giving">Giving</option></select>';
const scoresText = '<p>Scores for each city are calculated on a 0 – 100 scale where 0 is the lowest possible score (unhealthy level of citizenship) and 100 is the highest possible score (vibrant citizenship).</p>';
const aboutText = '<p><b>The African Citizenship Index</b> aims to understand the ways in which ordinary people interact with each other in economic, social-support focused and political networks across the continent. The inaugural survey was conducted by SIVIO Institute in March – April 2021 across 5 African cities. <b>Harare, Zimbabwe</b> and <b>Lilongwe, Malawi</b> in Southern Africa, <b>Nairobi, Kenya</b> in East Africa <b>Yaoundé, Cameroon</b> in Central Africa and <b>Accra, Ghana</b> in West Africa.</p>';
const politicsText = '<p>The political score measures citizen participation in political life in their city. It includes membership in political parties, campaign groups, social movements etc. It also measures participation in elections, as well as gender equality in political networks, democracy within networks and discrimination faced in joining any type of group / network.</p>';
const economyText = '<p>The economy score measures citizen participation in economic life in their city. It includes membership in networks such as savings and lending groups, labour pooling groups, cooperatives etc. It also measures gender equality in economic networks, democracy within networks and discrimination faced in joining any type of group / network.</p>';
const socialText = '<p>The social score measures citizens participation in social networks such as religious groups, burial societies, sporting associates etc. It also measures giving and solidarity among citizens as well as gender equality in these groups / networks, democracy within networks and discrimination faced in joining any type of group / network.</p>';

// Functions to open and close mobile navbar
function openMobileNavbar() {
	navbar.classList.add('opened');
	navbarToggle.setAttribute('aria-expanded', 'true');
}

function closeMobileNavbar() {
	navbar.classList.remove('opened');
	navbarToggle.setAttribute('aria-expanded', 'false');
}

navbarToggle.addEventListener('click', () => {
	if (navbar.classList.contains('opened')) {
		closeMobileNavbar();
	} else {
		openMobileNavbar();
	}
});

// Close mobile menu on click of space in navbar-menu div
navbarMenu.addEventListener('click', closeMobileNavbar);

// Close mobile menu when click on menu item
navbarLinksContainer.addEventListener('click', closeMobileNavbar);

// Change active class on user click
function changeMenuActive() {
	if (!this.classList.contains('active')) {
		menuItemActive.classList.remove('active');
		this.classList.add('active');
		menuItemActive = this;
	}
};

//
function clearVizContainer() {
	vizContainer.innerHTML = '';
}

function changeLayout() {
	//Create div to hold select drop downs
	let selectDiv = document.createElement('div');
	selectDiv.setAttribute('class', 'options-choose-div');
	vizContainer.appendChild(selectDiv);
	
	//Create div to hold charts and text
	let chartsParent = document.createElement('div');
	chartsParent.setAttribute('class', 'charts-and-text-parent');
	vizContainer.appendChild(chartsParent);
	
	function createChildDivs(n) {
		for (let i = 0; i < n; i ++) {
			let vizConChild = document.createElement('div');
			vizConChild.setAttribute('class', 'charts-and-text-div');
			vizConChild.id = 'charts-and-text-child-' + i;
			document.querySelector('.charts-and-text-parent').appendChild(vizConChild);
		}
	}
	
	//To move TO summary
	if (menuItemActive.classList.contains('summary')) {
		//Create drop down select menus
		document.querySelector('.options-choose-div').innerHTML = citySelect + scoresSelect;
		//Create child divs to hold charts and text 
		createChildDivs(3);
	//To move TO survey
	} else if (menuItemActive.classList.contains('survey')) {
		//Create drop down select menus
		document.querySelector('.options-choose-div').innerHTML = citySelect;
		//Create child divs 
		createChildDivs(4);
	//To move TO politics
	} else if (menuItemActive.classList.contains('politics')) {
		//Create drop down select menus
		document.querySelector('.options-choose-div').innerHTML = citySelect + politicsSelect;
		//Create child divs 
		createChildDivs(1);
		//Change height of child div
		document.getElementById('charts-and-text-child-0').style.height = '480px';	
	//To move TO economy
	} else if (menuItemActive.classList.contains('economy')) {
		//Create drop down select menus
		document.querySelector('.options-choose-div').innerHTML = citySelect + economySelect;
		//Create child divs 
		createChildDivs(1);
		document.getElementById('charts-and-text-child-0').style.height = '480px';
	//To move TO social
	} else if (menuItemActive.classList.contains('social')) {
		//Create drop down select menus
		document.querySelector('.options-choose-div').innerHTML = citySelect + socialSelect;
		//Create child divs 
		createChildDivs(1);
		document.getElementById('charts-and-text-child-0').style.height = '480px';
	//To move TO digital citizenship
	} else if (menuItemActive.classList.contains('digital-citizenship')) {
		//Create drop down select menus
		document.querySelector('.options-choose-div').innerHTML = citySelect;
		//Create child divs 
		createChildDivs(1);
		document.getElementById('charts-and-text-child-0').style.height = '480px';
	}
}

function changeCharts() {
	if (menuItemActive.classList.contains('summary') && document.getElementById('score').value == 'ove') {
		google.charts.setOnLoadCallback(drawOverallScoreGaugeCharts);
		//Add text
		document.getElementById('charts-and-text-child-0').innerHTML = aboutText;
		document.getElementById('charts-and-text-child-2').innerHTML = scoresText;
	} else if (menuItemActive.classList.contains('summary') && document.getElementById('score').value == 'pol') {
		google.charts.setOnLoadCallback(drawPoliticsGaugeCharts);
		google.charts.setOnLoadCallback(drawPoliticsScoreSummaryBarChart);
		//Add text
		document.getElementById('charts-and-text-child-2').innerHTML = politicsText;
	} else if (menuItemActive.classList.contains('summary') && document.getElementById('score').value == 'eco') {
		google.charts.setOnLoadCallback(drawEconomyGaugeCharts);
		google.charts.setOnLoadCallback(drawEconomyScoreSummaryBarChart);
		//Add text
		document.getElementById('charts-and-text-child-2').innerHTML = economyText;
	} else if (menuItemActive.classList.contains('summary') && document.getElementById('score').value == 'soc') {
		google.charts.setOnLoadCallback(drawSocialGaugeCharts);
		google.charts.setOnLoadCallback(drawSocialScoreSummaryBarChart);
		//Add text
		document.getElementById('charts-and-text-child-2').innerHTML = socialText;
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
	} else if ((menuItemActive.classList.contains('politics') || menuItemActive.classList.contains('economy') || menuItemActive.classList.contains('social'))&& document.getElementById('variable').value == 'discrimination') {
		google.charts.setOnLoadCallback(drawDiscriminationChart);
	} else if ((menuItemActive.classList.contains('politics') && document.getElementById('variable').value == 'voting')) {
		google.charts.setOnLoadCallback(drawVotingChart);
	} else if ((menuItemActive.classList.contains('social') && document.getElementById('variable').value == 'giving')) {
		google.charts.setOnLoadCallback(drawGivingChart);
	} else if (menuItemActive.classList.contains('digital-citizenship')) {
		google.charts.setOnLoadCallback(drawDigitalCitizenshipChart);
	}
};

// Loop through menu items and run functions to change active item, change layout anf change charts on click 
for (let i = 0; i < navbarLinks.length; i++) {
	navbarLinks[i].addEventListener('click', changeMenuActive);
	navbarLinks[i].addEventListener('click', clearVizContainer);
	navbarLinks[i].addEventListener('click', changeLayout);
	navbarLinks[i].addEventListener('click', changeCharts);
};

/* TO DO LIST

1. Look at chart option arrays - changes when moving from chart to chart - glitch
2. Look into importing data from Google Sheets

*/