angular.module('app', ['tc.chartjs']);


angular.module('app').controller('HomeCtrl', function($scope) {
  $scope.data = {
    labels: [".", ".", ".",".", ".", ".",".", ".", ".",".", ".", ".",".", ".", ".",".", ".", ".",".", ".", ".",".", ".", ".",".", ".", ".",".", ".", "."],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
            ],
            borderColor: [
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
                'rgba(250, 250, 250, 0.7)',
                'rgba(0, 140, 186, 0.6)',
                'rgba(0, 140, 186, 0.3)',
            ],
            borderWidth: 1,
            data: [55, 40, 65, 59, 90, 65, 59, 90, 81, 56, 27, 100, 28, 48, 40, 28, 48, 40, 19, 96,81, 56, 27, 100,55, 40, 65, 59,59, 90, 65, 59, 90],
        }
    ]
  };

  $scope.options =  {
    tooltips: {
      enabled: false
    },
    hover: {
      mode: false,
    },
    scales: {
      xAxes: [
        {
          categoryPercentage: 1,
          barPercentage: 1,
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ],
    },
  };
});


angular.module('app').controller('DemoCtrl', function($scope) {
  $scope.myData = {
    // Chart.js data structure goes here
    // e.g. Pie Chart Data Structure http://www.chartjs.org/docs/#doughnut-pie-chart-data-structure
    labels: [
      "Red",
      "Blue",
      "Yellow"
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  };

  $scope.myOptions =  {
    // Chart.js options go here
    // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
  };

  $scope.onChartClick = function (event) {
    console.log(event);
  };
});
