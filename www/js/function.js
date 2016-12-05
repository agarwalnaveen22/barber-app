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
