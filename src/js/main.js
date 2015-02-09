angular.module('app', ['duParallax']).
    controller('IndexController', function($scope, parallaxHelper){
        $scope.background = function(elementPosition) {
            var factor = -0.4;
            var pos = Math.min(Math.max(elementPosition.elemY*factor, 0), 255);
            var bg = 255-pos;
            return {
                backgroundPosition: pos + 'px ' + pos + 'px',
                color: 'rgb(' + bg + ', ' + bg + ', ' + bg + ')'
            };
        }

        $scope.logo = parallaxHelper.createAnimator(-0.5);
        $scope.sectionImageOdd = parallaxHelper.createAnimator(0.5, null, 0, -100);
        $scope.sectionImageEven = parallaxHelper.createAnimator(-0.5, 0, null, -400);
    }
);