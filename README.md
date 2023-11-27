# api-t20rpg
API for managment of T20 character sheets and learning Node Js. With the paths Get for take all characteres sheets, Post for create a new character sheet and Delete for erase a character sheet.
It is a working in progress.

OBS: For run the aplication is necessary a instalation of Node Js and dependencies of modules which are 
    "body-parser": "^1.20.2", used to control requesitions with the body (req.body);
    "dotenv": "^16.3.1", use for pull data from archive .env;
    "express": "^4.18.2", for control the routes;
    "mongodb": "^6.2.0", database used;
    "mongoose": "^8.0.0", module for acess and control the database by API;
    "morgan": "^1.10.0", make and acess the middleware
    "nodemon": "^3.0.1", restarting the node application when file changes in the directory are detected;
    
Install the modules on terminal use npm install [name_of_module] or consult https://www.npmjs.com/ for more information

For run the aplication by terminal stay in the same paste of project and use the command "node index.js" for execution without atualization or the command "nodemon index.js" for frequent atualizations.
