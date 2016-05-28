'use strict';

angular.module('app.randoms', [])
    .service('Randoms', function() {
        // From https://github.com/chartjs/Chart.js/tree/master/samples

       this.scalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        this.colorFactor = function() {
            return Math.round(Math.random() * 255);
        };

        this.randomColor = function(opacity) {
            return 'rgba(' + this.colorFactor() + ',' + this.colorFactor() + ',' + this.colorFactor() + ',' + (opacity || '.3') + ')';
        };
    });

