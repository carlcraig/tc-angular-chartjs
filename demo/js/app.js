'use strict';

angular
  .module( 'app', [
  'tc.chartjs',
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
        fillColor : 'rgba(250, 250, 250, 0.7)',
        data : [ 65, 59, 90, 81, 56, 55, 40, 65, 59, 90, 28, 48, 40, 19, 96 ]
      },
      {
        fillColor : 'rgba(0, 140, 186, 0.6)',
        data : [ 28, 48, 40, 19, 96, 27, 100, 28, 48, 40, 65, 59, 90, 81, 56 ]
      },
      {
        fillColor : 'rgba(0, 140, 186, 0.3)',
        data : [ 55, 40, 65, 59, 90, 65, 59, 90, 81, 56, 27, 100, 28, 48, 40, 28, 48, 40, 19, 96 ]
      }
    ]
  };

  // 27, 100, 28, 48, 40, 28, 48, 40, 19, 96, 55, 40, 65, 59, 90, 65, 59, 90, 81, 56
  $scope.options =  {
    showTooltips: false,
    showScale: false,
    scaleBeginAtZero : true,
    scaleShowGridLines : false,
    scaleGridLineColor : 'rgba(0,0,0,.05)',
    scaleGridLineWidth : 1,
    barShowStroke : false,
    barStrokeWidth : 2,
    barValueSpacing : 0,
    barDatasetSpacing : 0,
    legendTemplate : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
    onAnimationComplete : function(){},
    responsive: true
  };
}