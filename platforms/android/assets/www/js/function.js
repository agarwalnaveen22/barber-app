function showLoader($ionicLoading) {
    $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
}

function hideLoader($ionicLoading) {
    $ionicLoading.hide();
}


function openCamera(destId) {
    navigator.camera.getPicture(function (imageData) {
        var image = document.getElementById(destId);
        image.src = "data:image/jpeg;base64," + imageData;
    }, onCameraFail, {
        quality: 25,
        destinationType: navigator.camera.DestinationType.DATA_URL
    });
}

function openGallery(destId) {
    navigator.camera.getPicture(function (imageData) {
        var image = document.getElementById(destId);
        image.src = "data:image/jpeg;base64," + imageData;
    }, onCameraFail, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}

function onCameraFail(err) {
    alert(JSON.stringify(err))
    showAlert("Error:" + err, alertDismissed, "Camera", "Ok");
}

function showAlert(message, alertCallback, title, buttonName) {
    navigator.notification.alert(message, alertCallback, title, buttonName)
}

function alertDismissed() {

}

function onNotification(e) {

    switch (e.event)
    {
        case 'registered':
            var responsePromise = $.ajax({
                method: 'POST',
                url: apiUrl + "registerDevice",
                data: $.param({
                    user_id: userInfo.id,
                    uuid: device.uuid,
                    registrationid: e.regid,
                    model: device.model,
                    platform: device.platform
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            break;
        case 'message':
            showAlert(e.payload.message, alertDismissed, e.payload.title, "OK");
            break;
        case 'error':
            alert(e.msg);
            break;
    }
}

function getNotifications() {
    $.ajax({
        method: 'POST',
        url: apiUrl + "getUnreadNotificationCount",
        data: $.param({
            user_id: userInfo.id
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (data) {
            data = JSON.parse(data);
            if (data.status) {
                $(".badge").text(data.data);
                $(".badge").removeClass("hide");
            } else {
                $(".badge").text("0");
                $(".badge").addClass("hide");
            }
        }
    });

}
