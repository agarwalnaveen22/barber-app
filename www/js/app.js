var apiUrl = 'http://localhost/barber-web/api/';
//var apiUrl = 'http://139.162.22.238/html/saloon/api/';
var userInfo = {};
var db = '';
angular.module('barber', ['ionic', 'ui.router', 'ngMessages'])

        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.views.maxCache(0);
            $ionicConfigProvider.scrolling.jsScrolling(false);
            $ionicConfigProvider.tabs.position('top');
            //$ionicConfigProvider.views.transition('none');
            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            });

            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            });

            $stateProvider.state('forget', {
                url: '/forget',
                templateUrl: 'templates/forget.html',
                controller: 'ForgetController'
            });

            $stateProvider.state('signup', {
                url: '/signup',
                templateUrl: 'templates/signup.html',
                controller: 'SignUpController'
            });


            $stateProvider.state('my-bookings', {
                url: "/my-bookings",
                templateUrl: "templates/my-bookings.html",
                controller: 'MyBookingsController'
            });


            $stateProvider.state('bookings.bookings', {
                url: '/bookings',
                views: {
                    'bookings-bookings': {
                        templateUrl: 'templates/tab-bookings.html',
                        controller: 'BookingController'
                    }
                }
            })

            $stateProvider.state('bookings.accepted', {
                url: '/accepted',
                views: {
                    'bookings-accepted': {
                        templateUrl: 'templates/tab-accepted.html',
                        controller: 'AcceptedController'
                    }
                }
            })

            $stateProvider.state('bookings.ongoing', {
                url: '/ongoing',
                views: {
                    'bookings-ongoing': {
                        templateUrl: 'templates/tab-ongoing.html',
                        controller: 'OngoingController'
                    }
                }
            })

            $stateProvider.state('bookings.completed', {
                url: '/completed',
                views: {
                    'bookings-completed': {
                        templateUrl: 'templates/tab-completed.html',
                        controller: 'CompletedController'
                    }
                }
            })



            $stateProvider.state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashboardController'
            })

            $stateProvider.state('add', {
                url: '/add',
                templateUrl: 'templates/tab-add.html',
                controller: 'AddController'
            })

            $stateProvider.state('feeds', {
                url: '/feeds',
                abstract: true,
                templateUrl: 'templates/feeds.html',
                controller: 'FeedsController'
            })

            $stateProvider.state('feeds.myfeeds', {
                url: '/myfeeds',
                views: {
                    'feeds-myfeeds': {
                        templateUrl: 'templates/my-feeds.html',
                        controller: 'MyFeedsController'
                    }
                }
            })

            $stateProvider.state('feeds.mycommunity', {
                url: '/mycommunity',
                views: {
                    'feeds-mycommunity': {
                        templateUrl: 'templates/my-community.html',
                        controller: 'MyCommunityController'
                    }
                }
            })


            $stateProvider.state('account', {
                url: '/account',
                templateUrl: 'templates/tab-account.html'
            })

            $stateProvider.state('logout', {
                url: '/logout',
                controller: 'LogoutController'
            });

            $stateProvider.state('my-profile', {
                url: '/my-profile',
                templateUrl: 'templates/my-profile.html',
                controller: 'MyProfileController'
            });

            $stateProvider.state('edit-profile', {
                url: '/edit-profile',
                templateUrl: 'templates/edit-profile.html',
                controller: 'EditProfileController'
            });



            $stateProvider.state('recent-viewed-saloons', {
                url: '/recent-viewed-saloons',
                templateUrl: 'templates/recent-viewed-saloons.html',
                controller: 'RecentViewedSaloonsController'
            });

            $stateProvider.state('find-friends', {
                url: '/find-friends',
                templateUrl: 'templates/find-friends.html',
                controller: 'FindFriendsController'
            });

            $stateProvider.state('settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html',
                controller: 'SettingsController'
            });

            $stateProvider.state('change-password', {
                url: '/change-password',
                templateUrl: 'templates/change-password.html',
                controller: 'ChangePasswordController'
            });

            $stateProvider.state('feedback', {
                url: '/feedback',
                templateUrl: 'templates/feedback.html',
                controller: 'FeedbackController'
            });

            $stateProvider.state('static-pages', {
                url: '/static-pages/:id',
                templateUrl: 'templates/static-pages.html',
                controller: 'StaticPagesController'
            });

            $stateProvider.state('saloon-detail', {
                url: '/saloon-detail/:id',
                templateUrl: 'templates/saloon-detail.html',
                controller: 'SaloonDetailController'
            });

            $stateProvider.state('reviews', {
                url: '/reviews/:id',
                templateUrl: 'templates/reviews.html',
                controller: 'ReviewsController'
            });

            $stateProvider.state('add-review', {
                url: '/add-review/:id',
                templateUrl: 'templates/add-review.html',
                controller: 'AddReviewController'
            });

            $stateProvider.state('book-slot', {
                url: '/book-slot/:id',
                templateUrl: 'templates/book-slot.html',
                controller: 'BookSlotController'
            });

            $stateProvider.state('comments', {
                url: '/comments/:id',
                templateUrl: 'templates/comments.html',
                controller: 'CommentsController'
            });

            $stateProvider.state('social', {
                url: "/social",
                abstract: true,
                templateUrl: "templates/user-socials.html",
                controller: 'FollowersController'
            });

            $stateProvider.state('social.followers', {
                url: '/followers',
                views: {
                    'social-followers': {
                        templateUrl: 'templates/social-followers.html',
                        controller: 'FollowersController'
                    }
                }
            })

            $stateProvider.state('social.following', {
                url: '/following',
                views: {
                    'social-following': {
                        templateUrl: 'templates/social-following.html',
                        controller: 'FollowingController'
                    }
                }
            })

            $stateProvider.state('other-profile', {
                url: '/other-profile',
                templateUrl: 'templates/other-profile.html',
                controller: 'OtherProfileController'
            });

            $stateProvider.state('notifications', {
                url: '/notifications',
                templateUrl: 'templates/notifications.html',
                controller: 'NotificationsController'
            });


            $urlRouterProvider.otherwise('/')
        })

        .directive('googleplace', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, model) {
                    var options = {
                        types: [],
                    };
                    scope.gPlace = new google.maps.places.Autocomplete(element[0],
                            options);

                    google.maps.event.addListener(scope.gPlace, 'place_changed',
                            function () {
                                var place = scope.gPlace.getPlace();
                                console.log(place);
                                $("#location").val(place.formatted_address);
                                scope.$apply(function () {
                                    model.$setViewValue(element.val());
                                });
                            });
                }
            };
        })

        .controller('AppCtrl', function ($state, $scope, $http, $ionicLoading, $ionicModal, $ionicHistory, $ionicSideMenuDelegate, $ionicPopup) {
            db = window.openDatabase("Fablysh", "1.0", "Fablysh", 2 * 1024 * 1024);
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS BOOKINGS (id INTEGER PRIMARY KEY AUTOINCREMENT, bookingid INT NOT NULL)', [], function (tx, results) {
                    // not required
                }, function (err) {
                    console.log("can not create table");
                });
            });

            $scope.Range = function (end) {
                var result = [];
                for (var i = 1; i <= end; i++) {
                    result.push(i);
                }
                return result;
            };

            var bookingIds = [];
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM BOOKINGS', [], function (tx, results) {
                    var len = results.rows.length;
                    if (len > 0) {
                        for (var i = 0; i < (len); i++) {
                            bookingIds.push(results.rows.item(i).bookingid);
                        }
                        var paymentInterval = setInterval(function () {
                            var responsePromise = $http({
                                method: 'POST',
                                url: apiUrl + "getCustomerStartedBooking",
                                data: $.param({
                                    user_id: userInfo.id,
                                    id: bookingIds
                                }),
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            });

                            responsePromise.success(function (data, status, headers, config) {
                                if (data.status) {
                                    if (data.data.Appointment.status == 4 && data.data.Appointment.payment_status == 0) {
                                        var responsePromise = $http({
                                            method: 'POST',
                                            url: apiUrl + "getInvoiceDetail",
                                            data: $.param({
                                                user_id: userInfo.id,
                                                appointment_id: data.data.Appointment.id
                                            }),
                                            headers: {
                                                'Content-Type': 'application/x-www-form-urlencoded'
                                            }
                                        });

                                        responsePromise.success(function (data, status, headers, config) {
                                            if (data.status) {
                                                //clearInterval(paymentInterval);
                                                $scope.openPayment();
                                                $scope.paymentType = data.data.Invoice.payment_mode;
                                                $scope.invoice = {
                                                    id: data.data.Invoice.id,
                                                    details: data.data.Invoice.details,
                                                    amount: data.data.Invoice.amount
                                                };
                                                $scope.invoiceId = data.data.Invoice.id;
                                                $scope.description = data.data.Invoice.details;
                                                $scope.amount = data.data.Invoice.amount;
                                                $scope.merchantName = data.data.Merchant.name;
                                                $scope.paymentMode = 1;
                                                $scope.appointmentId = data.data.Appointment.id;
                                            } else {
                                                var myPopup = $ionicPopup.show({
                                                    title: 'Error',
                                                    scope: $scope,
                                                    template: data.message,
                                                    buttons: [
                                                        {
                                                            text: 'Cancel'
                                                        },
                                                        {
                                                            text: '<b>OK</b>',
                                                            type: 'button-assertive'
                                                        }
                                                    ]
                                                });
                                            }
                                        });
                                        responsePromise.error(function (data, status, headers, config) {
                                            var myPopup = $ionicPopup.show({
                                                title: 'Error',
                                                scope: $scope,
                                                template: "Invalid Request",
                                                buttons: [
                                                    {
                                                        text: 'Cancel'
                                                    },
                                                    {
                                                        text: '<b>OK</b>',
                                                        type: 'button-assertive'
                                                    }
                                                ]
                                            });
                                        });

                                    }
                                } else {
                                    console.log("Can not find data");
                                }
                            });
                            responsePromise.error(function (data, status, headers, config) {
                                console.log("Invalid Request");
                            });
                        }, 60000);
                    }
                }, function (err) {
                    console.log("error in selection");
                });
            });


            $scope.setPaymentMode = function (pval) {
                $scope.paymentMode = pval;
            }
            $scope.goPayment = function (id) {
                if ($scope.paymentMode == 2) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "updateInvoice",
                        data: $.param({
                            id: $scope.invoiceId,
                            user_id: userInfo.id,
                            payment_mode: $scope.paymentMode,
                            payment_status: 1,
                            appointment_id: $scope.appointmentId
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            //alert("cash paid")
                            var myPopup = $ionicPopup.show({
                                title: 'Success',
                                scope: $scope,
                                template: "Payment Recieved",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-positive',
                                        onTap: function () {
                                            db.transaction(function (tx) {
                                                tx.executeSql('DELETE FROM BOOKINGS WHERE bookingid=' + $scope.appointmentId, [], function (tx, results) {
                                                    $scope.closePayment();
                                                    $scope.openReview();
                                                }, function (err) {
                                                    console.log("can not create table");
                                                });
                                            });

                                        }
                                    }
                                ]
                            });
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                } else {
                    var amt = $scope.amount;
                    amt = parseFloat(amt).toFixed(2);
                    amt = amt.replace(".", "");
                    var options = {
                        description: $scope.description,
                        image: 'https://i.imgur.com/3g7nmJC.png',
                        currency: 'INR',
                        key: 'rzp_test_yjPuKHfzvSgozp',
                        amount: amt,
                        name: $scope.merchantName,
                        prefill: {
                            email: userInfo.email,
                            contact: userInfo.userDetail.phone_number,
                            name: userInfo.userDetail.name
                        },
                        theme: {
                            color: '#F37254'
                        }
                    }

                    var successCallback = function (payment_id) {
                        //alert('payment_id: ' + payment_id)
                        showLoader($ionicLoading);
                        var responsePromise = $http({
                            method: 'POST',
                            url: apiUrl + "updateInvoice",
                            data: $.param({
                                id: $scope.invoiceId,
                                user_id: userInfo.id,
                                payment_mode: $scope.paymentMode,
                                payment_status: 1,
                                transaction_id: payment_id,
                                appointment_id: $scope.appointmentId
                            }),
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        });

                        responsePromise.success(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            if (data.status) {
                                //alert("online paid")
                                var myPopup = $ionicPopup.show({
                                    title: 'Success',
                                    scope: $scope,
                                    template: "Payment Recieved",
                                    buttons: [
                                        {
                                            text: 'Cancel'
                                        },
                                        {
                                            text: '<b>OK</b>',
                                            type: 'button-positive',
                                            onTap: function () {
                                                db.transaction(function (tx) {
                                                    tx.executeSql('DELETE FROM BOOKINGS WHERE bookingid=' + $scope.appointmentId, [], function (tx, results) {
                                                        $scope.closePayment();
                                                        $scope.openReview();
                                                    }, function (err) {
                                                        console.log("can not create table");
                                                    });
                                                });
                                            }
                                        }
                                    ]
                                });
                            } else {
                                var myPopup = $ionicPopup.show({
                                    title: 'Error',
                                    scope: $scope,
                                    template: data.message,
                                    buttons: [
                                        {
                                            text: 'Cancel'
                                        },
                                        {
                                            text: '<b>OK</b>',
                                            type: 'button-assertive'
                                        }
                                    ]
                                });
                            }
                        });
                        responsePromise.error(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: "Invalid Request",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        });
                    }

                    var cancelCallback = function (error) {
                        alert(error.description + ' (Error ' + error.code + ')')
                    }

                    RazorpayCheckout.open(options, successCallback, cancelCallback)
                }

            }

            $scope.clickedReview = function (review, $event) {
                console.log($event)
                if ($($event.currentTarget).hasClass("selected")) {
                    $($event.currentTarget).removeClass("selected");
                    $("#rating").val('');
                    angular.element($('#rating')).triggerHandler('input');
                } else {
                    console.log($($event))
                    $($event.currentTarget).addClass("selected");
                    $("#rating").val(review);
                    angular.element($('#rating')).triggerHandler('input');
                }
                $("input[type='button']").each(function () {
                    if ($(this).val() != $($event.currentTarget).val()) {
                        $(this).removeClass("selected");
                    }
                });
            }
            $scope.addReview = function (changeForm) {
                if (changeForm.$valid) {
                    //alert(JSON.stringify($("#addForm").serialize()))
                    var images = [];
                    if ($("#image1").attr("src") != 'img/file-add.png') {
                        images.push($("#image1").attr("src"));
                    }
                    if ($("#image2").attr("src") != 'img/file-add.png') {
                        images.push($("#image2").attr("src"));
                    }
                    if ($("#image3").attr("src") != 'img/file-add.png') {
                        images.push($("#image3").attr("src"));
                    }
                    if ($("#image4").attr("src") != 'img/file-add.png') {
                        images.push($("#image4").attr("src"));
                    }
                    if ($("#image5").attr("src") != 'img/file-add.png') {
                        images.push($("#image5").attr("src"));
                    }
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "addReview",
                        data: $("#addForm").serialize() + "&" + $.param({images: images, user_id: userInfo.id, appointment_id: $scope.appointmentId}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            var myPopup = $ionicPopup.show({
                                title: 'Success',
                                scope: $scope,
                                template: "Review saved",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-positive',
                                        onTap: function () {
                                            $scope.closeReview();
                                        }
                                    }
                                ]
                            });
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }

            $ionicModal.fromTemplateUrl('templates/payment.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.payment = modal;

            });
            $scope.openPayment = function () {
                $scope.payment.show();
            };
            $scope.closePayment = function () {
                $scope.payment.hide();
            };

            $ionicModal.fromTemplateUrl('templates/add-review.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.review = modal;

            });
            $scope.openReview = function () {
                $scope.review.show();
            };
            $scope.closeReview = function () {
                $scope.review.hide();
            };

            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleLeft();
            };

            $scope.myGoBack = function () {
                $ionicHistory.goBack();
                /*window.plugins.nativepagetransitions.slide(
                 {"direction": "right"},
                 function (msg) {
                 //alert("success: " + msg)
                 }, // called when the animation has finished
                 function (msg) {
                 //alert("error: " + msg)
                 } // called in case you pass in weird values
                 );*/
            };

            $scope.goToPage = function (pageId, params) {
                if (params == undefined) {
                    $state.go(pageId);
                } else {
                    $state.go(pageId, {
                        id: params
                    });
                }
            };


            $scope.showCamera = function (destId) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Choose Method',
                    template: 'Please select method to choose profile picture.',
                    cancelText: 'Gallery',
                    okText: 'Camera'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        openCamera(destId);
                    } else {
                        openGallery(destId);
                    }
                });
            };

        })

        .controller('HomeController', function ($scope, $state) {

        })

        .controller('LoginController', function ($scope, $state, $http, $ionicLoading, $ionicPopup) {
            $scope.data = {
                email: '',
                password: ''
            };
            $scope.submitForm = function (loginForm) {
                if (loginForm.$valid) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "customerLogin",
                        data: $.param({
                            email: $scope.data.email,
                            password: $scope.data.password
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            userInfo = data.data.User;
                            userInfo.userDetail = data.data.UserDetail[0];
                            if (device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos") {
                                pushNotification.register(
                                        function () {
                                            console.log("success");
                                        },
                                        function () {
                                            console.log("error");
                                        },
                                        {
                                            "senderID": "89616263869",
                                            "ecb": "onNotification"
                                        });
                            } else {
                                pushNotification.register(
                                        tokenHandler,
                                        errorHandler,
                                        {
                                            "badge": "true",
                                            "sound": "true",
                                            "alert": "true",
                                            "ecb": "onNotificationAPN"
                                        });
                            }
                            $scope.goToPage('dashboard');
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('LogoutController', function ($scope, $state) {
            $state.go('home');
        })

        .controller('SignUpController', function ($scope, $state, $http, $ionicLoading, $ionicPopup) {
            $scope.data = {
                email: '',
                password: ''
            };
            $scope.submitForm = function (signupForm) {
                if (signupForm.$valid) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "customerSignup",
                        data: $.param({
                            email: $scope.data.email,
                            password: $scope.data.password
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            userInfo.id = data.data;
                            $scope.goToPage('edit-profile');
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('ForgetController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            $scope.data = {
                email: ''
            };
            $scope.submitForm = function (forgetForm) {
                if (forgetForm.$valid) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "customerForget",
                        data: $.param({
                            email: $scope.data.email
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            var myPopup = $ionicPopup.show({
                                title: 'Success',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-positive',
                                        onTap: function () {
                                            myPopup.close();
                                            $scope.goToPage('login');
                                        }
                                    }
                                ]
                            });
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('DashboardController', function ($scope, $state, $ionicModal, $ionicPopup, $ionicLoading, $http) {
            $ionicModal.fromTemplateUrl('templates/filter.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $ionicModal.fromTemplateUrl('templates/location.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.location = modal;

            });
            $scope.openFilter = function () {
                $scope.modal.show();
            };
            $scope.closeFilter = function () {
                $scope.modal.hide();
            };
            $scope.openLocation = function () {
                $scope.location.show();
            };
            $scope.closeLocation = function () {
                $scope.location.hide();
            };
            $scope.dashboardSearch = function (id) {
                $("#" + id).slideToggle();
            }
            $scope.initialize = function (event) {

                var input = event.target;
                var autocomplete = new google.maps.places.Autocomplete(input);
                autocomplete.addListener('place_changed', function () {
                    var place = autocomplete.getPlace();
// place variable will have all the information you are looking for.
                    $("#lat").val(place.geometry['location'].lat());
                    $("#lng").val(place.geometry['location'].lng());
                });
                // Get the predictions element
                var container = document.getElementsByClassName('pac-container');
                container = angular.element(container);

                // Apply css to ensure the container overlays the other elements, and
                // events occur on the element not behind it
                container.css('z-index', '5000');
                container.css('pointer-events', 'auto');

                // Disable ionic data tap
                container.attr('data-tap-disabled', 'true');

                // Leave the input field if a prediction is chosen
                container.on('click', function () {
                    input.blur();
                });
            }

            var lat = '';
            var long = '';
            $scope.searchSaloons = function () {
                lat = $("#lat").val();
                long = $("#lng").val();
                $scope.closeLocation();
                $scope.searchNearBy(lat, long);
            }

            $scope.searchNearBy = function (lat, long) {
                if (lat == '' || long == '') {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Please enter location",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                } else {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "getNearBySaloons",
                        data: $.param({
                            lat: lat,
                            lng: long,
                            user_id: userInfo.id
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            $scope.saloons = data.data;
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }

            $scope.filterSearch = function () {
                if (lat == '' || long == '') {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Please enter location",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                } else {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "getFilterSaloons",
                        data: $("#searchForm").serialize() + "&" + $.param({
                            lat: lat,
                            lng: long,
                            user_id: userInfo.id
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            $scope.closeFilter();
                            $scope.saloons = data.data;
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }

            $scope.getCurrentLocation = function () {
                showLoader($ionicLoading);
                if (navigator.geolocation) {
                    var posOptions = {timeout: 10000, enableHighAccuracy: true};
                    navigator.geolocation.getCurrentPosition(function (position) {
                        $("#lat").val(position.coords.latitude);
                        $("#lng").val(position.coords.longitude);
                        var responsePromise = $http({
                            method: 'GET',
                            url: "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true",
                        });

                        responsePromise.success(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            var address = data.results[0].formatted_address;
                            $("#location").val(address);
                        });
                        responsePromise.error(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: "Can not get place",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        });
                    }, function (error) {
                        hideLoader($ionicLoading);
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                var msg = "User denied the request for Geolocation."
                                break;
                            case error.POSITION_UNAVAILABLE:
                                var msg = "Location information is unavailable."
                                break;
                            case error.TIMEOUT:
                                var msg = "The request to get user location timed out."
                                break;
                            case error.UNKNOWN_ERROR:
                                var msg = "An unknown error occurred."
                                break;
                        }
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: msg,
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    }, posOptions);
                } else {
                    hideLoader($ionicLoading);
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Geolocation is not supported by this browser",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            }

            var posOptions = {timeout: 10000, enableHighAccuracy: true};
            showLoader($ionicLoading);
            navigator.geolocation.getCurrentPosition(function (position) {
                hideLoader($ionicLoading);
                lat = position.coords.latitude;
                long = position.coords.longitude;
                $scope.searchNearBy(lat, long);
            }, function () {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Can not get your current location, please pick your location in next screen",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive',
                            onTap: function () {
                                $scope.openLocation();
                            }
                        }
                    ]
                });
            }, posOptions);

            var cronNotification = setInterval(function () {
                getNotifications();
            }, 1000 * 60 * 5);

            $scope.$on('$destroy', function () {
                clearInterval(cronNotification);
            });

        })

        .controller('AddController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            setTimeout(function () {
                $(".pac-container").attr("data-tap-disabled", true);
            }, 3000);
            $scope.submitForm = function (addForm) {
                if (addForm.$valid) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "addParlorRequest",
                        data: $("#addForm").serialize() + "&" + $.param({
                            user_id: userInfo.id
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            var myPopup = $ionicPopup.show({
                                title: 'Success',
                                scope: $scope,
                                template: "Request has beed sent",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-positive',
                                        onTap: function () {
                                            $scope.goToPage('dashboard');
                                        }
                                    }
                                ]
                            });
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('MyProfileController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "customerProfile",
                data: $.param({
                    user_id: userInfo.id
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.userDetail = data.data;
                    if (data.data.UserDetail.profile_picture == '') {
                        $("#image").attr("src", "img/profile.jpg");
                    } else {
                        $("#image").attr("src", data.data.UserDetail.profile_picture);
                    }
                    $scope.$apply();
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        .controller('EditProfileController', function ($scope, $state, $http, $ionicPopup, $compile, $ionicLoading) {
            $scope.data = {
                name: '',
                contact: '',
                location: '',
                lat: '',
                lng: '',
                summary: ''
            };
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "customerProfile",
                data: $.param({
                    user_id: userInfo.id
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.data.name = data.data.UserDetail.name;
                    $scope.data.contact = data.data.UserDetail.phone_number;
                    $scope.data.gender = data.data.UserDetail.gender;
                    $scope.data.location = data.data.UserDetail.location;
                    $scope.data.summary = data.data.UserDetail.summary;
                    $("#lat").val(data.data.UserDetail.lat);
                    $("#lng").val(data.data.UserDetail.lng);
                    if (data.data.UserDetail.profile_picture == '') {
                        $("#image").attr("src", "img/profile.jpg");
                    } else {
                        $("#image").attr("src", data.data.UserDetail.profile_picture);
                    }

                    //$("#title").text(data.data.UserDetail.name);
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
            $scope.getCurrentLocation = function () {
                showLoader($ionicLoading);
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        $("#lat").val(position.coords.latitude);
                        $("#lng").val(position.coords.longitude);
                        var responsePromise = $http({
                            method: 'GET',
                            url: "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true",
                        });

                        responsePromise.success(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            var address = data.results[0].formatted_address;
                            $("#location").val(address);
                            angular.element($('#location')).triggerHandler('input');
                        });
                        responsePromise.error(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: "Can not get place",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        });
                    }, function (error) {
                        hideLoader($ionicLoading);
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                var msg = "User denied the request for Geolocation."
                                break;
                            case error.POSITION_UNAVAILABLE:
                                var msg = "Location information is unavailable."
                                break;
                            case error.TIMEOUT:
                                var msg = "The request to get user location timed out."
                                break;
                            case error.UNKNOWN_ERROR:
                                var msg = "An unknown error occurred."
                                break;
                        }
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: msg,
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                } else {
                    hideLoader($ionicLoading);
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Geolocation is not supported by this browser",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            }

            $scope.submitForm = function (addForm) {
                if (addForm.$valid) {
                    var image = '';
                    if ($("#image").attr("src") != 'img/profile.jpg') {
                        image = $("#image").attr("src");
                    }
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "updateCustomerProfile",
                        data: $("#addForm").serialize() + "&" + $.param({profile_picture: image, user_id: userInfo.id}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            $scope.goToPage('my-profile');
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('MyBookingsController', function ($scope, $state, $ionicModal, $ionicLoading, $http, $ionicPopup) {
            $scope.$on("$ionicView.afterLeave", function () {
                clearInterval(appointmentInterval);
            });
            $scope.getAppointments = function () {
                //showLoader($ionicLoading);
                var responsePromise = $http({
                    method: 'POST',
                    url: apiUrl + "customerBookings",
                    data: $.param({
                        user_id: userInfo.id
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                responsePromise.success(function (data, status, headers, config) {
                    //hideLoader($ionicLoading);
                    if (data.status) {
                        $scope.appointments = data.data;
                    } else {
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: data.message,
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive',
                                    onTap: function () {
                                        $scope.appointments = [];
                                    }
                                }
                            ]
                        });
                    }
                });
                responsePromise.error(function (data, status, headers, config) {
                    //hideLoader($ionicLoading);
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Invalid Request",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive',
                                onTap: function () {
                                    $scope.appointments = [];
                                }
                            }
                        ]
                    });
                });
            }

            $scope.getAppointments();

            var appointmentInterval = setInterval(function () {
                $scope.getAppointments();
            }, 60000);

            $scope.changeBookingStatus = function (id, status) {
                showLoader($ionicLoading);
                if (status == 5) {
                    var changeStatus = "canceled";
                } else {
                    var changeStatus = "";
                }
                var responsePromise = $http({
                    method: 'POST',
                    url: apiUrl + "changeMerchantBookingStatus",
                    data: $.param({
                        id: id,
                        status: status
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                responsePromise.success(function (data, status, headers, config) {
                    hideLoader($ionicLoading);
                    if (data.status) {
                        var myPopup = $ionicPopup.show({
                            title: 'Success',
                            scope: $scope,
                            template: "Appointment " + changeStatus,
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-positive',
                                    onTap: function () {
                                        $scope.getAppointments();
                                    }
                                }
                            ]
                        });

                    } else {
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: data.message,
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    }
                });
                responsePromise.error(function (data, status, headers, config) {
                    hideLoader($ionicLoading);
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Invalid Request",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                });
            }



        })

        .controller('BookingController', function ($scope, $state, $ionicLoading, $ionicPopup, $http) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "customerBookings",
                data: $.param({
                    user_id: userInfo.id,
                    status: 0
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.appointments = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });



        })

        .controller('AcceptedController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "customerBookings",
                data: $.param({
                    user_id: userInfo.id,
                    status: 1
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.appointments = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        .controller('OngoingController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "customerBookings",
                data: $.param({
                    user_id: userInfo.id,
                    status: 3
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.appointments = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        .controller('CompletedController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "customerBookings",
                data: $.param({
                    user_id: userInfo.id,
                    status: 4
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.appointments = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });

            $scope.addReview = function (aid) {
                $scope.goToPage('add-review', aid);
            }
        })

        .controller('RecentViewedSaloonsController', function ($scope, $state, $ionicLoading, $ionicPopup, $http) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "getRecentlyViewed",
                data: $.param({user_id: userInfo.id}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.saloons = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        .controller('FindFriendsController', function ($scope, $state, $http) {
            $scope.findSearch = function () {
                console.log($("#search").val())
                if ($("#search").val() != '') {
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "findFriends",
                        data: $.param({user_id: userInfo.id, name: $("#search").val()}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        if (data.status) {
                            $scope.users = data.data;
                            $scope.$apply();
                        } else {
                            $scope.users = [];
                            $scope.$apply();
                        }
                    });
                }
            }
        })

        .controller('ChangePasswordController', function ($scope, $state, $ionicPopup, $ionicLoading, $http) {
            $scope.data = {
                old_password: '',
                new_password: '',
                retype_password: ''
            };
            $scope.submitForm = function (changeForm) {
                if (changeForm.$valid) {
                    if ($scope.data.new_password != $scope.data.retype_password) {
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: 'Both passwords does not match',
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    } else {
                        showLoader($ionicLoading);
                        var responsePromise = $http({
                            method: 'POST',
                            url: apiUrl + "changePassword",
                            data: $("#changeForm").serialize() + "&" + $.param({user_id: userInfo.id}),
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        });

                        responsePromise.success(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            if (data.status) {
                                var myPopup = $ionicPopup.show({
                                    title: 'Success',
                                    scope: $scope,
                                    template: "Password has been changed",
                                    buttons: [
                                        {
                                            text: 'Cancel'
                                        },
                                        {
                                            text: '<b>OK</b>',
                                            type: 'button-positive'
                                        }
                                    ]
                                });
                            } else {
                                var myPopup = $ionicPopup.show({
                                    title: 'Error',
                                    scope: $scope,
                                    template: data.message,
                                    buttons: [
                                        {
                                            text: 'Cancel'
                                        },
                                        {
                                            text: '<b>OK</b>',
                                            type: 'button-assertive'
                                        }
                                    ]
                                });
                            }
                        });
                        responsePromise.error(function (data, status, headers, config) {
                            hideLoader($ionicLoading);
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: "Invalid Request",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        });
                    }
                }
            }
        })

        .controller('FeedbackController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            $scope.submitForm = function (changeForm) {
                if (changeForm.$valid) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "saveFeedback",
                        data: $("#feedbackForm").serialize() + "&" + $.param({user_id: userInfo.id}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: "Feedback sent",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-positive',
                                        onTap: function () {
                                            $scope.goToPage('settings');
                                        }
                                    }
                                ]
                            });
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }

        })

        .controller('StaticPagesController', function ($scope, $state, $stateParams, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "staticPages",
                data: $.param({id: $stateParams.id}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.pageDetail = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: 'Page detail can not found',
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: 'Some error occured',
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        .controller('SaloonDetailController', function ($scope, $state, $stateParams, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "getSaloonDetail",
                data: $.param({user_id: userInfo.id, id: $stateParams.id}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.saloon = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });

            $scope.call = function (contact) {
                phonedialer.dial(
                        contact,
                        function (err) {
                            if (err == "empty")
                                alert("Unknown phone number");
                            else
                                alert("Dialer Error:" + err);
                        },
                        function (success) {
                            //alert('Dialing succeeded');
                        }
                );
            }


        })

        .controller('ReviewsController', function ($scope, $state, $stateParams, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "merchantReviews",
                data: $.param({user_id: $stateParams.id}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.reviews = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });

        })

        .controller('AddReviewController', function ($scope, $state, $stateParams, $ionicLoading, $http, $ionicPopup) {
            $scope.clickedReview = function (review, $event) {
                console.log($event)
                if ($($event.currentTarget).hasClass("selected")) {
                    $($event.currentTarget).removeClass("selected");
                    $("#rating").val('');
                    angular.element($('#rating')).triggerHandler('input');
                } else {
                    console.log($($event))
                    $($event.currentTarget).addClass("selected");
                    $("#rating").val(review);
                    angular.element($('#rating')).triggerHandler('input');
                }
                $("input[type='button']").each(function () {
                    if ($(this).val() != $($event.currentTarget).val()) {
                        $(this).removeClass("selected");
                    }
                });
            }
            $scope.submitForm = function (changeForm) {
                if (changeForm.$valid) {
                    //alert(JSON.stringify($("#addForm").serialize()))
                    var images = [];
                    if ($("#image1").attr("src") != 'img/file-add.png') {
                        images.push($("#image1").attr("src"));
                    }
                    if ($("#image2").attr("src") != 'img/file-add.png') {
                        images.push($("#image2").attr("src"));
                    }
                    if ($("#image3").attr("src") != 'img/file-add.png') {
                        images.push($("#image3").attr("src"));
                    }
                    if ($("#image4").attr("src") != 'img/file-add.png') {
                        images.push($("#image4").attr("src"));
                    }
                    if ($("#image5").attr("src") != 'img/file-add.png') {
                        images.push($("#image5").attr("src"));
                    }
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "addReview",
                        data: $("#addForm").serialize() + "&" + $.param({images: images, user_id: userInfo.id, appointment_id: $stateParams.id}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            var myPopup = $ionicPopup.show({
                                title: 'Success',
                                scope: $scope,
                                template: "Review saved",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-positive',
                                        onTap: function () {
                                            $scope.goToPage('dashboard');
                                        }
                                    }
                                ]
                            });
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('BookSlotController', function ($scope, $state, $stateParams, $ionicLoading, $http, $ionicPopup) {
            $scope.submitForm = function (bookForm) {
                if (bookForm.$valid) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "bookSlot",
                        data: $("#boobkForm").serialize() + "&" + $.param({user_id: userInfo.id, merchant_id: $stateParams.id}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            var myPopup = $ionicPopup.show({
                                title: 'Success',
                                scope: $scope,
                                template: "Slot booked",
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-positive',
                                        onTap: function () {
                                            bookingId = data.data;
                                            db.transaction(function (tx) {
                                                tx.executeSql('INSERT INTO BOOKINGS (bookingid) VALUES(' + parseInt(data.data) + ')', [], function (tx, results) {
                                                    $scope.goToPage('dashboard');
                                                    $scope.$apply();
                                                }, function (err) {
                                                    alert("error in insertion "+JSON.stringify(err));
                                                });
                                            });
                                        }
                                    }
                                ]
                            });
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('FeedsController', function ($scope, $state, $ionicLoading, $ionicPopup, $http) {
            $scope.makeLike = function (id) {
                showLoader($ionicLoading);
                var responsePromise = $http({
                    method: 'POST',
                    url: apiUrl + "makeReviewLike",
                    data: $.param({user_id: userInfo.id, review_id: id}),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                responsePromise.success(function (data, status, headers, config) {
                    hideLoader($ionicLoading);
                    if (data.status) {
                        $("#reviewLike").text(data.data);
                    } else {
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: data.message,
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    }
                });
                responsePromise.error(function (data, status, headers, config) {
                    hideLoader($ionicLoading);
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Invalid Request",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                });
            }

            $scope.makeShare = function (id) {
                showLoader($ionicLoading);
                var responsePromise = $http({
                    method: 'POST',
                    url: apiUrl + "getReviewDetail",
                    data: $.param({user_id: userInfo.id, id: id}),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                responsePromise.success(function (data, status, headers, config) {
                    hideLoader($ionicLoading);
                    if (data.status) {
                        var images = [];
                        $.each(data.data.UserImage, function (index, value) {
                            images.push(value.image);
                        });
                        var options = {
                            message: data.data.Review.review, // not supported on some apps (Facebook, Instagram)
                            subject: data.data.Merchant.name, // fi. for email
                            files: images, // an array of filenames either locally or remotely
                            //url: 'http://www.fablysh.com',
                            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
                        }
                        window.plugins.socialsharing.shareWithOptions(options, function (result) {
                            showLoader($ionicLoading);
                            var responsePromise = $http({
                                method: 'POST',
                                url: apiUrl + "makeReviewShare",
                                data: $.param({user_id: userInfo.id, review_id: id}),
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            });

                            responsePromise.success(function (data, status, headers, config) {
                                hideLoader($ionicLoading);
                                if (data.status) {
                                    $("#reviewShare").text(data.data);
                                } else {
                                    var myPopup = $ionicPopup.show({
                                        title: 'Error',
                                        scope: $scope,
                                        template: data.message,
                                        buttons: [
                                            {
                                                text: 'Cancel'
                                            },
                                            {
                                                text: '<b>OK</b>',
                                                type: 'button-assertive'
                                            }
                                        ]
                                    });
                                }
                            });
                            responsePromise.error(function (data, status, headers, config) {
                                hideLoader($ionicLoading);
                                var myPopup = $ionicPopup.show({
                                    title: 'Error',
                                    scope: $scope,
                                    template: "Invalid Request",
                                    buttons: [
                                        {
                                            text: 'Cancel'
                                        },
                                        {
                                            text: '<b>OK</b>',
                                            type: 'button-assertive'
                                        }
                                    ]
                                });
                            });
                        }, function (msg) {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: "Sharing failed with message: " + msg,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        });
                    } else {
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: data.message,
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    }
                });
                responsePromise.error(function (data, status, headers, config) {
                    hideLoader($ionicLoading);
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: "Invalid Request",
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                });
            }
        })

        .controller('MyFeedsController', function ($scope, $state, $ionicLoading, $ionicPopup, $http, $ionicModal) {

            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "getMyAllReviews",
                data: $.param({user_id: userInfo.id}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.reviews = data.data;
                    $scope.Math = Math;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        .controller('MyCommunityController', function ($scope, $state, $ionicLoading, $ionicPopup, $http) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "getAllCommunityReviews",
                data: $.param({user_id: userInfo.id}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.reviews = data.data;
                    $scope.Math = Math;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        .controller('CommentsController', function ($scope, $state, $ionicLoading, $http, $ionicPopup, $stateParams) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "getAllComments",
                data: $.param({user_id: userInfo.id, id: $stateParams.id}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.comments = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });

            $scope.submitForm = function (commentForm) {
                if (commentForm.$valid) {
                    showLoader($ionicLoading);
                    var responsePromise = $http({
                        method: 'POST',
                        url: apiUrl + "makeReviewComment",
                        data: $("#commentForm").serialize() + "&" + $.param({user_id: userInfo.id, review_id: $stateParams.id}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    responsePromise.success(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        if (data.status) {
                            $scope.goToPage("feeds.myfeeds");
                        } else {
                            var myPopup = $ionicPopup.show({
                                title: 'Error',
                                scope: $scope,
                                template: data.message,
                                buttons: [
                                    {
                                        text: 'Cancel'
                                    },
                                    {
                                        text: '<b>OK</b>',
                                        type: 'button-assertive'
                                    }
                                ]
                            });
                        }
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        hideLoader($ionicLoading);
                        var myPopup = $ionicPopup.show({
                            title: 'Error',
                            scope: $scope,
                            template: "Invalid Request",
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive'
                                }
                            ]
                        });
                    });
                }
            }
        })

        .controller('FollowersController', function ($scope, $state) {

        })

        .controller('FollowingController', function ($scope, $state) {

        })

        .controller('OtherProfileController', function ($scope, $state) {

        })

        .controller('SettingsController', function ($scope, $state, $ionicLoading, $http, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "staticPages",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.staticPages = data.data;
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
            });

            $scope.goToStaticPage = function (id) {
                $state.go('static-pages', {
                    'id': id
                });
            }
        })

        .controller('NotificationsController', function ($scope, $state, $http, $ionicLoading, $ionicPopup) {
            showLoader($ionicLoading);
            var responsePromise = $http({
                method: 'POST',
                url: apiUrl + "getAllNotifications",
                data: $.param({
                    user_id: userInfo.id
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            responsePromise.success(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                if (data.status) {
                    $scope.notifications = data.data;
                } else {
                    var myPopup = $ionicPopup.show({
                        title: 'Error',
                        scope: $scope,
                        template: data.message,
                        buttons: [
                            {
                                text: 'Cancel'
                            },
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive'
                            }
                        ]
                    });
                }
            });
            responsePromise.error(function (data, status, headers, config) {
                hideLoader($ionicLoading);
                var myPopup = $ionicPopup.show({
                    title: 'Error',
                    scope: $scope,
                    template: "Invalid Request",
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: '<b>OK</b>',
                            type: 'button-assertive'
                        }
                    ]
                });
            });
        })

        