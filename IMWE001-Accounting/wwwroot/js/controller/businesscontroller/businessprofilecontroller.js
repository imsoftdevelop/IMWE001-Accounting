WEACCTAPP.controller('businessprofilecontroller', function ($scope, $http, $timeout, GlobalVar) {
    var config = GlobalVar.HeaderConfig;
    var baseURL = $("base")[0].href;

    $scope.BusinessProfile = [];

    function QueryString(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    $scope.init = function () {
        try {
            $http.get(baseURL + "Setting/GetBusinessProfile?key=" + makeid())
                .then(function (response) {
                    if (response != undefined && response != "") {
                        if (response.data.responsecode == '200' && response.data.responsedata != undefined && response.data.responsedata != "") {
                            $scope.BusinessProfile = response.data.responsedata;
                        }
                        else if (response.data.responsecode == '400') {
                            showErrorToast(response.data.errormessage);
                        }
                    }
                    else {
                        showErrorToast(response.data.errormessage);
                    }
                });
        }
        catch (err) {
            showErrorToast(err);
        }
    };
});
