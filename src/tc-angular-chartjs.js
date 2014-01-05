/**
 * Copyright 2013 Carl Craig
 * tc-angular-chartjs is dual licensed with the Apache-2.0 or MIT license.
 */

angular.module( 'tc.chartjs', [])
  .directive( 'tcChartjs', function( TcChartjsFactory ) {
    return new TcChartjsFactory();
  })
  .directive( 'tcChartjsLine', function( TcChartjsFactory ) {
    return new TcChartjsFactory( 'line' );
  })
  .directive( 'tcChartjsBar', function( TcChartjsFactory ) {
    return new TcChartjsFactory( 'bar' );
  })
  .directive( 'tcChartjsRadar', function( TcChartjsFactory ) {
    return new TcChartjsFactory( 'radar' );
  })
  .directive( 'tcChartjsPolararea', function( TcChartjsFactory ) {
    return new TcChartjsFactory( 'polararea' );
  })
  .directive( 'tcChartjsPie', function( TcChartjsFactory ) {
    return new TcChartjsFactory( 'pie' );
  })
  .directive( 'tcChartjsDoughnut', function( TcChartjsFactory ) {
    return new TcChartjsFactory( 'doughnut' );
  })
  .factory( 'TcChartjsFactory', function() {
    return function( chartType ) {
      return {
        restrict: 'A',
        scope: {
          data: '=chartData',
          options: '=chartOptions',
          id: '@',
          type: '@chartType'
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