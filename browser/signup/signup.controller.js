'use strict';

app.controller('SignupCtrl', function ($scope, AuthFactory, $state) {
	// Bring $state to scope to disable navbar
	$scope.state = $state;

	var defaultBg = "http://www.homeanddecor.com.sg/sites/default/files/imagecache/large/prof/2013/11/17323-hdb.jpg"
	$scope.bg = defaultBg;

	$scope.signup = function () {
		var splitName = $scope.name.split(' ');
		for (var i=0; i < splitName.length; i++) {
			splitName[i] = 
				splitName[i].charAt(0).toUpperCase() +
				splitName[i].slice(1)
		}
		var capitalisedName = splitName.join(' ');
		AuthFactory.signup(capitalisedName, $scope.email, $scope.password);
	} 

	$scope.goToLanding = function () {
		$state.go('landing');
	}

});

