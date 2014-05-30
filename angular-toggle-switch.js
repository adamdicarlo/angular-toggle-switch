angular.module('toggle-switch', []).directive('toggleSwitch', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      model: '=',
      disabled: '=',
      onLabel: '@',
      offLabel: '@',
      knobLabel: '@'
    },
    template: '<div class="switch" ng-click="toggle()" ng-class="{ \'disabled\': disabled, \'switch-off\': !model, \'switch-on\': model }"><div class="switch-animate"><span class="switch-left" ng-bind="onLabel"></span><span class="knob" ng-bind="knobLabel"></span><span class="switch-right" ng-bind="offLabel"></span></div></div>',
    controller: ['$scope', function($scope) {
      $scope.toggle = function toggle() {
        if(!$scope.disabled) {
          $scope.model = !$scope.model;
        }
      };
    }],
    compile: function(element, attrs) {
      if (angular.isUndefined(attrs.onLabel)) { attrs.onLabel = 'On'; }
      if (angular.isUndefined(attrs.offLabel)) { attrs.offLabel = 'Off'; }
      if (angular.isUndefined(attrs.knobLabel)) { attrs.knobLabel = '\u00a0'; }
      if (angular.isUndefined(attrs.disabled)) { attrs.disabled = false; }
    },
  };
});
