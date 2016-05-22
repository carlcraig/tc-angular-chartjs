'use strict';

angular
  .module( 'app.pie', [] )
  .controller( 'PieCtrl', function ( $scope ) {

    $scope.data = {
      datasets: [{
        label: "My First dataset",
        data: [
          300,
          50,
          100
        ],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C"
        ]
      }],
      labels: [
        "Red",
        "Green",
        "Yellow"
      ]
    };

    $scope.options =  {
      legend: {
        display: false
      },

      legendCallback: function(chart) {
        var text = [];
        for (var i = 0; i < chart.data.datasets.length; i++) {
          var dataset = chart.data.datasets[i];
          text.push('<ul class="tc-chart-js-legend">');
          for (var j = 0; j < dataset.data.length; j++) {
            text.push('<li><span style="background-color:' + dataset.backgroundColor[j] + '"></span>');
            text.push(chart.data.labels[j]);
            text.push('</li>');
          }
          text.push('</ul>');
        }

        return text.join("");
      }
    };

  });