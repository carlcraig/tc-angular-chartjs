angular.module('app', ['tc.chartjs']);

// line charts
angular.module('app').controller('LineController', function($scope) {
  $scope.chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
        spanGaps: false,
      }
    ]
  };

  $scope.chartOptions = {};

  $scope.onChartClick = function(event) {
    console.log('LineController', 'onChartClick', event);
  }
});

// bar charts
angular.module('app').controller('BarController', function($scope) {
  $scope.chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
        ],
        borderWidth: 1,
        data: [55, 57, 54, 55, 59, 53, 56],
      }
    ]
  };

  $scope.chartOptions = {};

  $scope.onChartClick = function(event) {
    console.log('BarController', 'onChartClick', event);
  }
});

// bubble charts
angular.module('app').controller('BubbleController', function($scope) {
  $scope.chartData = {
    datasets: [
      {
        label: 'First Dataset',
        data: [
          {
            x: 20,
            y: 30,
            r: 15
          },
          {
            x: 40,
            y: 10,
            r: 10
          }
        ],
        backgroundColor:"#FF6384",
        hoverBackgroundColor: "#FF6384",
      }
    ]
  };

  $scope.chartOptions = {};

  $scope.onChartClick = function(event) {
    console.log('BubbleController', 'onChartClick', event);
  }
});

// radar charts
angular.module('app').controller('RadarController', function($scope) {
  $scope.chartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First Dataset",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: "My Second Dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };

  $scope.chartOptions = {};

  $scope.onChartClick = function(event) {
    console.log('RadarController', 'onChartClick', event);
  }
});

// pie & doughnut charts
angular.module('app').controller('PieDoughnutController', function($scope) {
  $scope.chartData = {
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

  $scope.chartOptions = {};

  $scope.onChartClick = function(event) {
    console.log('PieDoughnutController', 'onChartClick', event);
  }
});

// polar area charts
angular.module('app').controller('PolarController', function($scope) {
  $scope.chartData = {
    labels: [
      "Red",
      "Green",
      "Yellow",
      "Grey",
      "Blue"
    ],
    datasets: [
      {
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My Dataset' // for legend
      }
    ]
  };

  $scope.chartOptions = {};

  $scope.onChartClick = function(event) {
    console.log('PolarController', 'onChartClick', event);
  }
});
