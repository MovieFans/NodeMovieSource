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

	//监听：若收到change，把值广播出去
	$scope.$on("change",function (event, msg) {
		$scope.$broadcast("changeFromBody", msg);
	});
	$scope.choose = function(index){
		$scope.$broadcast('change',index);
	}
});
app.controller('dialogCtrl', function($scope) {
	$scope.dialgEvalutaions = ["很差", "较差", "还行", "推荐", "力荐"];
	$scope.dialgEvalutaion = "";
	$scope.dialgAlertWindow = false;
	$scope.dialgIfWant = false;

	//监听父controller的广播，得到changeFromBody广播时取$scope.value
	$scope.$on("changeFromBody",function (event, msg) {
		$scope.value = msg;
		console.log($scope.value);
	});

	$scope.dialgOver = function( index ){
		$scope.dialgEvalutaion = $scope.dialgEvalutaions[index];
		$("#star_alert").find("a:lt("+(index+1)+") img").attr("src","/img/star_onmouseover.png");
	}

	$scope.dialgOut = function(index){
		$scope.dialgEvalutaion = $scope.dialgEvalutaions[index];;
		$("#star_alert").find("a:lt("+(index+1)+") img").attr("src","/img/star_onmouseover.png");
	}

});
