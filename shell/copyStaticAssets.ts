import * as shell from "shelljs";

shell.cp("-R", "src/public/js/lib", "dist/public/js/");
shell.cp("-R", "src/public/fonts", "dist/public/");
shell.cp("-R", "src/public/images", "dist/public/");
shell.cp("-R", "./node_module/bootstrap/dist/", "dist/public/vendor/bootstrap");
shell.cp("-R", "./node_module/jquery/dist/", "dist/public/vendor/jquery");

