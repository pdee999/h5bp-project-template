# h5bp-project-template v0.1.0
HTML5 Boilerplate + Bootstrap + Font-Awesome + Grunt + Bower


## Getting Started
This project requires the Grunt CLI

```shell
npm install -g grunt-cli
```

To clone the repo:
```shell
git clone https://github.com/pdee999/h5bp-project-template.git
```

To install the project:

```shell
npm install
```

To install bower:

```shell
npm install bower
```

To install dependencies:

```shell
bower install
```

==========================================================================

##Tasks

To update dev environment & lint css/less/js:

```shell
grunt
```

To update dev environment, lint css/less/js & open dev environment in a server:

```shell
grunt serve
```

To build the project:

```shell
grunt build
```

To build the project open built project in a server:

```shell
grunt buildserve
```

###Plugin Specific Tasks
This project includes the following grunt tasks:

**[grunt-bower](#)**

To update dependencies:
```shell
grunt bower
```

**[grunt-lesslint](#)**

To lint .less files:
```shell
grunt lesslint
```

**[grunt-contrib-less](#)**

To compile .less files:
```shell
grunt less
```

**[grunt-autoprefixer](#)**

To add vendor prefixes to css rules:
```shell
grunt clean
```

**[grunt-contrib-copy](#)**

To create build environment without css/js:
```shell
grunt copy
```

**[grunt-contrib-concat](#)**

To concatenate .js files:
```shell
grunt concat
```

**[grunt-contrib-uglify](#)**

To minify .js files:
```shell
grunt uglify
```

**[grunt-contrib-cssmin](#)**

To minify .css files:
```shell
grunt cssmin
```

**[grunt-processhtml](#)**

To update css/js "src" attributes in build environment:
```shell
grunt processhtml
```

**[grunt-contrib-imagemin](#)**

To optimize images:
```shell
grunt imagemin
```

**[grunt-contrib-htmlmin](#)**

To minify .html files:
```shell
grunt htmlmin
```

**[grunt-contrib-jshint](#)**

To lint .js files:
```shell
grunt jshint
```

**[grunt-contrib-csslint](#)**

To lint .css files:
```shell
grunt csslint
```

**[grunt-contrib-connect](#)**

To spin up server in dev environment:
```shell
grunt connect:dev
```
To spin up server in build environment:
```shell
grunt connect:build
```

**[grunt-contrib-watch](#)**

To watch files in dev environment:
```shell
grunt watch:dev
```
To watch files in build environment:
```shell
grunt watch:build
```

**[grunt-contrib-qunit](#)**

To run qunit tests locally:
```shell
grunt qunit:local
```
To run qunit tests on server:
```shell
grunt qunit:serve
```

**[grunt-contrib-compress](#)**

To compress built project and add file to project root:
```shell
grunt compress
```

**[grunt-styleguide](#)**

To create styleguide from .css files at project root:
```shell
grunt styleguide
```

==========================================================================

##File Structure

All work should be done inside of the dev directory.  Any edits made to the build directory will be overridden on the next build.

+-- _dev<br />
|   +-- _css<br />
|   +-- _fonts<br />
|   +-- _img<br />
|   +-- _js<br />
|   +-- _less<br />
|   +-- 404.html<br />
|   +-- apple-touch-icon-precomposed.png<br />
|   +-- crossdomain.xml<br />
|   +-- favicon.ico<br />
|   +-- humans.txt<br />
|   +-- index.html<br />
|   +-- robots.txt<br />
+-- _build<br />
|   +-- _css<br />
|   +-- _fonts<br />
|   +-- _img<br />
|   +-- _js<br />
|   +-- _less<br />
|   +-- 404.html<br />
|   +-- apple-touch-icon-precomposed.png<br />
|   +-- crossdomain.xml<br />
|   +-- favicon.ico<br />
|   +-- humans.txt<br />
|   +-- index.html<br />
|   +-- robots.txt<br />
+-- _node_modules<br />
+-- _vendor<br />
+-- bower.json<br />
+-- Gruntfile.js<br />
+-- package.json<br />
+-- README.md<br />

==========================================================================

##CSS

To use CSS remove the "<!-- build:remove -->" and "<!-- /build -->" comments from the CSS block in the *index.html* file and place around the LESS block.

**CSS Usage**
```html
<!--USE CSS: Add "build:remove" & "/build" comment tags to use LESS.  Remove "build:remove" & "/build" comment tags to use CSS.-->
<!-- build:css css/normalize.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/normalize.css">
<!-- /build -->
<!-- build:css css/bootstrap.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/bootstrap.css">
<!-- /build -->
<!-- build:css css/font-awesome.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/font-awesome.css">
<!-- /build -->
<!-- build:css css/bootstrap-theme.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/bootstrap-theme.css">
<!-- /build -->
<!-- build:css css/html5-base.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/html5-base.css">
<!-- /build -->
<!-- build:css css/main.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/main.css">
<!-- /build -->
<!-- build:css css/html5-helper.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/html5-helper.css">
<!-- /build -->

<!-- build:remove -->
<!--USE LESS: Add "build:remove" & "/build" comment tags to use CSS.  Remove "build:remove" & "/build" comment tags to use LESS.-->
<!-- build:css css/main-compiled.min.css -->
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main-compiled.css">
<!-- /build -->
<!-- /build -->
```

All CSS changes should be made to the *main.css* file.

+-- _dev<br />
|   +-- _css<br />
|       +-- main.css<br />


==========================================================================

##LESS

To use LESS remove the "<!-- build:remove -->" and "<!-- /build -->" comments from the LESS block in the *index.html* file and place around the CSS block.

**LESS Usage**
```html
<!-- build:remove -->
<!--USE CSS: Add "build:remove" & "/build" comment tags to use LESS.  Remove "build:remove" & "/build" comment tags to use CSS.-->
<!-- build:css css/normalize.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/normalize.css">
<!-- /build -->
<!-- build:css css/bootstrap.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/bootstrap.css">
<!-- /build -->
<!-- build:css css/font-awesome.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/font-awesome.css">
<!-- /build -->
<!-- build:css css/bootstrap-theme.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/bootstrap-theme.css">
<!-- /build -->
<!-- build:css css/html5-base.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/html5-base.css">
<!-- /build -->
<!-- build:css css/main.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/main.css">
<!-- /build -->
<!-- build:css css/html5-helper.min.css --><!-- build:remove -->
<link rel="stylesheet" href="css/html5-helper.css">
<!-- /build -->
<!-- /build -->

<!--USE LESS: Add "build:remove" & "/build" comment tags to use CSS.  Remove "build:remove" & "/build" comment tags to use LESS.-->
<!-- build:css css/main-compiled.min.css -->
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main-compiled.css">
<!-- /build -->
```

All LESS changes should be made to the following less files:

+-- _dev<br />
|   +-- _less<br />
|       +-- desktop.less<br />
|       +-- global.less<br />
|       +-- mixins.less<br />
|       +-- mobile.less<br />
|       +-- mobile-overrides.less<br />
|       +-- print.less<br />
|       +-- retina.less<br />
|       +-- screen.less<br />
|       +-- tablet.less<br />
|       +-- variables.less<br />

==========================================================================

##Javascript

All custom javascript should be added to the *main.js* file and any plugins used should be added to the *plugins.js* file.

+-- _dev<br />
|   +-- _js<br />
|       +-- _lib<br />
|       +-- main.js<br />
|       +-- plugins.js<br />