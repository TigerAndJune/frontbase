# Readme

This is our base install for front-end development. 

## Install the local development environment and dependencies
We use [NPM](https://docs.npmjs.com/getting-started/what-is-npm) for package management and [Gulp](http://gulpjs.com/) for builds and task automation.

- Download and install [Node.js](https://nodejs.org/). The Node Package Manager (NPM) is automatically installed at the same time.
- Navigate to the project folder in a terminal window (`cd My/Awesome/Folder`).
- Run `npm install` in the terminal. This will install all dependencies needed to run the project locally, including Gulp and other plugins.

## Always work in the `/src` folder
All source files are in the `/src` folder. We never directly modify the generated HTML, CSS, or JS files.

- We use [Sass](http://sass-lang.com/) (eg. main.scss) to generate our CSS files.
- We use [CoffeeScript](http://coffeescript.org/) (eg. main.coffee) to generate our JS files.
- We use [Jade](http://jade-lang.com/) (eg. index.jade) templates to generate our HTML files.

When these source files are modified, changes are injected automatically into browsers via [BrowserSync](http://www.browsersync.io/), even mobile browsers on the same Wi-Fi network. You will need to have the local BrowserSync server open (eg. `http://localhost:3000`, or `http://yourlocalipaddress:3000` on other devices) for this to work.

## Launch the local development environment
- Navigate to the project folder in a terminal window (`cd My/Awesome/Folder`).
- Compile Sass/CoffeeScript/Jade files and launch the BrowserSync server: `gulp`
- You can open the local BrowserSync server on any number of browsers or devices, and they will all update in real time when you make changes to the source files.
