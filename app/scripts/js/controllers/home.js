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

/***	Home Controller		***/
(function() {
	'use strict';

	function HomeController($scope){
		var vm = $scope;
		vm.title = "Home";
		vm.currentMenu = "home";

		if(!localStorage.getItem('lastAccessedView')){
			vm.showDrawer = true;
		}
		localStorage.setItem('lastAccessedView', "home");		

		/*	Description => The method to hide the menu section.
			Params => 1. event : event object.
		*/
		vm.hideMenu = function(event){
			if(vm.showDrawer === true){
				if ( event.target.className.indexOf('drawerIcon') == -1 )
					vm.showDrawer = false;
			}
		};
	}
	HomeController.$inject = ['$scope'];

	angular
		.module('controllers', [])
		.controller('HomeController', HomeController);
})();