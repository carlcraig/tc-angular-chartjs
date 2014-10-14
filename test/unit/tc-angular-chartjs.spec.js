describe('tc-chartjs directive', function() {
  'use strict';
  var $compile, $scope, element, chartInstance,

  ChartMock = function () {
    this.Line = jasmine.createSpy('Line');
    this.Bar = jasmine.createSpy('Bar');
    this.Radar = jasmine.createSpy('Radar');
    this.PolarArea = jasmine.createSpy('PolarArea');
    this.Pie = jasmine.createSpy('Pie');
    this.Doughnut = jasmine.createSpy('Doughnut');
    this.CustomType = jasmine.createSpy('customType');
  };

  beforeEach(module('tc.chartjs'));

  beforeEach(inject(function (_$compile_, _$rootScope_){
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $scope.data = [];
    $scope.options = {};
    spyOn(window, 'Chart').andCallFake(function (ctx) {
      chartInstance = new ChartMock(ctx);
      return chartInstance;
    });
  }));

  it('tc-chartjs directive should call Chart.js when compiled', function () {
    element = $compile('<canvas tc-chartjs width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });

  it('tc-chartjs-line directive should call Chart.js when compiled', function () {
    element = $compile('<canvas tc-chartjs-line chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });

  it('tc-chartjs-bar directive should call Chart.js when compiled', function () {
    element = $compile('<canvas tc-chartjs-bar chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });

  it('tc-chartjs-radar directive should call Chart.js when compiled', function () {
    element = $compile('<canvas tc-chartjs-radar chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
  it('tc-chartjs-polararea directive should call Chart.js when compiled', function () {
    element = $compile('<canvas tc-chartjs-polararea chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
  it('tc-chartjs-pie directive should call Chart.js when compiled', function () {
    element = $compile('<canvas tc-chartjs-pie chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
  it('tc-chartjs-doughnut directive should call Chart.js when compiled', function () {
    element = $compile('<canvas tc-chartjs-doughnut chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
  describe('scope watcher', function () {
    it('should call the Chart\'s Line function when data is available', function () {
      element = $compile('<canvas tc-chartjs-line chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
      $scope.$digest();
      expect(chartInstance.Line).toHaveBeenCalledWith($scope.data, $scope.options);
    });
    it('should normalise chart type values', function () {
      element = $compile('<canvas tc-chartjs chart-type="pOlArArEa" chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
      $scope.$digest();
      expect(chartInstance.PolarArea).toHaveBeenCalledWith($scope.data, $scope.options);
    });
    it('should pass through unknown types as-is', function () {
      element = $compile('<canvas tc-chartjs chart-type="CustomType" chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
      $scope.$digest();
      expect(chartInstance.CustomType).toHaveBeenCalledWith($scope.data, $scope.options);
    });
    it('should throw an error if no chart type is supplied', function () {
      function testChartTypeRequiredException() {
        element = $compile('<canvas tc-chartjs chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
      }
      expect(testChartTypeRequiredException).toThrow('Error creating chart: Chart type required.');
    });
  });
});
