angular.module( 'tc.chartjs', [])
  .factory( 'tc.chartjs.directive', function() {
    return function( chartType ) {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '=',
          id: '@',
          type: '@'
        },
        link: function ( $scope, $elem ) {
          var ctx = $elem[0].getContext('2d');
          var chart = new Chart(ctx);

          $scope.$watch(
            'data',
            function ( value ) {
              if ( value ) {
                if ( chartType ) {
                  chart[ cleanChartName(chartType) ]( $scope.data, $scope.options );
                } else {
                  chart[ cleanChartName($scope.type) ]( $scope.data, $scope.options );
                }
              }
            },
            true
          );

          function cleanChartName( chartType ) {
            chartType = chartType.toLowerCase();
            switch ( chartType ) {
              case 'line':
                return 'Line';
              case 'bar':
                return 'Bar';
              case 'radar':
                return 'Radar';
              case 'polararea':
                return 'PolarArea';
              case 'pie':
                return 'Pie';
              case 'doughnut':
                return 'Doughnut';
              default:
                return '';
            }
          }
        }
      };
    };
  })
  .directive( 'tcChartjs', [ 'tc.chartjs.directive', function( Chart ) {
    return new Chart();
  }])
  .directive( 'tcChartjsLine', [ 'tc.chartjs.directive', function( Chart ) {
    return new Chart( 'line' );
  }])
  .directive( 'tcChartjsBar', [ 'tc.chartjs.directive', function( Chart ) {
    return new Chart( 'bar' );
  }])
  .directive( 'tcChartjsRadar', [ 'tc.chartjs.directive', function( Chart ) {
    return new Chart( 'radar' );
  }])
  .directive( 'tcChartjsPolararea', [ 'tc.chartjs.directive', function( Chart ) {
    return new Chart( 'polararea' );
  }])
  .directive( 'tcChartjsPie', [ 'tc.chartjs.directive', function( Chart ) {
    return new Chart( 'pie' );
  }])
  .directive( 'tcChartjsDoughnut', [ 'tc.chartjs.directive', function( Chart ) {
    return new Chart( 'doughnut' );
  }]);