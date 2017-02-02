'use strict';

app.config(function($stateProvider){
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '/home/home.template.html',
		controller: 'HomeCtrl'
	})


	$stateProvider.state('tasks', {
		url: '/tasks',
		templateUrl: '/tasks/tasks.template.html',
		controller: 'TasksCtrl'
	})

	$stateProvider.state('settings', {
		url: '/settings',
		templateUrl: '/settings/settings.template.html',
		controller: 'SettingsCtrl'
	})

	$stateProvider.state('landing', {
		url: '/',
		templateUrl: '/landing/landing.template.html',
		controller: 'LandingCtrl',
		hideNavbar: true
	})


	$stateProvider.state('translator', {
		url: '/translator',
		templateUrl: '/translator/translator.template.html',
		controller: 'TranslatorCtrl'
	})

	$stateProvider.state('phrasebook', {
		url: '/phrasebook',
		templateUrl: '/phrasebook/phrasebook.template.html',
		controller: 'PhrasebookCtrl'
	})

	$stateProvider.state('terms', {
		url: '/terms',
		templateUrl: '/terms/terms.template.html',
		controller: 'TermsCtrl',
		hideNavbar: true
	})

	$stateProvider.state('map', {
		url: '/map',
		templateUrl: '/map/map.template.html',
		controller: 'MapCtrl'
	})
});
