'use strict';

angular
  .module( 'app', [
  'tc.chartjs',
  'app.randoms',
  'app.line',
  'app.bar',
  'app.radar',
  'app.polararea',
  'app.pie',
  'app.doughnut'
] );

angular
  .module( 'app' )
  .controller( 'HomeCtrl', HomeCtrl );

function HomeCtrl( $scope ) {
  $scope.data = {
    labels : [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
    datasets : [
      {
        label: 'dataset 1',
        backgroundColor : 'rgba(250, 250, 250, 0.7)',
        hoverBackgroundColor : 'rgba(250, 250, 250, 0.7)',
        data : [ 65, 59, 90, 81, 56, 55, 40, 65, 59, 90, 28, 48, 40, 19, 96 ]
      },
      {
        label: 'dataset 2',
        backgroundColor : 'rgba(0, 140, 186, 0.6)',
        hoverBackgroundColor : 'rgba(0, 140, 186, 0.6)',
        data : [ 28, 48, 40, 19, 96, 27, 100, 28, 48, 40, 65, 59, 90, 81, 56 ]
      },
      {
        label: 'dataset 3',
        backgroundColor : 'rgba(0, 140, 186, 0.3)',
        hoverBackgroundColor : 'rgba(0, 140, 186, 0.3)',
        data : [ 55, 40, 65, 59, 90, 65, 59, 90, 81, 56, 27, 100, 28, 48, 40, 28, 48, 40, 19, 96 ]
      }
    ]
  };

  // 27, 100, 28, 48, 40, 28, 48, 40, 19, 96, 55, 40, 65, 59, 90, 65, 59, 90, 81, 56
  $scope.options =  {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }],
      yAxes: [{
        display: false,
        beginAtZero: true
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };
}