# SWEAT App

SWEAT App is a fully CRUD application created to help users keep track of their exercise activities. I created this app because when I first started my fitness journey I did not have a log of my exercises to help keep me motivated and able to appreciate what I had already accomplished. This app is for anyone beginners or advanced that just want a simple app to keep them on track. SWEAT is an acronym and stands for Sets, Weight, Effort, Attitude, and Time. These are the five variables that this app tracks

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

1. Download and install Node.js, if not already installed on your local machine.
2. Install React with the following terminal command:

```bash
npm install --save react
```
3. Install ReactDOM with the following terminal command:

```bash
npm install --save react-dom
```

4. Install React Bootstrap with the following terminal command:



```bash
npm install react-bootstrap bootstrap
```

5. Install ```json-server``` with the following terminal command:

```
npm install -g json-server
```

6. Clone my [repository](https://github.com/TJakeButler/sweat-app) to your local machine.


### Usage

A step by step series of examples that tell you how to get a development env running

1. In your terminal, navigate to the project directory. 
Example:

```
cd /Users/jakebutler/workspace/sweat-app
```

2. From the root of this directory, run the following terminal command in order to start up ```React```.

```
npm start
```

3. Open a new terminal tab and navigate to the ```sweat-api``` directory.

Example:
```
cd /Users/jakebutler/workspace/sweat-app/sweat-api
```

4. Run the following terminal command in order to start up your ```json-server```.

Example:
```
json-server -p 8088 -w database.json
```

5. Open your web browser of choice and navigate to ```http://localhost:3000/```

6. You will be presented with a login/registration page if this is your first time using the application. Register an account (NOTE: USE DUMMY DATA! Do NOT use your real email or password).

7. From this point login with your newly created account and go to the Create New Exercise tab in the nav bar. In the field provided enter the new type of exercise you would like to keep track of example(Push ups, or pull ups). After creating a new exercise type. Now Select the Log New Exercise tab in the Nav bar. You will see in the drop down menu all the exercise types which the logged in user has created. Fill out all the forms below on the Log New Exercise Page and hit submit. You will be directed to the Exercise Logs page which will show all previously logged exercises and give the user the option to DELETE old exercises or EDIT them. Users also have the option to delete old exercise Types or Edit them as well from the Exercise List page.

8. Enjoy the app and use it to keep yourself on track and motivated to keep exercising in the future!

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [React Bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework Rebuilt for React.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Version Control

I use [Git](https://git-scm.com/) for version control.

## Authors

* **Jake Butler** - *Original Creator* - [TJakeButler](https://github.com/TJakeButler)

## License
[MIT](https://choosealicense.com/licenses/mit/)
