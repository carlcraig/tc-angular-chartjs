angular.module( 'app.pie', [] )
  .controller( 'PieCtrl', function ( $scope ) {
    $scope.data = [
      { value: 30, color:'#F38630' },
      { value : 50, color : '#E0E4CC' },
      { value : 100, color : '#69D2E7' }
    ];
    $scope.options =  {
      segmentShowStroke : true,
      segmentStrokeColor : '#fff',
      segmentStrokeWidth : 24,
      percentageInnerCutout : 50,
      animation : true,
      animationSteps : 100,
      animationEasing : 'easeOutBounce',
      animateRotate : true,
      animateScale : false,
      onAnimationComplete : null
    };
  });