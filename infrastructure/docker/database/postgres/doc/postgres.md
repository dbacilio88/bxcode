### ACCEDER A LA BASE DE DATOS:

````bash
$ psql -U developer
````

### crear roles de base de datos:

````bash
$ CREATE ROLE developer;
$ create user developer;
$ CREATE ROLE developer WITH LOGIN PASSWORD 'developer';
````

### eliminar roles de base de datos:

````bash
$ DROP ROLE developer;
$ drop puser developer
````

### Para determinar el conjunto de roles existentes, examine el **pg_roles system catalog**, por ejemplo:

````bash
$ SELECT rolname FROM pg_roles;
$ SELECT rolname FROM pg_roles WHERE rolcanlogin;
````

#### El meta comando del programa psql también es útil para enumerar los roles existentes. **\du**