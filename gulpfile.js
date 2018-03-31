const gulp = require("gulp");

// Copy file static assets
gulp.task("copy-static-assets", function () {
  // Copy file from ./src/public into ./dist/public
  // css
  gulp.src([
    "./src/public/css/**/*"
  ]).pipe(gulp.dest("./dist/public/css"));

  // js
  gulp.src([
    "./src/public/js/**/*"
  ]).pipe(gulp.dest("./dist/public/js"));

  // fonts
  gulp.src([
    "./src/public/fonts/**/*"
  ]).pipe(gulp.dest("./dist/public/fonts"));

  // Images
  gulp.src([
    "./src/public/images/*"
  ]).pipe(gulp.dest("./dist/public/images"));
  gulp.src([
    "./src/public/img/*"
  ]).pipe(gulp.dest("./dist/public/img"));
});

// Default task
gulp.task("default", ["copy-static-assets"]);
