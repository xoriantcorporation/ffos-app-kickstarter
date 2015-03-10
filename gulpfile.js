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

(function() {
	'use strict';
	var gulp 		= require('gulp'),
		$ 			= require('gulp-load-plugins')(),
		browserSync = require('browser-sync'),
		reload 		= browserSync.reload,
		del 		= require('del'),
		paths 		= {
			scripts: ['app/scripts/**/*.js', '!app/bower_components/**/*.min.js'],
			css: ['app/scripts/**/*.css', '!app/bower_components/**/*.min.css'],
			images: 'assets/images/**/*',
			destination: 'dist/FFOSStarterApp'
		};

	//	Lint task
	gulp.task('lint', function() {
		return gulp
			.src(paths.scripts)
			.pipe($.jshint())
			.pipe($.jshint.reporter('jshint-stylish'))
			.pipe($.jshint.reporter('fail'));
	});

	//	Uglify / Minify JS task
	gulp.task('uglify', ['lint'], function() {
		return gulp
			.src(paths.scripts)
			.pipe($.uglify())
			.pipe(gulp.dest(paths.destination));
	});

	//	Usemin task - replace HTML references
	gulp.task('usemin', ['lint'], function () {
		return gulp
			.src('app/*.html')
			.pipe($.usemin({
				cssvendor: [$.rev()],
				css: [$.minifyCss(), 'concat', $.rev()],
				jsvendor: [$.rev()],
				js: [$.uglify(), $.rev()]
			}))
			.pipe(gulp.dest(paths.destination));
	});

	//	Copy static resources tasks
	gulp.task('extras', function () {
		gulp.src([
				'manifest.webapp', 
				'*.png'
			], {
			dot: true
			})
			.pipe(gulp.dest(paths.destination));
		gulp.src([
				'app/html/**/*'
			], {
			dot: true
			})
			.pipe(gulp.dest(paths.destination + '/html'));
		gulp.src([
				'app/bower_components/font-awesome/fonts/**/*'
			], {
			dot: true
			})
			.pipe(gulp.dest(paths.destination + '/scripts/fonts'));
	});

	//	Browser sync reload task
	gulp.task('refresh', function() {
		return gulp
			.src(paths.css)
			.pipe(reload({ stream:true }));
	});

	gulp.task('reload', function() {
		browserSync.reload();
	});

	//	Watcher task
	gulp.task('watch', function() {
		var watcher = gulp.watch(paths.scripts, ['reload']);
		watcher.on('change', function(event) {
			console.log('Event type: ' + event.type); // added, changed, or deleted
	   		console.log('Event path: ' + event.path); // The path of the modified file
		});
		gulp.watch(paths.css, ['refresh']);
	});

	//	Clean up task
	gulp.task('clean', require('del').bind(null, ['.tmp', paths.destination]));

	//	App Serving / Watching task (port: 3000)
	gulp.task('serve', function() {
		browserSync({
			server: {
				baseDir: 'app',
				index: 'index.html'
			},
			port: 9090,
			logPrefix: 'FFOS Starter App'

			//	To remmove the BrowserSync messages on the screen, uncomment the below line (don't forget to add a trailing comma above)
			//notify: false
		});
		gulp.start('watch');
	});

	gulp.task('build', ['usemin', 'extras']);

	gulp.task('default', ['clean'], function () {
		gulp.start('build');
	});
})();