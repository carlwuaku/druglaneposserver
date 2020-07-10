# druglaneposserver
Serverside code for druglane pos
The app is an express server wrapped in an electron app. This is to make deployment more convenient as it can be shipped as an exe file.
The main.js file is the entry point for the electron app (and thus the whole application).
The express server entry point is server.js. 
The app uses mvc pattern.
models are contained in the helpers folder
controllers are contained in the controllers folder.
views are the in the views folder.
the assets, as well as the client (angular) files are in public/client.