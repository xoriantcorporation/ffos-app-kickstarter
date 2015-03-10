/*#
	# Copyright 2015 Xoriant Corporation.
	#
	# Licensed under the Apache License, Version 2.0 (the "License");
	# you may not use this file except in compliance with the License.
	# You may obtain a copy of the License at
	#
	#     http://www.apache.org/licenses/LICENSE-2.0

	#
	# Unless required by applicable law or agreed to in writing, software
	# distributed under the License is distributed on an "AS IS" BASIS,
	# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	# See the License for the specific language governing permissions and
	# limitations under the License.
	#
*/

//Define an angular module for our Single page starter app
(function(){
	'use strict';
	
	angular
		.module('ffosStarterApp', ['ui.router', 'controllers', 'directives', 'services'])
		.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
			//$urlRouterProvider.otherwise('/home');
			//$urlRouterProvider.when('/','/home');
			$stateProvider
				
				/*** 	Home states		***/
				.state('home', {
					url: '/home',
					controllerAs: 'homeCtrl',
					controller: 'HomeController',
					templateUrl	: 'html/partials/home.html'
				})
				/*** 	About state 	***/
				.state('about', {
					url: '/about',
					controllerAs: 'aboutCtrl',
					controller: 'AboutController',
					templateUrl: 'html/partials/about.html'					
				})
				/*** 	Contact state 	***/
				.state('contact', {
					url: '/contact',
					controllerAs: 'contactCtrl',
					controller: 'ContactController',
					templateUrl: 'html/partials/contact.html'					
				})
				/*** 	REST call state 	***/
				.state('restcall', {
					url: '/restcall',
					controllerAs: 'restCallCtrl',
					controller: 'RestCallController',
					templateUrl: 'html/partials/restCall.html'					
				})
				/*** 	Web activity state 	***/
				.state('webactivity', {
					url: '/webactivity',
					controllerAs: 'webaActivityCtrl',
					controller: 'WebActivityController',
					templateUrl: 'html/partials/webActivity.html'					
				});
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		}]).run(['$state',
		function($state) {
		    $state.transitionTo('home');
		}]);
})();