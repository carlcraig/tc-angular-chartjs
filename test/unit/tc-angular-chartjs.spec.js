describe('tc-chartjs directive', function () {
  'use strict';

  var $compile, $scope, element, chartInstance,

    ChartMock = function () {
      this.Line = makeSpy('Line');
      this.Bar = makeSpy('Bar');
      this.Radar = makeSpy('Radar');
      this.PolarArea = makeSpy('PolarArea');
      this.Pie = makeSpy('Pie');
      this.Doughnut = makeSpy('Doughnut');
      this.CustomType = makeSpy('customType');
    };

  var makeSpy = function (name) {
    var resize = jasmine.createSpy('resize');
    var generateLegend = jasmine.createSpy('generateLegend');
    return jasmine.createSpy(name).and.callFake(function () {
      return {
        resize: resize,
        generateLegend: generateLegend
      };
    });
  };

  beforeEach(module('tc.chartjs'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $scope.data = [];
    $scope.options = {};
    spyOn(window, 'Chart').and.callFake(function (ctx) {
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
      expect(chartInstance.Line().resize).toHaveBeenCalled();
    });

    it('should normalise chart type values', function () {
      element = $compile('<canvas tc-chartjs chart-type="pOlArArEa" chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
      $scope.$digest();
      expect(chartInstance.PolarArea).toHaveBeenCalledWith($scope.data, $scope.options);
      expect(chartInstance.PolarArea().resize).toHaveBeenCalled();
    });

    it('should pass through unknown types as-is', function () {
      element = $compile('<canvas tc-chartjs chart-type="CustomType" chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
      $scope.$digest();
      expect(chartInstance.CustomType).toHaveBeenCalledWith($scope.data, $scope.options);
      expect(chartInstance.CustomType().resize).toHaveBeenCalled();
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
