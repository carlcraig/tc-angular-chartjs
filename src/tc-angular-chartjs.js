angular.module( 'tc.chartjs', [])
  .directive( 'tcChartjs', function( $tcChartjsFactory ) {
    return new $tcChartjsFactory();
  })
  .directive( 'tcChartjsLine', function( $tcChartjsFactory ) {
    return new $tcChartjsFactory( 'line' );
  })
  .directive( 'tcChartjsBar', function( $tcChartjsFactory ) {
    return new $tcChartjsFactory( 'bar' );
  })
  .directive( 'tcChartjsRadar', function( $tcChartjsFactory ) {
    return new $tcChartjsFactory( 'radar' );
  })
  .directive( 'tcChartjsPolararea', function( $tcChartjsFactory ) {
    return new $tcChartjsFactory( 'polararea' );
  })
  .directive( 'tcChartjsPie', function( $tcChartjsFactory ) {
    return new $tcChartjsFactory( 'pie' );
  })
  .directive( 'tcChartjsDoughnut', function( $tcChartjsFactory ) {
    return new $tcChartjsFactory( 'doughnut' );
  })
  .factory( '$tcChartjsFactory', function() {
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
          function cleanChartName( type ) {
            type = type.toLowerCase();
            switch ( type ) {
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
  });