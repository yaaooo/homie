'use strict';

app.config(function($stateProvider){
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '/public/home/home.template.html',
		controller: 'HomeCtrl'
	})


	$stateProvider.state('tasks', {
		url: '/tasks',
		templateUrl: '/public/tasks/tasks.template.html',
		controller: 'TasksCtrl'
	})

	$stateProvider.state('settings', {
		url: '/settings',
		templateUrl: '/public/settings/settings.template.html',
		controller: 'SettingsCtrl'
	})

	$stateProvider.state('landing', {
		url: '/',
		templateUrl: '/public/landing/landing.template.html',
		controller: 'LandingCtrl',
		hideNavbar: true
	})

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: '/public/signup/signup.template.html',
		controller: 'SignupCtrl',
		hideNavbar: true
	})

});
