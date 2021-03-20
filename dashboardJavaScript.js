/*  
**********
Load initial 'home page' google charts
**********
*/
//google.charts.load('current', {packages: ['corechart', 'bar']});
//google.charts.setOnLoadCallback(drawScoreSummaryStackedBar);

/*  
**********
Code for the changing colour of the navigation bar 
**********
*/
const menuItems = document.querySelectorAll('.menu__item');
let menuItemActive = document.querySelector('.menu__item--active');

// For loop to loop through menu items
for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', changeColour);
	menuItems[i].addEventListener('click', changeLayout);
	//menuItems[i].addEventListener('click', changeCharts);
};

//Function to run on button click to change active menu item, background colour and heading text
function changeColour() {
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
		} else if (this.classList.contains('menu__item--grey')) {
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
Code for the changing layout based on user selection
**********
*/

//Function to change layout based on user selection
function changeLayout() {
	let d1Test = document.getElementById('D1');
	let d7Test = document.getElementById('D7');
	
	//Change layout when moving from colour to colour
	if ((!this.classList.contains('menu__item--yellow')) && (typeof(d1Test) != 'undefined' && d1Test != null)) {
		//Remove 'D1' and 'D2' divs
		document.getElementById('D1').remove();
		document.getElementById('D2').remove();
		
		//Create div for city selector
		const selector = document.createElement('div');
		selector.setAttribute('class', 'D8-selector');
		selector.setAttribute('id', 'D8');
		document.querySelector('.container').prepend(selector);
		//document.querySelector('.container').appendChild(selector);
		
		//Create D7 div
		const d7 = document.createElement('div');
		d7.setAttribute('class', 'D1-D2-D7');
		d7.setAttribute('id', 'D7');
		document.querySelector('.right').appendChild(d7);
		
		//Create parent div for small viz boxes
		const parentForSmallVizBoxes = document.createElement('div');
		parentForSmallVizBoxes.setAttribute('class', 'parent-D3-D4-D5-D6');
		document.querySelector('.left').appendChild(parentForSmallVizBoxes);
		
		//For loop to create divs in left section
		for (let i = 0; i < 4; i++) {	
			const smallVizBoxes = document.createElement('div');
			smallVizBoxes.setAttribute('class', 'D3-D4-D5-D6');
			smallVizBoxes.setAttribute('id', 'D' + (i+3));
			document.querySelector('.parent-D3-D4-D5-D6').appendChild(smallVizBoxes);
		};
	} else if ((this.classList.contains('menu__item--yellow')) && (typeof(d7Test) != 'undefined' && d7Test != null)) {
		document.getElementById('D3').remove();
		document.getElementById('D4').remove();
		document.getElementById('D5').remove();
		document.getElementById('D6').remove();
		document.getElementById('D7').remove();
		document.getElementById('D8').remove();
		document.querySelector('.parent-D3-D4-D5-D6').remove();
		
		//Re-create home page layout
		const d1 = document.createElement('div');
		d1.setAttribute('class', 'D1-D2-D7');
		d1.setAttribute('id', 'D1');
		document.querySelector('.left').appendChild(d1);
		
		const d2 = document.createElement('div');
		d2.setAttribute('class', 'D1-D2-D7');
		d2.setAttribute('id', 'D2');
		document.querySelector('.right').appendChild(d2);
	}
};

/*  
**********
Code for the changing google charts based on user selection
**********
*/
/*
//Function to update charts based on user selection
function changeCharts() {
	document.getElementById('d1').remove();
	if (this.classList.contains('menu__item--yellow')) {
			drawScoreSummaryStackedBar();
	}	else if (this.classList.contains('menu__item--red')) {
			drawPoliticsStackedBar();
	}	else if (this.classList.contains('menu__item--green')) {
			drawEconomyStackedBar();
	}	else if (this.classList.contains('menu__item--grey')) {
			drawSocialStackedBar();
	}
};
*/
/*  
**********
Code for Google Charts - Summary Section
**********
*/
/*
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
    
	const elem = document.createElement('div');
	elem.setAttribute("style", "width: 100%; height: 100%; padding: 0; margin: 0;");
	elem.setAttribute("id", "d1");
	
	document.querySelector('.main-viz').appendChild(elem);
	const scoreSummaryStackedBar = new google.visualization.BarChart(elem);
	scoreSummaryStackedBar.draw(data, options);
};
*/
/*
//Radar charts in summary section
      google.charts.load('49', {'packages': ['vegachart']}).then(loadCharts);

      const harare = [
		["Membership",0.74,"Politics"],
		["Frequency",0.30,"Politics"],
		["Gender",0.10,"Politics"],
		["Democracy",0.63,"Politics"],
		["Discrimination",0.90,"Politics"],
];

      function loadCharts() {
        addChart(harare[0][2], harare, "#f15b28");
      };

      function addChart(title, data, color) {
        const dataTable = new google.visualization.DataTable();
        dataTable.addColumn({type: 'string', 'id': 'key'});
        dataTable.addColumn({type: 'number', 'id': 'value'});
        dataTable.addColumn({type: 'string', 'id': 'category'});
        dataTable.addRows(data);

        const options = {
          'vega': {
            "$schema": "https://vega.github.io/schema/vega/v5.json",
            "width": 150,
            "height": 180,
			"padding": 5,
            "autosize": "none",
            "title": {
              "text": "Harare",
              "anchor": "middle",
              "fontSize": 12,
              "dy": -8,
              "dx": {"signal": "-width/4"},
            },
            "signals": [
              {"name": "radius", "update": "80"}
            ],
            "data": [
              {
                "name": "table",
                "source": "datatable",
              },
              {
                "name": "keys",
                "source": "table",
                "transform": [
                  {
                    "type": "aggregate",
                    "groupby": ["key"]
                  }
                ]
              }
            ],
            "scales": [
              {
                "name": "angular",
                "type": "point",
                "range": {"signal": "[-PI, PI]"},
                "padding": 0.5,
                "domain": {"data": "table", "field": "key"}
              },
              {
                "name": "radial",
                "type": "linear",
                "range": {"signal": "[0, radius]"},
                "zero": true,
                "nice": false,
                "domain": [0,1],
              }
            ],
            "encode": {
              "enter": {
                "x": {"signal": "width/2"},
                "y": {"signal": "height/2 + 20"}
              }
            },
            "marks": [
              {
                "type": "group",
                "name": "categories",
                "zindex": 1,
                "from": {
                  "facet": {"data": "table", "name": "facet", "groupby": ["category"]}
                },
                "marks": [
                  {
                    "type": "line",
                    "name": "category-line",
                    "from": {"data": "facet"},
                    "encode": {
                      "enter": {
                        "interpolate": {"value": "linear-closed"},
                        "x": {"signal": "scale('radial', datum.value) * cos(scale('angular', datum.key))"},
                        "y": {"signal": "scale('radial', datum.value) * sin(scale('angular', datum.key))"},
                        "stroke": {"value": color},
                        "strokeWidth": {"value": 1.5},
                        "fill": {"value": color},
                        "fillOpacity": {"value": 0.1}
                      }
                    }
                  },
                  {
                    "type": "text",
                    "name": "value-text",
                    "from": {"data": "category-line"},
                    "encode": {
                      "enter": {
                        "x": {"signal": "datum.x + 14 * cos(scale('angular', datum.datum.key))"},
                        "y": {"signal": "datum.y + 14 * sin(scale('angular', datum.datum.key))"},
                        "text": {"signal": "format(datum.datum.value,'.1%')"},
                        "opacity": {"signal": "datum.datum.value > 0.01 ? 1 : 0"},
                        "align": {"value": "center"},
                        "baseline": {"value": "middle"},
                        "fontWeight": {"value": "bold"},
                        "fill": {"value": color},
                      }
                    }
                  }
                ]
              },
              {
                "type": "rule",
                "name": "radial-grid",
                "from": {"data": "keys"},
                "zindex": 0,
                "encode": {
                  "enter": {
                    "x": {"value": 0},
                    "y": {"value": 0},
                    "x2": {"signal": "radius * cos(scale('angular', datum.key))"},
                    "y2": {"signal": "radius * sin(scale('angular', datum.key))"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 1}
                  }
                }
              },
              {
                "type": "text",
                "name": "key-label",
                "from": {"data": "keys"},
                "zindex": 1,
                "encode": {
                  "enter": {
                    "x": {"signal": "(radius + 11) * cos(scale('angular', datum.key))"},
                    "y": [
                      {
                        "test": "sin(scale('angular', datum.key)) > 0",
                        "signal": "5 + (radius + 11) * sin(scale('angular', datum.key))"
                      },
                      {
                        "test": "sin(scale('angular', datum.key)) < 0",
                        "signal": "-5 + (radius + 11) * sin(scale('angular', datum.key))"
                      },
                      {
                        "signal": "(radius + 11) * sin(scale('angular', datum.key))"
                      }
                    ],
                    "text": {"field": "key"},
                    "align":
                      {
                        "value": "center"
                      },
                    "baseline": [
                      {
                        "test": "scale('angular', datum.key) > 0", "value": "top"
                      },
                      {
                        "test": "scale('angular', datum.key) == 0", "value": "middle"
                      },
                      {
                        "value": "bottom"
                      }
                    ],
                    "fill": {"value": "black"},
                    "fontSize": {"value": 12}
                  }
                }
              },
              {
                "type": "line",
                "name": "twenty-line",
                "from": {"data": "keys"},
                "encode": {
                  "enter": {
                    "interpolate": {"value": "linear-closed"},
                    "x": {"signal": "0.2 * radius * cos(scale('angular', datum.key))"},
                    "y": {"signal": "0.2 * radius * sin(scale('angular', datum.key))"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 1}
                  }
                }
              },
              {
                "type": "line",
                "name": "fourty-line",
                "from": {"data": "keys"},
                "encode": {
                  "enter": {
                    "interpolate": {"value": "linear-closed"},
                    "x": {"signal": "0.4 * radius * cos(scale('angular', datum.key))"},
                    "y": {"signal": "0.4 * radius * sin(scale('angular', datum.key))"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 1}
                  }
                }
              },
              {
                "type": "line",
                "name": "sixty-line",
                "from": {"data": "keys"},
                "encode": {
                  "enter": {
                    "interpolate": {"value": "linear-closed"},
                    "x": {"signal": "0.6 * radius * cos(scale('angular', datum.key))"},
                    "y": {"signal": "0.6 * radius * sin(scale('angular', datum.key))"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 1}
                  }
                }
              },
              {
                "type": "line",
                "name": "eighty-line",
                "from": {"data": "keys"},
                "encode": {
                  "enter": {
                    "interpolate": {"value": "linear-closed"},
                    "x": {"signal": "0.8 * radius * cos(scale('angular', datum.key))"},
                    "y": {"signal": "0.8 * radius * sin(scale('angular', datum.key))"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 1}
                  }
                }
              },
              {
                "type": "line",
                "name": "outer-line",
                "from": {"data": "radial-grid"},
                "encode": {
                  "enter": {
                    "interpolate": {"value": "linear-closed"},
                    "x": {"field": "x2"},
                    "y": {"field": "y2"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 1}
                  }
                }
              }
            ]
          }
        };

        //const elem = document.createElement("div");
       // elem.setAttribute("style", "display: inline-block; width: 150px; height: 180px; padding: 5px;");

        const radarChart = new google.visualization.VegaChart(document.getElementById('sv1'));
        radarChart.draw(dataTable, options);

        //document.getElementById('sv1').appendChild(elem);
      }

*/

/*  
**********
Code for Google Charts - Politics Section
**********
*/
/*
//Main bar graph in politics section
function drawPoliticsStackedBar() {
	const data = google.visualization.arrayToDataTable([
		['Network', 'Number of Respondents'],
		['Total Respondents', 74],
		['In Political Networks', 53],
		['Youth Group', 20],
		['Women\'s Group', 17],
		['Political Party', 14],
		['Joint Public Petition', 8],
		['Neighbourhood Watch', 9],
		['Online Based Civic Coalition ', 12],
		['Campaign Group', 12],
		['Residents Associations', 25],
		['Local Peace Committees', 11],
		['Social Movements ', 18],
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
		colors: ['374c5bff', '#f15b28', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e', '#d7410e']
	};
    
	const elem = document.createElement('div');
	elem.setAttribute("style", "width: 100%; height: 100%; padding: 0; margin: 0;");
	elem.setAttribute("id", "d1");
	
	document.querySelector('.main-viz').appendChild(elem);
	const politicsStackedBar = new google.visualization.BarChart(elem);
	politicsStackedBar.draw(data, options);
};
*/
/*  
**********
Code for Google Charts - Economy Section
**********
*/
/*
//Main bar graph in economy section
function drawEconomyStackedBar() {
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
		colors: ['#f15b28', '#f15b28', '#f15b28']
	};
    
	const elem = document.createElement('div');
	elem.setAttribute("style", "width: 100%; height: 100%; padding: 0; margin: 0;");
	elem.setAttribute("id", "d1");
	
	document.querySelector('.main-viz').appendChild(elem);
	const economyStackedBar = new google.visualization.BarChart(elem);
	economyStackedBar.draw(data, options);
};
*/
/*  
**********
Code for Google Charts - Social Section
**********
*/
/*
//Main bar graph in social section 
function drawSocialStackedBar() {
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
		colors: ['#9aa5ac', '#9aa5ac', '#9aa5ac']
	};
    
	const elem = document.createElement('div');
	elem.setAttribute("style", "width: 100%; height: 100%; padding: 0; margin: 0;");
	elem.setAttribute("id", "d1");
	
	document.querySelector('.main-viz').appendChild(elem);
	const socialStackedBar = new google.visualization.BarChart(elem);
	socialStackedBar.draw(data, options);
};
*/