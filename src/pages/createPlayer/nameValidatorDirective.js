(function(){
    angular.module('teamManager').directive('nameValidator', function () {
        return {
            restrict: 'A',
            require : 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$validators.name = function (name) {
                    return name && name[0] === name[0].toUpperCase();
                }
            }
        };
    });
})();