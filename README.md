# NgCompleteGuideUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Explaination

This application is based out of serverside rendering and `server.ts` is being used for that and Backend is binded .

## backend folder
Express framework/module is being used for backend, we have routes and controllers to handle the rest api.

## routes

# Get requests
 Application URL +`/getUsers?start=?&&limit=? ` :- provides the list of users and it  requires start and limit query as optional queries.
 
 Application URL +`/getFriendsList?user=?` :- provides the Friends list of a user and it requires user as a query (Mandatory)

 Application URL +`/getFriendsList?user=?` :- provides the Friends of friends of a user and it requires user as query (Mandatory)

