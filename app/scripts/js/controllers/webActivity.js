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

/***	Web Activity Controller		***/
(function() {
	'use strict';

	function addContactInfo(vm) {
		//	Web activity call - Add contact info
		var activity = new MozActivity({
            name: "new",
            data: {
                type: "webcontacts/contact",
                params: {
                    givenName: "Gautam",
                    lastName: "Mankatti",
                    tel: "+919988776655",
                    email: "gautam@someemaildomain.com",
                    address: "Mumbai, India",
                    note: "Firefox OS is awesome!",
                    company: "Acme Inc."
                }
            }
        });

        activity.onsuccess = function() {
			console.log("Activity successfuly handled");
			var addedContact = this.result.contact,
				contactDetails = addedContact.givenName.concat(addedContact.familyName).join(' ');
			vm.response = 'Contact added: ' + contactDetails;
			vm.$apply();
		};

		activity.onerror = function() {
			console.log("The web activity encouter en error: " + this.error);
		};
	}

	function WebActivityController($scope){
		var addContact = document.querySelector("#add-contact"),
			vm = $scope;
		vm.title = "Web Activity";
		vm.currentMenu = "webactivity";
		localStorage.setItem('lastAccessedView', "webactivity");
		
		if (addContact) {
			addContact.onclick = function () {
				addContactInfo(vm);
			};
		}
	}
	WebActivityController.$inject = ['$scope'];

	angular
		.module('controllers')
		.controller('WebActivityController', WebActivityController);
})();