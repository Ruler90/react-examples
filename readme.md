# React Playground

Just a few React components and hooks. I created them to test basic concepts of React.

## Changelog

**Update 2021-01-28**
- Major webpack config update. Newer version of webpack (5.x.x), webpack-cli and webpack-dev-server didnt' work with my previous config. Also added html-webpack-plugin.
- Updated project structure (e.g. every component has its own folder, scss/css styles when needed etc.).
- Added last working dependencies list at the end of readme.

**Update 2020-09-20**  
- Removed all dependencies so ```npm install``` won't work. If you install everything as described below, you'll get most recent version of every dependency. I didn't work on this project for a few months and I received alerts of potential security vulnerabilities that occur in dependencies. Some of them couldn't be resolved by dependabot due the fact that some dependencies needed to be installed in newer version.

### Quick start:

1. Download this folder and make it your local repo.

2. Install dependencies  
- **React:**
    ```
    npm install react react-dom
    ```
- **Webpack:**
    ```
    npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin@next
    ```
- **Babel and loaders:**
    ```
    npm install --save-dev @babel/cli @babel/core @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader css-loader style-loader
    ```
- **ESLint:**
    ```
    npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks babel-eslint
    ```

3. Use my ESLint config (airbnb) or delete it and create new one.

4. You are ready to go.

5. To start webpack-dev-server, use ```npm run start```.  
To bundle, minify and uglify all js/jsx and css code, use ```npm run build```.

### Last working dependencies list (2021-01-28):

```json
"devDependencies": {
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.12.10",
    "@babel/plugin-proposal-class-properties": "^7.12.1",
    "@babel/plugin-transform-runtime": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@babel/preset-react": "^7.12.10",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.0.1",
    "eslint": "^7.18.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "html-webpack-plugin": "^5.0.0-beta.6",
    "style-loader": "^2.0.0",
    "webpack": "^5.18.0",
    "webpack-cli": "^4.4.0",
    "webpack-dev-server": "^3.11.2"
  },
"dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  }
```