import * as shell from "shelljs";

shell.mkdir("./vendor");
shell.mkdir("./vendor/bootstrap");
shell.mkdir("./vendor/jquery");
shell.ln("-s", "./node_modules/bootstrap/dist/", "src/public/vendor/bootstrap/");
shell.ln("-s", "./node_modules/jquery/dist/", "src/public/vendor/jquery/");
