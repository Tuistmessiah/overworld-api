import shell from "shelljs";

shell.echo("Reseting DB:");
shell.exec("./reset_db.sh");

shell.echo("RPopulating DB:");
shell.exec("./populate-db.sh");
