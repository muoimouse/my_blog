import * as shell from "shelljs";

shell.cp("-R", "src/public/js/lib", "dist/public/js/");
shell.cp("-R", "src/public/fonts", "dist/public/");
shell.cp("-R", "src/public/images", "dist/public/");
  // shell.cp("-R", "bower_components/bootstrap/dist/", "dist/public/vendor/bootstrap");
  // shell.cp("-R", "bower_components/jquery/dist/", "dist/public/vendor/jquery")

