CLASSCONAPP.controller('studentBookmediacontroller', function ($scope, $http, $timeout, GlobalVar, Upload, $sce) {
    var config = GlobalVar.HeaderConfig;
    var baseURL = $("base")[0].href;
    $scope.Book = [];
    $scope.Unit = [];
    $scope.UnitMain = [];
    $scope.Search = [];
    $scope.ServerPath = "";
    function QueryString(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var cursorFocus = function (elem) {
        if (elem != null)
            $("html, body").animate({ scrollTop: $(elem).offset().top }, 1200);
    }

    $(document).ready(function () {
        $('.modal').on('show.bs.modal', function (event) {
            console.log($scope.currentMedia.currentMediaUrl)
            $(this).find('iframe').attr("src", $scope.currentMedia.currentMediaUrl);
        });

        $('.modal').on('hidden.bs.modal', function (e) {
            var vid = document.getElementById("myVideo");
            vid.pause();
            $(this).find('iframe').attr("src", "");
        });

        //var $video = $('video'),
        //    $window = $(window);

        //$(window).resize(function () {
        //    var height = $window.height();
        //    $video.css('height', height);

        //    var videoWidth = $video.width(),
        //        windowWidth = $window.width(),
        //        marginLeftAdjust = (windowWidth - videoWidth) / 2;

        //    $video.css({
        //        'height': height,
        //        'marginLeft': marginLeftAdjust
        //    });
        //}).resize();
    });

    $scope.init = function () {
        if (QueryString('BookId') == undefined)
            window.location.href = baseURL + "Student/StudentBooklist";
        $http.get(baseURL + "/Student/GetvwBookFileWithKey?bookid=" + QueryString('BookId') + "&key=" + makeid())
            .then(function (response) {
                if (response != undefined && response != "") {
                    if (response.data.responsecode == '200' && response.data.data != undefined && response.data.data != "") {
                        try {
                            $scope.Book = response.data.data;
                            $scope.ServerPath = response.data.serverpath;
                        }
                        catch (err) {
                            vinotifications(err, 'danger');
                        }
                    }
                    else {
                        vinotifications(response.data.error, 'danger');
                    }
                }
                else {
                    vinotifications(response.data.error, 'danger');
                }
            }).then(
                $http.get(baseURL + "/Student/GetvwBookUnitEBook?bookid=" + QueryString('BookId') + "&key=" + makeid())
                    .then(function (response) {
                        if (response != undefined && response != "") {
                            if (response.data.responsecode == '200' && response.data.data != undefined && response.data.data != "") {
                                try {
                                    $scope.UnitMain = $scope.Unit = response.data.data;

                                }
                                catch (err) {
                                    vinotifications(err, 'danger');
                                }
                            }
                            else {
                                vinotifications(response.data.error, 'danger');
                            }
                        }
                        else {
                            vinotifications(response.data.error, 'danger');
                        }
                    }));
    };

    $scope.OnClickViewMedia = function (unitid, bookid, mediaid, medianame, mediafile) {
        try {
            //var v1 = "https://www.youtube.com/embed/98PXK1-oAwk?list=RD98PXK1-oAwk";
            
            $scope.currentMedia = [];
            $scope.currentMedia.currentMediaName = medianame;
            $scope.currentMedia.currentMediaUrl = $sce.trustAsResourceUrl($scope.ServerPath + mediafile);
            $scope.currentMedia.currentMediaUrlTest = $scope.ServerPath + mediafile;
            if (unitid == '0') {
                $scope.currentMedia.Type = '1';
                //$scope.currentMedia.currentMediaUrl = $sce.trustAsResourceUrl(v1);
            }
            else {

                //var v2 = "https://www.youtube.com/watch?v=rtrtjhf7w1U?rel=0";
                document.getElementById("ogg_src").src = $scope.ServerPath + mediafile;
                //$scope.currentMedia.currentMediaUrlTest = v1;
                //document.getElementById("ogg_src").src = v1;
                document.getElementById("myVideo").load();
                $scope.currentMedia.Type = '2';

                //var aud = document.getElementById("myVideo");
                //aud.onended = function () {
                //    var countDownDate = 3;
                //    // Update the count down every 1 second
                //    var x = setInterval(function () {

                //        // Get today's date and time
                //        var now = 1;

                //        // Find the distance between now and the count down date
                //        countDownDate = countDownDate - now;
                //        // Display the result in the element with id="demo"
                //        document.getElementById("demo").innerHTML = countDownDate;

                //        // If the count down is finished, write some text
                //        if (countDownDate < 0) {
                //            clearInterval(x);
                //             document.getElementById("ogg_src").src = v2;
                //    document.getElementById("myVideo").load();
                //        }
                //    }, 1000);

                   
                //};
            }

            $('#EbookModal').appendTo("body").modal('show');

            $scope.UpdateEBookLog = [];
            $scope.UpdateEBookLog.push({
                LogName: 'Student View Media',
                BookId: bookid,
                UnitId: unitid,
                MediaId: mediaid
            });
            var data = { input: $scope.UpdateEBookLog[0] };
            $http.post(baseURL + "/Student/PostEBookLog", data, config).then(
                function (response) {
                    try {
                        if (response != undefined && response != "") {
                            if (response.data.responsecode == 200) {
                                var Unit = _.where($scope.UnitMain, { UnitId: unitid })[0];
                                if (Unit != undefined) {
                                    var Media = _.where(Unit.EBookMediaList, { MediaId: mediaid })[0];
                                    if (Media != undefined)
                                        Media.MediaIsUse = 1;

                                    var _paq = window._paq || [];

                                    var _UserName = response.data.FullName;
                                    var _SchoolName = response.data.SchoolName;
                                    var _Email = response.data.Email;

                                    if (_UserName) {
                                        _paq.push(['setCustomVariable', 1, "Name", _UserName, "visit"]);
                                    }
                                    if (_SchoolName) {
                                        _paq.push(['setCustomVariable', 2, "School", _SchoolName, "visit"]);
                                    }
                                    if (_Email) {
                                        _paq.push(['setUserId', _Email]);
                                    }


                                    var _bookName = 'Ebook : ' + $scope.Book.BookName;
                                    var _link = 'https://act-ccn-web.aksorn.com:8081/Student/StudentBookMedia?BookId=' + $scope.Book.BookID;

                                    _paq.push(['trackPageView', _bookName, _link]);

                                    var ContentType, ContentName, ContentPiece, Target;
                                    if (unitid == '0') {
                                        ContentType = 'Ebook';
                                        ContentName = medianame;
                                        ContentPiece = $scope.Book.BookName + '|-|EBook|' + $scope.Book.BookName;
                                        Target = $scope.Book.BookName;
                                        console.log(ContentType + ',' + ContentName + ',' + ContentPiece + ',' + Target);
                                        fnMatomoLog(ContentType, ContentName, ContentPiece, Target);
                                    }
                                    else {
                                        var nameString = mediafile;
                                        var filename = nameString.split("/").pop();

                                        ContentType = 'Video';
                                        ContentName = medianame;
                                        ContentPiece = $scope.Book.BookName + '|' + Unit.Name + '|EBook|' + $scope.Book.BookName;
                                        Target = filename;
                                        console.log(ContentType + ',' + ContentName + ',' + ContentPiece + ',' + Target);
                                        fnMatomoLog(ContentType, ContentName, ContentPiece, Target);
                                    }
                                    _paq.push(['trackContentInteraction', ContentType, ContentName, ContentPiece, Target]);
                                }
                            }
                            else {
                                vinotifications(response.data.responsestatus, 'danger');
                                setTimeout(function () { $("#loading").fadeOut(); }, 500);
                            }
                        }
                    }
                    catch (err) {
                        vinotifications(err, 'danger');
                        setTimeout(function () { $("#loading").fadeOut(); }, 500);
                    }
                });
        }
        catch (err) {
            vinotifications(err, 'danger');
        }
    }

    $scope.OnClickUnitCategory = function (categoryid) {
        cursorFocus(document.getElementById('section_' + categoryid));
        //var result = _.where($scope.UnitMain, { UnitId: categoryid });
        //$scope.Unit = result;
        $scope.UnitUse = categoryid;
    };

    $scope.OnChangeTextBook = function () {
        if ($scope.Search.SearchMedia == undefined || $scope.Search.SearchMedia == "") {
            $scope.row = 0;
            $scope.Search.IsUse = "0";
            $scope.Unit = $scope.UnitMain;
            //$scope.loadMore();
        }
        else {
            $scope.Search.IsUse = "1";
            $scope.Unit = angular.copy($scope.UnitMain);
            _.each($scope.Unit, function (unt) {
                unt.EBookMediaList = _.filter(unt.EBookMediaList, function (val) {
                    if ($scope.Search.SearchMedia != undefined && $scope.Search.SearchMedia != "" && val.MediaName.toUpperCase().indexOf($scope.Search.SearchMedia.toUpperCase()) > -1)
                        return val;
                });
            });


        }
    };


});
