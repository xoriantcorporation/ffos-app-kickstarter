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

/***	REST Call Controller		***/
(function() {
	'use strict';

	function _processRestSuccess(restObj, vm) {
		if (restObj.readyState === 4 && restObj.status === 200) {
			var jsonResponse = JSON.parse(restObj.response);
			vm.jsonData = jsonResponse;
			vm.$apply();
		}
	}

	function _processRestError() {
		// body...
	}

	function RestCallController($scope, APICaller){
		//var vm = this;
		var vm = $scope;
		vm.title = "Rest Call";
		vm.currentMenu = "restcall";
		vm.jsonData = "Executing REST call...";
		localStorage.setItem('lastAccessedView', "restcall");

		//	Make REST call
		var url = 'https://sites.google.com/site/acegautam/sample-json/sample.json',
			apiCaller = new APICaller('GET', url, 
				function() {
					_processRestSuccess(this, vm);
				},
				function(){
					_processRestError(this, vm);
			});

		apiCaller.getResult();
	}
	RestCallController.$inject = ['$scope', 'APICaller'];

	angular
		.module('controllers')
		.controller('RestCallController', RestCallController);
})();