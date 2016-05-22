describe('tc-chartjs directive', function () {
  'use strict';

  var $compile, $scope, element, chartInstance,

  ChartMock = function (context, options) {
    return makeSpy(options.type);
  };

  var makeSpy = function (type) {
    return {
      type: type,
      resize: jasmine.createSpy('resize'),
      generateLegend: jasmine.createSpy('generateLegend'),
      destroy: jasmine.createSpy('destroy')
    };
  };

  beforeEach(module('tc.chartjs'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $scope.data = [];
    $scope.options = {};
    spyOn(window, 'Chart').and.callFake(function (ctx, options) {
      chartInstance = new ChartMock(ctx, options);
      return chartInstance;
    });
  }));

  afterEach(function () {
    chartInstance = undefined;
  });

  it('should throw an error if no chart type is supplied', function () {
    function testChartTypeRequiredException() {
      element = $compile('<canvas tc-chartjs chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
      $scope.$digest();
    }

    expect(testChartTypeRequiredException).toThrow('Error creating chart: Chart type required.');
  });

  it('should destroy the chart if the directive is destroyed', function () {
    element = $compile('<canvas tc-chartjs-line chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    $scope.$destroy();
    expect(chartInstance.destroy).toHaveBeenCalled();
  });

  describe('with no data', function() {
    it('tc-chartjs directive should not call Chart.js when compiled', function () {
      element = $compile('<canvas tc-chartjs width="300" height="300"></canvas>')($scope);
      $scope.$digest();
      expect(chartInstance).toBeUndefined();
    });
  });

  describe('with data', function() {

    describe('with type as attribute', function() {
      it('should construct a line chart ', function () {
        element = $compile('<canvas tc-chartjs chart-type="line" chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('line');
        expect(chartInstance.resize).toHaveBeenCalled();
      });

      it('should pass through unknown types as-is', function () {
        element = $compile('<canvas tc-chartjs chart-type="CustomType" chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance).toBeDefined();
        expect(chartInstance.type).toEqual('CustomType');
        expect(chartInstance.resize).toHaveBeenCalled();
      });

      it('should normalise chart type values', function () {
        element = $compile('<canvas tc-chartjs chart-type="pOlArArEa" chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('polarArea');
        expect(chartInstance.resize).toHaveBeenCalled();
      });
    });

    describe('with type as dedicated directive', function() {
      it('should construct a line chart ', function () {
        element = $compile('<canvas tc-chartjs-line chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('line');
        expect(chartInstance.resize).toHaveBeenCalled();
      });

      it('should construct a bar chart ', function () {
        element = $compile('<canvas tc-chartjs-bar chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('bar');
        expect(chartInstance.resize).toHaveBeenCalled();
      });

      it('should construct a radar chart ', function () {
        element = $compile('<canvas tc-chartjs-radar chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('radar');
        expect(chartInstance.resize).toHaveBeenCalled();
      });

      it('should construct a polarerea chart ', function () {
        element = $compile('<canvas tc-chartjs-polararea chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('polarArea');
        expect(chartInstance.resize).toHaveBeenCalled();
      });

      it('should construct a pie chart ', function () {
        element = $compile('<canvas tc-chartjs-pie chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('pie');
        expect(chartInstance.resize).toHaveBeenCalled();
      });

      it('should construct a doughnut chart ', function () {
        element = $compile('<canvas tc-chartjs-doughnut chart-data="data" chart-options="options" width="300" height="300"></canvas>')($scope);
        $scope.$digest();
        expect(chartInstance.type).toEqual('doughnut');
        expect(chartInstance.resize).toHaveBeenCalled();
      });
    });

  });

});
