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

/***	Common factories	***/
(function() {
	'use strict';
	
	function APICallerFactory($rootScope) {

		// instantiate our object
		var APICaller = function (methodType, apiUrl, successMethod, errorMethod, payload) {
			this.methodType = methodType;
			this.apiUrl = apiUrl;
			this.successMethod = successMethod;
			this.errorMethod = errorMethod;
			this.payload = payload;
		};

		// this method will fetch data from GH API and return a promise
		APICaller.prototype = {
			getResult : function() {
				// Generally, javascript callbacks, like here the $http.get callback, change the value of the "this" variable inside callbacks so we need ot keep a reference to the current instance "this", and we do it with the following :
				var self = this;
				var xhr = new XMLHttpRequest({mozAnon:true, mozSystem: true});
				xhr.open(this.methodType, this.apiUrl, true);
				xhr.onreadystatechange = this.successMethod;
				xhr.onerror = this.errorMethod;
				if($rootScope.authDetails && $rootScope.authDetails.access_token){
					xhr.setRequestHeader("Authorization", "BEARER " +$rootScope.authDetails.access_token);
				}
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(this.payload);
			}
		};
		return APICaller;
	}
	APICallerFactory.$inject = ['$rootScope'];

	angular
		.module('services', [])
		.factory('APICaller', APICallerFactory);
})();
