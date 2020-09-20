# React Examples

Just few React components and hooks. I created them to test basic concepts of React and make tutorial for beginners.

**Update 2020-09-20**  
Removed all dependencies so ```npm install``` won't work. If you install everything as described below, you'll get most recent version of every dependency. I didn't work on this project for a few months and I didn't want potential security vulnerabilities to occur in dependencies.

### Quick start:

1. Download this folder and make it your local repo.

2. Install dependencies:
```
npm install --save-dev @babel/cli @babel/core @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-eslint babel-loader css-loader eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks style-loader webpack webpack-cli webpack-dev-server
```
```
npm install react react-dom @types/react react-hot-loader
```

3. Use my ESLint config (airbnb) or delete it and create new one.

4. You are ready to go.

5. To start webpack-dev-server, use ```npm run start```
To bundle, minify and uglify all js/jsx and css code, use ```npm run build```
