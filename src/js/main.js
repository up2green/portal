angular.module('app', ['duParallax']).
    controller('IndexController', function($scope, parallaxHelper){
        $scope.background = parallaxHelper.createAnimator(-0.3);
    }
);