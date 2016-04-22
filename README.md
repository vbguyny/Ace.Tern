[Live Demo] (http://vbguyny.github.io/Ace.Tern/demo.html)
========

Ace.Tern
========

Tern plugin for Ace Editor [Fork]


Project Status
============

 - This project is a fork of the Ace-Tern project (https://github.com/sevin7676/Ace.Tern).
 

Building
============
 - Currently this code is part of the Ace source (no longer hacked on top of pre-built Ace) in my fork: https://github.com/sevin7676/ace
 - Use my fork to make changes, then build it to get the src-noconflict, and copy that directory into this repo to update it.
 - After updating this repo, copy the changes to Caret-T Chrome App. Make sure not to replace my custom snippets in the javascript mode and edit the worker-tern.js file: set isChromeApp=true (dont edit the file in a chrome app as there is a bug that breaks the file due to some unicode chars in the acorn source) 


