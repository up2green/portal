angular
    .module('app', ['duParallax'])
    .controller('IndexController', ['$scope', 'parallaxHelper', function($scope, parallaxHelper){
        $scope.background = function(elementPosition) {
            var factor = -0.4;
            var pos = Math.min(Math.max(elementPosition.elemY*factor, 0), 255);
            var bg = 255-pos;
            return {
                backgroundPosition: pos + 'px ' + pos + 'px'
            };
        }

        $scope.fadeOut = function(elementPosition) {
            var factor = -0.4;
            var pos = Math.min(Math.max(elementPosition.elemY*factor, 0), 200);

            return 1-(pos/200);
        };

        $scope.logo = parallaxHelper.createAnimator(-0.5);
        $scope.sectionImageOdd = parallaxHelper.createAnimator(0.5, null, 0, -100);
        $scope.sectionImageEven = parallaxHelper.createAnimator(-0.5, 0, null, -400);
    }]);