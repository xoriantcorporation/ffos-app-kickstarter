# Firefox OS Application Kickstarter
> A combination of modular, pluggable, re-usable components for creating open web apps, specialized for Firefox OS app development

Built using Angular JS and Firefox OS building blocks styles. Includes the following components out-of-the-box:

+ Angular MVP pre-built structure
+ Angular UI (state) router for with some preconfigured paths
+ Building blocks CSS styles
+ Side drawer widget and functionality
+ Fully functional cross-domain REST call using XHR
+ Web Activity example - Adding contact to address book

Power features included:

+ NPM / Bower based modules
+ Predefined Gulp tasks for:
	+ Javascript linting & reporting
	+ JS/CSS minification
	+ Script concatenation
	+ File versionsing (for caching)
	+ Code change watcher
	+ App serving on localhost
	+ Creating production version build
+ Live reloading using BrowerSync
	+ Auto-reloading for JS changes
	+ Auto-refreshing for CSS changes (injected CSS, no reload required)

## Pre-requisites

* Install [Node] (https://github.com/joyent/node/wiki/installation)

## Usage

Download the entire source code using either of the following:

* **Git**: `git clone https://github.com/acegautam/ffos-starter-app-full.git` OR
* **Zip**: Simply download the zip file from the link provided on the right. Extract contents.

Install libraries
-----------------

    1. npm install
    2. bower install

Gulp commands
-------------

	gulp serve
	gulp

* gulp serve - serves up the app on port 9090.
* gulp - builds a production version of the app.


Start modifying code and add more features
---------------

* Source code could be found in the app folder. 
* Add, Remove, Modify! Create the app you want and showcase it to the world.


Running as localhost web
----------------------

While you develop, you would want to run the app pages on your dev machine:

    gulp serve

* This implicitly serves up the page @ http://localhost:9090/#/home in your default browser.
* Yes, you don't have to even type the url. Nice!
* Note: the REST call and Web activity would execute correctly only on simulator and device, not on the desktop browser, since they include FFOS-specific functionality.


Running as production build (emulator / device)
-----------------------

	gulp

* Creates a production version build of the app (with minification, concatenation, versioning etc.)
* Destination folder created as "FFOSStarterApp" under dist" folder.
* Use "FFOSStarterApp" as a target folder for running on the WebIDE simulator or device.

Coming soon...
--------------

* Unit tests integration using Protractor / Jasmine / Karma
* Yeoman generator


## Contributions welcome

Features and pull requests with patches are most welcome! Do contribute. Cheers to Open Source!
