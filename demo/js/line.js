'use strict';
angular
  .module( 'app.line', ['app.randoms'] )
  .controller( 'LineCtrl', function ( $scope, Randoms ) {
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $scope.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
          data: [28, 48, 40, 19, 86, 27, 90]
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

    $scope.randomizeData = function() {
        $.each($scope.data.datasets, function(i, dataset) {
            dataset.data = dataset.data.map(function() {
                return Randoms.scalingFactor();
            });
        });
    };

    $scope.changeDataObject = function() {
        $scope.data = {
            labels: ["July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: "My First dataset",
                data: [Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor()],
                fill: false
            }, {
                label: "My Second dataset",
                data: [Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor(), Randoms.scalingFactor()],
                fill: false
            }]
        };
        $.each($scope.data.datasets, function(i, dataset) {
            dataset.borderColor = Randoms.randomColor(0.4);
            dataset.backgroundColor = Randoms.randomColor(0.5);
            dataset.pointBorderColor = Randoms.randomColor(0.7);
            dataset.pointBackgroundColor = Randoms.randomColor(0.5);
            dataset.pointBorderWidth = 1;
        });
    };

    $scope.addDataset = function() {
        var newDataset = {
            label: 'Dataset ' + $scope.data.datasets.length,
            borderColor: Randoms.randomColor(0.4),
            backgroundColor: Randoms.randomColor(0.5),
            pointBorderColor: Randoms.randomColor(0.7),
            pointBackgroundColor: Randoms.randomColor(0.5),
            pointBorderWidth: 1,
            data: []
        };
        for (var index = 0; index < $scope.data.labels.length; ++index) {
            newDataset.data.push(Randoms.scalingFactor());
        }
        $scope.data.datasets.push(newDataset);
    };

    $scope.removeDataset = function () {
        $scope.data.datasets.splice(0, 1);
    };

    $scope.addData = function() {
        if ($scope.data.datasets.length > 0) {
            var month = MONTHS[$scope.data.labels.length % MONTHS.length];
            $scope.data.labels.push(month);
            $.each($scope.data.datasets, function(i, dataset) {
                dataset.data.push(Randoms.scalingFactor());
            });
        }
    };

    $scope.removeData = function() {
        $scope.data.labels.splice(-1, 1); // remove the label first
        $scope.data.datasets.forEach(function(dataset) {
            dataset.data.pop();
        });
    }
  });