describe('tc-chartjs directive', function() {
  'use strict';
  var $compile, $scope, element;

  beforeEach(module('tc.chartjs'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
  }));

  it('tc-chartjs directive should call Chart.js when compiled', function () {
    spyOn(window, 'Chart');
    element = $compile('<canvas tc-chartjs width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });

  it('tc-chartjs-line directive should call Chart.js when compiled', function () {
    spyOn(window, 'Chart');
    element = $compile('<canvas tc-chartjs-line width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });

  it('tc-chartjs-bar directive should call Chart.js when compiled', function () {
    spyOn(window, 'Chart');
    element = $compile('<canvas tc-chartjs-bar width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });

  it('tc-chartjs-radar directive should call Chart.js when compiled', function () {
    spyOn(window, 'Chart');
    element = $compile('<canvas tc-chartjs-radar width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
  it('tc-chartjs-polararea directive should call Chart.js when compiled', function () {
    spyOn(window, 'Chart');
    element = $compile('<canvas tc-chartjs-polararea width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
  it('tc-chartjs-pie directive should call Chart.js when compiled', function () {
    spyOn(window, 'Chart');
    element = $compile('<canvas tc-chartjs-pie width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
  it('tc-chartjs-doughnut directive should call Chart.js when compiled', function () {
    spyOn(window, 'Chart');
    element = $compile('<canvas tc-chartjs-doughnut width="300" height="300"></canvas>')($scope);
    $scope.$digest();
    expect(Chart).toHaveBeenCalled();
  });
});