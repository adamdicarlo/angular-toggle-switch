angular.module('toggle-switch', ['ng']).directive('toggleSwitch', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      model: '=',
      disabled: '@',
      onLabel: '@',
      offLabel: '@',
      knobLabel: '@'
    },
    template: '<div class="switch" ng-click="toggle()" ng-class="{ \'disabled\': disabled }"><div ng-class="{\'switch-off\': !model, \'switch-on\': model }"><span class="switch-left" ng-bind="onLabel">On</span><span class="knob" ng-bind="knobLabel">&nbsp;</span><span class="switch-right" ng-bind="offLabel">Off</span></div></div>',
    link: function ($scope, element, attrs) {
      attrs.$observe('onLabel', function(val) {
        $scope.onLabel = angular.isDefined(val) ? val : 'On';
      });

      attrs.$observe('offLabel', function(val) {
        $scope.offLabel = angular.isDefined(val) ? val : 'Off';
      });

      attrs.$observe('knobLabel', function(val) {
        $scope.knobLabel = angular.isDefined(val) ? val : '\u00A0';
      });
      attrs.$observe('disabled', function(disabled) {
         if(disabled && $scope.model) {
             $scope.toggle();
         }
      });
      $scope.$watch('enabled', function(enabled) {
          if(!enabled && $scope.editable && $scope.model) {
             $scope.toggle();
          }
      });
      $scope.toggle = function toggle() {
          if(!$scope.disabled) {
              element.children().addClass('switch-animate');
              $scope.model = !$scope.model;
          } else {
              $scope.model = false;
          }
      };
    }
  };
});
