WEACCTAPP.factory('GlobalVar', ['$http', function ($http) {
    var GlobalVar = {};

    GlobalVar.HeaderConfig = { headers: { "Content-Type": "application/json; charset=utf-8", "dataType": "json" } };

    GlobalVar.waitForRenderAndDoSomething = function () {
        if ($http != undefined && $http.pendingRequests != undefined && $http.pendingRequests.length > 0) {
            setTimeout(function () { GlobalVar.waitForRenderAndDoSomething(); }, 500);
        } else {
            setTimeout(function () { $(".page-loading").fadeOut(); }, 2000);
        }
    }
    return GlobalVar;
}]);

WEACCTAPP.directive("decimalOnly", function () {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function (scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) return;

            ngModelCtrl.$formatters.unshift(function (a) {
                return AFormatNumber(ngModelCtrl.$modelValue, 2);
            });

            element.on('keydown', function (event) {
                if (event.which == 64 || event.which == 16)
                    return false;
                if ([8, 13, 27, 37, 38, 39, 40, 110].indexOf(event.which) > -1)
                    return true;
                else if (event.which >= 48 && event.which <= 57 && ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(event.key) > -1)
                    return true;
                else if (event.which >= 96 && event.which <= 105)
                    return true;
                else if (event.which == 9)
                    return true;
                else if ([46, 110, 190].indexOf(event.which) > -1)
                    return true;
                else {
                    event.preventDefault();
                    return false;
                }
            }).on('blur', function (event) {
                
                var myval = element.val();
                
                myval = AFormatNumber(myval, 2);

                element.val(myval); scope.$apply();


            });
        }
    };
});