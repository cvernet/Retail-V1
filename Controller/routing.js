var retail = angular.module("retail", ["google-maps"]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/articles', {templateUrl: 'Views/Articles.html',   controller: 'ListeArticlesJSON'}).
      when('/articles/:id/description/:descr', {templateUrl: 'Views/DetailsArticles.html', controller: 'DetailArticle'}).      
      when('/search', {templateUrl: 'Views/Search.html'}).      
      when('/search/:id/description/:descr', {templateUrl: 'Views/Articles.html' ,   controller: 'Search'}).      
      when('/map', {templateUrl: 'Views/Map.html' ,   controller: 'Map'}).
      when('/map2', {templateUrl: 'Views/Map2.html' ,   controller: 'Map2'}).
      when('/barcode', {templateUrl: 'Views/BarCode.html',   controller: 'BarCode'}).      
      otherwise({templateUrl: 'Views/Accueil.html'});
}]);
