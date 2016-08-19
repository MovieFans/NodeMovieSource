/**
 * Created by lily on 2016/8/17.
 */
var app = angular.module('myApp', []);
app.controller('movieSeatCtrl', function($scope) {
	//生成放映日期
	$scope.GetDateStr =  function(AddDayCount) {
		var x = new Array("周日", "周一", "周二","周三","周四", "周五","周六");
		var dd = new Date();
		dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
		var y = dd.getFullYear();
		var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
		var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
		var w = dd.getDay();
		return m+"."+d + " " + x[w];
	}
	$scope.dates = [$scope.GetDateStr(0)+"(今天)", $scope.GetDateStr(1)+"(明天)", $scope.GetDateStr(2)+"(后天)", $scope.GetDateStr(3), $scope.GetDateStr(4), $scope.GetDateStr(5), $scope.GetDateStr(6)];

	//地区数据
	$scope.cities = ["全部", "宝安区", "龙岗区", "南山区", "罗湖区", "福田区", "盐田区"];
});