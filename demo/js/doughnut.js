angular.module( 'app.doughnut', [] )
  .controller( 'DoughnutCtrl', function ( $scope ) {
    $scope.data = [
      {
        value: 50,
        color:"#F7464A"
      },
      {
        value : 90,
        color : "#E2EAE9"
      },
      {
        value : 75,
        color : "#D4CCC5"
      },
      {
        value : 30,
        color : "#949FB1"
      }
    ];
    $scope.options =  {
      segmentShowStroke : true,
      segmentStrokeColor : "#fff",
      segmentStrokeWidth : 24,
      percentageInnerCutout : 50,
      animation : true,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      animateScale : false,
      onAnimationComplete : null
    };
  });