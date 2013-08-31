angular.module( 'app.polararea', [] )
  .controller( 'PolarareaCtrl', function ( $scope ) {
    $scope.data = [
      { value : 30, color: '#D97041' },
      { value : 90, color: '#C7604C' },
      { value : 24, color: '#21323D' },
      { value : 58, color: '#9D9B7F' },
      { value : 82, color: '#7D4F6D' },
      { value : 8, color: '#584A5E' }
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