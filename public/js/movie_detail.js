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
		$("#stars").find("a:lt("+(index+1)+") img").attr("src","/img/star_onmouseover.png");
	}

	$scope.out = function(){
		$scope.Evalutaion = "";
		$("#stars a img").attr("src","/img/star_hollow_hover.png");
	}

	//监听：若收到change，把值广播出去
	$scope.$on("change",function (event, msg) {
		$scope.$broadcast("changeFromBody", msg);
		$scope.$broadcast("clickFromBody", msg);
	});
	$scope.choose = function(index){
		$scope.$broadcast('change',index);
		$scope.alertWindow = true;
	}
	$scope.close = function(){
		$scope.alertWindow = false;
	}
});

app.controller('dialogCtrl', function($scope) {
	$scope.dialgEvalutaions = ["很差", "较差", "还行", "推荐", "力荐"];
	$scope.dialgEvalutaion = "";
	$scope.dialgAlertWindow = false;
	$scope.dialgStretch = true;
	$scope.mytagbtnitems = [{"name":"搞笑","isgract":true}];
	$scope.tagbtnitems = [
		{"name":"香港","isgract":true},
		{"name":"惊险","isgract":true},
		{"name":"心理","isgract":true},
		{"name":"剧情","isgract":true},
		{"name":"动作","isgract":true},
		{"name":"犯罪","isgract":true},
		{"name":"2016","isgract":true},
		{"name":"悬疑","isgract":true},
		{"name":"电影","isgract":true},
		{"name":"爱情","isgract":true}];
	$scope.tagInputValue = "";
	$scope.isgreyinput = false;
	$scope.thisusername = "liy" + Math.floor(Math.random() * 1e6);

	//监听父controller的广播，得到changeFromBody广播时取$scope.value
	$scope.$on("changeFromBody",function (event, msg) {
		$scope.value = msg;
		//console.log($scope.value);
	});
	$scope.$on("clickFromBody",function (event, msg) {
		$scope.dialgEvalutaion = $scope.dialgEvalutaions[msg];
		$("#star_alert").find("a:lt(5) img").attr("src","/img/star_hollow_hover.png");
		$("#star_alert").find("a:lt("+(msg+1)+") img").attr("src","/img/star_onmouseover.png");
	});

	$scope.dialgOver = function( index ){
		$scope.dialgEvalutaion = $scope.dialgEvalutaions[index];
		$("#star_alert").find("a:lt(5) img").attr("src","/img/star_hollow_hover.png");
		$("#star_alert").find("a:lt("+(index+1)+") img").attr("src","/img/star_onmouseover.png");
	}

	$scope.dialgOut = function(){
		$scope.dialgEvalutaion = $scope.dialgEvalutaions[$scope.value];
		$("#star_alert").find("a:lt(5) img").attr("src","/img/star_hollow_hover.png");
		$("#star_alert").find("a:lt("+($scope.value+1)+") img").attr("src","/img/star_onmouseover.png");
	}

	$scope.ifStretch = function(){
		$scope.dialgStretch = !$scope.dialgStretch;
		if($scope.dialgStretch){
			$("#overlay").height(386);
		}else{
			$("#overlay").height(158);
		}
	}

	$scope.addtag = function(tagtype,index){
		var thistabs;
		if(tagtype == "populartag"){
			thistabs = $scope.tagbtnitems;

		}else if(tagtype == "mytag"){
			thistabs = $scope.mytagbtnitems;
		}
		if(thistabs[index].isgract){
			$scope.tagInputValue += thistabs[index].name +" ";
			$('.inp-tags').val("").focus().val($scope.tagInputValue);
		}else{
			$scope.tagInputValue = $scope.tagInputValue.replace(thistabs[index].name +" ","");
			$('.inp-tags').val("").focus().val($scope.tagInputValue);
		}
		thistabs[index].isgract = !thistabs[index].isgract;
	}

	$scope.setPrivate = function(){
		if(!$scope.isgreyinput){
			$("#share-shuo").click();
			$("#share-shuo").attr("disabled",!$scope.isgreyinput);
		}else{
			$("#share-shuo").attr("disabled",!$scope.isgreyinput);
			$("#share-shuo").click();
		}
		$scope.isgreyinput = !$scope.isgreyinput;
	}

});
