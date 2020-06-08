// Region Charts Starts

google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var options = {
        colorAxis: {
            colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66']
        }
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions-chart'));

    chart.draw(data, options);
}

// Region Charts Ends


// Bar Charts Starts

google.charts.load('current', {
    'packages': ['bar']
});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['เก็บเงินแล้ว:232,000.00 (ล้าน)', 'Percentage'],
        ["มี.ค 2563", 44],
        ["เม.ย 2563", 2],
        ["พ.ค 2563", 12],
        ["มิ.ย 2563", 10],
        ['ก.ค 2563', 3]
    ]);

    var options = {
        hAxis: {
            legend: {
                position: 'none'
            },
            colors: ['red'],
            chartArea: {
                width: 201,
                height:200
            },
            hAxis: {
                ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
            },
            bar: {
                gap: 0
            },
            histogram: {
                bucketSize: 0.02,
                maxNumBuckets: 200,
                minValue: -1,
                maxValue: 1
            }
        }
    };

    var chart = new google.charts.Bar(document.getElementById('Bar-chart'));
    chart.draw(data, options);
};

google.charts.load('current', {
    'packages': ['bar']
});
google.charts.setOnLoadCallback(drawStuff1);
function drawStuff1() {
    var data = new google.visualization.arrayToDataTable([
        ['เก็บเงินแล้ว:232,000.00 (ล้าน)', 'Percentage'],
        ["มี.ค 2563", 44],
        ["เม.ย 2563", 2],
        ["พ.ค 2563", 12],
        ["มิ.ย 2563", 10],
        ['ก.ค 2563', 3]
    ]);

    var options = {
        hAxis: {
            legend: {
                position: 'none'
            },
            colors: ['red'],
            chartArea: {
                width: 201,
                height: 200
            },
            hAxis: {
                ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
            },
            bar: {
                gap: 0
            },
            histogram: {
                bucketSize: 0.02,
                maxNumBuckets: 200,
                minValue: -1,
                maxValue: 1
            }
        }
    };

    var chart = new google.charts.Bar(document.getElementById('Bar-chart1'));
    chart.draw(data, options);
};

// Bar Charts Ends


// Histogram Charts Starts
(function ($) {

    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
            [2 / 3, -1, 0, 0],
            [2 / 3, -1, 0, null],
            [2 / 3, -1, 0, null],
            [-1 / 3, 0, 1, null],
            [-1 / 3, 0, -1, null],
            [-1 / 3, 0, null, null],
            [-1 / 3, 0, null, null]
        ]);

        var options = {

            title: 'Charges of subatomic particles',
            legend: {
                position: 'top',
                maxLines: 2
            },
            colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
            interpolateNulls: false,
            chartArea: {
                width: 401
            },
        };

        var chart = new google.visualization.Histogram(document.getElementById('Histogram-chart'));
        chart.draw(data, options);
    }

})(jQuery);

// Histogram Charts Ends


// Area Chart Starts
(function ($) {

    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['', 'รายได้', 'ค่าใช้จ่าย'],
            ["มี.ค 2563", 100000,50000],
            ["เม.ย 2563", 200000, 100000],
            ["พ.ค 2563", 50000, 100000],
            ["มิ.ย 2563", 400000, 250000],
            ['ก.ค 2563', 100000, 50000]
        ]);

        var options = {
            fontName: 'Aksorn',
            title: 'รายได้รวม 530,000.00 ค่าใช้จ่าย 110,000.00',
            hAxis: {
                title: '',
                titleTextStyle: {
                    color: '#333'
                }
            },
            colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
            chartArea: {
                width: 1050, 
                height:300
            },
            vAxis: {
                minValue: 0
            }
        };

        var AreaChart = new google.visualization.AreaChart(document.getElementById('area-chart'));
        AreaChart.draw(data, options);
    }

})(jQuery);
// Area Chart Ends



// Donut Chart Starts

google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['บริษัทส่งออก01', 11],
        ['บริษัทส่งออก02', 2],
        ['บริษัทส่งออก03', 2],
        ['บริษัทส่งออก04', 2],
        ['บริษัทส่งออก05', 7]
    ]);

    var options = {
        fontName: 'Aksorn',
        title: 'รายได้รวม 590,000.00',
        pieHole: 0.4,
        colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
        chartArea: {
            width: 500,
            height: 300
        },
    };

    var Donutchart = new google.visualization.PieChart(document.getElementById('Donut-chart'));
    Donutchart.draw(data, options);
}

google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['บริษัทส่งออก01', 11],
        ['บริษัทส่งออก02', 2],
        ['บริษัทส่งออก03', 2],
        ['บริษัทส่งออก04', 2],
        ['บริษัทส่งออก05', 7]
    ]);

    var options = {
        fontName: 'Aksorn',
        title: 'รายได้รวม 590,000.00',
        pieHole: 0.4,
        colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
        chartArea: {
            width: 500,
            height: 300
        },
    };

    var Donutchart = new google.visualization.PieChart(document.getElementById('Donut-chart1'));
    Donutchart.draw(data, options);
}

// Donut Chart Ends


// Curve Chart Starts
(function ($) {

    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004', 1000, 400],
            ['2005', 1170, 460],
            ['2006', 660, 1120],
            ['2007', 1030, 540]
        ]);

        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: {
                position: 'bottom'
            },
            colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
            chartArea: {
                width: 500
            },
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }




})(jQuery);
// Curve Chart Ends