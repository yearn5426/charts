// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-datepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, ionicDatePickerProvider) {
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('striped');
    $ionicConfigProvider.platform.ios.tabs.style('striped');
    $ionicConfigProvider.tabs.style('striped');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    var dataPickerObj = {
      inputDate:new Date(),
      setLabel:'Set',
      todayLabel:'Today',
      closeLabel:'Close',
      mondayFirst:false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      showTodayButton: true,
      dateFormat: 'yyyy-MMMM-dd',
      closeOnSelect: false
    };
    ionicDatePickerProvider.configDatePicker(dataPickerObj);
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('personal-charts', {
        url: '/personal-charts',
        templateUrl: 'templates/personal-charts.html',
        controller:'PersonalChartsCtrl'
      });
      // .state('department-charts', {
      //   url: '/department-charts',
      //   views: {
      //     'department-charts': {
      //       templateUrl: 'templates/department-charts.html',
      //         controller:'DepartmentChartsCtrl'
      //     }
      //   }
      // });
      // .state('department-charts', {
      //   url: '/department-charts',
      //   templateUrl: 'templates/department-charts.html',
      //   controller:'DepartmentChartsCtrl'
      // });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/personal-charts');

  });
