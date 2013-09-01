tc-angular-chartjs
==================

###Add Chart.js to your angular applications

tc-angular-chartjs provides you with directives for all chartjs chart types.

- Line Charts
- Bar Charts
- Radar Charts
- Polar Area Charts
- Pie Charts
- Doughnut Charts

You can see all the [Chart.js Documentation]() on their website.

### Basic Usage

There are 6 different directives.

- tc-chartjs
- tc-chartjs-line
- tc-chartjs-bar
- tc-chartjs-radar
- tc-chartjs-polararea
- tc-chartjs-pie
- tc-chartjs-doughnut

Just place one of these directives on a `canvas` element to create a Chart.js chart.

```html
<canvas tc-chartjs-doughnut width="350" height="350"></canvas>
```

You will also want to give the chart some `data` and `options`. These can be provided
by assigning $scope variables to `options` and `data` attributes on the same canvas element.

```html
<canvas tc-chartjs-doughnut data="myData" options="myOptions" width="350" height="350"></canvas>
```
```javascript
$scope.myData = [
  { value : 50, color : "#F7464A" },
  { value : 90, color : "#E2EAE9" },
  { value : 75, color : "#D4CCC5" },
  { value : 30, color : "#949FB1"}
];

$scope.myOptions =  {
  // Chart.js options can go here.
};
```

### Using the `tc-chartjs` directive

When using the `tc-chartjs` directive you will need to add an additional attribute to
say which type of chart should be created.

Just attach a `type=""` attribute to the canvas element.

```html
<canvas tc-chartjs type="doughnut" data="data" options="options" width="350" height="350"></canvas>
```

Available Types:

- line
- bar
- radar
- polararea
- pie
- doughnut


####LICENSE

tc-angular-chartjs is primarily distributed under the terms of both the MIT license and the Apache License (Version 2.0).

See LICENSE-APACHE and LICENSE-MIT for more details.