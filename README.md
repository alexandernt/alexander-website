# Oveview App - How to Run App
Clone repo --> npm installation --> set up app dev (nodemon) --> start app.

`git init`
# Run Website Using -npm start-
1) You need to have installed `NodeJS` and `NPM`. Run the following code to check if you have installed. 
```
node -v
npm -v
```
2) Install dependencies
`npm install`
3) . Add a Startup Script to package.json (if not present)
Ensure package.json has a start script:
```
json
Copy code
"scripts": {
  "start": "node ./bin/www"
}
```
4) Start the application
`npm start`
5) Open in Browser
Once the app is running, it will be accessible at http://localhost:PORT/ in your web browser. 

# Run Website Using -nodemon-
Nodemon allows you to catch any change in your code, and just refreshing the website it will update the content in localhost.
If you use npm start to run the app, for every change you need to re-initiate it with `npm start`.
1) Install dependencies
`npm install -g nodemon`
2) Run Your App with nodemon: Instead of using npm start, run:
`nodemon ./bin/www`
Or if you have the script set up in package.json:
`nodemon start`
nodemon will now monitor your files and automatically restart the server whenever changes are detected.

## Run nodemon in Dev
1) Inside the package.json
```
"scripts": {
    "start": "node ./bin/www",  // Regular start script
    "dev": "nodemon ./bin/www"  // Nodemon script for development
  },
,
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
```
2) Run App
`npm run dev`
3) Customize nodemon Behavior (Optional)
You can add a nodemon.json file to the root of your project to configure nodemon further:
```
{
  "watch": ["server", "routes", "views"], // Folders to watch for changes
  "ext": "js,ejs",                        // File extensions to watch
  "ignore": ["node_modules"],             // Folders to ignore
  "exec": "node ./bin/www"                // Command to execute
}
```
# How to run it in your mobie
Go to your terminal, run ipconfig, copy IPv4 Address and copy the following URL link in your mobile web browser:
IPv4+PORT
[your_ipv4:port]
For example: XXX.19.0.233:3000
