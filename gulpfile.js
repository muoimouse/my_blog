const gulp = require("gulp");
// Copy third party libraries from bower_components into ./src/public/vendor
gulp.task("copy-file-to-vendor", function () {
  // Bootstrap
  gulp.src([
    "./bower_components/bootstrap/dist/**/*"
  ]).pipe(gulp.dest("./src/public/vendor/bootstrap"));

  // Jquery
  gulp.src([
    "./bower_components/jquery/dist/*",
    "./bower_components/jquery.maskedinput/dist/*",
    "./bower_components/jquery-validation/dist/*",
    "./bower_components/PACE/*.js"
  ]).pipe(gulp.dest("./src/public/vendor/jquery"));

  // Font-awesome
  gulp.src([
    "./bower_components/font-awesome/css*/*",
    "./bower_components/font-awesome/fonts*/*"
  ]).pipe(gulp.dest("./src/public/vendor/font-awesome"));
});

// Copy file static assets
gulp.task("copy-static-assets-to-build", function () {
  // Copy file from ./src/public into ./dist/public
  // Bootstrap
  gulp.src([
    "./bower_components/bootstrap/dist/**/*"
  ]).pipe(gulp.dest("./dist/public/vendor/bootstrap"));

  // Jquery
  gulp.src([
    "./bower_components/jquery/dist/*",
    "./bower_components/jquery.maskedinput/dist/*",
    "./bower_components/jquery-validation/dist/*",
    "./bower_components/PACE/*.js"
  ]).pipe(gulp.dest("./dist/public/vendor/jquery"));

  // Font-awesome
  gulp.src([
    "./bower_components/font-awesome/css*/*",
    "./bower_components/font-awesome/fonts*/*"
  ]).pipe(gulp.dest("./dist/public/vendor/font-awesome"));

  // Images
  gulp.src([
    "./src/public/images/*"
  ]).pipe(gulp.dest("./dist/public/images"));

  // Css folder
  gulp.src([
    "./src/public/css/*"
  ]).pipe(gulp.dest("./dist/public/css"));

  // Js folder
  gulp.src([
    "./src/public/js/*"
  ]).pipe(gulp.dest("./dist/public/js"));
});

// Default task
gulp.task("default", ["copy-file-to-vendor"]);
