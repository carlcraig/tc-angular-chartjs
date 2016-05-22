'use strict';
angular
  .module( 'app.radar', [] )
  .controller( 'RadarCtrl', function ( $scope ) {
    
    $scope.data = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

    $scope.options =  {
      elements: {
        point: {
          radius: 5
        }
      },

      legend: {
        display: false
      },
      
      legendCallback: function(chart) {
        var text = [];
        text.push('<ul class="tc-chart-js-legend">');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
          if (chart.data.datasets[i].label) {
            text.push(chart.data.datasets[i].label);
          }
          text.push('</li>');
        }
        text.push('</ul>');

        return text.join("");
      },

      // Need to override these to give a nice default
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var result = [];
            var datasetIndex;
            for (datasetIndex = 0; datasetIndex < data.datasets.length; datasetIndex++) {
              result.push(data.datasets[datasetIndex].label + ': ' + data.datasets[datasetIndex].data[tooltipItem.index]);
            }
            return result;
          }
        }
      }
    };

  });