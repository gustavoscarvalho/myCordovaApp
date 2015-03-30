angular.module('starter.controllers', [])

.controller('ContentController', ['$scope','$ionicSideMenuDelegate',function($scope,$ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}])

.controller('HomeCtrl', ['$cordovaActionSheet',function($cordovaActionSheet) { }])
.controller('ActionSheetController', ['$cordovaActionSheet',function($cordovaActionSheet) {

  var options = {
    title: 'Aqui é a famosa pergunta?',
    buttonLabels: ['Opção 1', 'Opção 2', 'Opção 3'],
    addCancelButtonWithLabel: 'Cancel',
    androidEnableCancelButton : true,
    winphoneEnableCancelButton : true,
    addDestructiveButtonWithLabel : 'Delete it'
  };


  document.addEventListener("deviceready", function () {

    $cordovaActionSheet.show(options)
      .then(function(btnIndex) {
        var index = btnIndex;
      });
  }, false);
}])

.controller('CameraController', ['$cordovaCamera',function($cordovaCamera) {
     document.addEventListener("deviceready", function () {

        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
        }, function(err) {
          // error
        });
  }, false);
}])


.controller('BarCodeController', ['$scope', '$cordovaBarcodeScanner',function($scope, $cordovaBarcodeScanner) {
    document.addEventListener("deviceready", function () {

        $cordovaBarcodeScanner
          .scan()
          .then(function(barcodeData) {
            console.log(barcodeData);
            }, function(error) {
            // An error occurred
          });

    }, false);
}])


.controller('BarCodeController', ['$scope', '$cordovaBarcodeScanner',function($scope, $cordovaBarcodeScanner) {
    document.addEventListener("deviceready", function () {

        $cordovaBarcodeScanner
          .scan()
          .then(function(barcodeData) {
            console.log(barcodeData);
            }, function(error) {
            // An error occurred
          });

    }, false);
}])

.controller('NetworkController', function($rootScope, $cordovaNetwork) {

  document.addEventListener("deviceready", function () {

    var type = $cordovaNetwork.getNetwork()

    var isOnline = $cordovaNetwork.isOnline()

    var isOffline = $cordovaNetwork.isOffline()


    console.log("Online: " + isOnline);

    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
      console.log("Online State: " + onlineState);
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
        console.log("Offline State: " + offlineState);
    })

  }, false);
})

.directive("menuItem", function() {
  return {
    restrict : "E",
    templateUrl : "templates/diretivas/menuItem.html"
  }
});
