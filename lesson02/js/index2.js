var test=angular.module("test",[])
test.controller("MyController",["$scope",function($scope){
	$scope.clock={
		now: new Date()
	};
	
	var update_clock=function(){
		$scope.clock.now = new Date();
	}
	
	setInterval(function(){
		$scope.$apply(update_clock);
	},1000);
}]);
