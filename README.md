# numbers-to-words-converter
A simple Web application to  convert  integer numbers to relative words 
## Table of contents
- [Local Setup](#local-setup)
- [Installation](#installation)
- [Testing](#testing)
- [Contributing](#contributing)

### Local Setup
To preview the website locally you have to install on your local machine the listed softwares below:
1. Install [git](https://git-scm.com/) to manage Git repository.
2. Install [yarn](https://yarnpkg.com/lang/en/) to manage Node packages and to run the web server or to run test service.
3. You also need to install [Nodejs](https://nodejs.org/en/) on your local machine to execute the source code.

***You should use v8.14.0 version or higher of Nodejs!***
### Installation
Clone the git repository
```sh
$ git clone https://github.com/FabioAnsaldi/numbers-to-words-converter.git
```
Go to the new folder directory and run the following commands:
```sh
$ cd numbers-to-words-converter
$ yarn install
```
You will see listed the modules required and than installed in you local machine. 

Now the web server is ready to be used
###### Custom settings (optional)
If you want to set a custom configuration for IP address or service PORT:

Go to ***/server/config*** directory and create or edit the ***custom_name.json*** configuration file and than 
insert your custom configuration for web server
```json
  "web": {
    "address": "LOCAL_IP_ADDRESS",
    "port": "LOCAL_PORT"
  },
```
We will use a live staging database to run our application locally. It used only to have persistent data.
You have to set your personal local setting if you cannot use the default setting below:
```json
  "database": {
    "address": "localhost",
    "port": "3000",
    "user": "root",
    "password": ""
  },
``` 
To start the application locally you have to run the server with the optional parameter like below:
```sh
$ yarn run start --config custom_name.json
```
If the ***your_local_address_ip*** is 127.0.0.1 and the ***your_local_service_port*** is 8080, you will see something like below:
```sh
Server listening on http://127.0.0.1:8080/
```
### Testing
To test the application, you have to run the below command
```sh
$ yarn run test
```
### Contributing
Feel free to make changes to the template files and to the document files.