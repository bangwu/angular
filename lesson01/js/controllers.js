
PhoneListController = function($scope,$http){
	
	$http.get('data.json').success(function(data){
		$scope.phones=data;
	});
}

PhoneDetailController =function($scope,$routeParams){
	$scope.phoneId=$routeParams.phoneId;
}