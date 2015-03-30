angular.module('starter', ['ionic','starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'ContentController'
  })

  .state('app.home', {
   url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
  })

  .state('app.actionSheet', {
   url: "/actionSheet",
      views: {
        'menuContent': {
          templateUrl: "templates/actionSheet.html",
          controller: 'ActionSheetController'
        }
      }
  })
   .state('app.camera', {
   url: "/camera",
      views: {
        'menuContent': {
          templateUrl: "templates/camera.html",
          controller: 'CameraController'
        }
      }
  })

   .state('app.barcode', {
   url: "/barcode",
      views: {
        'menuContent': {
          templateUrl: "templates/barCode.html",
          controller: 'BarCodeController'
        }
      }
  })
  .state('app.network', {
   url: "/network",
      views: {
        'menuContent': {
          templateUrl: "templates/network.html",
          controller: 'NetworkController'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
