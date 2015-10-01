var gulp         = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var coffee       = require('gulp-coffee');
var filter       = require('gulp-filter');
var jade         = require('gulp-jade');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

// LEARN:
// Gulp uses streams to plug your favourite tools to form a build script. A
// stream is a method of plugging the output of one tool into the input of
// another.

// LEARN:
// Gulp only has 4 methods:
//  - gulp.task: define a task
//  - gulp.src:  get a stream from a source file
//  - gulp.pipe: pipe previous output to another method for processing
//  - gulp.dest: output the stream to a destination folder
// gulp.task('default', function() {
//  return gulp.src('./index.html')
//  .pipe(gulp.dest('./'));
// });

// LEARN:
// A task can take up to 3 parameters:
//  - its name
//  - an array of tasks to call before itself
//  - a function to perform as its task


// DEFAULT
// ==============================
gulp.task('default', ['build', 'serve']);
gulp.task('build', ['templates', 'styles', 'scripts']);


// Server
// ==============================
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./src/templates/**/*.jade', ['templates']);
  gulp.watch('./src/styles/*.scss', ['styles']);
  gulp.watch('./src/scripts/**/*.coffee', ['scripts']);
});


// Templates
// ==============================
gulp.task('templates', function() {
  return gulp.src('./src/templates/**/!(_)*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }));
});

// Styles
// ==============================
gulp.task('styles', function() {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init()) // Sourcemaps need to be initialized before other plugins

    .pipe(sass({
      outputStyle: 'compact'
    }))

    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'IE 9']
    }))

    .pipe(sourcemaps.write('./')) // Write sourcemaps to external files
    .pipe(gulp.dest('./css'))
    .pipe(filter('**/*.css')) // Ensure that only *.css files ever reach .reload so CSS injecting works
    .pipe(reload({ stream: true }));
});

// Scripts
// ==============================
gulp.task('scripts', function() {
  return gulp.src('./src/scripts/**/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./js'))
    .pipe(reload({ stream: true }));
});
