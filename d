[33mcommit fe1cce4c8162ee30af0c6a3c89ca6661aae1f89f[m[33m ([m[1;36mHEAD -> [m[1;32mHooksExample[m[33m, [m[1;31morigin/HooksExample[m[33m)[m
Author: Sachin Ramappa <sachin_ramappa@thbs.india.com>
Date:   Thu Jul 30 16:09:32 2020 +0530

    Deleted some files

[1mdiff --git a/src/App.css b/src/App.css[m
[1mdeleted file mode 100644[m
[1mindex 74b5e05..0000000[m
[1m--- a/src/App.css[m
[1m+++ /dev/null[m
[36m@@ -1,38 +0,0 @@[m
[31m-.App {[m
[31m-  text-align: center;[m
[31m-}[m
[31m-[m
[31m-.App-logo {[m
[31m-  height: 40vmin;[m
[31m-  pointer-events: none;[m
[31m-}[m
[31m-[m
[31m-@media (prefers-reduced-motion: no-preference) {[m
[31m-  .App-logo {[m
[31m-    animation: App-logo-spin infinite 20s linear;[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-.App-header {[m
[31m-  background-color: #282c34;[m
[31m-  min-height: 100vh;[m
[31m-  display: flex;[m
[31m-  flex-direction: column;[m
[31m-  align-items: center;[m
[31m-  justify-content: center;[m
[31m-  font-size: calc(10px + 2vmin);[m
[31m-  color: white;[m
[31m-}[m
[31m-[m
[31m-.App-link {[m
[31m-  color: #61dafb;[m
[31m-}[m
[31m-[m
[31m-@keyframes App-logo-spin {[m
[31m-  from {[m
[31m-    transform: rotate(0deg);[m
[31m-  }[m
[31m-  to {[m
[31m-    transform: rotate(360deg);[m
[31m-  }[m
[31m-}[m
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 5764a76..3f27a80 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -1,5 +1,4 @@[m
 import React from 'react';[m
[31m-import './App.css';[m
 import {Counter,HookObject,HookArray,HooksMouserMoveExample,ContInc,DataFetchinHooks,DataFetchinHooksBasedonId} from '../src/components/counter'[m
 import UseReducerHookExample from '../src/components/useReducer'[m
 import GlobalStateDetfineUsingReducerandUseContext from './components/GlobalStateLikeRedux/GlobalStateDefine'[m
[1mdiff --git a/src/index.css b/src/index.css[m
[1mdeleted file mode 100644[m
[1mindex ec2585e..0000000[m
[1m--- a/src/index.css[m
[1m+++ /dev/null[m
[36m@@ -1,13 +0,0 @@[m
[31m-body {[m
[31m-  margin: 0;[m
[31m-  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',[m
[31m-    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',[m
[31m-    sans-serif;[m
[31m-  -webkit-font-smoothing: antialiased;[m
[31m-  -moz-osx-font-smoothing: grayscale;[m
[31m-}[m
[31m-[m
[31m-code {[m
[31m-  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',[m
[31m-    monospace;[m
[31m-}[m
[1mdiff --git a/src/index.js b/src/index.js[m
[1mindex f5185c1..4146d1d 100644[m
[1m--- a/src/index.js[m
[1m+++ b/src/index.js[m
[36m@@ -1,6 +1,5 @@[m
 import React from 'react';[m
 import ReactDOM from 'react-dom';[m
[31m-import './index.css';[m
 import App from './App';[m
 import * as serviceWorker from './serviceWorker';[m
 [m
