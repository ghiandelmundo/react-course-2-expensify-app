# Notes

1. Go to projects in command prompt
cd D:\Projects\react-course-projects\expensify-app

2. Run Babel
> babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
> babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch

3. Run live-server
> live-server public

4. React umd development sources
<script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>

React umd production min sources
<script src="https://unpkg.com/react@16.7.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js"></script>

5. Find react js functions in MDN (Mozilla Developer Network)

6. https://webpack.js.org/ <- WebPack
> node webpack.config.js <- get the absolute path

7. npm validator
> yarn add validator@latest

8. react-18 renderring

import { createRoot } from 'react-dom/client';

const template = <p>THIS IS JSX FROM WEBPACK</p>;
//const root = createRoot(document.getElementById('app')); // createRoot(container!) if you use TypeScript
createRoot(document.getElementById('app')).render(template);

9. Dependencies

    "babel-cli": "^6.24.1",
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "6.24.1",
    "css-loader": "0.28.4",
    "live-server": "^1.1.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-modal": "^3.15.1",
    "style-loader": "0.18.2",
    "validator": "^13.7.0",
    "webpack": "^3.1.0",
    "webpack-dev-server": "^2.5.1"

10. sass-lang.com - style techniques

11. 
https://budget-app.mead.io
https://links.mead.io/budget-app

12. reactraining.com <- react-router-dom references

13. regex101.com <- regular expression generator

14. ssh-keygen -t rsa -b 4096 -C "email"

15. > git remote add origin git@github.com:ghiandelmundo/react-course-2-expensify-app.git
> git push -u origin master <- do it only once from the start