# AngularJPA - M1MIAGE - SIR TP7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## What is this application for ?

This application is an University (University of Rennes1) project made with Angular. The goal is to make a simple app which can communicate with a backend we did earlier in the year.

In a nutshell : basic crud operations with angular. 

Our application allows the user to add a person, see the list of all the people added on the app and the details of a person (name, mail, homes he has).
The user can also see a list of homes but can't add a home ... yet.

## Libraries

The project run with Angular's latest version. (https://angular.io/)
The styling library used is semantic-ui. (https://semantic-ui.com/)

## Starting the project

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Yarn start automatically `ng serve --proxy-config proxy.conf.json` which allows the frontend to communicate with the backend (see https://github.com/M1MIAGTeamPallaMu/Servlet_JAXRS)

By default the project runs on http://localhost:4200 and is proxied to http://localhost:8080 port to communicate with the tomcat server of the Servlet_JAXRS backend.

You can modify proxy's parameters in proxy.conf.json.


## Here are some screenshot of the app : 

![Person page](https://image.ibb.co/fMN8nH/Capture.png)
![Person Detail](https://image.ibb.co/g7ucgc/Capture2.png)
![Form](https://image.ibb.co/n3S8nH/Capturea.png)
