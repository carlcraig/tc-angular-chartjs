/**
 * tc-angular-chartjs - v1.0.1 - 2013-09-08
 * Copyright (c) 2013 Carl Craig
 * Dual licensed with the Apache-2.0 or MIT license.
 */
angular.module("tc.chartjs", []).directive("tcChartjs", [ "TcChartjsFactory", function(TcChartjsFactory) {
    return new TcChartjsFactory();
} ]).directive("tcChartjsLine", [ "TcChartjsFactory", function(TcChartjsFactory) {
    return new TcChartjsFactory("line");
} ]).directive("tcChartjsBar", [ "TcChartjsFactory", function(TcChartjsFactory) {
    return new TcChartjsFactory("bar");
} ]).directive("tcChartjsRadar", [ "TcChartjsFactory", function(TcChartjsFactory) {
    return new TcChartjsFactory("radar");
} ]).directive("tcChartjsPolararea", [ "TcChartjsFactory", function(TcChartjsFactory) {
    return new TcChartjsFactory("polararea");
} ]).directive("tcChartjsPie", [ "TcChartjsFactory", function(TcChartjsFactory) {
    return new TcChartjsFactory("pie");
} ]).directive("tcChartjsDoughnut", [ "TcChartjsFactory", function(TcChartjsFactory) {
    return new TcChartjsFactory("doughnut");
} ]).factory("TcChartjsFactory", function() {
    return function(chartType) {
        return {
            restrict: "A",
            scope: {
                data: "=chartData",
                options: "=chartOptions",
                id: "@",
                type: "@chartType"
            },
            link: function($scope, $elem) {
                var ctx = $elem[0].getContext("2d");
                var chart = new Chart(ctx);
                $scope.$watch("data", function(value) {
                    if (value) {
                        if (chartType) {
                            chart[cleanChartName(chartType)]($scope.data, $scope.options);
                        } else {
                            chart[cleanChartName($scope.type)]($scope.data, $scope.options);
                        }
                    }
                }, true);
                function cleanChartName(type) {
                    type = type.toLowerCase();
                    switch (type) {
                      case "line":
                        return "Line";

                      case "bar":
                        return "Bar";

                      case "radar":
                        return "Radar";

                      case "polararea":
                        return "PolarArea";

                      case "pie":
                        return "Pie";

                      case "doughnut":
                        return "Doughnut";

                      default:
                        return "";
                    }
                }
            }
        };
    };
});