/**
 * Created by lily on 2016/8/2.
 */
var app = angular.module('myApp', []);
app.controller('evalutaionCtrl', function($scope) {
	$scope.Evalutaions = ["很差", "较差", "还行", "推荐", "力荐"];
	$scope.Evalutaion = "";
	$scope.alertWindow = false;
	$scope.ifWant = false;
	$scope.over = function( index ){
		$scope.Evalutaion = $scope.Evalutaions[index];
		$("#star").find("a:lt("+(index+1)+") img").attr("src","/img/star_onmouseover.png");
	}

	$scope.out = function(){
		$scope.Evalutaion = "";
		$("#star a img").attr("src","/img/star_hollow_hover.png");
	}

	$scope.choose = function(index){
		alert(index);
	}
});
