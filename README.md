[Live Demo] (http://vbguyny.github.io/Ace.Tern/demo.html)
========

Ace.Tern
========

Tern plugin for Ace Editor [Fork]


Project Status
============

 - Code is currently messy and below the standard I would expect out of an official library.
 - There are quite a few known issues that I'm still working on
 - I've been coding this extension for use in the [Caret-T Chrome App](https://chrome.google.com/webstore/detail/caret-t/agiednhnlghobdgpgfdnbdaflnngmoij) 
 - For a quick demo of features, install the Caret-T Chrome App and paste the following code into the editor in Javascript mode: [Demo Javscript](https://raw.githubusercontent.com/sevin7676/Ace.Tern/master/DemoJavascript.js)
 

Building
============
 - Currently this code is part of the Ace source (no longer hacked on top of pre-built Ace) in my fork: https://github.com/sevin7676/ace
 - Use my fork to make changes, then build it to get the src-noconflict, and copy that directory into this repo to update it.
 - After updating this repo, copy the changes to Caret-T Chrome App. Make sure not to replace my custom snippets in the javascript mode and edit the worker-tern.js file: set isChromeApp=true (dont edit the file in a chrome app as there is a bug that breaks the file due to some unicode chars in the acorn source) 


