// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])
    .run(function($ionicPlatform,$rootScope,$ionicModal,$state,$ionicLoading) {
        $rootScope.$state = $state;
        $rootScope.go=function(name){
            $state.go(name)
        }
        $rootScope.$on('loading:show', function() {
            $ionicLoading.show({template: '请求中...'})
        })

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide()
        })
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
            $ionicPlatform.registerBackButtonAction(function (event) {
                window.history.back();
                event.preventDefault();
            }, 100);
        });

        $rootScope.back=function(){
            window.history.back();
        }
        $rootScope.TEST=TEST
        document.addEventListener("resume", function(){

        }, false);

    })

    .config(function($stateProvider, $urlRouterProvider,$httpProvider,$injector) {
        //$httpProvider.defaults.timeout = 5000;
        $httpProvider.interceptors.push(function ($q, $rootScope, $injector) {
            return {
                request: function (config) {
                    config.timeout = 5000;
                    $rootScope.$broadcast('loading:show')
                    config.headers.token = window.localStorage.token
                    config.headers.uid = window.localStorage.uid
                    //config.defaults.timeout=5000
                    return config
                },
                response: function (response) {
                    $rootScope.$broadcast('loading:hide')
                    var s = JSON.stringify((response))
                    if (s.indexOf('loginstatuserrorerror') > 0) {
                        toast('登录过期')
                        $injector.get('$state').transitionTo('login');
                        //$state.go('login')
                        return false;
                    }
                    return response
                },
                responseError: function (rejection) {
                    //toast('err')
                    $rootScope.$broadcast('loading:hide')
                    return $q.reject(rejection);
                }
            }
        });
        initRoute($urlRouterProvider,$stateProvider)
    })

    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(1);
        $ionicConfigProvider.tabs.position('bottom')
    })
