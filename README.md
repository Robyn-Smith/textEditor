# textEditor

## Description

This application is a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Additionally, this application features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To build this text editor, an existing application and code implementing methods for getting and storing data to an IndexedDB database were provided. The package called `idb` was used in this application, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## Installation
```md
npm i
npm run start
```
Finally, the user can see the application by using the link http://localhost:3000/ or they can access using the deployed heroku link

## Usage
Once the user has opened the application, they will see the heading Just Another Text Editor and a button to install in the top left of the page. This installs the web application as an icon on the users desktop. The user also has the option to type data that will be stored while offline.

## Screenshots of Application
![A screenshot of the JATE application](/client/src/images/Screenshot1.png)
![A screenshot of the JATE application offline](/client/src/images/Screenshot2.png)
![A screenshot of the JATE icon on desktop](/client/src/images/Screenshot3.png)
![A screenshot of the JATE application lighthouse](/client/src/images/Screenshot3.png)

# Link to deployed heroku

