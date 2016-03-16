var App;
(function (App) {
    var AppConfig = (function () {
        function AppConfig($stateProvider, $urlRouterProvider) {
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            console.log('i m in appconfig.ts');
            $stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view class=\"container-fluid slide\"></div>",
            })
                .state("root.home", {
                url: "/",
                views: {
                    "": {
                        template: "<h1>Hello.</h1>"
                    }
                }
            });
        }
        AppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        return AppConfig;
    })();
    App.AppConfig = AppConfig;
    angular.module("app", ["ngResource", "ui.router"]);
    angular.module("app").config(AppConfig);
})(App || (App = {}));
//# sourceMappingURL=App.Config.js.map